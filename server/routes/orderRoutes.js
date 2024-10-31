const express = require("express");
const { placeOrder, getUserOrders } = require("../controllers/orderController");
const router = express.Router();

router.post("/place", placeOrder);
router.get("/user/:userId", getUserOrders);

module.exports = router;
