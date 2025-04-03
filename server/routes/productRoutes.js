// server/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const {
  createProduct,
  fetchProducts,
  fetchProductById
} = require('../controllers/productController');

router.post('/', createProduct);
router.get('/', fetchProducts);
router.get('/:id', fetchProductById);

module.exports = router;
