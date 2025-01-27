import React, { useEffect, useState, useContext } from 'react';
import {
  Container,
  Row,
  Col,
  Table,
  Spinner,
  Alert,
  Button,
  Modal,
  Badge,
  ListGroup,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ServiceControllerApi from '../generated-api-client/src/api/ServiceControllerApi';
import ReviewControllerApi from '../generated-api-client/src/api/ReviewControllerApi';
import UserControllerApi from '../generated-api-client/src/api/UserControllerApi';
import { AuthContext } from './AuthContext';
import {jwtDecode} from 'jwt-decode';

function ServiceList() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loadingReviews, setLoadingReviews] = useState(false);
  const [errorReviews, setErrorReviews] = useState(null);
  const navigate = useNavigate();

  const { token } = useContext(AuthContext);
  let roles = [];

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      roles = decodedToken.roles || [];
    } catch (e) {
      console.log(e);
    }
  }

  const isClient = roles.includes('CLIENT');
  const isEmployee = roles.includes('EMPLOYEE');
  const isPresident = roles.includes('PRESIDENT');

  useEffect(() => {
    const api = new ServiceControllerApi();
    api.getAllServices(
      { page: 0, pageSize: 10, sortBy: 'createdAt', sortDir: 'desc' },
      (error, data) => {
        if (error) {
          setError('Błąd podczas pobierania usług: ' + error.message);
          setLoading(false);
        } else {
          setServices(data.content);
          setLoading(false);
        }
      }
    );
  }, []);

  const handleCreateAppointment = (service) => {
    navigate('/appointment', { state: { selectedService: service } });
  };

  const handleShowReviews = (service) => {
    setSelectedService(service);
    setLoadingReviews(true);
    setShowReviewModal(true);

    const reviewApi = new ReviewControllerApi();
    reviewApi.getByService(
      service.serviceId,
      { page: 0, pageSize: 10, sortBy: 'created_at', sortDir: 'desc' },
      (error, data) => {
        if (error) {
          setErrorReviews('Błąd podczas pobierania recenzji: ' + error.message);
          setLoadingReviews(false);
        } else {
          setReviews(data.content);
          setLoadingReviews(false);
        }
      }
    );
  };

  const handleDeleteReview = (reviewId) => {
    const reviewApi = new ReviewControllerApi();
    reviewApi.delete1(reviewId, (error) => {
      if (error) {
        setErrorReviews('Błąd podczas usuwania recenzji: ' + error.message);
      } else {
        setReviews(reviews.filter((review) => review.reviewId !== reviewId));
      }
    });
  };

  const handleBanUser = (userId) => {
    const userApi = new UserControllerApi();
    const command = {
      userId: userId,
      userStatus: 'SUSPENDED',
    };
    userApi.patchUserStatus(command, (error) => {
      if (error) {
        setErrorReviews('Błąd podczas banowania użytkownika: ' + error.message);
      } else {
        alert('Użytkownik został zbanowany.');
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
            <h2 className="mb-4 text-center">Dostępne Usługi</h2>
            {loading && (
              <div className="text-center">
                <Spinner animation="border" variant="light" />
              </div>
            )}
            {error && <Alert variant="danger">{error}</Alert>}
            {!loading && !error && (
              <Table striped bordered hover responsive variant="dark">
                <thead>
                  <tr>
                    <th>Nazwa</th>
                    <th>Opis</th>
                    <th>Czas trwania (min)</th>
                    <th>Cena (PLN)</th>
                    <th>Akcja</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service) => (
                    <tr key={service.serviceId}>
                      <td>{service.name}</td>
                      <td>{service.description}</td>
                      <td>{service.durationMinutes}</td>
                      <td>{service.price}</td>
                      <td>
                        {isClient && (
                          <Button
                            variant="primary"
                            size="sm"
                            className="me-2 mb-2"
                            onClick={() => handleCreateAppointment(service)}
                          >
                            Zarezerwuj
                          </Button>
                        )}
                        <Button
                          variant="outline-light"
                          size="sm"
                          onClick={() => handleShowReviews(service)}
                        >
                          Komentarze
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
            {!loading && !error && services.length === 0 && (
              <p className="text-center">Brak usług do wyświetlenia.</p>
            )}
          </div>
        </Col>
      </Row>

      <Modal
        show={showReviewModal}
        onHide={() => setShowReviewModal(false)}
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Komentarze dla usługi: {selectedService?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loadingReviews ? (
            <div className="text-center">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : errorReviews ? (
            <Alert variant="danger">{errorReviews}</Alert>
          ) : reviews.length > 0 ? (
            <ListGroup variant="flush">
              {reviews.map((review) => (
                <ListGroup.Item key={review.reviewId}>
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <div className="mb-1">
                        <strong>Użytkownik: {review.appointment.client.username}</strong>
                      </div>
                      <div className="mb-2">
                        <strong>Ocena: {review.rating}/5</strong>
                      </div>
                      <p className="mb-1">{review.reviewContent}</p>
                      <small>
                        {new Date(review.createdAt).toLocaleString()} -{' '}
                        {review.userName} {review.userSurname}
                      </small>
                    </div>
                    {(isEmployee || isPresident) && (
                      <div className="d-flex flex-column">
                        <Button
                          variant="outline-danger"
                          size="sm"
                          className="mb-2"
                          onClick={() => handleDeleteReview(review.reviewId)}
                        >
                          Usuń
                        </Button>
                        <Button
                          variant="outline-warning"
                          size="sm"
                          onClick={() => handleBanUser(review.appointment.client.userId)}
                        >
                          Zbanuj Użytkownika
                        </Button>
                      </div>
                    )}
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <p className="text-center">Brak recenzji dla tej usługi.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowReviewModal(false)}>
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ServiceList;
