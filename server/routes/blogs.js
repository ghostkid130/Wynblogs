const Blog = require('../models/blog')
const express = require('express');
const router = new express.Router();
const auth = require('../middleware/auth');
const mongoose = require('mongoose');


/*/\/\/\/\/\/\/\/\/\/
- N E W   B L O G - |   
\/\/\/\/\/\/\/\/\/\*/
router.post('/new', auth, async (req, res) => {
    const blog = new Blog({
        'title': req.body.title,
        'owner': req.user._id,
        'author': `${req.user.firstName} ${req.user.lastName}`,
        'body': `${req.body.body}`
    });
    try {
        await blog.save();
        res.status(201).send(blog)
    } catch (e) {
        res.status(400).send(e)
    }
});

/*/\/\/\/\/\/\/\/\/\/\/\/\/\|
- G E T   A L L   B L O G - |   
\/\/\/\/\/\/\/\/\/\/\/\/\/\*/
router.get('/all', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(201).send(blogs)
    } catch (e) {
        res.status(400).send(e)
    }
});

/*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\|
- G E T   S I N G L E   B L O G - |   
\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\*/
router.get('/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const blogs = await Blog.findById(_id);
        res.status(201).send(blogs)
    } catch (e) {
        res.status(400).send(e)
    }
});

/*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\|
- G E T   S I N G L E   B L O G - |   
\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\*/
router.get('/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const blogs = await Blog.findById(_id);
        res.status(201).send(blogs)
    } catch (e) {
        res.status(400).send(e)
    }
});


module.exports = router;