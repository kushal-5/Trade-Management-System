const express = require("express");
const brokerRoute = express.Router();
const {brokerLogin, brokerRegister,checkAuth} = require("../../controllers/broker/brokerController");
const { getPendingUsers ,verifyPendingUser, rejectPendingUser, getVerifiedUser,getRejectedUser, getUserById} = require("../../controllers/broker/brokerVerifyUser");
const { brokerAuthMiddleware } = require("../../middleware/authMiddleware");
const { getBuyOrders,getSellOrders, VerifyBuySellOrder } = require("../../controllers/broker/brokerTrade");

brokerRoute.post("/register", brokerRegister)
brokerRoute.post("/login", brokerLogin )
brokerRoute.get("/getUserBy/:id", getUserById)
brokerRoute.get("/getVerifiedUsers",  getVerifiedUser)
brokerRoute.get("/getPendingUsers", getPendingUsers)
brokerRoute.get("/getRejectedUsers", getRejectedUser)
brokerRoute.put("/verifyUser/:id", brokerAuthMiddleware, verifyPendingUser)
brokerRoute.put("/rejectUser/:id", brokerAuthMiddleware, rejectPendingUser) 
brokerRoute.get("/check-auth", brokerAuthMiddleware, checkAuth)
brokerRoute.get("/getBuyOrders", brokerAuthMiddleware, getBuyOrders)
brokerRoute.get("/getSellOrders", brokerAuthMiddleware, getSellOrders)
brokerRoute.put("/verifyOrders/:id", brokerAuthMiddleware, VerifyBuySellOrder)

module.exports = brokerRoute;
