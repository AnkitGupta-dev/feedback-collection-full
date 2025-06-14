import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminDashboard.css';

function AdminDashboard({ onLogout }) {
  const [feedbacks, setFeedbacks] = useState([]);
  const navigate = useNavigate();

  // Fetch all feedbacks
  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get('https://feedback-backend-pour.onrender.com/api/feedback');
      setFeedbacks(res.data);
    } catch (err) {
      console.error('Error fetching feedbacks:', err);
    }
  };

  // Delete feedback by ID
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      try {
        await axios.delete(`https://feedback-backend-pour.onrender.com/api/feedback/${id}`);
        setFeedbacks(prev => prev.filter(fb => fb._id !== id));
      } catch (err) {
        console.error('Delete failed:', err);
      }
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    onLogout(); // update App state
    navigate('/login');
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <div className="dashboard">
      <div style={{ textAlign: 'right', marginBottom: '10px' }}>
        <button className="delete-btn" onClick={handleLogout}>Logout</button>
      </div>

      <h2>Admin Feedback Dashboard</h2>

      {feedbacks.length === 0 ? (
        <p>No feedbacks submitted yet.</p>
      ) : (
        feedbacks.map((fb) => (
          <div className="feedback-card" key={fb._id}>
            <p><strong>Name:</strong> {fb.name}</p>
            <p><strong>Email:</strong> {fb.email}</p>
            <p><strong>Rating:</strong> {fb.rating}</p>
            <p><strong>Comment:</strong> {fb.comment}</p>
            <p><strong>Submitted:</strong> {new Date(fb.createdAt).toLocaleString()}</p>
            <button className="delete-btn" onClick={() => handleDelete(fb._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminDashboard;
