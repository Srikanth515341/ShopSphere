const express = require('express');
const router = express.Router();
const {
  addToCart,
  getCartItems,
  removeFromCart,
  clearCart,
} = require('../controllers/cartController');

// ✅ Add item to cart
router.post('/', addToCart);

// ✅ Get all items in cart for a specific user
router.get('/:userId', getCartItems);

// ✅ Remove specific cart item by cart item ID
router.delete('/:itemId', removeFromCart);

// ✅ Clear entire cart for a user
router.delete('/clear/:userId', clearCart);

module.exports = router;
