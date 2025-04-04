import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        {user?.username === 'admin' && (
          <>
            <Link to="/admin">Admin</Link>
            <Link to="/admin/products">Manage Products</Link>
          </>
        )}
        {!user ? (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        ) : (
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
