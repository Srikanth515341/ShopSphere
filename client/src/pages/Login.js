import React, { useState } from 'react';
import styles from '../styles/Auth.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { loginUser } from '../services/authService';

const Login = () => {
  const { loginUser: setUser } = useUser();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(form);
      if (response && response.id) {
        localStorage.setItem('user', JSON.stringify(response)); // ✅ Save user
        setUser(response); // ✅ Update context
        alert('✅ Login successful!');
        navigate('/');
      } else {
        alert(response.error || '❌ Invalid email or password');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
      console.error('Login error:', error);
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
