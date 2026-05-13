const mongoose = require('mongoose');


const WatchListSchema = new mongoose.Schema({
  
    title: String,
    symbols: [String], 
    userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true,
    }
  });
  

const WatchList = mongoose.model('watchlist',WatchListSchema );

module.exports = WatchList;
