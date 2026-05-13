const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  // documentType: { type: String, required: true },
  documentName: { type: String,  },
  documentURL: { type: String, },

});

module.exports = documentSchema;