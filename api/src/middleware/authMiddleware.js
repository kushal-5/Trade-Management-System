const jwt = require("jsonwebtoken");
const envConfig = require("../config/envConfig");
const User = require("../models/registrationSchema/User.Schema");
const Broker = require("../models/broker/brokerSchema");

const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token)
    return res.status(401).json({ status: "fail", message: "Unauthorized" });

  jwt.verify(token, envConfig.jwt, async (err, data) => {
    if (err)
      return res.status(403).json({ status: "fail", message: "Token expired" });

    try {
      const user = await User.findById(data.id).select("-password");
      if (!user) {
        return res.status(404).json({ status: "fail", message: "User not found" });
      }
      req.user = user;
      next();
    } catch (error) {
      return res.status(500).json({ status: "error", message: "Server error" });
    }
  });
};

const brokerAuthMiddleware = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token)
    return res.status(401).json({ status: "fail", message: "Unauthorized" });

  jwt.verify(token, envConfig.jwtBroker, async (err, data) => {
    if (err)
      return res.status(403).json({ status: "fail", message: "Token expired" });

    try {
      const broker = await Broker.findById(data.id).select("-password");
      if (!broker) {
        return res.status(404).json({ status: "fail", message: "Broker not found" });
      }


      req.broker = broker;
      next();
    } catch (error) {
      return res.status(500).json({ status: "error", message: "Server error" });
    }
  });
};

module.exports = { authMiddleware, brokerAuthMiddleware };
