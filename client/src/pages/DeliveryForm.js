import React, { useState } from 'react';
import styles from '../styles/Checkout.module.css';
import { placeOrder } from '../services/orderService';

const DeliveryForm = ({ product, quantity = 1, onClose }) => {
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
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user?.id || !product?.id) {
      return alert('❌ User or product data is missing');
    }

    const cartItems = [
      {
        name: product.name,
        quantity,
        price: product.price
      }
    ];

    const total = product.price * quantity;

    const orderData = {
      userId: user.id,
      cartItems,
      total
    };

    const result = await placeOrder(orderData);
    if (result?.message === 'Order placed successfully') {
      alert('✅ Order placed successfully!');
      onClose(); // close popup
    } else {
      alert('❌ Failed to place order. Try again.');
    }
  };

  return (
    <div className={styles.checkout}>
      <h2>Enter Delivery Details</h2>
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

export default DeliveryForm;
