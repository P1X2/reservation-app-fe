import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import backgroundImage from '../../assets/home_page.webp';

function MainLayout() {
  const isLoggedIn = !!localStorage.getItem('jwtToken');

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
          {isLoggedIn ? (
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/appointment">Utwórz Rezerwację</Nav.Link>
              <Nav.Link as={Link} to="/services">Usługi</Nav.Link>
              <Nav.Link as={Link} to="/my-appointments">Moje Rezerwacje</Nav.Link>
              <Nav.Link as={Link} to="/manager">Dodaj Pracownika</Nav.Link>
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
