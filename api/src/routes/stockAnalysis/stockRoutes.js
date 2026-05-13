const express = require("express");
const router = express.Router();
const stockController = require("../../controllers/stockController");
// const cacheMiddleware = require("../middleware/cacheMiddleware");

// Cache duration in seconds
// const CACHE_DURATION = 300; // 5 minutes

router.post(
  "/stocks",
  // cacheMiddleware(CACHE_DURATION),
  stockController.getStocksList
);
router.get(
  "/stocks/search",
  // cacheMiddleware(CACHE_DURATION),
  stockController.searchStocks
);
router.get(
  "/stocks/:symbol/history/:from/:to",
  // cacheMiddleware(CACHE_DURATION),
  stockController.getStockHistory
);

module.exports = router;
