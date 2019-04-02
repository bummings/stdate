import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import UserResult from './components/UserResult';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Nav />

        <Route exact path='/' component={LandingPage} />
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/user' component={UserResult} />
      </div>
    );
  }
}

export default App;
