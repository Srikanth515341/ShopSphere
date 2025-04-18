const express = require('express');
const router = express.Router();
const {
  addToCart,
  getCartItems,
  deleteCartItem,
  clearCart
} = require('../controllers/cartController');

// ✅ Add to cart
router.post('/', addToCart);

// ✅ Get user's cart items
router.get('/:userId', getCartItems);

// ✅ Clear all items in a user's cart
router.delete('/clear/:userId', clearCart);

// ✅ Delete a single cart item by ID
router.delete('/:itemId', deleteCartItem);

module.exports = router;
