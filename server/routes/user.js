const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Post = require('../Models/Post');

// ✅ Get a single user + their posts
router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });

  const posts = await Post.find({ author: user._id }).sort({ createdAt: -1 });

  res.json({ user, posts });
});

module.exports = router;