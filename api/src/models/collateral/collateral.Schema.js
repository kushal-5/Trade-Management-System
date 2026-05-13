const mongoose= require ('mongoose')

const CollateralSchema = new mongoose.Schema({
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    depositedCollateral: {
      type: Number,
      default: null,
    },
    collateralUtilized: {
      type: Number,
      default: null,
    },
    availableCollateral: {
      type: Number,
      default: null,
    },
    tradingLimit: {
      type: Number,
      default: null,
    },
    utilizedTradingLimit: {
      type: Number,
      default: null,
    },
    availableTradingLimit: {
      type: Number,
      default: null,
    },
  });
  

const Collateral= mongoose.model('Collateral', CollateralSchema);
module.exports = Collateral;