import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Categories from './pages/Categories';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart'; // ✅ Import Cart page
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/products/:category/:productName" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} /> {/* ✅ Cart route */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
