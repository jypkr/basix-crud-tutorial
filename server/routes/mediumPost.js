const express = require('express');
const router = express.Router();
const { Posts } = require('../models');

router.get('/mediumposts', async (req, res) => {
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
});

router.post('/mediumposts', async (req, res) => {
    const post = req.body;
    await Posts.create(post);

    res.json(post);
});

router.put('/mediumposts/:id', async (req, res) => {
    const id = req.params.id;
    const { title, author, link } = req.body;
    await Posts.update({ title, author, link }, {
        where: { id }
    });

    res.json({ id, title, author, link });
});

router.delete('/mediumposts/:id', async (req, res) => {
    const id = req.params.id;
    await Posts.destroy({
        where: { id }
    });

    res.json({ id });
});


module.exports = router;