const axios = require("axios");

class AlphaVantageService {
  constructor() {
    this.apiKey = process.env.ALPHA_VANTAGE_API_KEY;
    this.baseUrl = "https://www.alphavantage.co/query";
  }

  async searchStocks(query) {
    const response = await axios.get(this.baseUrl, {
      params: {
        function: "SYMBOL_SEARCH",
        keywords: query,
        apikey: this.apiKey,
      },
    });
    return response.data;
  }

  async getStockQuote(symbol) {
    const response = await axios.get(this.baseUrl, {
      params: {
        function: "GLOBAL_QUOTE",
        symbol: symbol,
        apikey: this.apiKey,
      },
    });
    return response.data;
  }
}

module.exports = new AlphaVantageService();
