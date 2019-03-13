import React, { Component } from 'react';
import './App.scss';
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Nav />
        <LandingPage />
      </div>
    );
  }
}

export default App;
