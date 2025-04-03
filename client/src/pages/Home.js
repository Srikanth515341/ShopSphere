import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../services/productService';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>All Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '1rem', width: '200px' }}>
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
