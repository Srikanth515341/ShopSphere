import React, { useState } from 'react';
import styles from '../styles/Checkout.module.css';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { clearCartAPI } from '../services/cartService';

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, mobile, email, address } = form;
    if (name && mobile && email && address) {
      const user = JSON.parse(localStorage.getItem('user'));

      if (user?.id) {
        await clearCartAPI(user.id); // ✅ Clear backend cart
      }

      clearCart(); // ✅ Clear frontend cart
      alert('✅ Order placed successfully!');
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
        />
        <button type="submit" className={styles.placeOrder}>
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
