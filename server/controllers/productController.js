// server/controllers/productController.js
const { addProduct, getAllProducts, getProductById } = require('../models/productModel');

const createProduct = async (req, res) => {
  try {
    const { name, description, price, image } = req.body;
    const newProduct = await addProduct(name, description, price, image);
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const fetchProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const fetchProductById = async (req, res) => {
  try {
    const product = await getProductById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createProduct,
  fetchProducts,
  fetchProductById
};
