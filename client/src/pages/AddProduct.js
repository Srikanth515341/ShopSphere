import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/products', formData);
      setMessage(res.data.message);
      setFormData({ name: '', description: '', price: '', image: '' });
    } catch (err) {
      setMessage(err.response?.data?.error || 'Error adding product');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required /><br /><br />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} /><br /><br />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required /><br /><br />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} /><br /><br />
        <button type="submit">Add Product</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default AddProduct;
