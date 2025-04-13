import React from 'react';
import { useCart } from '../context/CartContext';
import styles from '../styles/Cart.module.css';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.discountPrice * item.quantity, 0);
  };

  if (cartItems.length === 0) {
    return <div className={styles.empty}>Your cart is empty.</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Shopping Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index} className={styles.card}>
          <img src={require(`../assets/${item.image}`)} alt={item.name} className={styles.image} />
          <div className={styles.details}>
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.discountPrice} x {item.quantity}</p>
            <p>Total: ${item.discountPrice * item.quantity}</p>
            <button onClick={() => removeFromCart(item.name)} className={styles.remove}>Remove</button>
          </div>
        </div>
      ))}
      <div className={styles.summary}>
        <h3>Total Amount: ${getTotal()}</h3>
        <button className={styles.clear} onClick={clearCart}>Clear Cart</button>
        <button className={styles.checkout}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
