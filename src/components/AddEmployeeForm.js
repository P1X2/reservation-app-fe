import React, { useState } from 'react';
import { Button, Form, Alert, Container, Row, Col } from 'react-bootstrap';
import UserControllerApi from '../generated-api-client/src/api/UserControllerApi';

function AddEmployeeForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleRegister = async (event) => {
        event.preventDefault();
        const api = new UserControllerApi();

        const registerUserCommand = {
            username: username,
            password: password,
            email: email,
            name: name,
            surname: surname
        };

        api.registerUser(registerUserCommand, (error, data, response) => {
            if (error) {
                setError('Błąd podczas dodawania pracownika: ' + error.message);
                setSuccess(null);
            } else {
                setSuccess('Pracownik został pomyślnie dodany.');
                setError(null);
                setUsername('');
                setPassword('');
                setEmail('');
                setName('');
                setSurname('');
            }
        });
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col md={6} className="offset-md-3">
                    <h2>Dodaj nowego pracownika</h2>
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nazwa użytkownika</Form.Label>
                            <Form.Control
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Hasło</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Imię</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Nazwisko</Form.Label>
                            <Form.Control
                                type="text"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                                required
                            />
                        </Form.Group>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {success && <Alert variant="success">{success}</Alert>}
                        <Button type="submit" variant="primary">
                            Dodaj pracownika
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default AddEmployeeForm;
