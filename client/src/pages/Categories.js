import React from 'react';
import styles from '../styles/Categories.module.css';
import { foodCategories, fashionCategories, electronicsCategories } from '../data/productsData';

const Categories = () => {
  const renderCategoryCards = (categoryArray) =>
    categoryArray.map((item, index) => (
      <div key={index} className={styles.card} style={{ backgroundColor: item.bgColor }}>
        <img src={require(`../assets/${item.image}`)} alt={item.title} />
        <p>{item.title}</p>
      </div>
    ));

  return (
    <div className={styles.wrapper}>
      <h2>Food Categories</h2>
      <div className={styles.grid}>{renderCategoryCards(foodCategories)}</div>

      <h2>Fashion Categories</h2>
      <div className={styles.grid}>{renderCategoryCards(fashionCategories)}</div>

      <h2>Electronics Categories</h2>
      <div className={styles.grid}>{renderCategoryCards(electronicsCategories)}</div>
    </div>
  );
};

export default Categories;
