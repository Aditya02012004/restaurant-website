const express = require("express");
const { getAllRestaurants, getRestaurantById } = require("../controllers/restaurantController");
const router = express.Router();

router.get("/", getAllRestaurants);
router.get("/:id", getRestaurantById);

module.exports = router;
