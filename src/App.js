import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './components/home-page/HomePage';
import CreateAppointmentForm from './components/CreateAppointmentForm';
import ServiceList from './components/ServiceList';
import MyAppointments from './components/MyAppointments';
import AddEmployeeForm from './components/AddEmployeeForm';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route
          path="/appointment"
          element={<PrivateRoute element={CreateAppointmentForm} />}
        />
        <Route
          path="/services"
          element={<PrivateRoute element={ServiceList} />}
        />
        <Route
          path="/my-appointments"
          element={<PrivateRoute element={MyAppointments} />}
        />
        <Route
          path="/manager"
          element={<PrivateRoute element={AddEmployeeForm} />}
        />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
}

export default App;