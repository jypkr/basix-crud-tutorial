import './login.css';

import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    };

  return (
    <div className='loginContainer'>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='username'>Username</label><br/>
            <input
                type='text'
                id='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor='password'>Password</label><br/>
            <input
                type='text'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
