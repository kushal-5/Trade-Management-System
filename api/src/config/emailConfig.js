const nodemailer = require("nodemailer");
const envConfig = require("./envConfig"); // Ensure correct path

const transporter = nodemailer.createTransport({
  service: "gmail", // Or your SMTP provider
  auth: {
    user: envConfig.emailUser,
    pass: envConfig.emailPass, // Ensure this is correct
  },
});


module.exports = transporter;
