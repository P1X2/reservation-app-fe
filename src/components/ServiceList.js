import React, { useEffect, useState } from 'react';
import { Table, Spinner, Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ServiceControllerApi from '../generated-api-client/src/api/ServiceControllerApi';

function ServiceList() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
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
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
}

export default ServiceList;
