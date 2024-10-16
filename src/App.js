import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './components/home-page/HomePage';
import CreateAppointmentForm from './components/CreateAppointmentForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} /> 
        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route path="/appointment" element={<CreateAppointmentForm />} />
      </Routes>
    </Router>
  );
}

export default App;