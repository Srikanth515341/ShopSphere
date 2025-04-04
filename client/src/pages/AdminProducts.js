// client/src/pages/AdminProducts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      alert('Product deleted successfully');
      fetchProducts();
    } catch (err) {
      console.error('Error deleting product:', err);
      alert('Failed to delete product');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>All Products (Admin)</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        products.map((product) => (
          <div key={product.id} style={{ borderBottom: '1px solid #ccc', padding: '1rem 0' }}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <img src={product.image} alt={product.name} style={{ width: '100px' }} />
            <br />
            <button style={{ marginRight: '1rem' }} onClick={() => navigate(`/admin/edit-product/${product.id}`)}>
              Edit
            </button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminProducts;
