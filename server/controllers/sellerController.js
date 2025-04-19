const pool = require('../config/db');

// ✅ Get all orders for products added by the seller
exports.getSellerOrders = async (req, res) => {
  const { sellerId } = req.params;

  try {
    const result = await pool.query(
      `SELECT
         o.id AS order_id,
         u.name AS buyer_name,
         u.email AS buyer_email,
         p.name AS product_name,
         ci.quantity,
         ci.price,
         o.status,
         o.created_at
       FROM orders o
       JOIN users u ON o.user_id = u.id
       JOIN cart_items ci ON ci.order_id = o.id
       JOIN products p ON p.id = ci.product_id
       WHERE p.seller_id = $1
       ORDER BY o.created_at DESC`,
      [sellerId]
    );

    res.json(result.rows);
  } catch (err) {
    console.error('❌ Error fetching seller orders:', err);
    res.status(500).json({ error: 'Server error' });
  }
};
