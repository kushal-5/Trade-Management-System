const OrderSchema = require("../../models/order/orderSchema");

const getSellOrders = async (req, res) => {
  try {
    await OrderSchema.find({ type: "sell" })
      .populate("clientId")
      .then((orders) => {
        const enrichedOrders = orders.map((order) => {
          const client = order.clientId;
          let firstName = "";
          let lastName = "";
          let phoneNumber = "";
          let panNumber = "";
          let bankName = "";

          if (!client) return order;

          // Extract panNumber/phone
          panNumber = client.panNumber;
          phoneNumber = client.mobileNumber || "";

          // Populate firstName, lastName, and phoneNumber based on clientType
          if (client.clientType === "individual") {
            firstName = client.individualDetails?.firstName;
            lastName = client.individualDetails?.lastName;
            bankName =
              client.bankingInfo && client.bankingInfo[0]
                ? client.bankingInfo[0].bankName
                : "N/A";
          } else if (["corporate", "mutual"].includes(client.clientType)) {
            firstName = client.ownershipDetails?.firstName;
            lastName = client.ownershipDetails?.lastName;
            bankName =
              client.bankingInfo && client.bankingInfo[0]
                ? client.bankingInfo[0].bankName
                : "N/A";
          }

          // Return enriched order data
          return {
            ...order.toObject(),
            clientName: `${firstName} ${lastName}`,
            phoneNumber,
            panNumber,
            bankName,
          };
        });

        res.status(200).json({
          status: "success",
          message: "SellBuy orders fetched successfully",
          data: enrichedOrders,
        });
      })
      .catch((error) => {
        console.error("Fetch failed:", error);
        res.status(500).json({
          status: "error",
          message: "Failed to fetch Sell orders",
          error: error.message,
        });
      });
  } catch (error) {
    console.error(
      "Error fetching Sell orders:",
      error.response?.data?.message || error.message
    );
    res
      .status(500)
      .json({ status: "fail", message: "Error fetching buy orders" });
  }
};

const getBuyOrders = async (req, res) => {
  try {
    await OrderSchema.find({ type: "buy" })
      .populate("clientId")
      .then((orders) => {
        const enrichedOrders = orders.map((order) => {
          const client = order.clientId;
          let firstName = "";
          let lastName = "";
          let phoneNumber = "";
          let panNumber = "";
          let bankName = "";

          if (!client) return order;

          // Extract panNumber/phone
          panNumber = client.panNumber;
          phoneNumber = client.mobileNumber || "";

          // Populate firstName, lastName, and phoneNumber based on clientType
          if (client.clientType === "individual") {
            firstName = client.individualDetails?.firstName;
            lastName = client.individualDetails?.lastName;
            bankName =
              client.bankingInfo && client.bankingInfo[0]
                ? client.bankingInfo[0].bankName
                : "N/A";
          } else if (["corporate", "mutual"].includes(client.clientType)) {
            firstName = client.ownershipDetails?.firstName;
            lastName = client.ownershipDetails?.lastName;
            bankName =
              client.bankingInfo && client.bankingInfo[0]
                ? client.bankingInfo[0].bankName
                : "N/A";
          }

          // Return enriched order data
          return {
            ...order.toObject(),
            clientName: `${firstName} ${lastName}`,
            phoneNumber,
            panNumber,
            bankName,
          };
        });

        res.status(200).json({
          status: "success",
          message: "Buy orders fetched successfully",
          data: enrichedOrders,
        });
      })
      .catch((error) => {
        console.error("Fetch failed:", error);
        res.status(500).json({
          status: "error",
          message: "Failed to fetch buy orders",
          error: error.message,
        });
      });
  } catch (error) {
    console.error(
      "Error fetching buy orders:",
      error.response?.data?.message || error.message
    );
    res
      .status(500)
      .json({ status: "fail", message: "Error fetching buy orders" });
  }
};

const VerifyBuySellOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await OrderSchema.findById(id);

    if (!order) {
      return res
        .status(404)
        .json({ status: "Fail", message: "Order not found" });
    }

    console.log("Order ID:", id);
    console.log("Order:", order);
    console.log("Order verification status:", order.verification);

    if (order.verification === "verified") {
      return res
        .status(400)
        .json({ status: "Fail", message: "Order already verified" });
    }

    order.verification = "verified";
    await order.save();

    console.log("Order verified successfully:", order);

    res
      .status(200)
      .json({ status: "success", message: "Order verified successfully" });
  } catch (error) {
    console.error("Error verifying order:", error);
    res.status(500).json({ status: "fail", message: "Error verifying order" });
  }
};



module.exports = {
  getSellOrders,
  getBuyOrders,
  VerifyBuySellOrder,

};
