const mongoose = require('mongoose');

const watchlistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  symbols: [{
    type: String,
    uppercase: true,
    validate: {
      validator: function(v) {
        return /^[A-Z]{1,5}$/.test(v);
      },
      message: props => `${props.value} is not a valid stock symbol!`
    }
  }]
});

module.exports = mongoose.model('Watchlist', watchlistSchema);