import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    comment: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://feedback-backend-pour.onrender.com/api/feedback', formData);
      setMessage('✅ Feedback submitted successfully!');
      setFormData({ name: '', email: '', rating: '', comment: '' });
    } catch (error) {
      setMessage('❌ Submission failed. Try again.');
    }
  };

  return (
    <div className="App">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="number" name="rating" placeholder="Rating (1–5)" value={formData.rating} onChange={handleChange} min="1" max="5" required />
        <textarea name="comment" placeholder="Your comments" value={formData.comment} onChange={handleChange} required />
        <button type="submit">Submit Feedback</button>
      </form>
      {message && (
        <p className={message.includes("successfully") ? "success" : "error"}>
          {message}
        </p>
      )}
    </div>
  );
}

export default FeedbackForm;
