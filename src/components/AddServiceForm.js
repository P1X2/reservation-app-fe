import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import ServiceControllerApi from '../generated-api-client/src/api/ServiceControllerApi';

function AddServiceForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [durationMinutes, setDurationMinutes] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleAddService = (event) => {
    event.preventDefault();
    const api = new ServiceControllerApi();

    const addServiceCommand = {
      name,
      description,
      durationMinutes: parseInt(durationMinutes, 10),
      price: parseFloat(price),
    };

    api.addService(addServiceCommand, (error) => {
      if (error) {
        setError('Błąd podczas dodawania usługi: ' + error.message);
        setSuccess(null);
      } else {
        setSuccess('Usługa została pomyślnie dodana.');
        setError(null);
        setName('');
        setDescription('');
        setDurationMinutes('');
        setPrice('');
      }
    });
  };

  return (
    <Container fluid className="min-vh-100 py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div
            className="p-4 rounded"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', color: 'white' }}
          >
            <h2 className="mb-4 text-center">Dodaj Nową Usługę</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <Form onSubmit={handleAddService}>
              <Form.Group className="mb-3">
                <Form.Label>Nazwa Usługi</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Wprowadź nazwę usługi"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Opis</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  placeholder="Wprowadź opis usługi"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Czas Trwania (minuty)</Form.Label>
                <Form.Control
                  type="number"
                  value={durationMinutes}
                  onChange={(e) => setDurationMinutes(e.target.value)}
                  required
                  placeholder="Wprowadź czas trwania usługi"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Cena (PLN)</Form.Label>
                <Form.Control
                  type="number"
                  step="0.01"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  placeholder="Wprowadź cenę usługi"
                />
              </Form.Group>
              <Button type="submit" variant="primary" className="w-100">
                Dodaj Usługę
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AddServiceForm;
