const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  bio: String,
  avatar: String,     // New: profile picture URL
  jobTitle: String,   // New: short title (ex: "Frontend Developer")
});

module.exports =mongoose.models.User || mongoose.model('User', UserSchema);
