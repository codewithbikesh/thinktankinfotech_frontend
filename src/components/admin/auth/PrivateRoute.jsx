import React from 'react';
import { Navigate } from 'react-router-dom';

// PrivateRoute will only allow access if the user is authenticated
const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('auth_token'); // Check if token exists

  if (!isAuthenticated) {
    return <Navigate to="/login/admin" />; // Redirect to login if not authenticated
  }

  return children; // Allow access if authenticated
};

export default PrivateRoute;
