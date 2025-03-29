const express = require("express");
const {
  searchProducts,
  getSearchHistory,
} = require("../controllers/searchController");
const router = express.Router();

// Search products using Perplexity AI integration
router.get("/", searchProducts);

// Get user search history
router.get("/history", getSearchHistory);

module.exports = router;
