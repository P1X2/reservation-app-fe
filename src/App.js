import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './components/home-page/HomePage';
import CreateAppointmentForm from './components/CreateAppointmentForm';
import ServiceList from './components/ServiceList';
import MyAppointments from './components/MyAppointments';
import AddEmployeeForm from './components/AddEmployeeForm';
import EmployeeAppointments from './components/EmployeeAppointments';
import PrivateRoute from './components/PrivateRoute';
import MainLayout from './components/main-layout/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
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
            element={<PrivateRoute element={AddEmployeeForm} requiredRoles={['PRESIDENT']} />}
          />
          <Route
            path="/employee-appointments"
            element={<PrivateRoute element={EmployeeAppointments} requiredRoles={['EMPLOYEE', 'PRESIDENT']} />}
          />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
