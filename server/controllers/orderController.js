const Order = require("../models/Order");

// Place a new order
const placeOrder = async (req, res) => {
  try {
    const { userId, items, totalAmount, deliveryAddress, paymentMethod } = req.body;

    // Validate required fields
    if (!userId || !items || items.length === 0 || !totalAmount) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Create a new order
    const newOrder = new Order({
      userId,
      items,
      totalAmount,
      deliveryAddress,
      paymentMethod,
      status: "Pending",
      placedAt: new Date(),
    });

    await newOrder.save();

    res.status(201).json({
      message: "Order placed successfully",
      order: newOrder,
    });
  } catch (error) {
    res.status(500).json({ message: "Error placing order", error: error.message });
  }
};

// Get orders by user ID
const getUserOrders = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find orders associated with the given user ID
    const orders = await Order.find({ userId }).sort({ placedAt: -1 });
    
    if (orders.length === 0) {
      return res.status(404).json({ message: "No orders found for this user" });
    }

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving orders", error: error.message });
  }
};

module.exports = { placeOrder, getUserOrders };
