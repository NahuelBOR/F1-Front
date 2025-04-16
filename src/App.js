// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home'; // Crea este componente para la pantalla principal
import Login from './components/Login';
import Profile from './components/Profile';
import AddRaceResult from './components/AddRaceResult';


function App() {
  return (
    <Router>
      <div>
        <h1>¡Bienvenido a F1 Predicciones!</h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-race-result" element={<AddRaceResult />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    
  );
}

export default App;