const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  content: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports =  mongoose.models.Post || mongoose.model('Post', postSchema)