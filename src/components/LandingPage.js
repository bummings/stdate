import React, { Component } from 'react';
import LookingForForm from '../components/LookingForForm';

class LandingPage extends Component {
  render() {
    return (
      <div className='landing'>
        <div className='landing__text'>
          <p className='landing__text--headline'>
            Join our community of 20,000 singles
          </p>
          <p className='landing__text--headline'>It's free & confidental</p>
          <button className='button'>Get started</button>
        </div>

        <div>
          <LookingForForm />
        </div>
      </div>
    );
  }
}
export default LandingPage;
