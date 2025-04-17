const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductByName,
  getProductsByCategory,
  getAllCategories,
  getProductById,
  updateProduct
} = require('../controllers/productController');

// ✅ Get all products
router.get('/', getAllProducts);

// ✅ Get a product by name
router.get('/name/:name', getProductByName);

// ✅ Get products by category
router.get('/category/:category', getProductsByCategory);

// ✅ Get all unique categories (used in Categories page)
router.get('/categories', getAllCategories);

// ✅ Get a product by ID (for Edit page)
router.get('/id/:id', getProductById);

// ✅ Update a product by ID
router.put('/:id', updateProduct);

module.exports = router;
