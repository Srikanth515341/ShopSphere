import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from '../styles/Cart.module.css';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (Array.isArray(cartItems)) {
      const newTotal = cartItems.reduce(
        (acc, item) => acc + (item.price || item.discountPrice || 0) * item.quantity,
        0
      );
      setTotal(newTotal);
    }
  }, [cartItems]);

  const handleRemove = async (itemId) => {
    await removeFromCart(itemId); // removes from backend + reloads context
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return <div className={styles.empty}>Your cart is empty.</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className={styles.card}>
          <img
            src={require(`../assets/${item.image}`)}
            alt={item.name}
            className={styles.image}
          />
          <div className={styles.details}>
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price || item.discountPrice} x {item.quantity}</p>
            <p>Total: ${(item.price || item.discountPrice) * item.quantity}</p>
            <button
              onClick={() => handleRemove(item.id)}
              className={styles.remove}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className={styles.summary}>
        <h3>Total Amount: ${total}</h3>
        <button className={styles.clear} onClick={clearCart}>Clear Cart</button>
        <button className={styles.checkout} onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
