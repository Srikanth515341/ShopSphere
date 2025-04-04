// server/controllers/orderController.js
const { placeOrder, getAllOrders } = require('../models/orderModel');

const createOrder = async (req, res) => {
  try {
    const { items, total } = req.body;
    console.log('ORDER RECEIVED:', items, total);

    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const order = await placeOrder(items, total);
    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (err) {
    console.error('Order Error:', err);
    res.status(500).json({ error: err.message });
  }
};

const fetchOrders = async (req, res) => {
  try {
    const orders = await getAllOrders();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createOrder, fetchOrders };
