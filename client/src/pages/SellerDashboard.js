// client/src/pages/SellerDashboard.js
import React, { useState } from 'react';
import styles from '../styles/SellerDashboard.module.css';
import AddProductForm from '../components/AddProductForm'; // ✅ Import form

const SellerDashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([
    { name: 'Product 1', price: 25 },
    { name: 'Product 2', price: 30 },
    { name: 'Product 3', price: 20 }
  ]);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  // ✅ Add this function
  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setShowForm(false); // hide form after adding
  };

  return (
    <div className={styles.dashboard}>
      <h2>Seller Dashboard</h2>

      <div className={styles.stats}>
        <div className={styles.card}>
          <h3>Total Products</h3>
          <p>{products.length}</p>
        </div>
        <div className={styles.card}>
          <h3>Total Orders</h3>
          <p>12</p>
        </div>
      </div>

      <button className={styles.addBtn} onClick={handleToggleForm}>
        {showForm ? 'Cancel' : '+ Add Product'}
      </button>

      {showForm && <AddProductForm onAddProduct={handleAddProduct} />}

      <div className={styles.productList}>
        <h3>Your Products</h3>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SellerDashboard;
