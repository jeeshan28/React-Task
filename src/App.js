import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Changed to Routes
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes> {/* Changed to Routes */}
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/home" element={isLoggedIn ? <HomePage setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/" />} />
      </Routes> {/* Changed to Routes */}
    </Router>
  );
}

export default App;
