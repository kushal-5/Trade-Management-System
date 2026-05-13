const mongoose = require('mongoose');

const bankingInfoSchema = new mongoose.Schema({
  bankName: { type: String, required: true },
  branch: { type: String, required: true },
  accountType: { type: String, required: true },
  accountNumber: { type: String, required: true },
});

module.exports = bankingInfoSchema;