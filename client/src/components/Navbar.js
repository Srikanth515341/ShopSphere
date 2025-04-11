import React from 'react';
import styles from '../styles/Navbar.module.css';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.green}>🛒</span> ShopSphere
      </div>
      <ul className={styles.navLinks}>
        <li>Seller Dashboard</li>
        <li>Home</li>
        <li>All Products</li>
      </ul>
      <div className={styles.actions}>
        <input type="text" placeholder="Search products" />
        <FaShoppingCart className={styles.cartIcon} />
        <button className={styles.login}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
