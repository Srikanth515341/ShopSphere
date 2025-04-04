// client/src/pages/AdminOrders.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/AdminOrders.module.css';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  const user = JSON.parse(localStorage.getItem('user'));
  const isAdmin = user && user.email === 'admin@example.com';

  const fetchOrders = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/orders');
      setOrders(res.data);
    } catch (err) {
      console.error('Error fetching orders:', err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (!isAdmin) {
    return (
      <div className={styles.adminOrdersContainer}>
        <h2>Access Denied</h2>
        <p>You must be an admin to view this page.</p>
      </div>
    );
  }

  return (
    <div className={styles.adminOrdersContainer}>
      <h2>All Orders (Admin)</h2>
      {orders.map((order) => (
        <div key={order.id} className={styles.orderCard}>
          <p><strong>Order ID:</strong> {order.id}</p>
          <p><strong>Total:</strong> ${order.total}</p>
          <p><strong>Placed At:</strong> {new Date(order.created_at).toLocaleString()}</p>
          <div>
            <strong>Items:</strong>
            <ul>
              {order.items.map((item, index) => (
                <li key={index}>{item.name} - ${item.price} × {item.quantity}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminOrders;
