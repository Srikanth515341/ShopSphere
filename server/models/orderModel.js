// server/models/orderModel.js
const pool = require('../config/db');

const placeOrder = async (items, total) => {
  const result = await pool.query(
    'INSERT INTO orders (items, total) VALUES ($1, $2) RETURNING *',
    [JSON.stringify(items), total] // ✅ Fix: Convert items to string
  );
  return result.rows[0];
};

module.exports = { placeOrder };
