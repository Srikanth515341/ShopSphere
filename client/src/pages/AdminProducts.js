// client/src/pages/AdminProducts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Admin.module.css';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const userData = localStorage.getItem('user');
  const user = userData ? JSON.parse(userData) : null;

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      const products = typeof res.data === 'string' ? JSON.parse(res.data) : res.data;
      setProducts(products);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      alert('Product deleted');
      fetchProducts();
    } catch (err) {
      console.error('Delete error:', err);
      alert('Failed to delete product');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (!user || user.username !== 'admin') {
    return (
      <div className={styles.adminContainer}>
        <h2>Access Denied</h2>
        <p>You must be an admin to view this page.</p>
      </div>
    );
  }

  return (
    <div className={styles.adminContainer}>
      <h2>Admin: Manage Products</h2>
      <button className={styles.addBtn} onClick={() => navigate('/admin/add-product')}>
        + Add New Product
      </button>
      <div className={styles.productList}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <img src={product.image} alt={product.name} />
            <div className={styles.details}>
              <h4>{product.name}</h4>
              <p>${product.price}</p>
              <div className={styles.actions}>
                <button onClick={() => navigate(`/admin/edit-product/${product.id}`)}>Edit</button>
                <button onClick={() => handleDelete(product.id)} className={styles.deleteBtn}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProducts;
