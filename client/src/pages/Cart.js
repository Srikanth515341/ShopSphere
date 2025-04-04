// File: client/src/pages/Cart.js
import React, { useContext, createContext, useState, useEffect } from 'react';
import styles from '../styles/Cart.module.css';

// Create a simple Cart Context for demo purposes
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const removeFromCart = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
  };

  const placeOrder = () => {
    fetch('http://localhost:5000/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cartItems, total: getTotal() })
    })
      .then((res) => res.json())
      .then(() => setCartItems([]))
      .catch((err) => console.error('Order error:', err));
  };

  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);
  };

  return (
    <CartContext.Provider value={{ cartItems, removeFromCart, placeOrder }}>
      {children}
    </CartContext.Provider>
  );
};

const Cart = () => {
  const { cartItems, removeFromCart, placeOrder } = useContext(CartContext);
  const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);

  return (
    <div className={styles.container}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className={styles.items}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.card}>
                <img src={item.image} alt={item.name} />
                <div className={styles.info}>
                  <h4>{item.name}</h4>
                  <p>${item.price}</p>
                  <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.summary}>
            <h3>Total: ${total}</h3>
            <button className={styles.orderBtn} onClick={placeOrder}>
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default () => (
  <CartProvider>
    <Cart />
  </CartProvider>
);