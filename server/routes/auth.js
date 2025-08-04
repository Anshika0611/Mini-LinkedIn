const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET = 'secret123';

// Register
router.post('/register', async (req, res) => {
  const { name, email, password, bio } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  try {
    const user = new User({ name, email, password: hashed, bio });
    await user.save();
    res.json({ msg: 'Registered!' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ error: 'User not found' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id }, SECRET);
  res.json({ token, user: { id: user._id, name: user.name, email: user.email, bio: user.bio } });
});

// Get Profile
router.get('/profile/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

module.exports = router;