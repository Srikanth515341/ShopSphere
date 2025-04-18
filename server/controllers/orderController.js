const db = require('../config/db');

// ✅ Place a new order
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

// ✅ Get orders for a specific user
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

// ✅ Get all orders for Admin
exports.getAllOrders = async (req, res) => {
  try {
    const ordersRes = await db.query(`
      SELECT o.id, o.user_id, o.total, o.status, o.created_at, u.name AS user_name, u.email
      FROM orders o
      JOIN users u ON o.user_id = u.id
      ORDER BY o.created_at DESC
    `);

    const orders = await Promise.all(
      ordersRes.rows.map(async (order) => {
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
    console.error('Admin fetch orders error:', error);
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
};

// ✅ Update order status
exports.updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const result = await db.query(
      'UPDATE orders SET status = $1 WHERE id = $2 RETURNING *',
      [status, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json({ message: 'Order status updated successfully' });
  } catch (error) {
    console.error('Update order status error:', error);
    res.status(500).json({ message: 'Failed to update order status' });
  }
};
