// const axios = require("axios");

// // Groq AI - Object Detection
// exports.analyzeImage = async (req, res) => {
//   const { imageUrl } = req.body;

//   try {
//     const groqResponse = await axios.post(
//       "https://api.groq.com/object-detection",
//       {
//         image: imageUrl,
//       }
//     );

//     const detectedObjects = groqResponse.data.objects;
//     res.json({ detectedObjects });
//   } catch (error) {
//     res.status(500).json({ error: "Error analyzing image" });
//   }
// };

// // Perplexity AI - Smart Search
// exports.searchProducts = async (req, res) => {
//   const { query } = req.query;

//   try {
//     const perplexityResponse = await axios.get(
//       "https://api.perplexity.ai/search?q=${query}"
//     );
//     res.json({ results: perplexityResponse.data });
//   } catch (error) {
//     res.status(500).json({ error: "Search error" });
//   }
// };

import path from "path";
import fs from "fs";
import axios from "axios";

// Mock database of product models
const products = [
  { id: 1, name: "Coffee Mug", modelPath: "/models/coffee_mug.glb" },
  { id: 2, name: "Plant Pot", modelPath: "/models/plant_pot.glb" },
  { id: 3, name: "Table Lamp", modelPath: "/models/table_lamp.glb" },
];

// Controller to fetch 3D model data
export const getModel = (req, res) => {
  const { productId } = req.params;
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  const modelFilePath = path.join(__dirname, "..", "assets", product.modelPath);

  if (!fs.existsSync(modelFilePath)) {
    return res.status(500).json({ error: "3D model file missing on server" });
  }

  res.sendFile(modelFilePath);
};

// Controller to list all available AR products
export const listProducts = (req, res) => {
  res.json({ results: products });
};

// Controller to handle Groq AI object detection
export const detectObject = async (req, res) => {
  try {
    const image = req.body.image; // Image data for detection
    const response = await axios.post("https://api.groq.com/detect", { image });
    res.json({ detectedObjects: response.data.objects });
  } catch (error) {
    res.status(500).json({ error: "Failed to detect objects using Groq AI" });
  }
};

// Controller to handle Perplexity AI smart search
export const smartSearch = async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Search query is required" });
  }

  try {
    const response = await axios.get(
      "https://api.perplexity.ai/search?query=${encodeURIComponent(query)}"
    );
    res.json({ results: response.data.results });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch search results from Perplexity AI" });
  }
};
