import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/ProductDetail.module.css';
import { products } from '../data/productsData';
import { useCart } from '../context/CartContext';

const normalize = (str) =>
  str.replace(/\s|[^a-zA-Z0-9]/g, '').toLowerCase(); // removes spaces & special characters

const ProductDetail = () => {
  const { category, productName } = useParams();
  const categoryKey = normalize(category);
  const productList = products[categoryKey] || [];

  const product = productList.find(
    (item) => normalize(item.name) === normalize(productName)
  );

  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) {
    return <div className={styles.error}>Product not found.</div>;
  }

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => quantity > 1 && setQuantity(quantity - 1);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    alert(`${product.name} added to cart`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img src={require(`../assets/${product.image}`)} alt={product.name} />
      </div>

      <div className={styles.detailsSection}>
        <h2>{product.name}</h2>
        <div className={styles.rating}>⭐⭐⭐⭐☆ (4)</div>
        <p className={styles.original}>
          MRP: <s>${product.originalPrice}</s>
        </p>
        <p className={styles.discount}>MRP: ${product.discountPrice}</p>
        <p className={styles.taxNote}>(inclusive of all taxes)</p>

        <div className={styles.about}>
          <h4>About Product</h4>
          <ul>
            {product.details?.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className={styles.quantityRow}>
          <button onClick={handleDecrement}>-</button>
          <span>{quantity} kg</span>
          <button onClick={handleIncrement}>+</button>
        </div>

        <div className={styles.btnRow}>
          <button className={styles.cart} onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className={styles.buy}>Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
