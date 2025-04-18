import React, { useEffect, useState } from 'react';
import styles from '../styles/AdminCategories.module.css';
import axios from 'axios';

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({ title: '', image: '', bgColor: '' });
  const [editIndex, setEditIndex] = useState(null);

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

    if (editIndex !== null) {
      const updated = [...categories];
      updated[editIndex] = newCategory;
      setCategories(updated);
      setEditIndex(null);
      alert('✅ Category updated locally');
    } else {
      setCategories([...categories, newCategory]);
      alert('✅ Category added locally');
    }

    setNewCategory({ title: '', image: '', bgColor: '' });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setNewCategory(categories[index]);
  };

  const handleDelete = (index) => {
    const updated = categories.filter((_, i) => i !== index);
    setCategories(updated);
    alert('❌ Category deleted locally');
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
        <button onClick={handleAddCategory}>
          {editIndex !== null ? 'Update Category' : '+ Add Category'}
        </button>
      </div>

      <div className={styles.grid}>
        {categories.map((cat, index) => (
          <div key={index} className={styles.card} style={{ backgroundColor: cat.bgColor }}>
            <img src={require(`../assets/${cat.image}`)} alt={cat.title} />
            <h4>{cat.title}</h4>
            <div className={styles.actions}>
              <button onClick={() => handleEdit(index)} className={styles.edit}>Edit</button>
              <button onClick={() => handleDelete(index)} className={styles.delete}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCategories;
