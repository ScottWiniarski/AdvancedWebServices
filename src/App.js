import React, {useState, useEffect} from 'react';
import './App.css';
import Word from './components/Word';
import axios from "axios";
import Counter from './components/Counter';
import NewWord from './components/NewWord';

const App = () => {
  const apiEndpoint = "https://nugatory-sfw-delete.azurewebsites.net/api/word";
  const [words, setWords] = useState([]);

  const handleDelete = (wordId) => {
    // //creates a new array, by filtering out any id that doesn't equal the one that's clicked.
    // const mutableWords = words.filter(w => w.id !== wordId);
    // // assigns to the newly created array.
    // setWords(mutableWords);
    console.log(`delete: ${wordId}`);
  }

  const handleAdd = (word, color) => {
    // const { words } = this.state;
    // const id = words.length === 0 ? 1 : Math.max(...words.map(word => word.id)) + 1;
    // const mutableWords = words.concat({ id: id, word: word, color: color });
    // setWords(mutableWords);
    console.log(`word: ${word}, color: ${color}`);
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
