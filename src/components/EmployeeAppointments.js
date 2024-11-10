import React, { useState } from 'react';
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
} from 'react-bootstrap';
import AppointmentControllerApi from '../generated-api-client/src/api/AppointmentControllerApi';

function EmployeeAppointments() {
  const [clientId, setClientId] = useState('');
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
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

  const handleSearch = () => {
    if (!clientId) {
      setError('Wprowadź ID klienta.');
      return;
    }

    setLoading(true);
    setError(null);
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

  return (
    <Container fluid className="min-vh-100 py-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <div
            className="p-5 rounded"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white' }}
          >
            <h2 className="mb-4 text-center">Wizyty Klienta</h2>
            <Form className="mb-4">
              <Row className="align-items-end">
                <Col md={8}>
                  <Form.Group>
                    <Form.Label htmlFor="clientId">ID Klienta:</Form.Label>
                    <Form.Control
                      type="text"
                      id="clientId"
                      value={clientId}
                      onChange={(e) => setClientId(e.target.value)}
                      placeholder="Wprowadź ID klienta"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Button variant="primary" onClick={handleSearch} className="w-100">
                    Szukaj
                  </Button>
                </Col>
              </Row>
            </Form>
            {error && <Alert variant="danger">{error}</Alert>}
            {loading && (
              <div className="text-center">
                <Spinner animation="border" variant="light" />
              </div>
            )}
            {!loading && appointments.length > 0 && (
              <Table striped bordered hover responsive variant="dark">
                <thead>
                  <tr>
                    <th>Usługa</th>
                    <th>Data</th>
                    <th>Pracownik</th>
                    <th>Status</th> {/* Dodanie kolumny Status */}
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
            {!loading && appointments.length === 0 && !error && (
              <p className="text-center">Brak wizyt dla podanego klienta.</p>
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
