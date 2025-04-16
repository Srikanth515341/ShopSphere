// client/src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = ({ email, password }) => {
    const registered = JSON.parse(localStorage.getItem('registeredUser'));

    if (
      registered &&
      registered.email === email &&
      registered.password === password
    ) {
      const loggedInUser = {
        id: registered.id, // ✅ make sure this includes id
        name: registered.name,
        email: registered.email,
      };

      setUser(loggedInUser);
      localStorage.setItem('user', JSON.stringify(loggedInUser));
      return loggedInUser; // ✅ return user object with id
    } else {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
