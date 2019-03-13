import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className='nav'>
        <div className='nav__home'>
          <Link to='/' className='nav__home--link'>
            STDate
          </Link>
        </div>

        <div className='nav__menu'>
          <ul className='nav__menu--list'>
            <Link to='/signup' className='nav__menu--list--item'>
              <li>Sign Up</li>
            </Link>
            <Link to='/login' className='nav__menu--list--item'>
              <li>Login</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
