import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from './Components/PostCard';
import PostForm from './Components/PostForm';

export default function Home({ user }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:5000/api/posts');
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      {user && <PostForm user={user} onPostCreated={(newPost) => setPosts([newPost, ...posts])} />}
      {posts.length > 0 ? posts.map(post => (
        <PostCard key={post._id} post={post} />
      )) : (
        <p>No posts found.</p>
      )}
    </div>
  );
}

