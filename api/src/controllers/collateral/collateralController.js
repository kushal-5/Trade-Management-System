const Collateral = require("../../models/collateral/collateral.Schema");

const postCollateral = async (req, res) => {
  const user = req.user;
  const clientId = user._id;
  try {
    const newCollateral = new Collateral({
      clientId,
      depositedCollateral: req.body.depositedCollateral,
      collateralUtilized: req.body.collateralUtilized,
      availableCollateral: req.body.availableCollateral,
      tradingLimit: req.body.tradingLimit,
      utilizedTradingLimit: req.body.utilizedTradingLimit,
      availableTradingLimit: req.body.availableTradingLimit,
    });

    const savedCollateral = await newCollateral.save();

    res.status(201).json({
      status: "success",
      message: "Collateral Saved",
      savedCollateral,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCollateral = async (req, res) => {
  try {
    const user = req.user;
    const clientId = user._id;
    const collateralAmount = await Collateral.find({
      clientId,
    });
    res.status(200).json({
      status: "success",

      collateralAmount,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { postCollateral, getCollateral };
