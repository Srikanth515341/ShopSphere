import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/OrderHistory.module.css';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/orders/admin/orders');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
      alert('Failed to load orders.');
    }
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/orders/${orderId}/status`, {
        status: newStatus
      });
      fetchOrders(); // Refresh after update
    } catch (error) {
      console.error('Failed to update order status:', error);
      alert('Failed to update status.');
    }
  };

  return (
    <div className={styles.orderHistory}>
      <h2>Admin - All Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map(order => (
          <div key={order.id} className={styles.orderCard}>
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>User:</strong> {order.user_name}</p>
            <p><strong>Email:</strong> {order.email}</p>
            <p><strong>Products:</strong></p>
            <ul>
              {order.items.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.quantity} pcs @ ${item.price ?? 0}
                </li>
              ))}
            </ul>
            <p><strong>Total:</strong> ${order.total ?? '0.00'}</p>
            <p><strong>Status:</strong>{' '}
              <select value={order.status} onChange={(e) => handleStatusChange(order.id, e.target.value)}>
                <option value="Pending">Pending</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
              </select>
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminOrders;
