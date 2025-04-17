import React, { useEffect, useState } from 'react';
import styles from '../styles/Categories.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Categories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  const handleClick = (category) => {
    const formattedTitle = category.replace(/\s|&/g, '').toLowerCase();
    navigate(`/products/${formattedTitle}`);
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products/categories');
      setCategories(res.data); // Expecting: [{ title, image, bgColor }]
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>All Categories</h2>
      <div className={styles.grid}>
        {categories.map((item, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ backgroundColor: item.bgColor }}
            onClick={() => handleClick(item.title)}
          >
            <img
              src={
                item.image
                  ? require(`../assets/${item.image}`)
                  : require(`../assets/default.png`) // fallback if image is missing
              }
              alt={item.title}
              className={styles.image}
            />
            <p className={styles.label}>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
