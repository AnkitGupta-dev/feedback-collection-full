const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// @route   POST /api/feedback
// @desc    Submit feedback
// @access  Public
router.post('/', async (req, res) => {
  console.log("📩 Received data:", req.body); // For debugging

  try {
    const { name, email, rating, comment } = req.body;

    // Optional: basic validation (can be extended)
    if (!name || !email || !rating || !comment) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newFeedback = new Feedback({
      name,
      email,
      rating,
      comment
    });

    await newFeedback.save();
    res.status(201).json({ message: "✅ Feedback submitted successfully!" });
  } catch (err) {
    console.error("❌ Error saving feedback:", err);
    res.status(500).json({ error: "Error saving feedback" });
  }
});

// @route   GET /api/feedback
// @desc    Get all feedback entries
// @access  Public
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json(feedbacks);
  } catch (err) {
    console.error("❌ Error fetching feedback:", err);
    res.status(500).json({ error: "Error fetching feedback" });
  }
});

module.exports = router;

// DELETE /api/feedback/:id
router.delete('/:id', async (req, res) => {
  try {
    await Feedback.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Feedback deleted successfully." });
  } catch (err) {
    console.error("Error deleting feedback:", err);
    res.status(500).json({ error: "Failed to delete feedback." });
  }
});