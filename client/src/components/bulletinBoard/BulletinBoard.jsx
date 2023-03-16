import './bulletinBoard.css';

import React, { useEffect, useState } from 'react'

import CreatePost from '../createPost/CreatePost';

import PostAPI from '../../utils/PostAPI';

const BulletinBoard = () => {
    const [posts, setPosts] = useState([{
        id: '',
        title: '',
        postText: '',
        username: '',
    }]);
    const [editTitle, setEditTitle] = useState('');
    const [editText, setEditText] = useState('');

    useEffect(() => {
        PostAPI.getAllPosts().then((res) => {
            setPosts(res.data);
            }, [])
        },[]);

    const refreshPosts = async () => {
        const res = await PostAPI.getAllPosts();
        setPosts(res.data);
        console.log('refresh!')
    }

    const deletePost = async (id) => {
        await PostAPI.deletePost(id);
        refreshPosts();
    }

    const editPost = async (id) => {
        await PostAPI.editPost(id, {editTitle, editText});
        refreshPosts();
    }

    return (
        <div className='bulletinBoardContainer'>
            Posts Conatiner
            <CreatePost refreshPosts={refreshPosts}/>
            <br/>
            <br/>
            <form>
                <div>
                    <div>
                        POST UPDATE HERE
                    </div>
                    <br/>
                    <label htmlFor='title'>Title</label><br/>
                    <input
                        type='text'
                        id='title'
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='postText'>Post Text</label><br/>
                    <input
                        type='text'
                        id='postText'
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />
                </div>
            </form>
            <br/>
            {
                posts.map((post) => {
                    return (
                        <>
                            <div className='postTitle'>TITLE: {post.title}</div>
                            <div className='postText'>TEXT: {post.postText}</div>
                            <div className='postUsername'>{post.username}</div>
                            <button className='postDeleteButton' onClick={() => deletePost(post.id)}>Delete</button>
                            <br/>
                            <button onClick={() => editPost(post.id)} className='postEditButton'>Edit</button>
                            <br/>
                            <br/>
                        </>
                    )
                })
            }
        </div>
    )
}

export default BulletinBoard;
