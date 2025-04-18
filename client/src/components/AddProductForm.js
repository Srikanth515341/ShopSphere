import React, { useState } from 'react';
import styles from '../styles/AddProductForm.module.css';
import axios from 'axios';

const AddProductForm = ({ onAddProduct }) => {
  const [form, setForm] = useState({
    name: '',
    category: '',
    price: '',
    image: '',
    details: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.category || !form.price || !form.image || !form.details) {
      alert('❌ Please fill in all fields.');
      return;
    }

    const newProduct = {
      name: form.name,
      category: form.category,
      price: parseFloat(form.price),
      image: form.image,
      details: form.details
    };

    try {
      await axios.post('http://localhost:5000/api/products', newProduct);
      setForm({ name: '', category: '', price: '', image: '', details: '' });
      alert('✅ Product added successfully!');
      if (onAddProduct) onAddProduct(); // optional callback
    } catch (error) {
      console.error('Error adding product:', error);
      alert('❌ Failed to add product');
    }
  };

  const imagePath = form.image ? require(`../assets/${form.image}`) : null;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Add New Product</h3>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Category (e.g., organicveggies)"
        value={form.category}
        onChange={handleChange}
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
      />
      <input
        type="text"
        name="image"
        placeholder="Image filename (e.g., tomato.png)"
        value={form.image}
        onChange={handleChange}
      />
      {form.image && (
        <div className={styles.imagePreview}>
          <img src={imagePath} alt="Preview" />
        </div>
      )}
      <textarea
        name="details"
        placeholder="Enter product details (comma separated)"
        value={form.details}
        onChange={handleChange}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
