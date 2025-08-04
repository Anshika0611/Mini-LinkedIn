import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/auth/profile/${id}`).then(res => setProfile(res.data));
    axios.get(`http://localhost:5000/api/posts/user/${id}`).then(res => setPosts(res.data));
  }, [id]);

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-2">{profile.name}</h2>
      <p className="mb-4">{profile.bio}</p>
      <h3 className="text-xl font-semibold mb-2">Posts by {profile.name}</h3>
      {posts.map(p => (
        <div key={p._id} className="border p-4 mb-2 rounded">
          <p>{p.content}</p>
          <small className="text-gray-500">{new Date(p.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
};

export default Profile;
