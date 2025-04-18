import React from 'react';
import AddProductForm from '../components/AddProductForm';
import styles from '../styles/AddProductForm.module.css';

const AddProductPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <AddProductForm />
    </div>
  );
};

export default AddProductPage;
