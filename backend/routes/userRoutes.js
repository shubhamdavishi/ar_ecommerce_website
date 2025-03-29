const express = require("express");
const {
  getUserProfile,
  updateUserProfile,
  deleteUser,
} = require("../controllers/userController");
const router = express.Router();

// Get user profile
router.get("/profile", getUserProfile);

// Update user profile
router.put("/profile", updateUserProfile);

// Delete user account
router.delete("/profile", deleteUser);

module.exports = router;
