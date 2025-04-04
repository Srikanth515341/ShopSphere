import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const navigate = useNavigate();

  let user = null;
  try {
    const userData = localStorage.getItem('user');
    user = userData ? JSON.parse(userData) : null;
  } catch (err) {
    console.error('Invalid user JSON:', err);
    localStorage.removeItem('user');
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">🛍️ ShopSphere</Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        {user && user.email === 'admin@example.com' && (
          <>
            <li><Link to="/admin/orders">Admin</Link></li>
            <li><Link to="/admin/products">Manage Products</Link></li>
          </>
        )}
        {!user ? (
          <>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        ) : (
          <li><button onClick={handleLogout} className={styles.logoutBtn}>Logout</button></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
