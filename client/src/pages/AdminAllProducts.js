import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/AdminAllProducts.module.css';

import { Link } from 'react-router-dom';

const AdminAllProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
      alert('✅ Product deleted successfully');
    } catch (err) {
      console.error('Error deleting product:', err);
      alert('❌ Failed to delete product');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Admin - All Products</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(prod => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.name}</td>
              <td>{prod.category}</td>
              <td>₹{prod.price}</td>
              <td>
                <img src={require(`../assets/${prod.image}`)} alt={prod.name} width="50" />
              </td>
              <td>
                <Link to={`/edit/${prod.id}`} className={styles.editBtn}>Edit</Link>
                <button onClick={() => handleDelete(prod.id)} className={styles.deleteBtn}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAllProducts;
