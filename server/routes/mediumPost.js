const express = require('express');
const router = express.Router();
const { mediumPosts } = require('../models');

router.get('/mediumposts', async (req, res) => {
    const listOfPosts = await mediumPosts.findAll();
    res.json(listOfPosts);
});

router.post('/mediumposts', async (req, res) => {
    const post = req.body;
    await mediumPosts.create(post);

    res.json(post);
});

router.put('/mediumposts/:id', async (req, res) => {
    const id = req.params.id;
    const { title, author, link } = req.body;
    await mediumPosts.update({ title, author, link }, {
        where: { id }
    });

    res.json({ id, title, author, link });
});

router.delete('/mediumposts/:id', async (req, res) => {
    const id = req.params.id;
    await mediumPosts.destroy({
        where: { id }
    });

    res.json({ id });
});


module.exports = router;