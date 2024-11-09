import React, { useState, useEffect } from 'react';
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Modal,
  ListGroup,
  Alert,
  Spinner,
} from 'react-bootstrap';
import { jwtDecode } from 'jwt-decode';
import { useLocation, useNavigate } from 'react-router-dom';
import AppointmentControllerApi from '../generated-api-client/src/api/AppointmentControllerApi';
import ServiceControllerApi from '../generated-api-client/src/api/ServiceControllerApi';

function CreateAppointmentForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const preselectedService = location.state?.selectedService || null;

  const [clientId, setClientId] = useState('');
  const [serviceId, setServiceId] = useState(preselectedService?.serviceId || null);
  const [appointmentDate, setAppointmentDate] = useState('');
  const [services, setServices] = useState([]);
  const [selectedServiceName, setSelectedServiceName] = useState(
    preselectedService?.name || ''
  );
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');
  const [loadingServices, setLoadingServices] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const id = decodedToken.jti;
        setClientId(id);
      } catch (e) {
        console.error('Nie udało się zdekodować tokenu', e);
        setError('Nie udało się zdekodować tokenu.');
      }
    } else {
      setError('Brak tokenu uwierzytelniającego.');
    }
  }, []);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = () => {
    const api = new ServiceControllerApi();
    api.getAllServices(
      { page: 0, pageSize: 10, sortBy: 'createdAt', sortDir: 'desc' },
      (error, data) => {
        if (error) {
          console.error('Błąd podczas pobierania usług:', error);
          setError('Nie udało się pobrać listy usług.');
          setLoadingServices(false);
        } else {
          setServices(data.content);
          setLoadingServices(false);
        }
      }
    );
  };

  const handleServiceSelect = (service) => {
    setServiceId(service.serviceId);
    setSelectedServiceName(service.name);
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const api = new AppointmentControllerApi();
    const command = {
      clientId: parseInt(clientId, 10),
      employeeId: null, // Wysyłamy puste ID pracownika
      serviceId: parseInt(serviceId, 10),
      appointmentDate: new Date(appointmentDate),
    };

    api.createNewAppointment(command, (error) => {
      if (error) {
        console.error('Nie udało się utworzyć wizyty:', error);
        setError('Nie udało się utworzyć wizyty: ' + error.message);
      } else {
        alert('Wizyta została pomyślnie utworzona!');
        navigate('/my-appointments');
      }
    });
  };

  // Funkcja do ustawienia minimalnej daty (dzisiejsza data i czas)
  const getMinDateTimeLocal = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return now.toISOString().slice(0, 16);
  };

  return (
    <Container fluid className="min-vh-100 py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div
            className="p-4 rounded"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', color: 'white' }}
          >
            <h2 className="mb-4 text-center">Utwórz Wizytę</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Usługa</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedServiceName}
                  placeholder="Kliknij, aby wybrać usługę"
                  onClick={() => setShowModal(true)}
                  readOnly
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Data Wizyty</Form.Label>
                <Form.Control
                  type="datetime-local"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                  required
                  min={getMinDateTimeLocal()}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Utwórz Wizytę
              </Button>
            </Form>
          </div>
        </Col>
      </Row>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Wybierz Usługę</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loadingServices ? (
            <div className="text-center">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : services.length > 0 ? (
            <ListGroup>
              {services.map((service) => (
                <ListGroup.Item
                  key={service.serviceId}
                  action
                  onClick={() => handleServiceSelect(service)}
                >
                  <strong>{service.name}</strong> - {service.description}
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <p>Brak dostępnych usług.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default CreateAppointmentForm;
