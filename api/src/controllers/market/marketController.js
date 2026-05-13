const PersonalShares = require("../../models/personalshares/sharesSchema");
const TopBuySell = require("../../models/stockmarket/Market.Schema");
const WatchList = require("../../models/stockmarket/watchlist.Schema");
const axios = require("axios");
const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;
const ALPHA_VANTAGE_API_KEY = process.env.ALPHA_VANTAGE_API_KEY;
const POLYGON_API_KEY = process.env.POLYGON_API_KEY;
const mongoose = require("mongoose");
 
const fetchStockDetails = async (symbol) => {
    const finnhubQuoteUrl = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`;
    const finnhubMetricUrl = `https://finnhub.io/api/v1/stock/metric?symbol=${symbol}&metric=all&token=${FINNHUB_API_KEY}`;
    const alphaVantageUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`;
    const polygonUrl = `https://api.polygon.io/v2/aggs/ticker/${symbol}/range/1/day/2024-03-06/2024-03-06?apiKey=${POLYGON_API_KEY}`;
  
    const [finnhubQuoteRes, finnhubMetricRes, alphaVantageRes, polygonRes] =
      await Promise.all([
        axios.get(finnhubQuoteUrl),
        axios.get(finnhubMetricUrl),
        axios.get(alphaVantageUrl),
        axios.get(polygonUrl),
      ]);
  
    const finnhubData = finnhubQuoteRes.data;
    const finnhubMetricData = finnhubMetricRes.data.metric;
    const alphaData = alphaVantageRes.data["Time Series (Daily)"];
    const polygonData = polygonRes.data.results && polygonRes.data.results[0];
  
    const mergedData = {
      symbol: symbol.toUpperCase(),
      currentPrice: finnhubData.c,
      finnhubHigh: finnhubData.h,
      finnhubLow: finnhubData.l,
      finnhub52WeekHigh: finnhubMetricData
        ? finnhubMetricData["52WeekHigh"]
        : null,
      finnhub52WeekLow: finnhubMetricData ? finnhubMetricData["52WeekLow"] : null,
      alphaVantageClose: alphaData
        ? alphaData[Object.keys(alphaData)[0]]["4. close"]
        : null,
      polygonOpen: polygonData ? polygonData.o : null,
      polygonHigh: polygonData ? polygonData.h : null,
      polygonLow: polygonData ? polygonData.l : null,
      polygonClose: polygonData ? polygonData.c : null,
      polygonVolume: polygonData ? polygonData.v : null,
    };
    return mergedData;
  };


const getSymbol= async (req, res) => {
    try {
      const { symbol } = req.params;
      if (!symbol) {
        return res.status(400).json({ error: "Stock symbol is required" });
      }
  
      const stockData = await fetchStockDetails(symbol);
      res.status(200).json(stockData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const getWatchLists= async (req, res) => {
    try {
      const user= req.user
      const watchlists = await WatchList.find({
        userId:user._id
      });
  
      const stockDetails = await Promise.all(
        watchlists.map(async (watchList) => {
          try {
            if (watchList.symbols.length === 0) {
              return watchList;
            }
  
            const stockMergeDetails = await Promise.all(
              watchList.symbols.map(async (symbol) => {
                try {
                  return await fetchStockDetails(symbol);
                } catch (error) {
                  console.error(
                    `Error fetching stock details for ${symbol}:`,
                    error
                  );
                  return { symbol, error: "Failed to fetch stock details" };
                }
              })
            );
  
            return {
              _id: watchList._id,
              title: watchList.title,
              symbols: stockMergeDetails,
            };
          } catch (error) {
            console.error("Error processing watchlist:", error);
            return { error: "Error processing watchlist" };
          }
        })
      );
      res.status(200).json({
        status: "success",
        stockDetails,
      });
    } catch (error) {
      console.error("Error fetching watchlists:", error);
      res.status(500).json({
        status: "fail",
        msg: "Internal Server Error",
      });
    }
  }

  const postWatchList= async (req, res) => {
   
    try {
      const { title, symbol, } = req.body;
      const userId=req.user._id;
      const watchlist = await WatchList.findOne({ title});
  
      if (watchlist) {
        if (symbol && !watchlist.symbols.includes(symbol)) {
          try {
            const mergerData = await fetchStockDetails(symbol);
            watchlist.symbols.push(symbol);
            await watchlist.save();
  
            return res.status(200).json({
              status: "success",
              code: "symbol_added",
              title: watchlist.title,
              stockDetails: mergerData,
            });
          } catch (error) {
            if (error.response && error.response.status === 429) {
              return res.status(429).json({
                status: "fail",
                msg: "Rate limit exceeded, please try again later.",
              });
            }
            console.error("Error fetching stock details:", error);
            return res.status(500).json({
              status: "fail",
              msg: "Error fetching stock details",
            });
          }
        } else {
          return res.status(400).json({
            status: "fail",
            msg: "Provide a valid symbol",
          });
        }
      }
  
      const newWatchList = new WatchList({
        userId,
        title: title,
        symbols: [],
      });
      await newWatchList.save();
  
      res.status(200).json({
        status: "success",
        code: "title_created",
        msg: "New WatchList Created",
        data: newWatchList,
      });
    } catch (error) {
      console.error("Error creating watchlist:", error);
      res.status(500).json({
        status: "fail",
        msg: "Internal Server Error",
      });
    }
  }

  const deleteWatchList=async (req, res) => {
    try {
      const id = req.params.id;
      const userId = req.user._id;
  
      console.log("Deleting watchlist with ID:", id);
  
      // Validate MongoDB ObjectId
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
          status: "fail",
          msg: "Invalid Watchlist ID",
        });
      }
  
      const deletedWatchlist = await WatchList.findOneAndDelete({
        _id: id,
        userId: userId,
      });
  
      if (!deletedWatchlist) {
        return res.status(404).json({
          status: "fail",
          msg: "Watchlist not found",
        });
      }
  
      res.status(200).json({
        status: "success",
        msg: "Watchlist deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting watchlist:", error);
      res.status(500).json({
        status: "fail",
        msg: "Internal Server Error",
      });
    }
  }

  const editWatchList=async (req, res) => {
    try {
      const id = req.params.id;
      const { title } = req.body;
      const userId= req.user._id
      console.log(title);
      if (!title) {
        return res
          .status(404)
          .json({ status: "fail", msg: "Provide watchlist title not found" });
      }
      const titleExist = await WatchList.findOneAndUpdate({
        _id:id,
        userId
      }, {
        title,
      });
      if (!titleExist) {
        return res
          .status(404)
          .json({ status: "fail", msg: "watchlist not found" });
      }
  
      res.status(201).json({
        status: "success",
        data: titleExist,
      });
    } catch (error) {
      console.error("Error deleting watchlist:", error);
      res.status(500).json({
        status: "fail",
        msg: "Internal Server Error",
      });
    }
  }

  const postTopBuySell= async (req, res) => {
    try {
      const newEntry = new TopBuySell(req.body);
      const savedEntry = await newEntry.save();
      res.status(201).json(savedEntry);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  const getTopBuySell= async (req, res) => {
    try {
      const data = await TopBuySell.find();
      res.status(200).json({ message: "Data fetched successfully", data });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  }

  const getSymbolList=async (req, res) => {
    try {
      const { symbol } = req.params;
      const mergedData = await fetchStockDetails(symbol);
      res.json(mergedData);
    } catch (error) {
      console.error("Error fetching combined data:", error.message);
      res.status(500).json({ error: error.message });
    }
  }
  const getStockList=async (req, res) => {
    try {
      const response = {
        data: ["AAPL", "TSLA", "GOLD", "META", "MSFT", "AMZN", "GOOGL", "NFLX"],
      };
  
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  module.exports={getSymbol,getWatchLists,getStockList,getSymbolList,getTopBuySell,postTopBuySell,postWatchList,editWatchList,deleteWatchList}