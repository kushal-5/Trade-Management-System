const axios = require("axios");

class PolygonService {
  constructor() {
    this.apiKey = process.env.POLYGON_API_KEY;
    this.baseUrl = "https://api.polygon.io/v2";
  }

  async getStockHistory(symbol, from, to) {
    const response = await axios.get(
      `${this.baseUrl}/aggs/ticker/${symbol}/range/1/day/${from}/${to}`,
      {
        params: {
          adjusted: true,
          sort: "asc",
          apiKey: this.apiKey,
        },
      }
    );
    return response.data;
  }

  async getTickerDetails(symbol) {
    const response = await axios.get(
      `${this.baseUrl}/reference/tickers/${symbol}`,
      {
        params: {
          apiKey: this.apiKey,
        },
      }
    );
    return response.data;
  }
}

module.exports = new PolygonService();
