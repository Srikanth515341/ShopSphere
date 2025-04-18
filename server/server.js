const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');
const userRoutes = require('./routes/userRoutes'); // ✅ NEW

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Mount API routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes); // ✅ Register user routes

app.listen(5000, () => {
  console.log('✅ Server running on port 5000');
});
