const db = require('../config/db');

exports.placeOrder = async (req, res) => {
  try {
    const { userId, cartItems, total } = req.body;

    if (!Array.isArray(cartItems)) {
      return res.status(400).json({ message: 'cartItems must be an array' });
    }

    const orderResult = await db.query(
      'INSERT INTO orders (user_id, total) VALUES ($1, $2) RETURNING id',
      [userId, total]
    );

    const orderId = orderResult.rows[0].id;

    for (const item of cartItems) {
      await db.query(
        'INSERT INTO order_items (order_id, name, quantity, price) VALUES ($1, $2, $3, $4)',
        [orderId, item.name, item.quantity, item.price]
      );
    }

    res.status(201).json({ message: 'Order placed successfully' });
  } catch (error) {
    console.error('Order placement error:', error);
    res.status(500).json({ message: 'Failed to place order' });
  }
};

exports.getOrdersByUser = async (req, res) => {
  const userId = req.params.userId;

  try {
    const orderRes = await db.query(
      'SELECT * FROM orders WHERE user_id = $1 ORDER BY created_at DESC',
      [userId]
    );

    const orders = await Promise.all(
      orderRes.rows.map(async (order) => {
        const itemsRes = await db.query(
          'SELECT name, quantity, price FROM order_items WHERE order_id = $1',
          [order.id]
        );

        return {
          ...order,
          items: itemsRes.rows,
        };
      })
    );

    res.json(orders);
  } catch (error) {
    console.error('Fetch orders error:', error);
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
};
