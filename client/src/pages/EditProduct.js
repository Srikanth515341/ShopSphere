// client/src/pages/EditProduct.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        const selected = res.data.find((p) => p.id === parseInt(id));
        setProduct(selected);
      } catch (err) {
        console.error('Error loading product:', err);
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/products/${id}`, product);
      alert('Product updated!');
      navigate('/admin/products');
    } catch (err) {
      console.error('Update error:', err);
      alert('Failed to update product');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
        /><br /><br />
        <textarea
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
        /><br /><br />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        /><br /><br />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
        /><br /><br />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProduct;
