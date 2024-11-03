import React, { useEffect, useState } from 'react';
import { Table, Button, Spinner, Alert, Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'
import AppointmentControllerApi from '../generated-api-client/src/api/AppointmentControllerApi';
import ReviewControllerApi from '../generated-api-client/src/api/ReviewControllerApi';

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
        api.getAppointmentsByUserId(clientId, { page: 0, pageSize: 10, sortBy: 'appointmentDate', sortDir: 'asc' }, (error, data) => {
            if (error) {
                setError('Błąd podczas pobierania wizyt: ' + error.message);
                setLoading(false);
            } else {
                setAppointments(data.content);
                setLoading(false);
            }
        });
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
                setAppointments(appointments.filter(app => app.appointmentId !== selectedAppointment.appointmentId));
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
            rating: parseInt(rating)
        };

        api.addNew(selectedAppointment.appointmentId, reviewCommand, (error) => {
            if (error) {
                setError('Błąd podczas dodawania recenzji: ' + error.message);
            } else {
                alert('Recenzja została dodana!');
                setShowReviewModal(false);
            }
        });
    };

    return (
        <div className="bg-dark p-4 rounded text-white">
            <h2 className="mb-4">Moje Wizyty</h2>
            <Button variant="primary" className="mb-3" onClick={handleCreateAppointment}>
                Dodaj nową wizytę
            </Button>
            {loading && <Spinner animation="border" variant="primary" />}
            {error && <Alert variant="danger">{error}</Alert>}
            {!loading && !error && appointments.length > 0 && (
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Usługa</th>
                            <th>Data wizyty</th>
                            <th>Pracownik</th>
                            <th>Akcja</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment) => (
                            <tr key={appointment.appointmentId}>
                                <td>{appointment.service.name}</td>
                                <td>{new Date(appointment.appointmentDate).toLocaleString()}</td>
                                <td>{appointment.employee.name}</td>
                                <td>
                                    <Button 
                                        variant="danger" 
                                        onClick={() => handleDeleteAppointment(appointment)}
                                    >
                                        X
                                    </Button>
                                    {new Date(appointment.appointmentDate) < new Date() && (
                                        <Button 
                                            variant="secondary" 
                                            className="ms-2"
                                            onClick={() => handleAddReview(appointment)}
                                        >
                                            Dodaj komentarz
                                        </Button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
            {!loading && !error && appointments.length === 0 && (
                <p>Brak wizyt do wyświetlenia</p>
            )}

            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Potwierdzenie usunięcia</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Czy na pewno chcesz odwołać wizytę na usługę: {selectedAppointment?.service.name}?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                        Anuluj
                    </Button>
                    <Button variant="danger" onClick={confirmDelete}>
                        Odwołaj wizytę
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showReviewModal} onHide={() => setShowReviewModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Dodaj komentarz do wizyty</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Twoja recenzja</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                value={reviewContent}
                                onChange={(e) => setReviewContent(e.target.value)} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Ocena</Form.Label>
                            <Form.Control 
                                as="select"
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                            >
                                <option value={1}>1 - Bardzo źle</option>
                                <option value={2}>2 - Źle</option>
                                <option value={3}>3 - Średnio</option>
                                <option value={4}>4 - Dobrze</option>
                                <option value={5}>5 - Bardzo dobrze</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowReviewModal(false)}>
                        Anuluj
                    </Button>
                    <Button variant="primary" onClick={submitReview}>
                        Dodaj recenzję
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default MyAppointments;
