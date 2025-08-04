import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/auth/login', form);
    localStorage.setItem('token', res.data.token);
    setUser(res.data.user);
    navigate('/'); // Go to home after login
  };

  return (
    <div className="max-w-md mx-auto p-8 ">
      <h2 className="text-3xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="border p-2 bg-gray-800 text-white bg-opacity-90" />
        <input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="border p-2 bg-gray-800 text-white bg-opacity-90" />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded font-bold hover:bg-red-600">Login</button>
      </form>
    </div>
  );
};

export default Login;
