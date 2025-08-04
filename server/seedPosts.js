const mongoose = require('mongoose');
const User = require('../Models/user');
const Post = require('../Models/Post');

mongoose.connect('mongodb://localhost:27017/miniLinkedIn')
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

async function seedPosts() {
  await Post.deleteMany({}); // clear old posts

  const users = await User.find(); // get all users you seeded

  if (users.length === 0) {
    console.log('❌ No users found. Run seed.js first!');
    return mongoose.disconnect();
  }

  const posts = [
    {
      author: users[0]._id,
      content: 'Excited to start my new role as Front-End Developer!'
    },
    {
      author: users[1]._id,
      content: 'Just finished building a MERN app, super pumped!'
    },
    {
      author: users[2]._id,
      content: 'API design is my favorite — just finished another project.'
    }
  ];

  await Post.insertMany(posts);

  console.log('✅ Posts seeded!');
  mongoose.disconnect();
}

seedPosts();