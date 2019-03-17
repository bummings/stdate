import React, { Component } from 'react';
import LookingForForm from '../components/LookingForForm';

class LandingPage extends Component {
  render() {
    return (
      <div className='landing'>
        <div className='landing__text'>
          <p className='landing__headline'>
            Join our community of 20,000 singles
          </p>
          <p className='landing__headline'>It's free & confidental</p>
          <button className='button'>Get started</button>
        </div>

        <LookingForForm />
      </div>
    );
  }
}
export default LandingPage;
