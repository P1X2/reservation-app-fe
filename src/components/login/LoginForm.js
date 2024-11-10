import React, { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AuthControllerApi from '../../generated-api-client/src/api/AuthControllerApi';
import { AuthContext } from '../AuthContext';

function LoginForm({ onClose }) {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const userApi = new AuthControllerApi();

    try {
      const loginUserCommand = { username, password };
      userApi.login(loginUserCommand, (error, data, response) => {
        if (error) {
          setError('Login failed: ' + error.message);
          console.error('Login Error:', error);
        } else {
          const jwtToken = response.text;
          login(jwtToken);
          localStorage.setItem('jwtToken', jwtToken);
          navigate('/home');
        }
      });
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred during login');
    }
  };

  return (
    <Form onSubmit={handleLogin} className="bg-dark p-3 rounded text-white">
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
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
        <Form.Label>Password</Form.Label>
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
        Login
      </Button>
    </Form>
  );
}

export default LoginForm;