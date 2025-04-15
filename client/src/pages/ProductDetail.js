import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/ProductDetail.module.css';
import { fetchProductByName } from '../services/api';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { productName } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const loadProduct = async () => {
      const data = await fetchProductByName(productName);
      setProduct(data);
    };

    loadProduct();
  }, [productName]);

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
          MRP: <s>${product.price + 10}</s>
        </p>
        <p className={styles.discount}>MRP: ${product.price}</p>
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
