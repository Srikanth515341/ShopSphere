const express = require('express');
const router = express.Router();
const {
  placeOrder,
  getOrdersByUser,
  getAllOrders,
  updateOrderStatus
} = require('../controllers/orderController');

// ✅ Place an order
router.post('/place', placeOrder);

// ✅ Get user orders
router.get('/:userId', getOrdersByUser);

// ✅ Get all orders (Admin)
router.get('/admin/orders', getAllOrders);

// ✅ Update order status
router.put('/:id/status', updateOrderStatus);

module.exports = router;
