const OrderShares = require("../../models/order/orderSchema");
const Collateral = require("../../models/collateral/collateral.Schema");
const PersonalShares = require("../../models/personalshares/sharesSchema");


const postOrderInfo = async (req, res) => {
  try {
    const { type, price, qty, symbol } = req.body;
    const user = req.user
   const  clientId= user._id;
    const value = price * qty;

    if (qty < 10) {
      return res
        .status(400)
        .json({
          status: "fail",
          error: "Share quantity must be greater than 10",
        });
    }
    if (type === "buy") {
      const collateralList = await Collateral.findOne({ clientId });
      if (!collateralList) {
        return res
          .status(400)
          .json({
            status: "fail",
            error: "Collateral not found for this client.",
          });
      }

      if (collateralList.availableCollateral < value) {
        return res
          .status(400)
          .json({
            status: "fail",
            error: "Insufficient collateral to place this buy order.",
          });
      }

      if (collateralList.tradingLimit < 1.25 * value) {
        return res
          .status(400)
          .json({ status: "fail", error: "Insufficient trading limit." });
      }

      collateralList.availableCollateral -= value;
      await collateralList.save();
    }

    if (type === "sell") {
      console.log(clientId)
      const shares = await PersonalShares.findOne({ clientId, symbol });
      if (!shares) {
        return res.status(400).json({ error: "Personal shares not found for this symbol and client." });
      }

      if (shares.qty < qty) {
        return res.status(400).json({
          status: "fail",

          error: "Insufficient personal share quantity.",
        });
      }

      shares.qty -= qty;
      await shares.save();
    }

    const newOrder = new OrderShares({ ...req.body, clientId ,
      status:"active"});
    const saveNewOrder = await newOrder.save();

    res.status(201).json({
      status: "success",
      data: saveNewOrder,
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message,error });
  }
};

const getOrderList = async (req, res) => {
  const user = req.user

  try {
    const orderData = await OrderShares.find({
      clientId:user._id
    });
    res.status(200).json({ orderData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteOrder = await OrderShares.findByIdAndDelete(id);

    if (!deleteOrder) {
      return res.status(404).json({ status: "fail", msg: "Order not found" });
    }

    res.status(200).json({
      status: "success",
      msg: "Order deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting order:", error);
    res.status(500).json({ status: "fail", msg: "Internal server error" });
  }
};

module.exports = { deleteOrder, getOrderList, postOrderInfo };
