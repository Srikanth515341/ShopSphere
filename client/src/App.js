import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Categories from './pages/Categories';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import SellerDashboard from './pages/SellerDashboard';
import SellerOrders from './pages/SellerOrders'; // ✅ NEW
import OrderHistory from './pages/OrderHistory';
import DeliveryForm from './pages/DeliveryForm';
import EditProduct from './pages/EditProduct';
import AdminOrders from './pages/AdminOrders';
import AdminCategories from './pages/AdminCategories';
import AdminProducts from './pages/AdminProducts';
import AddProductPage from './pages/AddProductPage';
import AdminUsers from './pages/AdminUsers';
import AdminAllProducts from './pages/AdminAllProducts';

import { CartProvider } from './context/CartContext';
import { UserProvider, useUser } from './context/UserContext';
import AdminRoute from './components/AdminRoute';
import SellerRoute from './components/SellerRoute';

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();
  return user ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/products/:category" element={<ProductList />} />
            <Route path="/products/:category/:productName" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* ✅ Protected Routes */}
            <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
            <Route path="/orders" element={<ProtectedRoute><OrderHistory /></ProtectedRoute>} />
            <Route path="/delivery" element={<ProtectedRoute><DeliveryForm /></ProtectedRoute>} />
            <Route path="/edit/:productId" element={<ProtectedRoute><EditProduct /></ProtectedRoute>} />

            {/* ✅ Seller-only Routes */}
            <Route path="/seller" element={<SellerRoute><SellerDashboard /></SellerRoute>} />
            <Route path="/seller/orders" element={<SellerRoute><SellerOrders /></SellerRoute>} /> {/* ✅ NEW */}

            {/* ✅ Admin-only Routes */}
            <Route path="/admin/orders" element={<AdminRoute><AdminOrders /></AdminRoute>} />
            <Route path="/admin/categories" element={<AdminRoute><AdminCategories /></AdminRoute>} />
            <Route path="/admin/products" element={<AdminRoute><AdminProducts /></AdminRoute>} />
            <Route path="/admin/add-product" element={<AdminRoute><AddProductPage /></AdminRoute>} />
            <Route path="/admin/users" element={<AdminRoute><AdminUsers /></AdminRoute>} />
            <Route path="/admin/all-products" element={<AdminRoute><AdminAllProducts /></AdminRoute>} />
          </Routes>
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
