import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Route exact path='/' component={LandingPage} />

        <Route path='/signup' component={SignUp} />

        <Nav />
        <LandingPage />
      </div>
    );
  }
}

export default App;
