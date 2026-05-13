const Watchlist = require("../models/watchlist/watchlist");
const AlphaVantageService = require("./alphaVantageService");
const FinnhubService = require("./finnhubService");
const PolygonService = require("./polygonService");
const mongoose = require("mongoose");

async function validateSymbol(symbol) {
  const upperSymbol = symbol.toUpperCase(); // Ensure uppercase
  try {
    const finnhubQuote = await FinnhubService.getStockQuote(upperSymbol);
    if (finnhubQuote.c !== 0) return true;

    const avQuote = await AlphaVantageService.getStockQuote(upperSymbol);
    if (avQuote["Global Quote"]) return true;

    const polygonDetails = await PolygonService.getTickerDetails(upperSymbol);
    return polygonDetails.results;
  } catch (error) {
    console.error("Validation error:", error);
    return false;
  }
}

module.exports = {
  getDemoSymbolsDetails: async (symbols) => {
    return FinnhubService.getStockSymbols(symbols);
  },
  addSymbol: async (userId, symbol) => {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      throw new Error("Invalid user ID");
    }

    if (!(await validateSymbol(symbol))) {
      throw new Error("Invalid stock symbol");
    }

    const watchlist = await Watchlist.findOneAndUpdate(
      { userId },
      { $addToSet: { symbols: symbol.toUpperCase() } },
      { upsert: true, new: true }
    );

    return FinnhubService.getStockSymbols(watchlist.symbols);
  },

  removeSymbol: async (userId, symbol) => {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      throw new Error("Invalid user ID");
    }

    const watchlist = await Watchlist.findOneAndUpdate(
      { userId },
      { $pull: { symbols: symbol.toUpperCase() } },
      { new: true }
    );

    if (!watchlist) throw new Error("No watchlist found");
    return FinnhubService.getStockSymbols(watchlist.symbols);
  },

  getFullWatchlist: async (userId, stockId) => {
    const watchlist = await Watchlist.findOne({ userId });
    if (!watchlist) return { success: true, data: [] };
    return FinnhubService.getStockSymbols(watchlist.symbols);
  },

  deleteWatchlist: async (userId, stockId) => {
    const result = await Watchlist.deleteOne({ stockId, _id: userId });
    if (result.deletedCount === 0) {
      throw new Error("No watchlist found for the user");
    }
    return { success: true, message: "Watchlist deleted successfully" };
  },
};
