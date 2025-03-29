const express = require("express");
const {
  detectObjects,
  getDetectionHistory,
} = require("../controllers/objectDetectionController");
const router = express.Router();

// Perform object detection using Groq AI
router.post("/detect", detectObjects);

// Get user's object detection history
router.get("/history", getDetectionHistory);

module.exports = router;
