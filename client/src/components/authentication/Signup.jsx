import './signup.css';

import React, { useState } from 'react'

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(`Username: ${username}`);
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
        console.log(`ConfirmPassword: ${confirmPassword}`);
    }

  return (
    <div className='signupContainer'>
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
            <label htmlFor='email'>Email</label><br/>
            <input
                type='text'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
        <div>
            <label htmlFor='confirmPassword'>confirmPassword</label><br/>
            <input
                type='text'
                id='confirmPassword'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
        </div>
        <button type='submit'>Sign up</button>
      </form>
    </div>
  )
}

export default Signup
