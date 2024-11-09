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

  const handleRegister = (event) => {
    event.preventDefault();
    const api = new UserControllerApi();

    const registerUserCommand = {
      username: username,
      password: password,
      email: email,
      name: name,
      surname: surname,
    };

    api.registerUser(registerUserCommand, (error) => {
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
    <Container fluid className="min-vh-100 py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div
            className="p-4 rounded"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', color: 'white' }}
          >
            <h2 className="mb-4 text-center">Dodaj Nowego Pracownika</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <Form onSubmit={handleRegister}>
              <Form.Group className="mb-3">
                <Form.Label>Nazwa Użytkownika</Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="Wprowadź nazwę użytkownika"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Hasło</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Wprowadź hasło"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Wprowadź adres email"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Imię</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Wprowadź imię"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Nazwisko</Form.Label>
                <Form.Control
                  type="text"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  required
                  placeholder="Wprowadź nazwisko"
                />
              </Form.Group>
              <Button type="submit" variant="primary" className="w-100">
                Dodaj Pracownika
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AddEmployeeForm;