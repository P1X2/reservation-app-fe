import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import RegisterForm from '../login/RegisterForm';
import LoginForm from '../login/LoginForm';

function HomePage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  const isLoggedIn = !!localStorage.getItem('jwtToken');

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      {!isLoggedIn && (
        <>
          <div className="bg-dark p-4 rounded text-center d-flex flex-column align-items-center mt-5">
            <h1 className="mb-4 text-white">Dołącz już dziś</h1>
            <Button variant="primary" onClick={handleShowLogin} className="mb-2 btn-lg rounded-pill w-100">
              Zaloguj się
            </Button>
            <Button variant="secondary" onClick={handleShowRegister} className="btn-lg rounded-pill w-100">
              Utwórz konto
            </Button>
          </div>

          <Modal show={showLogin} onHide={handleCloseLogin} centered contentClassName="bg-dark text-white">
            <Modal.Header closeButton className="border-bottom border-secondary">
              <Modal.Title>Logowanie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <LoginForm onClose={handleCloseLogin} />
            </Modal.Body>
          </Modal>

          <Modal show={showRegister} onHide={handleCloseRegister} centered contentClassName="bg-dark text-white">
            <Modal.Header closeButton className="border-bottom border-secondary">
              <Modal.Title>Rejestracja</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <RegisterForm onClose={handleCloseRegister} />
            </Modal.Body>
          </Modal>
        </>
      )}
      {isLoggedIn && (
        <div className="text-center mt-5">
          <h1 className="text-white">Witaj z powrotem!</h1>
          <p className="text-white">Skorzystaj z menu, aby poruszać się po aplikacji.</p>
        </div>
      )}
    </div>
  );
}

export default HomePage;
