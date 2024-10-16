import React, { useState, useEffect } from 'react';
import { Button, Form, Container, Row, Col, Modal, ListGroup } from 'react-bootstrap';
import AppointmentControllerApi from '../generated-api-client/src/api/AppointmentControllerApi';
import ServiceControllerApi from '../generated-api-client/src/api/ServiceControllerApi';

function CreateAppointmentForm() {
    const [clientId, setClientId] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [serviceId, setServiceId] = useState(null);  
    const [appointmentDate, setAppointmentDate] = useState('');
    const [services, setServices] = useState([]);
    const [selectedServiceName, setSelectedServiceName] = useState(''); 
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchServices();
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
            serviceId: parseInt(serviceId, 10), // Ensure serviceId is converted to an integer
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
                    <h2>Create Appointment</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Client ID</Form.Label>
                            <Form.Control
                                type="number"
                                value={clientId}
                                onChange={(e) => setClientId(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Employee ID</Form.Label>
                            <Form.Control
                                type="number"  //@TODO Probably should be automatically assigned.
                                value={employeeId}
                                onChange={(e) => setEmployeeId(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Service ID</Form.Label>
                            <Form.Control
                                type="text"
                                value={selectedServiceName} 
                                placeholder="Click to select a service"
                                onClick={() => setShowModal(true)}
                                readOnly
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Appointment Date</Form.Label>
                            <Form.Control
                                type="datetime-local"
                                value={appointmentDate}
                                onChange={(e) => setAppointmentDate(e.target.value)}
                                required
                            />
                        </Form.Group>
                        {error && <p className="text-danger">{error}</p>}
                        <Button variant="primary" type="submit">
                            Create Appointment
                        </Button>
                    </Form>

                    <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>Select a Service</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ListGroup>
                                {services.map(service => (
                                    <ListGroup.Item key={service.id} action onClick={() => handleServiceSelect(service)}>
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
