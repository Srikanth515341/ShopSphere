import React from 'react';
import styles from '../styles/ProductList.module.css';
import { useParams } from 'react-router-dom';
import { products } from '../data/productsData';

const ProductList = () => {
  const { category } = useParams();
  const categoryKey = category.replace(/\s|&/g, '').toLowerCase();
  const filteredProducts = products[categoryKey] || [];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{category.toUpperCase()}</h2>
      <div className={styles.grid}>
        {filteredProducts.map((product, index) => (
          <div key={index} className={styles.card}>
            <img
              src={require(`../assets/${product.image}`)}
              alt={product.name}
              className={styles.image}
            />
            <div className={styles.details}>
              <p className={styles.category}>{product.category}</p>
              <h3 className={styles.name}>{product.name}</h3>
              <div className={styles.rating}>⭐⭐⭐⭐☆ (4)</div>
              <div className={styles.priceRow}>
                <span className={styles.discount}>${product.discountPrice}</span>
                <span className={styles.original}>${product.originalPrice}</span>
              </div>
              <button className={styles.btn}>🛒 Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
