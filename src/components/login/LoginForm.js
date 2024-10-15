import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import UserControllerApi from '../../generated-api-client/src/api/UserControllerApi';

function LoginForm({ onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // Function to handle login
  const handleLogin = async (event) => {
    event.preventDefault();
    console.log('Login attempt with:', username, password);

    // Set userId to 1 (hardcoded for this example)
    const userId = 1;

    // Log the API base URL
    console.log('API base URL:', process.env.REACT_APP_API_BASE_URL);

    const userApi = new UserControllerApi();

    // Fetch user by ID and log user data
    userApi.getById(userId, (error, data, response) => {
      if (error) {
        setError('Error fetching user data: ' + error.message);
        console.error('API Error:', error);
      } else {
        console.log('Fetched User Data:', data); // Log the fetched user data
      }
    });
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
      {error && <p className="text-danger">{error}</p>}
      <Button type="submit" variant="primary" className="w-100">
        Dalej
      </Button>
    </Form>
  );
}

export default LoginForm;
