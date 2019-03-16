import React, { Component } from 'react';

class LandingPage extends Component {
  render() {
    return (
      <div className='landing'>
        <h1 className='landing__headline'>STDate</h1>
        <p className='landing__text'>It's free and easy to start</p>
        <button className='button'>Get started</button>

        <div className='landing__form--gender'>
          <p className='landing__form--gender--text'>I am a </p>
          <select name='gender' className='formInput'>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className='landing__form--gender'>
          <p className='landing__form--gender--text'>seeking a </p>
          <select name='genderChoice' className='formInput'>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
      </div>
    );
  }
}

export default LandingPage;
