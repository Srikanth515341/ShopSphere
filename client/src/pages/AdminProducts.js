import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/SellerDashboard.module.css';
import { useNavigate } from 'react-router-dom';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        fetchProducts(); // Refresh list
        alert('✅ Product deleted successfully');
      } catch (error) {
        console.error('Error deleting product:', error);
        alert('❌ Failed to delete product');
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Admin - Manage All Products</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <img src={require(`../assets/${product.image}`)} alt={product.name} />
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            <div className={styles.actions}>
              <button onClick={() => handleEdit(product.id)} className={styles.edit}>Edit</button>
              <button onClick={() => handleDelete(product.id)} className={styles.delete}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProducts;
