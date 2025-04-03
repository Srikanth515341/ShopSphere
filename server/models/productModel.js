// server/models/productModel.js
const pool = require('../config/db');

const addProduct = async (name, description, price, image) => {
  const result = await pool.query(
    'INSERT INTO products (name, description, price, image) VALUES ($1, $2, $3, $4) RETURNING *',
    [name, description, price, image]
  );
  return result.rows[0];
};

module.exports = { addProduct };
