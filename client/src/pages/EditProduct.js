import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../styles/AddProductForm.module.css';
import axios from 'axios';

const EditProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: '',
    image: '',
    details: []
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/id/${productId}`);
        const fetchedProduct = res.data;
        setProduct({
          ...fetchedProduct,
          details: fetchedProduct.details || []
        });
      } catch (err) {
        console.error('Failed to fetch product', err);
        alert('Failed to load product details.');
      }
    };

    fetchProduct();
  }, [productId]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleDetailChange = (index, value) => {
    const updatedDetails = [...product.details];
    updatedDetails[index] = value;
    setProduct({ ...product, details: updatedDetails });
  };

  const handleAddDetail = () => {
    setProduct({ ...product, details: [...product.details, ''] });
  };

  const handleRemoveDetail = (index) => {
    const updatedDetails = product.details.filter((_, i) => i !== index);
    setProduct({ ...product, details: updatedDetails });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/products/${productId}`, product);
      alert('✅ Product updated successfully!');
      navigate('/seller');
    } catch (err) {
      console.error('Error updating product', err);
      alert('❌ Failed to update product.');
    }
  };

  return (
    <div className={styles.container}>
      <h2>Edit Product</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product Name" required />
        <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
        <input type="text" name="category" value={product.category} onChange={handleChange} placeholder="Category" required />
        <input type="text" name="image" value={product.image} onChange={handleChange} placeholder="Image filename (e.g. apple.png)" required />

        <h4>Product Details</h4>
        {product.details.map((detail, index) => (
          <div key={index} className={styles.detailRow}>
            <input
              type="text"
              value={detail}
              onChange={(e) => handleDetailChange(index, e.target.value)}
              placeholder={`Detail ${index + 1}`}
            />
            <button type="button" onClick={() => handleRemoveDetail(index)}>❌</button>
          </div>
        ))}
        <button type="button" className={styles.addDetail} onClick={handleAddDetail}>+ Add Detail</button>

        <button type="submit" className={styles.submit}>Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;
