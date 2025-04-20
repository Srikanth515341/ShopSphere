import React, { useEffect, useState } from "react";
import styles from "../styles/Categories.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("/api/categories");
        setCategories(res.data);
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/products/${category.title}`);
  };

  const getImage = (filename) => {
    try {
      return require(`../assets/${filename}`);
    } catch (error) {
      return null;
    }
  };

  return (
    <div className={styles.container}>
      <h2>All Categories</h2>
      <div className={styles.grid}>
        {categories.map((category) => (
          <div
            key={category.id}
            className={styles.card}
            style={{ backgroundColor: category.backgroundColor }}
            onClick={() => handleCategoryClick(category)}
          >
            <img
              src={getImage(category.image)}
              alt={category.title}
              className={styles.image}
            />
            <p>{category.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
