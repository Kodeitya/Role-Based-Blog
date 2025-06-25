

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';
import './Login.css'; 

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await api.post('/auth/login', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.user.role);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      if (res.data.user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/blogs');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-section">
        <h2>Sign in to your account</h2>
        <p className="subtext">Or <Link to="/signup">create a new account</Link></p>


        <form onSubmit={handleSubmit} className="login-form">
          <input name="email" type="email" placeholder="Email address" onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit" className="btn-submit">Sign In</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>

      <div className="login-image-section">
       
      </div>
    </div>
  );
};

export default Login;



