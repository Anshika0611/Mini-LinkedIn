import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Profile from './Pages/Profile'; 
import ProfilePage from './Pages/ProfilePage'; 

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <nav className="flex gap-4 p-4 bg-blue-400  text-white">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        {user && <Link to={`/profile/${user._id}`}>My Profile</Link>}
        <button onClick={() => setUser(null)} className="ml-auto bg-red-600 p-2 rounded">Logout</button>
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
