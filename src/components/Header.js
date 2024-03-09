import React from 'react';
// import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../Images/logo.svg';

const Header = () => {
  return (
    <div className='header'>
      <div className="left">
          <Logo style={{
            width: '35px'
          }} />
        <p>
          Travel Assistant
        </p>
      </div>
      <div className="right">
        <ul>
          <li>
            <a href="/login">
              login
            </a>
          </li>
          <li>
            <a href="/signup">
              signup
            </a>
          </li>
          <li>
            contact
          </li>
          <li>
            about
          </li>
          <li>
            connect with friends
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
