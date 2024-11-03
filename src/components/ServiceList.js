import React, { useEffect, useState } from 'react';
import { Table, Spinner, Alert, Button, Modal, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ServiceControllerApi from '../generated-api-client/src/api/ServiceControllerApi';
import ReviewControllerApi from '../generated-api-client/src/api/ReviewControllerApi';

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

    useEffect(() => {
        const api = new ServiceControllerApi();
        api.getAllServices({ page: 0, pageSize: 10, sortBy: 'createdAt', sortDir: 'desc' }, (error, data) => {
            if (error) {
                setError('Błąd podczas pobierania usług: ' + error.message);
                setLoading(false);
            } else {
                setServices(data.content);
                setLoading(false);
            }
        });
    }, []);

    const handleCreateAppointment = (service) => {
        navigate('/appointment', { state: { selectedService: service } });
    };

    const handleShowReviews = (service) => {
        setSelectedService(service);
        setLoadingReviews(true);
        setShowReviewModal(true);

        const reviewApi = new ReviewControllerApi();
        reviewApi.getByService(service.serviceId, { page: 0, pageSize: 10, sortBy: 'created_at', sortDir: 'desc' }, (error, data) => {
            if (error) {
                setErrorReviews('Błąd podczas pobierania recenzji: ' + error.message);
                setLoadingReviews(false);
            } else {
                setReviews(data.content);
                setLoadingReviews(false);
            }
        });
    };

    return (
        <div className="bg-dark p-4 rounded text-white">
            <h2 className="mb-4">Dostępne usługi</h2>
            {loading && <Spinner animation="border" variant="primary" />}
            {error && <Alert variant="danger">{error}</Alert>}
            {!loading && !error && (
                <Table striped bordered hover variant="dark">
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
                                    <Button 
                                        variant="primary" 
                                        onClick={() => handleCreateAppointment(service)}
                                    >
                                        Zarezerwuj
                                    </Button>
                                    <Button 
                                        variant="secondary" 
                                        className="ms-2"
                                        onClick={() => handleShowReviews(service)}
                                    >
                                        Zobacz komentarze
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}

            <Modal show={showReviewModal} onHide={() => setShowReviewModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Komentarze dla usługi: {selectedService?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {loadingReviews ? (
                        <Spinner animation="border" variant="primary" />
                    ) : errorReviews ? (
                        <Alert variant="danger">{errorReviews}</Alert>
                    ) : reviews.length > 0 ? (
                        <ListGroup>
                            {reviews.map((review) => (
                                <ListGroup.Item key={review.reviewId}>
                                    <strong>Ocena: {review.rating}/5</strong>
                                    <p>{review.reviewContent}</p>
                                    <small>{new Date(review.createdAt).toLocaleString()}</small>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    ) : (
                        <p>Brak recenzji dla tej usługi.</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowReviewModal(false)}>
                        Zamknij
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ServiceList;
