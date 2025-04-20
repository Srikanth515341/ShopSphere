import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/ProductDetail.module.css';
import { fetchProductByName } from '../services/api';
import { useCart } from '../context/CartContext';
import { addToCartAPI } from '../services/cartService';
import DeliveryForm from './DeliveryForm';

const ProductDetail = () => {
  const { productName } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const encodedName = encodeURIComponent(productName);
        const data = await fetchProductByName(encodedName);
        setProduct(data);
      } catch (err) {
        console.error('❌ Error loading product:', err);
      }
    };
    loadProduct();
  }, [productName]);

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user?.id || !product?.id) {
      alert('Please login and try again.');
      return;
    }

    const userId = Number(user.id);
    const productId = Number(product.id);

    console.log("🧪 Add to Cart Payload:", { userId, productId, quantity });

    if (!userId || !productId || !quantity) {
      alert('Missing required data to add to cart.');
      return;
    }

    try {
      addToCart({ ...product, quantity });
      await addToCartAPI({ userId, productId, quantity });
      alert(`${product.name} added to cart`);
    } catch (error) {
      console.error('❌ Failed to add to cart:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  const handleBuyNow = () => setShowForm(true);

  const getImage = (imageName) => {
    try {
      return require(`../assets/${imageName}`);
    } catch {
      return null;
    }
  };

  if (!product) return <div className={styles.error}>Product not found.</div>;

  const productImage = getImage(product.image);

  return (
    <div className={styles.container}>
      {showForm && (
        <DeliveryForm
          product={product}
          quantity={quantity}
          onClose={() => setShowForm(false)}
        />
      )}

      <div className={styles.imageSection}>
        {productImage ? (
          <img src={productImage} alt={product.name} />
        ) : (
          <p className={styles.error}>Image not found</p>
        )}
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
          <button className={styles.buy} onClick={handleBuyNow}>Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
