// server/seed.js

const mongoose = require('mongoose');
const User = require('../Models/user');

mongoose.connect('mongodb://localhost:27017/miniLinkedIn') // change DB name if needed
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

async function seed() {
  await User.deleteMany({}); // clear old data

  await User.create([
    {
      name: 'Rohit Sharma',
      email: 'rohit@example.com',
      password: 'hashedpassword', // normally hashed
      bio: 'Front-End Developer passionate about UI/UX.',
      avatar: 'https://i.pravatar.cc/150?img=1',
      jobTitle: 'Front-End Developer'
    },
    {
      name: 'Bob Smith',
      email: 'bob@example.com',
      password: 'hashedpassword',
      bio: 'Full Stack Developer who loves MERN.',
      avatar: 'https://i.pravatar.cc/150?img=2',
      jobTitle: 'Full Stack Developer'
    },
    {
      name: 'Clara Adams',
      email: 'clara@example.com',
      password: 'hashedpassword',
      bio: 'Back-End Engineer and API Designer.',
      avatar: 'https://i.pravatar.cc/150?img=3',
      jobTitle: 'Back-End Engineer'
    }
  ]);

  console.log('✅ Seeded successfully');
  mongoose.disconnect();
}

seed();
