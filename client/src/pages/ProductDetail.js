import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/ProductDetail.module.css';
import { fetchProductByName } from '../services/api';
import { useCart } from '../context/CartContext';
import { addToCartAPI } from '../services/cartService';

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

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user?.id) return alert('Please login to add items to cart');
    if (!product?.id) return alert('Product ID is missing.');

    try {
      addToCart({ ...product, quantity }); // frontend update

      await addToCartAPI({
        userId: user.id,
        productId: product.id,
        quantity,
      }); // backend update

      alert(`${product.name} added to cart`);
    } catch (error) {
      console.error('❌ Failed to add to cart:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  if (!product) {
    return <div className={styles.error}>Product not found.</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img src={require(`../assets/${product.image}`)} alt={product.name} />
      </div>

      <div className={styles.detailsSection}>
        <h2>{product.name}</h2>
        <div className={styles.rating}>⭐⭐⭐⭐☆ (4)</div>
        <p className={styles.original}>MRP: <s>${product.price + 10}</s></p>
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
          <button className={styles.cart} onClick={handleAddToCart}>Add to Cart</button>
          <button className={styles.buy}>Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
