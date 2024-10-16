import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import UserControllerApi from '../../generated-api-client/src/api/UserControllerApi'; // Make sure this path is correct based on your project structure

function RegisterForm({ onClose }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [error, setError] = useState(null);

    const handleRegister = async (event) => {
        event.preventDefault();

        const api = new UserControllerApi();

        const registerUserCommand = {
            username: username,
            email: email,
            password: password,
            name: name,
            surname: surname
        };

        api.registerUser(registerUserCommand, (error, data, response) => {
            if (error) {
                console.error('Registration error:', error);
                setError('Registration failed: ' + error.message);
            } else {
                console.log('Registration successful:', data);
                onClose(); 
            }
        });
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
                <Form.Label>Imię</Form.Label>
                <Form.Control 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                    className="bg-secondary text-white" 
                    style={{ width: '95%' }} 
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Nazwisko</Form.Label>
                <Form.Control 
                    type="text" 
                    value={surname} 
                    onChange={(e) => setSurname(e.target.value)} 
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
            {error && <div className="text-danger">{error}</div>}
            <Button type="submit" variant="primary" className="w-100">Zarejestruj się</Button>
        </Form>
    );
}

export default RegisterForm;
