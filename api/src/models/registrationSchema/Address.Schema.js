const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  countryOfResidence: { type: String, required: true },
  state: { type: String, required: true },
  district: { type: String, required: true },
  municipality: { type: String, required: true },
  wardNum:{type:String,required: true },
  street:{type:String,required:true},
  addressType: { type: String, enum: ['Corporate Office', 'Registered Office','Branch Office'], required: true }
});

module.exports = addressSchema;