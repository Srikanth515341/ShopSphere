import React, { useEffect, useState } from 'react';
import styles from '../styles/AdminCategories.module.css';
import axios from 'axios';

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({
    title: '',
    image: '',
    bgColor: ''
  });

  const fetchCategories = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products/categories');
      setCategories(res.data);
    } catch (err) {
      console.error('Failed to fetch categories:', err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    setNewCategory({ ...newCategory, [e.target.name]: e.target.value });
  };

  const handleAddCategory = () => {
    if (!newCategory.title || !newCategory.image || !newCategory.bgColor) {
      alert('Please fill in all fields');
      return;
    }

    setCategories([...categories, newCategory]);
    setNewCategory({ title: '', image: '', bgColor: '' });
    alert('✅ Category added locally (you can link it to backend later)');
  };

  return (
    <div className={styles.container}>
      <h2>Admin - Manage Categories</h2>

      <div className={styles.form}>
        <input
          type="text"
          name="title"
          placeholder="Category Title"
          value={newCategory.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image Filename (e.g. fruits.png)"
          value={newCategory.image}
          onChange={handleChange}
        />
        <input
          type="text"
          name="bgColor"
          placeholder="Background Color (e.g. #E3F2FD)"
          value={newCategory.bgColor}
          onChange={handleChange}
        />
        <button onClick={handleAddCategory}>+ Add Category</button>
      </div>

      <div className={styles.grid}>
        {categories.map((cat, index) => (
          <div key={index} className={styles.card} style={{ backgroundColor: cat.bgColor }}>
            <img src={require(`../assets/${cat.image}`)} alt={cat.title} />
            <h4>{cat.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCategories;
