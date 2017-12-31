import React, { Component } from 'react';
import './App.css';
import CountryStats from './components/CountryStats'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CountryStats />
      </div>
    );
  }
}

export default App;
