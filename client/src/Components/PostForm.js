import React, { useState } from 'react';
import axios from 'axios';

export default function PostForm({ user, onPostCreated }) {
  const [content, setContent] = useState('');

  const handlePost = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    const res = await axios.post('http://localhost:5000/api/posts', {
      content,
      authorId: user._id,
    });

    onPostCreated(res.data);
    setContent('');
  };

  return (
    <form onSubmit={handlePost} className="bg-white p-4 mb-4 rounded shadow">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full p-2 border rounded"
      ></textarea>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
      >
        Post
      </button>
    </form>
  );
}
