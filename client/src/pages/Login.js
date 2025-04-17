import React, { useState } from 'react';
import styles from '../styles/Auth.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../context/UserContext'; // ✅ Correct import
import { loginUser } from '../services/authService';

const Login = () => {
  const { loginUser: setUser } = useUser(); // ✅ Rename to avoid conflict
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser(form);
    if (response && response.id) {
      setUser(response); // ✅ Set user in context
      localStorage.setItem('user', JSON.stringify(response)); // ✅ Save to localStorage
      alert('✅ Login successful!');
      navigate('/');
    } else {
      alert('❌ Invalid email or password');
    }
  };

  return (
    <div className={styles.authContainer}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p className={styles.redirectText}>
        Don’t have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
