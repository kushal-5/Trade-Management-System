import React, { createContext, useState, useContext, useEffect } from "react";
import { marketApiServices } from "../../services/marketApiService";
const MarketContext = createContext(undefined);

const initialMarketState = {
  fetchStockList: () => {},
  fetchCombinedStockSearch: () => {},
  fetchTopBuySellList: () => {},
  addOnWatchList: () => {},
  showListTitleStocks: () => {},
  fetchOrderList: () => {},
  handleDeleteWatchList: () => {},
  handleEditWatchList: () => {},
  selectedTitle: null,
  combinedStockSearch: [],
  depthList: [],
  watchList: [],
  stockList: [],
  topBuySell: [],
  orderList: [],
  selected: [],
  loading: false,
  error: null,
};

const MarketProvider = ({ children }) => {
  const [marketState, setMarketState] = useState(initialMarketState);
  const [combinedStockSearch, setCombinedStockSearch] = useState([]);
  const [stockList, setStockList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [topBuySell, setTopBuySell] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [depthList, setDepthList] = useState([]);
  const [orderList, setOrderList] = useState(null);
  const [selected, setSelected] = useState({});

  const fetchOrderList = async (symbol) => {
    if (!symbol) return;
    setLoading(true);
    setError(null);
    try {
      const response = await marketApiServices.getOrderList(symbol);
      setOrderList(response);
    } catch (err) {
      console.error("Error fetching order list:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  //top five buy sell list
  const fetchTopBuySellList = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await marketApiServices.getBuySell();
      setDepthList(response.data);
    } catch (err) {
      console.error("Error fetching stock list:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  //stock list for showing in search suggestions
  const fetchStockList = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await marketApiServices.stockList();

      setStockList(response.data);
    } catch (err) {
      console.error("Error fetching stock list:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  //to show in table data by symbol
  const fetchWatchList = async () => {
    try {
      const response = await marketApiServices.getwatchList();
      // console.log(response);
      if (response.status == "success") {
        setWatchList(response.stockDetails);
        setSelectedTitle(response?.stockDetails[0]?.title ?? null);
      }
    } catch (err) {
      console.error("Error fetching stock data:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  //add tilte and to add data in selected title
  const addOnWatchList = async (title, symbol) => {
    try {
      const response = await marketApiServices.postWatchList(title, symbol);
      if (response.status === "success") {
        if (response.code === "title_created") {
          setWatchList((prev) => [...prev, response.data]);
        }

        if (response.code === "symbol_added") {
          const stateList = watchList.find(
            (list) => list.title === response.title
          );

          stateList.symbols.push(response.stockDetails);
          setStockList(watchList);
        }
      }
    } catch (err) {
      console.error("Error adding watch list:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteWatchList = async (id) => {
    try {
      setLoading(true);

      const response = await marketApiServices.deleteWatchList(id);
      if (response.status === "success") {
        setWatchList((prev) => prev.filter((list) => list._id !== id));
      } else {
        throw new Error(response.msg || "Failed to delete watchlist");
      }
    } catch (err) {
      console.error("Error deleting watchlist:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const handleEditWatchList = async (id, newTitle) => {
    try {
      setLoading(true);

      const response = await marketApiServices.editWatchList(id, newTitle);

      if (response.status === "success") {
        setWatchList((prev) =>
          prev.map((list) =>
            list._id === id ? { ...list, title: newTitle } : list
          )
        );

        console.log("Updated watchlist:", response);
      } else {
        throw new Error(response.msg || "Failed to edit watchlist");
      }
    } catch (err) {
      console.error("Error editing watchlist:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const showListTitleStocks = async (title) => {
    setSelectedTitle(title);
  };

  return (
    <MarketContext.Provider
      value={{
        combinedStockSearch,
        fetchWatchList,
        fetchStockList,
        fetchTopBuySellList,
        addOnWatchList,
        showListTitleStocks,
        fetchOrderList,
        handleDeleteWatchList,
        handleEditWatchList,
        setWatchList,
        setSelectedTitle,
        selectedTitle,
        depthList,
        watchList,
        topBuySell,
        stockList,
        orderList,
        selected,
        setSelected,
        loading,
        error,
      }}
    >
      {children}
    </MarketContext.Provider>
  );
};
const useMarket = () => {
  const context = useContext(MarketContext);
  if (!context) {
    throw new Error("useSearchBar must be used within a SearchBarProvider");
  }
  return context;
};
export { MarketProvider, useMarket };
