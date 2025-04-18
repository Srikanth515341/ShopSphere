import React from 'react';
import { useUser } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const { user } = useUser();
  return user && user.role === 'admin' ? children : <Navigate to="/login" replace />;
};

export default AdminRoute;
