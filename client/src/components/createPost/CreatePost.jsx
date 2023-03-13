import './createPost.css';

import React, { useState } from 'react'

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [postText, setPostText] = useState('');
    const [username, setUsername] = useState('');

    const hansleSubmit = (e) => {
        e.preventDefault();
        console.log(title, postText, username);
        // PostAPI.createPost();
        
    };

  return (
    <div className='createPostContainer'>
        <form onSubmit={hansleSubmit}>
            <div>
                <label htmlFor='title'>Title</label><br/>
                <input
                    type='text'
                    id='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='postText'>Post Text</label><br/>
                <input
                    type='text'
                    id='postText'
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                />
            </div>
            <button type='submit'>Create Post</button>
        </form>
    </div>
  )
}

export default CreatePost
