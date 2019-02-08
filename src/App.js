import React, { Component } from 'react';
import PersonList from './components/PersonList';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <PersonList />
      </div>
    );
  }
}

export default App;
