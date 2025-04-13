import React from 'react';
import styles from '../styles/Navbar.module.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" className={styles.logoLink}>
          <span className={styles.green}>🛒</span> ShopSphere
        </Link>
      </div>

      <ul className={styles.navLinks}>
        <li><Link to="/categories">All Products</Link></li>
        <li><Link to="/seller">Seller Dashboard</Link></li>
      </ul>

      <div className={styles.actions}>
        <input type="text" placeholder="Search products" />
        <Link to="/cart" className={styles.cartWrapper}>
          <FaShoppingCart className={styles.cartIcon} />
          {totalItems > 0 && <span className={styles.cartCount}>{totalItems}</span>}
        </Link>
        <button className={styles.login}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
