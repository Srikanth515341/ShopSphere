// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import AddProduct from './pages/AddProduct';
import AdminOrders from './pages/AdminOrders';
import AdminProducts from './pages/AdminProducts';
import EditProduct from './pages/EditProduct';

function App() {
  let user;
  try {
    const userData = localStorage.getItem('user');
    user = userData ? JSON.parse(userData) : null;
  } catch (error) {
    user = null;
  }
  const isAdmin = user && user.email === 'admin@example.com';

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />

        <Route
          path="/admin/add-product"
          element={isAdmin ? <AddProduct /> : <Navigate to="/" />}
        />
        <Route
          path="/admin/orders"
          element={isAdmin ? <AdminOrders /> : <Navigate to="/" />}
        />
        <Route
          path="/admin/products"
          element={isAdmin ? <AdminProducts /> : <Navigate to="/" />}
        />
        <Route
          path="/admin/edit-product/:id"
          element={isAdmin ? <EditProduct /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
