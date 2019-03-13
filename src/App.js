import React, { Component } from 'react';
import './App.scss';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Nav />
        <h1>STDate</h1>
        <button className='button'>bruh</button>
      </div>
    );
  }
}

export default App;
