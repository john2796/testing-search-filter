import React, { Component } from 'react';
import './App.css';

const people = [
  { first: 'whatever', last: 'goldenstate', age: 111 },
  { first: 'ben', last: 'testing', age: 112 },
  { first: 'benedict', last: 'whitewood', age: 2222 },
  { first: 'Mwhatever', last: 'lakers', age: 5222 },
  { first: 'Miranda', last: 'nets', age: 522 },
  { first: 'Pogi', last: 'brooks', age: 15 },
  { first: 'kotalaga', last: 'irving', age: 12 },
  { first: 'anona', last: 'curry', age: 2122 },
  { first: 'lebron', last: 'james', age: 21 }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Search filter </h1>
      </div>
    );
  }
}

export default App;
