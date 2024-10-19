import React, { useState, useEffect } from 'react';
import { Button, Form, Container, Row, Col, Modal, ListGroup } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import AppointmentControllerApi from '../generated-api-client/src/api/AppointmentControllerApi';
import ServiceControllerApi from '../generated-api-client/src/api/ServiceControllerApi';

function CreateAppointmentForm() {
    const location = useLocation();
    const preselectedService = location.state?.selectedService || null;

    const [clientId, setClientId] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [serviceId, setServiceId] = useState(preselectedService?.serviceId || null);  
    const [appointmentDate, setAppointmentDate] = useState('');
    const [services, setServices] = useState([]);
    const [selectedServiceName, setSelectedServiceName] = useState(preselectedService?.name || ''); 
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!preselectedService) {
            fetchServices();
        }
    }, []);

    const fetchServices = () => {
        const api = new ServiceControllerApi();
        api.getAllServices({page: 0, pageSize: 10}, (error, data, response) => {
            if (error) {
                console.error('Error fetching services:', error);
                setError('Failed to fetch services');
            } else {
                setServices(data.content);
            }
        });
    };

    const handleServiceSelect = (service) => {
        setServiceId(service.serviceId);
        setSelectedServiceName(service.name); 
        setShowModal(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const api = new AppointmentControllerApi();
        const command = {
            clientId: parseInt(clientId, 10),
            employeeId: parseInt(employeeId, 10),
            serviceId: parseInt(serviceId, 10),
            appointmentDate: new Date(appointmentDate)
        };

        api.createNewAppointment(command, (error, data, response) => {
            if (error) {
                console.error('Failed to create appointment:', error);
                setError('Failed to create appointment: ' + error.message);
            } else {
                console.log('Appointment created successfully:', response);
                alert('Appointment created successfully!');
            }
        });
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col md={6} className="offset-md-3">
                    <h2>Utwórz wizytę</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>ID klienta</Form.Label>
                            <Form.Control
                                type="number"
                                value={clientId}
                                onChange={(e) => setClientId(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>ID pracownika</Form.Label>
                            <Form.Control
                                type="number"
                                value={employeeId}
                                onChange={(e) => setEmployeeId(e.target.value)}
                                required
                            />
                        </Form.Group>
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
                            <Form.Label>Data wizyty</Form.Label>
                            <Form.Control
                                type="datetime-local"
                                value={appointmentDate}
                                onChange={(e) => setAppointmentDate(e.target.value)}
                                required
                            />
                        </Form.Group>
                        {error && <p className="text-danger">{error}</p>}
                        <Button variant="primary" type="submit">
                            Utwórz wizytę
                        </Button>
                    </Form>

                    <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>Wybierz usługę</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ListGroup>
                                {services.map(service => (
                                    <ListGroup.Item key={service.serviceId} action onClick={() => handleServiceSelect(service)}>
                                        {service.name} - {service.description}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Modal.Body>
                    </Modal>
                </Col>
            </Row>
        </Container>
    );
}

export default CreateAppointmentForm;
