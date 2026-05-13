const Broker = require("../../models/broker/brokerSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const envConfig = require("../../config/envConfig");


const brokerRegister = async (req, res) => {
  const { name, email, password, phone } = req.body;
  try {
    const existingBroker = await Broker.findOne({
      email,
    });
    if (existingBroker) {
      return res.status(400).json({ message: "Broker already exists" });
    }

    
    const hashPassword = await bcrypt.hash(password, 10);

    const newBroker = new Broker({
      name,
      email,
     password: hashPassword,
      phone,
    });
    await newBroker.save();
    return res.status(201).json({ message: "Broker registered successfully", broker: newBroker });
  } catch (error) {
    console.error("Error during broker registration:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const brokerLogin = async (req, res) => {
  const { email, password } = req.body;

  // Validate the request body
  if (!email || !password) {
   return res.status(400).json({ message: "Email and password are required" });

}
  try {
    const broker = await Broker.findOne({ email });
    // Check if the broker exists
    if (!broker) {
      return res.status(404).json({success:"Fail", message: "Broker not found" });
    }       
    
    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, broker.password); // Assuming you have a method to compare passwords
    if (!isMatch) {
      return res.status(401).json({success:"Fail" ,message: "Invalid credentials" });
    }

    // Generate a token or session here if needed
    const accessToken = jwt.sign({ id: broker._id }, envConfig.jwtBroker, {
      issuer: envConfig.jwtBrokerIssuer,

    });


    await broker.save(); // Save the broker document after login
    // For now, just return a success message   
    return   res.status(200).json({
      status:"success",
      msg: "Login Succesful",
      token: accessToken,
      data:broker
    });
    }
    catch (error) {
    console.error("Error during broker login:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

const checkAuth = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: req.user,
  });
};

module.exports = {brokerLogin,brokerRegister,checkAuth};