import React from 'react';
import styles from '../styles/Categories.module.css';
import { useNavigate } from 'react-router-dom';
import {
  foodCategories,
  fashionCategories,
  electronicsCategories,
} from '../data/productsData';

const Categories = () => {
  const navigate = useNavigate();

  const handleClick = (title) => {
    const formattedTitle = title.replace(/\s|&/g, '').toLowerCase();
    navigate(`/products/${formattedTitle}`);
  };

  const renderSection = (title, categories) => (
    <>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.grid}>
        {categories.map((item, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ backgroundColor: item.bgColor }}
            onClick={() => handleClick(item.title)}
          >
            <img
              src={require(`../assets/${item.image}`)}
              alt={item.title}
              className={styles.image}
            />
            <p className={styles.label}>{item.title}</p>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className={styles.container}>
      {renderSection('Food Categories', foodCategories)}
      {renderSection('Fashion Categories', fashionCategories)}
      {renderSection('Electronics Categories', electronicsCategories)}
    </div>
  );
};

export default Categories;
