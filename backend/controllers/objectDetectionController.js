const axios = require("axios");

// Object Detection using Groq AI
exports.detectObjects = async (req, res) => {
  try {
    const { imageUrl } = req.body;
    if (!imageUrl) {
      return res.status(400).json({ message: "Image URL is required" });
    }

    const response = await axios.post(
      "https://api.groq.com/v1/object-detection",
      {
        imageUrl,
        apiKey: process.env.GROQ_API_KEY,
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Object detection failed" });
  }
};
