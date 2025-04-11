import React from 'react';
import styles from '../styles/CategorySection.module.css';
import {
  foodCategories,
  fashionCategories,
  electronicsCategories,
} from '../data/productsData';

const CategorySection = () => {
  return (
    <div className={styles.container} id="categories">
      <h2>Categories</h2>

      <div className={styles.section}>
        <h3>Food</h3>
        <div className={styles.cards}>
          {foodCategories.map((item, index) => (
            <div className={styles.card} key={index} style={{ backgroundColor: item.bgColor }}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h3>Fashion</h3>
        <div className={styles.cards}>
          {fashionCategories.map((item, index) => (
            <div className={styles.card} key={index}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h3>Electronics</h3>
        <div className={styles.cards}>
          {electronicsCategories.map((item, index) => (
            <div className={styles.card} key={index}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
