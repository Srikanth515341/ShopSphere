// server/models/orderModel.js
const pool = require('../config/db');

const placeOrder = async (items, total) => {
  const result = await pool.query(
    'INSERT INTO orders (items, total) VALUES ($1, $2) RETURNING *',
    [JSON.stringify(items), total]
  );
  return result.rows[0];
};

const getAllOrders = async () => {
  const result = await pool.query('SELECT * FROM orders ORDER BY created_at DESC');
  return result.rows;
};

module.exports = { placeOrder, getAllOrders };
