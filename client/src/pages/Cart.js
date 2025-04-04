import React, { useEffect, useState } from 'react';
import styles from '../styles/Cart.module.css';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + parseFloat(item.price), 0).toFixed(2);
  };

  const placeOrder = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cart,
          total: getTotal(),
        }),
      });

      if (res.ok) {
        localStorage.removeItem('cart');
        setCart([]);
        setMessage('Order placed successfully!');
      } else {
        setMessage('Failed to place order');
      }
    } catch (err) {
      console.error(err);
      setMessage('Error placing order');
    }
  };

  return (
    <div className={styles.cartContainer}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.name} className={styles.image} />
              <div>
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <button onClick={() => removeFromCart(item.id)} className={styles.removeBtn}>Remove</button>
              </div>
            </div>
          ))}

          <div className={styles.total}>
            <strong>Total:</strong> ${getTotal()}
          </div>

          <button onClick={placeOrder} className={styles.placeOrderBtn}>Place Order</button>
        </div>
      )}

      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default Cart;
