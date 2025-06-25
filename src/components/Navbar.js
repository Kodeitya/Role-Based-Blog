
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-logo">BlogPage</Link>
      </div>
      <div className="nav-right">
        <Link to="/login" className="nav-btn">Login</Link>
        <Link to="/signup" className="nav-btn nav-btn-outline">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;

