import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav style={{ padding: '1rem', backgroundColor: '#eee' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/cart" style={{ marginRight: '1rem' }}>Cart</Link>
      {!isLoggedIn && <Link to="/register" style={{ marginRight: '1rem' }}>Register</Link>}
      {!isLoggedIn && <Link to="/login" style={{ marginRight: '1rem' }}>Login</Link>}
      {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
};

export default Navbar;
