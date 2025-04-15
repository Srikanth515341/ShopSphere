import React, { useEffect, useState } from 'react';
import styles from '../styles/ProductList.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchAllProducts } from '../services/api';

const ProductList = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchAllProducts();
      const filtered = data.filter(
        (item) =>
          item.category.toLowerCase() ===
          category.replace(/\s|&/g, '').toLowerCase()
      );
      setProducts(filtered);
    };

    loadProducts();
  }, [category]);

  const handleProductClick = (productName) => {
    const productKey = productName.replace(/\s/g, '');
    navigate(`/products/${category}/${productKey}`);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{category.toUpperCase()}</h2>
      <div className={styles.grid}>
        {products.map((product, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => handleProductClick(product.name)}
            style={{ cursor: 'pointer' }}
          >
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
                <span className={styles.discount}>${product.price}</span>
                <span className={styles.original}>${product.price + 10}</span>
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
