const finnhubService = require("../services/finnhubService");
const polygonService = require("../services/polygonService");
const alphaVantageService = require("../services/alphaVantageService");

class StockController {
  async getStocksList(req, res) {
    try {
      const { watchListStock } = req.body;
      if (watchListStock.length <= 0) {
        return res.status(400).json({
          success: false,
          error: "Add Stock in WatchList ",
        });
      }
      const stocks = await finnhubService.getStockSymbols(watchListStock);
      res.json(stocks);
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  }

  async getStockHistory(req, res) {
    try {
      const { symbol, from, to } = req.params;
      const history = await polygonService.getStockHistory(symbol, from, to);
      res.json({
        success: true,
        data: history,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  }

  async searchStocks(req, res) {
    try {
      const { query } = req.query;
      const results = await alphaVantageService.searchStocks(query);
      res.json({
        success: true,
        data: results,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  }
}

module.exports = new StockController();
