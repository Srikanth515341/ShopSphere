import React from 'react';
import { useUser } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

const SellerRoute = ({ children }) => {
  const { user } = useUser();
  return user && user.role === 'seller' ? children : <Navigate to="/login" replace />;
};

export default SellerRoute;
