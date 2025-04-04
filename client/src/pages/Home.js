// client/src/pages/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';
import cardStyles from '../styles/ProductCard.module.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <h2 className={styles.heading}>Welcome to ShopSphere</h2>
      <p className={styles.subHeading}>Explore our latest collection</p>

      <div className={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={cardStyles.card}>
            <img src={product.image} alt={product.name} className={cardStyles.image} />
            <h3 className={cardStyles.title}>{product.name}</h3>
            <p className={cardStyles.price}>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
