import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function RegisterForm({ onClose }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
        console.log('Register attempt with:', email, username, password);
        onClose();
    };

    return (
        <Form onSubmit={handleRegister} className="bg-dark p-3 rounded text-white">
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    className="bg-secondary text-white" 
                    style={{ width: '95%' }} 
                />
            </Form.Group>
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

export default RegisterForm;
