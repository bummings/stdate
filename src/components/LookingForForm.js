import React, { Component } from 'react';

class LookingForForm extends Component {
  render() {
    return (
      <div className='landing'>
        <div className='landing__form'>
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
      </div>
    );
  }
}

export default LookingForForm;
