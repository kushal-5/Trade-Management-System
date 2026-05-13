const userAuthRoute = require("./user/authRoutes");
const userRoute = require("./user/userRoutes");
const brokerRoute = require("./broker/brokerAuthRoute");


module.exports = {
  userAuthRoute,
  brokerRoute,
  userRoute,

};
