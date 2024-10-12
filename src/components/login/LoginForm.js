import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

function LoginForm({ onClose }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        console.log('Login attempt with:', username, password);
        onClose();
    };

    return (
        <Form onSubmit={handleLogin} className="bg-dark p-3 rounded text-white">
            <Form.Group className="mb-3">
                <Form.Label>Nazwa użytkownika</Form.Label>
                <Form.Control 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                    className="bg-secondary text-white" 
                    style={{ width: '95%' }} 
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Hasło</Form.Label>
                <Form.Control 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                    className="bg-secondary text-white" 
                    style={{ width: '95%' }} 
                />
            </Form.Group>
            <Button type="submit" variant="primary" className="w-100">Dalej</Button>
        </Form>
    );
}

export default LoginForm;