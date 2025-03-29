const Product = require("../models/Product");
const axios = require("axios");

// Search products in database
exports.searchProducts = async (req, res) => {
  try {
    const { query } = req.query;
    const products = await Product.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ],
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Smart search using Perplexity AI
exports.smartSearch = async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.post("https://api.perplexity.ai/search", {
      query,
      apiKey: process.env.PERPLEXITY_API_KEY,
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Smart search failed" });
  }
};
