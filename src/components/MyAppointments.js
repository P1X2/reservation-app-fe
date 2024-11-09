import React, { useEffect, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Spinner,
  Alert,
  Modal,
  Form,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AppointmentControllerApi from '../generated-api-client/src/api/AppointmentControllerApi';
import ReviewControllerApi from '../generated-api-client/src/api/ReviewControllerApi';
import { jwtDecode } from 'jwt-decode';

function MyAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [reviewContent, setReviewContent] = useState('');
  const [rating, setRating] = useState(5);
  const navigate = useNavigate();

  const [clientId, setClientId] = useState(null);

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
        setLoading(false);
      }
    } else {
      setError('Brak tokenu uwierzytelniającego.');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (clientId) {
      fetchAppointments(clientId);
    }
  }, [clientId]);

  const fetchAppointments = (clientId) => {
    const api = new AppointmentControllerApi();
    api.getAppointmentsByUserId(
      clientId,
      { page: 0, pageSize: 10, sortBy: 'appointmentDate', sortDir: 'asc' },
      (error, data) => {
        if (error) {
          setError('Błąd podczas pobierania wizyt: ' + error.message);
          setLoading(false);
        } else {
          setAppointments(data.content);
          setLoading(false);
        }
      }
    );
  };

  const handleCreateAppointment = () => {
    navigate('/appointment');
  };

  const handleDeleteAppointment = (appointment) => {
    setSelectedAppointment(appointment);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    const api = new AppointmentControllerApi();
    api.deleteAppointment(selectedAppointment.appointmentId, (error) => {
      if (error) {
        setError('Błąd podczas usuwania wizyty: ' + error.message);
      } else {
        setAppointments(
          appointments.filter(
            (app) => app.appointmentId !== selectedAppointment.appointmentId
          )
        );
        setShowDeleteModal(false);
      }
    });
  };

  const handleAddReview = (appointment) => {
    setSelectedAppointment(appointment);
    setShowReviewModal(true);
  };

  const submitReview = () => {
    const api = new ReviewControllerApi();
    const reviewCommand = {
      reviewContent: reviewContent,
      rating: parseInt(rating, 10),
    };

    api.addNew(selectedAppointment.appointmentId, reviewCommand, (error) => {
      if (error) {
        setError('Błąd podczas dodawania recenzji: ' + error.message);
      } else {
        alert('Recenzja została dodana!');
        setShowReviewModal(false);
        setReviewContent('');
        setRating(5);
      }
    });
  };

  return (
    <Container fluid className="min-vh-100 py-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <div
            className="p-4 rounded"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', color: 'white' }}
          >
            <h2 className="mb-4 text-center">Moje Wizyty</h2>
            <div className="d-flex justify-content-end mb-3">
              <Button variant="primary" onClick={handleCreateAppointment}>
                Umów Nową Wizytę
              </Button>
            </div>
            {loading && (
              <div className="text-center">
                <Spinner animation="border" variant="light" />
              </div>
            )}
            {error && <Alert variant="danger">{error}</Alert>}
            {!loading && !error && appointments.length > 0 && (
              <Table striped bordered hover responsive variant="dark">
                <thead>
                  <tr>
                    <th>Usługa</th>
                    <th>Data</th>
                    <th>Pracownik</th>
                    <th>Akcja</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment) => (
                    <tr key={appointment.appointmentId}>
                      <td>{appointment.service.name}</td>
                      <td>
                        {new Date(appointment.appointmentDate).toLocaleString()}
                      </td>
                      <td>{appointment.employee.name}</td>
                      <td>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          className="me-2 mb-2 mb-md-0 text-white"
                          onClick={() => handleDeleteAppointment(appointment)}
                        >
                          Anuluj
                        </Button>
                        {new Date(appointment.appointmentDate) < new Date() && (
                          <Button
                            variant="outline-light"
                            size="sm"
                            onClick={() => handleAddReview(appointment)}
                          >
                            Dodaj Recenzję
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
            {!loading && !error && appointments.length === 0 && (
              <p className="text-center">Brak wizyt do wyświetlenia.</p>
            )}
          </div>
        </Col>
      </Row>

      <Modal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Potwierdzenie Anulowania</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Czy na pewno chcesz anulować wizytę na usługę:{' '}
          <strong>{selectedAppointment?.service.name}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Zamknij
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Anuluj Wizytę
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showReviewModal}
        onHide={() => setShowReviewModal(false)}
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Dodaj Recenzję</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Twoja Recenzja</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={reviewContent}
                onChange={(e) => setReviewContent(e.target.value)}
                placeholder="Napisz swoją recenzję tutaj..."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ocena</Form.Label>
              <Form.Select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option value={5}>5 - Bardzo dobrze</option>
                <option value={4}>4 - Dobrze</option>
                <option value={3}>3 - Średnio</option>
                <option value={2}>2 - Źle</option>
                <option value={1}>1 - Bardzo źle</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowReviewModal(false)}>
            Zamknij
          </Button>
          <Button variant="primary" onClick={submitReview}>
            Dodaj Recenzję
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default MyAppointments;