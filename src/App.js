import React, { Component } from 'react';
import logo from './logo.svg';
import infinity from './infinity.png';
import './App.css';
import Authenticate from './Authenticate';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={infinity} className="App-logo" alt="logo" />
          <h1 className="App-title">Firebase Login Application</h1>
        </header>
        <Authenticate />
      </div>
    );
  }
}

export default App;
