const User = require("../models/User");

// Get user profile
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
  try {
    const { name, email } = req.body;
    let user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name || user.name;
    user.email = email || user.email;
    await user.save();

    res.json({ message: "Profile updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete user account
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.id);
    res.json({ message: "User account deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
