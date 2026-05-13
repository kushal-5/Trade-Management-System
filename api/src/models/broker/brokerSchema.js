const mongoose= require("mongoose");

const brokerSchema = new mongoose.Schema({
  name: {   type: String, required: true },
  email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },

})

const Broker = mongoose.model("broker", brokerSchema);

module.exports = Broker;