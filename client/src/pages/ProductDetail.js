import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/ProductDetail.module.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error('Error:', err));
  }, [id]);

  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...existingCart, { ...product, quantity: 1 }];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setMessage('Product added to cart');
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className={styles.detailContainer}>
      <h2 className={styles.title}>{product.name}</h2>
      <img src={product.image} alt={product.name} className={styles.image} />
      <p className={styles.price}>Price: <strong>${product.price}</strong></p>
      <p className={styles.description}><strong>Description:</strong> {product.description}</p>
      <button onClick={addToCart} className={styles.addBtn}>Add to Cart</button>
      {message && <p className={styles.success}>{message}</p>}
    </div>
  );
};

export default ProductDetail;
