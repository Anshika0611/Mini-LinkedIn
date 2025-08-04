const express = require('express');
const router = express.Router();
const Post = require('../Models/Post');
const User = require('../Models/user');

// ✅ Create post
router.post('/', async (req, res) => {
  const { content } = req.body;
  const authorId = req.body.authorId; // In real apps use JWT auth!
  const post = new Post({ content, author: authorId });
  await post.save();
  res.json(post);
});

// ✅ Get all posts with author details
router.get('/', async (req, res) => {
  const posts = await Post.find()
    .populate('author', 'name avatar jobTitle')
    .sort({ createdAt: -1 });
  res.json(posts);
});

module.exports = router;
