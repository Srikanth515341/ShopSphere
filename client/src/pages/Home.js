import React from 'react';
import styles from '../styles/Home.module.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>Freshness You Can Trust, Savings You Will Love!</h1>
          <p>Shop groceries and fashion essentials all in one place.</p>
          <div className={styles.buttons}>
            <button className={styles.shopNow} onClick={() => navigate('/categories')}>
              Shop now
            </button>
            <button className={styles.explore}>Explore deals →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
