const mongoose = require("mongoose");
const envConfig = require("./envConfig");

const connectDB = () => {

  if (!envConfig.dbUri) {
    console.error("Database URI is missing! Check your envConfig file.");
    process.exit(1);
  }

  mongoose
    .connect(envConfig.dbUri)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.error("Database connection error:", err.message);
      process.exit(1); // Exit the application with an error status code
    });
};

module.exports = connectDB;
