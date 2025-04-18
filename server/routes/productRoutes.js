const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductByName,
  getProductsByCategory,
  getAllCategories,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

// ✅ Get all products
router.get('/', getAllProducts);

// ✅ Get a product by name
router.get('/name/:name', getProductByName);

// ✅ Get products by category
router.get('/category/:category', getProductsByCategory);

// ✅ Get all unique categories
router.get('/categories', getAllCategories);

// ✅ Get a product by ID
router.get('/id/:id', getProductById);

// ✅ Add a new product
router.post('/', addProduct);

// ✅ Update a product by ID
router.put('/:id', updateProduct);

// ✅ Delete a product by ID
router.delete('/:id', deleteProduct);

module.exports = router;
