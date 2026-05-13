const mongoose = require('mongoose');

const depositoryInfoSchema = new mongoose.Schema({
  BOID: { type: String, required: true }
});

module.exports = depositoryInfoSchema;