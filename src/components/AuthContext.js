import React, { createContext, useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('jwtToken');
    if (storedToken) {
      try {
        const decodedToken = jwtDecode(storedToken);
        const currentTime = Date.now() / 1000; 

        if (decodedToken.exp < currentTime) {
          localStorage.removeItem('jwtToken');
          setIsAuthenticated(false);
          setToken(null);
        } else {
          setIsAuthenticated(true);
          setToken(storedToken);
        }
      } catch (e) {
        localStorage.removeItem('jwtToken');
        setIsAuthenticated(false);
        setToken(null);
      }
    } else {
      setIsAuthenticated(false);
      setToken(null);
    }
  }, []);

  const login = (newToken) => {
    localStorage.setItem('jwtToken', newToken);
    setIsAuthenticated(true);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem('jwtToken');
    setIsAuthenticated(false);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
