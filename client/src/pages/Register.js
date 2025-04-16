import React, { useState } from 'react';
import styles from '../styles/Auth.module.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = form;

    if (name && email && password) {
      // ✅ Use ID that exists in PostgreSQL (must match row in `users` table)
      const newUser = {
        id: 1, // 🟢 Replace this with real ID from your DB if needed
        name,
        email,
        password
      };

      localStorage.setItem('registeredUser', JSON.stringify(newUser));
      localStorage.setItem('user', JSON.stringify(newUser)); // ✅ Also set login session
      alert('✅ Registration successful!');
      navigate('/login');
    } else {
      alert('❌ Please fill in all fields');
    }
  };

  return (
    <div className={styles.authContainer}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
