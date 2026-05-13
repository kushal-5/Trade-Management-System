const axios = require("axios");

class FinnhubService {
  constructor() {
    this.apiKey = process.env.FINNHUB_API_KEY;
    this.baseUrl = "https://finnhub.io/api/v1";
  }

  async getStockSymbols(watchListStock) {
    try {
      const watchlistData = await Promise.all(
        watchListStock.map(async (symbol) => {
          const quoteRes = await axios.get(`${this.baseUrl}/quote`, {
            params: { symbol, token: this.apiKey },
          });

          let p = {};
          try {
            const profileRes = await axios.get(
              `${this.baseUrl}/stock/profile2`,
              { params: { symbol, token: this.apiKey } }
            );
            p = profileRes.data || {};
          } catch (err) {
            console.warn(`profile2 skipped for ${symbol}:`, err.message);
          }

          const q = quoteRes.data || {};

          return {
            symbol,
            name: p.name || symbol,
            logo: p.logo || null,
            currentPrice: q.c,
            change: q.d,
            percentChange: q.dp,
            highPrice: q.h,
            lowPrice: q.l,
            openPrice: q.o,
            previousClose: q.pc,
            timestamp: new Date().toISOString(),
          };
        })
      );

      return {
        success: true,
        data: watchlistData,
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      console.error("Error fetching stock data:", error);
      throw error;
    }
  }

  async getStockQuote(symbol) {
    try {
      const response = await axios.get(`${this.baseUrl}/quote`, {
        params: {
          symbol,
          token: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching quote for ${symbol}:`, error);
      throw error;
    }
  }
}

module.exports = new FinnhubService();
