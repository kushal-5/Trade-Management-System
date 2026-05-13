const express = require("express");
const router = express.Router();
const {
  deleteOrder,
  getOrderList,
  postOrderInfo,
} = require("../../controllers/order/orderController");

const { authMiddleware } = require("../../middleware/authMiddleware");

router.post("/orderInfo", authMiddleware, postOrderInfo);
router.get("/orderList", authMiddleware, getOrderList);
router.delete("/deleteOrder/:id", authMiddleware, deleteOrder);

module.exports = router;
