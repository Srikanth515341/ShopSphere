import React, { useEffect, useState } from 'react';
import styles from '../styles/SellerOrders.module.css';
import axios from 'axios';

const SellerOrders = () => {
  const [orders, setOrders] = useState([]);
  const seller = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchSellerOrders = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/seller/orders/${seller.id}`);
        setOrders(res.data);
      } catch (err) {
        console.error('Failed to fetch seller orders', err);
      }
    };

    if (seller?.id) fetchSellerOrders();
  }, [seller?.id]);

  return (
    <div className={styles.container}>
      <h2>Seller - Orders for Your Products</h2>
      {orders.map((order) => (
        <div key={order.order_id} className={styles.orderCard}>
          <p><strong>Order ID:</strong> {order.order_id}</p>
          <p><strong>Buyer:</strong> {order.buyer_name}</p>
          <p><strong>Product:</strong> {order.product_name}</p>
          <p><strong>Quantity:</strong> {order.quantity}</p>
          <p><strong>Status:</strong> {order.status}</p>
        </div>
      ))}
    </div>
  );
};

export default SellerOrders;
