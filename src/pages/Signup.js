
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import './Signup.css';

const Signup = () => {
  const [form, setForm] = useState({
    name: '', email: '', password: '', confirmPassword: '', role: 'user'
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await api.post('/auth/register', form);
      alert('Account created!');
    } catch (err) {
      setError(err.response?.data?.message || 'Error creating account');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form-section">
        <h2>Create your account</h2>
    
        <form onSubmit={handleSubmit} className="signup-form">
          <input name="name" type="text" placeholder="Full name" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email address" onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
          <input name="confirmPassword" type="password" placeholder="Confirm password" onChange={handleChange} required />
          <select name="role" onChange={handleChange} required>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <div className="terms">
            <input type="checkbox" required />
            <span>I agree to all Terms, Privacy Policy and Fees</span>
          </div>
          <button type="submit" className="btn-submit">Sign Up</button>
          {error && <p className="error">{error}</p>}
        </form>

        <p className="footer-text">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>

      <div className="signup-image-section">

      </div>
    </div>
  );
};

export default Signup;

