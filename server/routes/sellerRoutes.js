const express = require('express');
const router = express.Router();
const { getSellerOrders } = require('../controllers/sellerController');

// ✅ Get orders for a seller's products
router.get('/orders/:sellerId', getSellerOrders);

module.exports = router;
