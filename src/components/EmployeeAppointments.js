import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Table,
  Alert,
  Spinner,
  Modal,
  Badge,
  ListGroup,
} from 'react-bootstrap';
import UserControllerApi from '../generated-api-client/src/api/UserControllerApi';
import AppointmentControllerApi from '../generated-api-client/src/api/AppointmentControllerApi';

function EmployeeAppointments() {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);
  const [loadingClients, setLoadingClients] = useState(false);
  const [loadingAppointments, setLoadingAppointments] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const statusMap = {
    PENDING_PAYMENT: 'Oczekujące na płatność',
    DONE_PAYMENT: 'Płatność zakończona',
    APPOINTMENT_CONFIRMED: 'Rezerwacja potwierdzona',
    COMPLETED: 'Zakończona',
    CANCELLED: 'Anulowana',
  };

  const mapStatusToPolish = (status) => {
    return statusMap[status] || status;
  };

  const getStatusVariant = (status) => {
    switch (status) {
      case 'PENDING_PAYMENT':
        return 'warning';
      case 'DONE_PAYMENT':
        return 'success';
      case 'APPOINTMENT_CONFIRMED':
        return 'info';
      case 'COMPLETED':
        return 'secondary';
      case 'CANCELLED':
        return 'danger';
      default:
        return 'light';
    }
  };

  const fetchClients = () => {
    setLoadingClients(true);
    setError(null);
    const userApi = new UserControllerApi();
    userApi.getAllUsers((error, data) => {
      if (error) {
        setError('Błąd podczas pobierania listy klientów: ' + error.message);
        setLoadingClients(false);
      } else {
        setClients(data);
        setLoadingClients(false);
      }
    });
  };

  const fetchAppointments = (clientId) => {
    setLoadingAppointments(true);
    setError(null);
    const api = new AppointmentControllerApi();
    api.getAppointmentsByUserId(
      clientId,
      { page: 0, pageSize: 10, sortBy: 'appointmentDate', sortDir: 'asc' },
      (error, data) => {
        if (error) {
          setError('Błąd podczas pobierania wizyt: ' + error.message);
          setLoadingAppointments(false);
        } else {
          setAppointments(data.content);
          setLoadingAppointments(false);
        }
      }
    );
  };

  const handleClientSelect = (client) => {
    setSelectedClient(client);
    fetchAppointments(client.id);
  };

  const handleCancelClick = (appointment) => {
    setSelectedAppointment(appointment);
    setShowCancelModal(true);
  };

  const confirmCancel = () => {
    const api = new AppointmentControllerApi();
    api.updateAppointmentStatus(selectedAppointment.appointmentId, "CANCELLED", (error) => {
      if (error) {
        setError('Błąd podczas odwoływania wizyty: ' + error.message);
      } else {
        setAppointments(
          appointments.map((app) =>
            app.appointmentId === selectedAppointment.appointmentId
              ? { ...app, status: 'CANCELLED' }
              : app
          )
        );
        setShowCancelModal(false);
        setSelectedAppointment(null);
      }
    });
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <Container fluid className="min-vh-100 py-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <div
            className="p-5 rounded"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white' }}
          >
            <h2 className="mb-4 text-center">Wizyty Klientów</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {loadingClients && (
              <div className="text-center">
                <Spinner animation="border" variant="light" />
              </div>
            )}
            {!loadingClients && clients.length > 0 && (
              <ListGroup>
                {clients.map((client) => (
                  <ListGroup.Item
                    key={client.id}
                    action
                    onClick={() => handleClientSelect(client)}
                  >
                    {client.name} {client.surname}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
            {!loadingClients && clients.length === 0 && (
              <p className="text-center">Brak dostępnych klientów.</p>
            )}
            {selectedClient && (
              <>
                <h4 className="mt-4">
                  Wizyty klienta: {selectedClient.name} {selectedClient.surname}
                </h4>
                {loadingAppointments && (
                  <div className="text-center">
                    <Spinner animation="border" variant="light" />
                  </div>
                )}
                {!loadingAppointments && appointments.length > 0 && (
                  <Table striped bordered hover responsive variant="dark" className="mt-3">
                    <thead>
                      <tr>
                        <th>Usługa</th>
                        <th>Data</th>
                        <th>Pracownik</th>
                        <th>Status</th>
                        <th>Akcje</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.map((appointment) => (
                        <tr key={appointment.appointmentId}>
                          <td>{appointment.service.name}</td>
                          <td>{new Date(appointment.appointmentDate).toLocaleString()}</td>
                          <td>{appointment.employee.name} {appointment.employee.surname}</td>
                          <td>
                            <Badge bg={getStatusVariant(appointment.status)}>
                              {mapStatusToPolish(appointment.status)}
                            </Badge>
                          </td>
                          <td>
                            {(new Date(appointment.appointmentDate) > new Date() && appointment.status !== "CANCELLED") && (
                              <Button
                                variant="outline-danger"
                                size="sm"
                                onClick={() => handleCancelClick(appointment)}
                              >
                                Anuluj
                              </Button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
                {!loadingAppointments && appointments.length === 0 && !error && (
                  <p className="text-center">Brak wizyt dla wybranego klienta.</p>
                )}
              </>
            )}
          </div>
        </Col>
      </Row>

      <Modal
        show={showCancelModal}
        onHide={() => setShowCancelModal(false)}
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Potwierdzenie odwołania wizyty</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Czy na pewno chcesz odwołać wizytę na usługę:{' '}
          <strong>{selectedAppointment?.service.name}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCancelModal(false)}>
            Anuluj
          </Button>
          <Button variant="danger" onClick={confirmCancel}>
            Potwierdź
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default EmployeeAppointments;
