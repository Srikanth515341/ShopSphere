import React from 'react';
import styles from '../styles/Navbar.module.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';

const Navbar = () => {
  const { cartItems } = useCart();
  const { user, logoutUser } = useUser();
  const navigate = useNavigate();

  const totalItems = Array.isArray(cartItems)
    ? cartItems.reduce((sum, item) => sum + item.quantity, 0)
    : 0;

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      logoutUser();
      navigate('/');
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" className={styles.logoLink}>
          <span className={styles.green}>🛒</span> ShopSphere
        </Link>
      </div>

      <ul className={styles.navLinks}>
        <li><Link to="/categories">All Products</Link></li>
        
        {user?.role === 'seller' && (
          <li><Link to="/seller">Seller Dashboard</Link></li>
        )}

        {user?.role === 'admin' && (
          <>
            <li><Link to="/admin/products">Admin Products</Link></li>
            <li><Link to="/admin/categories">Admin Categories</Link></li>
            <li><Link to="/admin/users">Manage Users</Link></li>
            <li><Link to="/admin/orders">Admin Orders</Link></li>
          </>
        )}

        {user && <li><Link to="/orders">Order History</Link></li>}
      </ul>

      <div className={styles.actions}>
        <input type="text" placeholder="Search products" />
        <Link to="/cart" className={styles.cartWrapper}>
          <FaShoppingCart className={styles.cartIcon} />
          {totalItems > 0 && <span className={styles.cartCount}>{totalItems}</span>}
        </Link>
        {user ? (
          <>
            <span className={styles.userName}>{user.name}</span>
            <button className={styles.login} onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">
            <button className={styles.login}>Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
