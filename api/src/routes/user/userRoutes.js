const express = require("express");
const userRoute = express.Router();
const {authMiddleware} = require("../../middleware/authMiddleware");
const { userDetails } = require("../../controllers/user/userController");

userRoute.get("/profile", authMiddleware, userDetails);

module.exports = userRoute;
