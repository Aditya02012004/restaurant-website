const Restaurant = require("../models/Restaurant");

// Get all restaurants
const getAllRestaurants = async (req, res) => {
  try {
    // Fetch all restaurants from the database
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving restaurants", error: error.message });
  }
};

// Get a single restaurant by ID
const getRestaurantById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the restaurant by ID
    const restaurant = await Restaurant.findById(id);
    
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving restaurant", error: error.message });
  }
};

module.exports = { getAllRestaurants, getRestaurantById };

