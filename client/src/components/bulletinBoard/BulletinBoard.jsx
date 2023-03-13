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

    useEffect(() => {
        PostAPI.getAllPosts().then((res) => {
            setPosts(res.data);
            console.log(res.data);
            }, [])
        },[]);

    return (
        <div className='bulletinBoardContainer'>
            Posts Conatiner
            <CreatePost/>
            <br/>
            <br/>
            {
                posts.map((post) => {
                    return (
                        <>
                            <div className='postTitle'>{post.title}</div>
                            <div className='postText'>{post.postText}</div>
                            <div className='postUsername'>{post.username}</div>
                            <button className='postDeleteButton'>Delete</button>
                            <button className='postEditButton'>Edit</button>
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
