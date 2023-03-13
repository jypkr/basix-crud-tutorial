import './authentication.css';

import React from 'react';

import Login from '../../components/authentication/Login';
import Signup from '../../components/authentication/Signup';


const Authentication = () => {
  return (
    <div className='authenticationContainer'>
        Authentication Container
        <Login/>
        <Signup/>
    </div>
  )
}

export default Authentication
