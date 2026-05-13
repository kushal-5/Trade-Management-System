require("dotenv").config();

const envConfig = {
  port: process.env.PORT || 3000,
  dbUri: process.env.DB_URL,
  jwt: process.env.JWT_SECRET,
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
  frontendUrl: process.env.FRONTEND_URL,
  jwtBroker: process.env.JWT_BROKER,
  jwtBrokerIssuer: process.env.JWT_BROKER_ISSUER,
};

module.exports = envConfig;
