const express = require("express");
const {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
} = require("../controllers/cartController");
const router = express.Router();

// Get user's cart
router.get("/", getCart);

// Add item to cart
router.post("/", addToCart);

// Update cart item quantity
router.put("/:id", updateCartItem);

// Remove item from cart
router.delete("/:id", removeFromCart);

// Clear entire cart
router.delete("/", clearCart);

module.exports = router;
