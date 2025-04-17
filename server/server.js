const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const authRoutes = require('./routes/authRoutes'); // ✅ Auth route

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Mount API routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/auth', authRoutes); // ✅ Add auth route

app.listen(5000, () => {
  console.log('✅ Server running on port 5000');
});
