import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/ProductDetail.module.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/products/${id}`);
      setProduct(res.data);
    } catch (err) {
      console.error('Failed to fetch product:', err);
    }
  };

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className={styles.productDetailContainer}>
      <h2 className={styles.productTitle}>{product.name}</h2>
      <img src={product.image} alt={product.name} className={styles.productImage} />
      <p className={styles.productPrice}>Price: ${product.price}</p>
      <p className={styles.productDescription}>
        <strong>Description:</strong> {product.description}
      </p>
      <button className={styles.addToCartBtn} onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
