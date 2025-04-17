import React, { useEffect, useState } from 'react';
import styles from '../styles/SellerDashboard.module.css';
import AddProductForm from '../components/AddProductForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SellerDashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // ✅ Fetch products on load
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
      } catch (err) {
        console.error('Error fetching products:', err);
        alert('Failed to load products.');
      }
    };

    fetchProducts();
  }, []);

  // ✅ Toggle Add Product form
  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  // ✅ Update product list after new product added
  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setShowForm(false);
  };

  // ✅ Handle delete
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        setProducts(products.filter((p) => p.id !== id));
        alert('Product deleted successfully!');
      } catch (err) {
        console.error('Error deleting product:', err);
        alert('Failed to delete product.');
      }
    }
  };

  // ✅ Navigate to Edit page
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
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
          {products.map((product) => (
            <li key={product.id} className={styles.productItem}>
              {product.name} - ${product.price}
              <button onClick={() => handleEdit(product.id)} className={styles.editBtn}>
                ✏️
              </button>
              <button onClick={() => handleDelete(product.id)} className={styles.deleteBtn}>
                🗑️
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SellerDashboard;
