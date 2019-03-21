import React, { Component } from 'react';

class LookingForForm extends Component {
  render() {
    return (
      <div className='lookingFor'>
        <div className='lookingFor__form'>
          <div className='lookingFor__form--gender'>
            <p className='lookingFor__form--gender--text'>I am a </p>
            <select name='gender' className='lookingFor__form--input'>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className='lookingFor__form--gender'>
            <p className='lookingFor__form--gender--text'>seeking a </p>
            <select name='genderChoice' className='lookingFor__form--input'>
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
