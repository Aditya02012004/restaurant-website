const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  cuisine: String,
  rating: { type: Number, default: 0 },
  menu: [{ type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" }],
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
