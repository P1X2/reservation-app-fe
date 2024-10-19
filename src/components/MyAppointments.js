import React, { useEffect, useState } from 'react';
import { Table, Button, Spinner, Alert, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AppointmentControllerApi from '../generated-api-client/src/api/AppointmentControllerApi';

function MyAppointments() {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const navigate = useNavigate();

    const clientId = 1;  // @TODO Mock until jwt implemented

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = () => {
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
        setShowModal(true);
    };

    const confirmDelete = () => {
        const api = new AppointmentControllerApi();
        api.deleteAppointment(selectedAppointment.appointmentId, (error) => {
            if (error) {
                setError('Błąd podczas usuwania wizyty: ' + error.message);
            } else {
                setAppointments(appointments.filter(app => app.appointmentId !== selectedAppointment.appointmentId));
                setShowModal(false);
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
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
            {!loading && !error && appointments.length === 0 && (
                <p>Brak wizyt do wyświetlenia</p>
            )}

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Potwierdzenie usunięcia</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Czy na pewno chcesz odwołać wizytę na usługę: {selectedAppointment?.service.name}?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Anuluj
                    </Button>
                    <Button variant="danger" onClick={confirmDelete}>
                        Odwołaj wizytę
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default MyAppointments;
