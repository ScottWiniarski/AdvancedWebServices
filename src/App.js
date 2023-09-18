import React, {useState, useEffect} from 'react';
import './App.css';
import Word from './components/Word';
import axios from "axios";
import Counter from './components/Counter';
import NewWord from './components/NewWord';

const App = () => {
  const apiEndpoint = "https://nugatory-sfw-delete.azurewebsites.net/api/word";
  const [words, setWords] = useState([]);

  const handleDelete = async (wordId) => {
    const originalWords = words;
    setWords(words.filter(w => w.id !== wordId));
    try {
      await axios.delete(`${apiEndpoint}/${wordId}`);
      throw new console.error('');
    } catch(ex) {
      alert('An error occurred while deleting a word');
      setWords(originalWords);
    }
  }

  const handleAdd = async (word, color) => {
    const { data: post } = await axios.post(apiEndpoint, { word: word, color: color });
    setWords(words.concat(post));
  }

  // this is the functional equivalent to componentDidMount
  // The Array must be empty!
  useEffect(() => {
    // initial state data stored here
    // let mutableWords = [
    //   { id: 1, word: 'banana', color: 'yellow' },
    //   { id: 2, word: 'apple', color: 'red' },
    //   { id: 3, word: 'lime', color: 'green' },
    //   { id: 4, word: 'grape', color: 'purple' },
    // ];
    // setWords(mutableWords);
    async function fetchData() {
      const { data: fetchedWords } = await axios.get(apiEndpoint);
      setWords(fetchedWords);
    }
    fetchData();
  }, [])


  return ( 
    <div className="App">
      <header className="App-header">
        Nugatory
      </header>
      { words.map(word => 
        <Word 
          key={ word.id }
          word={ word } 
          onDelete={ handleDelete }           
        />) }
        <Counter totalWords={ words.length } />
        <NewWord onAdd={ handleAdd } />
    </div>
    );
}


export default App;
