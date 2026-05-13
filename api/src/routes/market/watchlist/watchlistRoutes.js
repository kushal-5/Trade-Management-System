const express = require("express");
const router = express.Router();
const watchlistService = require("../../../services/watchlistService");
const { authMiddleware } = require("../../../middleware/authMiddleware");

const demoSymbols = [
  "AAPL",
  "TSLA",
  "GOOG",
  "AMZN",
  "MSFT",
  "NFLX",
  "META",
  "NVDA",
  "DIS",
  "PYPL",
  "INTC",
  "CSCO",
];

router.get("/demo", async (req, res) => {
  const result = await watchlistService.getDemoSymbolsDetails(demoSymbols);
  console.log(result);
  res.status(200).json(result);
});

router.use(authMiddleware);

router.post("/add", async (req, res) => {
  try {
    const { symbol } = req.body;
    const userId = req.user._id;
    const result = await watchlistService.addSymbol(userId, symbol);
    res.json(result);
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});
router.get("/me", async (req, res) => {
  try {
    const userId = req.user._id;
    const result = await watchlistService.getFullWatchlist(userId);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});
router.post("/remove", async (req, res) => {
  try {
    const { symbol } = req.body;
    const userId = req.user._id;
    const result = await watchlistService.removeSymbol(userId, symbol);
    res.json(result);
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

router.get("/:stockId", async (req, res) => {
  try {
    const userId = req.user._id;
    const result = await watchlistService.getFullWatchlist(
      userId,
      req.params.stockId
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ success: false, error: "Server error" });
  }
});

router.delete("/:stockId", async (req, res) => {
  try {
    const userId = req.user._id;
    const result = await watchlistService.deleteWatchlist(
      userId,
      req.params.stockId
    );
    res.json(result);
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

module.exports = router;
