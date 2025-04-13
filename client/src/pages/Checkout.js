import React, { useState } from 'react';
import styles from '../styles/Checkout.module.css';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    address: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.mobile && form.email && form.address) {
      alert('✅ Order placed successfully!');
      clearCart(); // ✅ Clear cart after successful order
      navigate('/');
    } else {
      alert('❌ Please fill in all fields!');
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
        ></textarea>

        <button type="submit" className={styles.placeOrder}>Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
