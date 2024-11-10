import React, { useContext } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import backgroundImage from '../../assets/home_page.webp';
import { AuthContext } from '../AuthContext';
import {jwtDecode} from 'jwt-decode';
import UserProfile from '../UserProfile';

function MainLayout() {
  const { isAuthenticated, token, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  let roles = [];

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      roles = decodedToken.roles || [];
    } catch (e) {
      console.log(e)
    }
  }

  const isPresident = roles.includes('PRESIDENT');
  const isEmployee = roles.includes('EMPLOYEE');
  const isClient = roles.includes('CLIENT');

  const handleLogout = () => {
    logout();
    navigate('/home');
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        minHeight: '100vh',
        backgroundSize: 'cover',
      }}
    >
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/home">Moja Aplikacja</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {isAuthenticated ? (
            <Nav className="mr-auto">
              {(isClient) && (
                <Nav.Link as={Link} to="/appointment">Utwórz Rezerwację</Nav.Link>
              )}

              <Nav.Link as={Link} to="/services">Usługi</Nav.Link>
              {(isClient) && (
                <Nav.Link as={Link} to="/my-appointments">Moje Rezerwacje</Nav.Link>
              )}

              {(isEmployee || isPresident) && (
                <Nav.Link as={Link} to="/add-service">Dodaj Usługę</Nav.Link>
              )}
              {isPresident && (
                <Nav.Link as={Link} to="/manager">Dodaj Pracownika</Nav.Link>
              )}
              {isEmployee && (
                <Nav.Link as={Link} to="/employee-appointments">Wizyty Klientów</Nav.Link>
              )}
              <Nav.Link as={Link} to="/profile">Mój Profil</Nav.Link>
              <Nav.Link onClick={handleLogout}>Wyloguj się</Nav.Link>
            </Nav>
          ) : (
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/home">Strona Główna</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>

      <div className="container py-4">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;