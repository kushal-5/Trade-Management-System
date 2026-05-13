const express = require("express");
const router = express.Router();
const { authMiddleware } = require("./../../middleware/authMiddleware");
const {
  getSymbol,
  getWatchLists,
  getStockList,
  getSymbolList,
  getTopBuySell,
  postTopBuySell,
  postWatchList,
  editWatchList,
  deleteWatchList,
} = require("../../controllers/market/marketController");

router.use(authMiddleware);

router.get("/stock/:symbol", getSymbol);

router.get("/watchlists", getWatchLists);

router.post("/watchlist", postWatchList);

router.delete("/deletewatchlist/:id", deleteWatchList);

router.put("/updatewatchlist/:id", editWatchList);

//to create dummy buysell data
router.post("/top-buy-sell", postTopBuySell);

//to get list of top buysell in frontend
router.get("/top-buysell-list", getTopBuySell);

//stock serchlist
router.get("/order/:symbol", getSymbolList);

router.get("/stocklist", getStockList);

module.exports = router;
