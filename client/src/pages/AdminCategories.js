import React, { useEffect, useState } from 'react';
import styles from '../styles/AdminCategories.module.css';
import axios from 'axios';

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [bgcolor, setBgcolor] = useState('');
  const [editId, setEditId] = useState(null);

  const fetchCategories = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/categories');
      setCategories(res.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !image || !bgcolor) {
      alert('All fields are required!');
      return;
    }

    const categoryData = { title, image, bgcolor };

    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/categories/${editId}`, categoryData);
        alert('Category updated successfully');
      } else {
        await axios.post('http://localhost:5000/api/categories', categoryData);
        alert('Category added successfully');
      }
      setTitle('');
      setImage('');
      setBgcolor('');
      setEditId(null);
      fetchCategories();
    } catch (error) {
      console.error('Error saving category:', error);
      alert('❌ Failed to save category');
    }
  };

  const handleEdit = (category) => {
    setTitle(category.title);
    setImage(category.image);
    setBgcolor(category.bgcolor);
    setEditId(category.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        await axios.delete(`http://localhost:5000/api/categories/${id}`);
        alert('Category deleted');
        fetchCategories();
      } catch (error) {
        console.error('Error deleting category:', error);
        alert('❌ Failed to delete category');
      }
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Admin - Manage Categories</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Category Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image Filename (e.g. fruits.png)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Background Color (e.g. #E3F2FD)"
          value={bgcolor}
          onChange={(e) => setBgcolor(e.target.value)}
        />
        <button type="submit" className={styles.addBtn}>
          {editId ? 'Update Category' : '+ Add Category'}
        </button>
      </form>

      <div className={styles.cardGrid}>
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={styles.card}
            style={{ backgroundColor: cat.bgcolor }}
          >
            <img
              src={require(`../assets/${cat.image}`)}
              alt={cat.title}
              className={styles.image}
            />
            <h3 className={styles.title}>{cat.title.toUpperCase()}</h3>
            <div className={styles.actions}>
              <button onClick={() => handleEdit(cat)}>Edit</button>
              <button onClick={() => handleDelete(cat.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCategories;
