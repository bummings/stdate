import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Nav />
        <header className='App-header'>
          <p>STDate</p>
        </header>
      </div>
    );
  }
}

export default App;
