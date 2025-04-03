import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  };

  const placeOrder = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/orders', {
        items: cartItems,
        total: getTotal()
      });
      setMessage('Order placed successfully!');
      localStorage.removeItem('cart');
      setCartItems([]);
    } catch (err) {
      setMessage('Failed to place order');
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} style={{ borderBottom: '1px solid #ccc', padding: '1rem 0' }}>
              <h3>{item.name}</h3>
              <img src={item.image} alt={item.name} style={{ width: '150px' }} />
              <p>${item.price}</p>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${getTotal()}</h3>
          <button onClick={placeOrder}>Place Order</button>
        </div>
      )}
      <p>{message}</p>
    </div>
  );
};

export default Cart;
