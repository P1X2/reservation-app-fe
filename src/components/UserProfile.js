import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Form, Button, Alert, Tabs, Tab } from 'react-bootstrap';
import UserControllerApi from '../generated-api-client/src/api/UserControllerApi';
import { AuthContext } from './AuthContext';
import {jwtDecode} from 'jwt-decode';

function UserProfile() {
  const { token } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [roles, setRoles] = useState([]);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [editSuccess, setEditSuccess] = useState(null);
  const [editError, setEditError] = useState(null);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const [userId, setUserId] = useState(null);
  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUserId(decodedToken.jti);
        setRoles(decodedToken.roles || []);
      } catch (e) {
        console.log(e);
      }
    }
  }, [token]);

  useEffect(() => {
    if (userId) {
      const api = new UserControllerApi();
      api.getById(userId, (error, data) => {
        if (error) {
          setError('Błąd podczas pobierania danych użytkownika: ' + error.message);
        } else {
          setUserData(data);
          setName(data.name);
          setSurname(data.surname);
        }
      });
    }
  }, [userId]);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const api = new UserControllerApi();
    const command = {
      userId: parseInt(userId, 10),
      name,
      surname,
    };
    api.patchUser(command, (error) => {
      if (error) {
        setEditError('Błąd podczas aktualizacji danych: ' + error.message);
        setEditSuccess(null);
      } else {
        setEditSuccess('Dane zostały zaktualizowane.');
        setEditError(null);
        setUserData({ ...userData, name, surname });
      }
    });
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    const api = new UserControllerApi();
    const command = {
      userId: parseInt(userId, 10),
      oldPassword: currentPassword,
      newPassword,
    };
    api.changePassword(command, (error) => {
      if (error) {
        setPasswordError('Błąd podczas zmiany hasła: ' + error.message);
        setPasswordSuccess(null);
      } else {
        setPasswordSuccess('Hasło zostało zmienione.');
        setPasswordError(null);
        setCurrentPassword('');
        setNewPassword('');
      }
    });
  };

  return (
    <Container fluid className="min-vh-100 py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <div
            className="p-5 rounded"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white' }}
          >
            <h2 className="mb-4 text-center">Profil Użytkownika</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {userData && (
              <Tabs
                activeKey={activeTab}
                onSelect={(k) => setActiveTab(k)}
                className="mb-3"
              >
                <Tab eventKey="profile" title="Dane Profilu">
                  <p>
                    <strong>Imię:</strong> {userData.name}
                  </p>
                  <p>
                    <strong>Nazwisko:</strong> {userData.surname}
                  </p>
                  <p>
                    <strong>Email:</strong> {userData.email}
                  </p>
                  <p>
                    <strong>Rola:</strong> {roles.join(', ')}
                  </p>
                </Tab>
                <Tab eventKey="edit" title="Edytuj Dane">
                  {editError && <Alert variant="danger">{editError}</Alert>}
                  {editSuccess && <Alert variant="success">{editSuccess}</Alert>}
                  <Form onSubmit={handleEditSubmit}>
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
                    <Button type="submit" variant="primary">
                      Zapisz Zmiany
                    </Button>
                  </Form>
                </Tab>
                <Tab eventKey="password" title="Zmień Hasło">
                  {passwordError && <Alert variant="danger">{passwordError}</Alert>}
                  {passwordSuccess && <Alert variant="success">{passwordSuccess}</Alert>}
                  <Form onSubmit={handlePasswordChange}>
                    <Form.Group className="mb-3">
                      <Form.Label>Aktualne Hasło</Form.Label>
                      <Form.Control
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Nowe Hasło</Form.Label>
                      <Form.Control
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Button type="submit" variant="primary">
                      Zmień Hasło
                    </Button>
                  </Form>
                </Tab>
              </Tabs>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default UserProfile;
