const Cart = require("../models/Cart");
const Product = require("../models/Product");

// Get user's cart
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate(
      "items.product"
    );
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Add item to cart
exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      cart = new Cart({ user: req.user.id, items: [] });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const existingItem = cart.items.find(
      (item) => item.product.toString() === productId
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Remove item from cart
exports.removeFromCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = cart.items.filter(
      (item) => item.product.toString() !== req.params.productId
    );
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Clear cart
exports.clearCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = [];
    await cart.save();
    res.json({ message: "Cart cleared successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
