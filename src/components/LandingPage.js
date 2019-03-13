import React, { Component } from 'react';

class LandingPage extends Component {
  render() {
    return (
      <div className='landing'>
        <h1 className='landing__headline'>STDate</h1>
        <p className='landing__text'>It's free and easy to start</p>
        <button className='button'>Get started</button>
      </div>
    );
  }
}

export default LandingPage;
