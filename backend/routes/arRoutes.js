// const express = require("express");
// const router = express.Router();
// const { analyzeImage, searchProducts } = require("../controllers/arController");

// router.post("/detect", analyzeImage);
// router.get("/search", searchProducts);

// module.exports = router;

import express from "express";
import {
  getModel,
  listProducts,
  detectObject,
  smartSearch,
} from "../controllers/arController.js";

const router = express.Router();

// Route to fetch a 3D model by product ID
router.get("/model/:productId", getModel);

// Route to list all AR-supported products
router.get("/products", listProducts);

// Route to detect objects using Groq AI
router.post("/detect-object", detectObject);

// Route to search products intelligently using Perplexity AI
router.get("/smart-search", smartSearch);

export default router;
