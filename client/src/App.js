import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Profile from './Profile'; 
import ProfilePage from './ProfilePage'; 

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <nav className="flex gap-4 p-4 bg-gray-200">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        {user && <Link to={`/profile/${user._id}`}>My Profile</Link>}
      </nav>

      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/profile" element={<Profile user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}
