const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/miniLinkedIn')
  .then(() => app.listen(5000, () => console.log('Server running on 5000')))
  .catch(err => console.log(err));

  