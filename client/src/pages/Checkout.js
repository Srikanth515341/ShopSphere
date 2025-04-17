import React, { useState } from 'react';
import styles from '../styles/Checkout.module.css';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { placeOrder } from '../services/orderService';
import { clearCartAPI } from '../services/cartService';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();

  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    address: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, mobile, email, address } = form;
    const user = JSON.parse(localStorage.getItem('user'));

    if (name && mobile && email && address && cartItems.length > 0 && user?.id) {
      const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      const orderData = {
        userId: user.id,
        total,
        cartItems
      };

      const result = await placeOrder(orderData);

      if (result?.message === 'Order placed successfully') {
        await clearCartAPI(user.id); // ✅ clear backend
        clearCart();                 // ✅ clear frontend
        alert('✅ Order placed successfully!');
        navigate('/');
      } else {
        alert('❌ Failed to place order. Try again.');
      }
    } else {
      alert('❌ Please fill in all fields and ensure your cart is not empty!');
    }
  };

  return (
    <div className={styles.checkout}>
      <h2>Checkout</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="address"
          placeholder="Shipping Address"
          value={form.address}
          onChange={handleChange}
          required
        />
        <button type="submit" className={styles.placeOrder}>
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
