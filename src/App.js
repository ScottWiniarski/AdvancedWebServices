import React, {Component} from 'react';
import './App.css';
import Word from './components/Word';

class App extends Component {
  state = {
    words: [
      { id: 1, word: 'banana', color: 'yellow' },
      { id: 2, word: 'apple', color: 'red' },
      { id: 3, word: 'lime', color: 'green' },
    ]
  }
  handleDelete = (wordId) => {
    //creates a new array, by filtering out any id that doesn't equal the one that's clicked.
    const words = this.state.words.filter(w => w.id !== wordId);
    // assigns to the newly created array.
    this.setState({ words:words });
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
            word={ word } 
            onDelete={ this.handleDelete }
          />) }
      </div>
     );
  }
}

export default App;
