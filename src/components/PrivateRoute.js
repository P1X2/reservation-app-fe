import React from 'react';
import { Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

function PrivateRoute({ element: Component }) {
  const token = localStorage.getItem('jwtToken');

  if (!token) {
    return <Navigate to="/home" replace />;
  }

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decodedToken.exp < currentTime) {
      localStorage.removeItem('jwtToken');
      return <Navigate to="/home" replace />;
    }
  } catch (e) {
    localStorage.removeItem('jwtToken');
    return <Navigate to="/home" replace />;
  }

  return <Component />;
}

export default PrivateRoute;