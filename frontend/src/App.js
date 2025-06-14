import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import FeedbackForm from './FeedbackForm';
import LoginPage from './LoginPage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<FeedbackForm />} />
          <Route path="/login" element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} />
          <Route path="/admin" element={isLoggedIn ? <AdminDashboard onLogout={() => setIsLoggedIn(false)} /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

function Navbar({ isLoggedIn }) {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Feedback Form</Link>
      {!isLoggedIn && location.pathname !== '/login' && (
        <Link to="/login" className="nav-link">Admin Login</Link>
      )}
      {isLoggedIn && (
        <Link to="/admin" className="nav-link">Dashboard</Link>
      )}
    </nav>
  );
}

export default App;
