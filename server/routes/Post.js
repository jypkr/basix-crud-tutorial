const express = require('express');
const router = express.Router();
const { Posts } = require('../models');

router.get('/posts', async (req, res) => {
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
});

router.post('/posts', async (req, res) => {
    const post = req.body;
    await Posts.create(post);

    res.json(post);
});


module.exports = router;