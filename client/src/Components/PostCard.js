import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  if (!post || !post.author) return null; // Ensure post and author exist
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <div className="flex items-center gap-3 mb-2">
        <img
          src={post.author.avatar || 'https://via.placeholder.com/40'}
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <Link to={`/profile/${post.author._id}`} className="font-semibold hover:underline">
            {post.author.name}
          </Link>
          <div className="text-sm text-gray-500">
            {post.author.jobTitle || 'No job title'}
          </div>
          <div className="text-xs text-gray-400">
            {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
          </div>
        </div>
      </div>
      <p className="text-gray-800">{post.content}</p>
      <div className="flex gap-4 mt-2 text-sm text-gray-600">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
    </div>
  );
}
