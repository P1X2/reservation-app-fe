import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element }) => {
  const isAuthenticated = !!localStorage.getItem('jwtToken');

  return isAuthenticated ? <Element /> : <Navigate to="/home" replace />;
};

export default PrivateRoute;
