import React, { Component } from 'react';
import './App.css';

const people = [
  { id: 1, first: 'whatever', last: 'goldenstate', age: 111 },
  { id: 2, first: 'ben', last: 'testing', age: 112 },
  { id: 3, first: 'benedict', last: 'whitewood', age: 2222 },
  { id: 4, first: 'Mwhatever', last: 'lakers', age: 5222 },
  { id: 5, first: 'Miranda', last: 'nets', age: 522 },
  { id: 6, first: 'Pogi', last: 'brooks', age: 15 },
  { id: 7, first: 'kotalaga', last: 'irving', age: 12 },
  { id: 8, first: 'anona', last: 'curry', age: 2122 },
  { id: 9, first: 'lebron', last: 'james', age: 21 }
];
// this is a hoc function
function searchingFor(term) {
  return function(x) {
    return x.first.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}

class App extends Component {
  state = {
    people: people,
    term: ''
  };

  searchHandler = e => {
    const term = e.target.value;
    this.setState({ term });
    console.log(term);
  };

  render() {
    const { term, people } = this.state;
    return (
      <div className="App">
        <h1>Search filter </h1>
        <form>
          <input type="text" onChange={this.searchHandler} value={term} />
        </form>

        {people.filter(searchingFor(term)).map(p => (
          <div key={p.id}>
            <p>{p.first === searchingFor(term) ? p.first : null}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
