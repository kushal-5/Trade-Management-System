const jwt = require("jsonwebtoken");
const envConfig = require("./envConfig");

const generateAccessToken = (user) => {
  // if (!user || !user._id || !user.email) {
  //   throw new Error("Invalid user data for token generation");
  // }


  return jwt.sign(
    { id: user._id, email: user.email, clientType: user.clientType },
    envConfig.jwt, // Use the correct key
    { expiresIn: "1h" }
  );
};

module.exports = { generateAccessToken };
