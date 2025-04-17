// client/src/pages/OrderHistory.js
import React, { useEffect, useState } from 'react';
import styles from '../styles/OrderHistory.module.css';
import { useUser } from '../context/UserContext';

const OrderHistory = () => {
  const { user } = useUser();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/orders/${user.id}`);
        const data = await res.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) {
      fetchOrders();
    } else {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return <div className={styles.message}>Loading your orders...</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Your Order History</h2>
      {orders.length === 0 ? (
        <p className={styles.message}>You have no orders yet.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className={styles.orderCard}>
            <h3>Order ID: {order.id}</h3>
            <p><strong>Date:</strong> {new Date(order.created_at).toLocaleString()}</p>
            <p><strong>Total:</strong> ${order.total}</p>
            <div className={styles.items}>
              {order.items?.map((item, idx) => (
                <div key={idx} className={styles.item}>
                  <p>{item.name} - Quantity: {item.quantity}</p>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;
