// server/controllers/productController.js
const { addProduct } = require('../models/productModel');

const createProduct = async (req, res) => {
  try {
    const { name, description, price, image } = req.body;
    const newProduct = await addProduct(name, description, price, image);
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createProduct };
