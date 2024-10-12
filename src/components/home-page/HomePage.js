import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import RegisterForm from '../login/RegisterForm';
import LoginForm from '../login/LoginForm';
import backgroundImage from '../../assets/home_page.webp';

function HomePage() {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);

    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);

    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh', backgroundSize: 'cover' }}>
            <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
                <div className="bg-dark p-4 rounded text-center d-flex flex-column align-items-center">
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
            </div>
        </div>
    );
}

export default HomePage;