import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div className='nav'>
        <ul className='nav__list'>
          <li className='nav__list--item'>Sign Up</li>
          <li className='nav__list--item'>Login</li>
        </ul>
      </div>
    );
  }
}

export default Nav;
