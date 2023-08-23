import React, {Component} from 'react';
import './App.css';
import Word from './components/Word';

class App extends Component {
  state = {
    words: [
      { id: 1, word: 'banana', color: 'yellow' },
      { id: 2, word: 'apple', color: 'red' },
      { id: 3, word: 'lime', color: 'green' },
      { id: 4, word: 'watermelon', color: 'green' },
    ]
  }
  render() { 
    return ( 
      <div className="App">
        <header className="App-header">
          Nugatory-Example
        </header>
        { this.state.words.map(word => 
          <Word 
            key={ word.id } 
            word={ word.word } 
            color={ word.color } 
          />) }
      </div>
     );
  }
}

export default App;
