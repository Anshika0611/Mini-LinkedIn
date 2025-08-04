import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PostCard from '../Components/PostCard';

export default function ProfilePage() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await axios.get(`http://localhost:5000/api/users/${id}`);
      setProfile(res.data.user);
      setPosts(res.data.posts);
    };

    fetchProfile();
  }, [id]);

  if (!profile) return <div className="p-8">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={profile.avatar || 'https://via.placeholder.com/60'}
          alt="avatar"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold">{profile.name}</h1>
          <p className="text-gray-600">{profile.jobTitle || 'No job title'}</p>
          <p className="text-gray-500">{profile.bio || 'No bio provided.'}</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">Posts by {profile.name}</h2>
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostCard key={post._id} post={{ ...post, author: profile }} />
        ))
      ) : (
        <p>No posts yet.</p>
      )}
    </div>
  );
}
