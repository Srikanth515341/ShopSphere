import React, { useState } from 'react';
import styles from '../styles/AddProductForm.module.css';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.category && form.price && form.image && form.details) {
      const newProduct = {
        ...form,
        discountPrice: parseFloat(form.price),
        originalPrice: parseFloat(form.price) + 10,
        details: form.details.split(',').map((d) => d.trim())
      };
      onAddProduct(newProduct);
      setForm({ name: '', category: '', price: '', image: '', details: '' });
      alert('✅ Product added successfully!');
    } else {
      alert('❌ Please fill in all fields.');
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
        placeholder="Image filename (e.g., potato.png)"
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
