import './home.css';

import React from 'react'

import Login from '../../components/authentication/Login';
import Signup from '../../components/authentication/Signup';
import BulletinBoard from '../../components/bulletinBoard/BulletinBoard';


const Home = () => {
  return (
    <div className='homeContainer'>
        Home Container
        <Login/>
        <Signup/>
        <BulletinBoard/>
    </div>
  )
}

export default Home
