const Order = require("../models/Order");

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const { userId, items, totalAmount, address } = req.body;

    const order = new Order({
      user: userId,
      items,
      totalAmount,
      address,
      status: "Pending",
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all orders for a user
exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).sort({
      createdAt: -1,
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get order by ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email"
    );
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update order status
exports.updateOrderStatus = async (req, res) => {
  try {
    let order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = req.body.status;
    await order.save();
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete an order
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    await order.remove();
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
