import React, { useState, useEffect, useRef } from "react";
import { Search, Filter, ChevronDown, Info } from "lucide-react";
import { watchListApiServices } from "../../services/watchListService";

function StockListRow({ stock, onSelect }) {
  const [logoFailed, setLogoFailed] = useState(false);
  const showLogo = stock.logo && !logoFailed;

  return (
    <div
      className="-ml-3 flex cursor-pointer items-center justify-between px-4 py-3 hover:bg-zinc-800/50"
      onClick={() => onSelect(stock)}
    >
      <div className="flex min-w-0 items-center gap-2">
        {showLogo ? (
          <img
            src={stock.logo}
            alt=""
            className="h-7 w-7 flex-shrink-0 rounded-md bg-white object-contain"
            onError={() => setLogoFailed(true)}
          />
        ) : (
          <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-zinc-700 text-[9px] font-bold uppercase text-zinc-400">
            {(stock.symbol || "?").slice(0, 2)}
          </div>
        )}
        <span className="truncate text-sm font-medium text-white">
          {stock.symbol}
        </span>
      </div>
      <div className="text-right">
        <div className="text-xs text-[#828282]">
          $
          {stock.currentPrice != null &&
          typeof stock.currentPrice === "number" &&
          !Number.isNaN(stock.currentPrice)
            ? stock.currentPrice.toFixed(2)
            : "—"}
        </div>
        <div
          className={`text-xs ${
            (stock.percentChange ?? 0) >= 0
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {stock.percentChange != null &&
          typeof stock.percentChange === "number" &&
          !Number.isNaN(stock.percentChange)
            ? `${stock.percentChange.toFixed(2)}%`
            : "—"}
        </div>
      </div>
    </div>
  );
}

const SearchBar = ({ onSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [stockData, setStockData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchDemoStocks = async () => {
      try {
        const res = await watchListApiServices.getAllWatchList();
        if (res.data.success) {
          setStockData(res.data.data);
          setError(null);
        }
      } catch (err) {
        setError("Failed to load stock data");
      } finally {
        setIsLoading(false);
      }
    };
    fetchDemoStocks();
  }, []);

  // Filter stocks based on search query
  const filteredStockData = stockData.filter((stock) => {
    const q = searchQuery.toLowerCase();
    return (
      stock.symbol?.toLowerCase().includes(q) ||
      (stock.name && stock.name.toLowerCase().includes(q))
    );
  });

  // Handle stock selection (add or remove)
  const handleStockSelection = (stock) => {
    // Update the watchlist (add or remove) here
    onSelect(stock);

    // Set the status message (added or removed)
    setStatusMessage(`${stock.symbol} added to your watchlist!`);

    // Automatically hide the status message after 3 seconds
    setTimeout(() => {
      setStatusMessage("");
    }, 3000);
  };

  return (
    <div
      className="w-[280px] h-[416px] flex flex-col relative"
      ref={dropdownRef}
    >
      {/* Search Input */}
      <div className="flex items-center bg-[#1D1D1D] border border-[#828282] rounded-lg mb-1">
        <input
          type="text"
          placeholder="Search watchlist..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow bg-transparent text-zinc-400 p-2.5 text-sm focus:outline-none pl-4"
          disabled={isLoading}
        />
        <Search className="h-5 w-5 text-zinc-400 mr-3" />
      </div>

      {/* Status Message */}
      {statusMessage && (
        <div className="px-4 py-3 text-sm text-green-500">{statusMessage}</div>
      )}

      {/* Loading and Error States */}
      {isLoading && (
        <div className="px-4 py-3 text-sm text-zinc-500">
          Loading watchlist...
        </div>
      )}

      {error && <div className="px-4 py-3 text-sm text-red-500">{error}</div>}

      {/* Data Display */}
      {!isLoading && !error && (
        <div className="flex-1 flex flex-col mt-3">
          {/* Filters */}
          <div className="flex -ml-2 p-2 space-x-2 overflow-x-auto scrollbar-hide">
            {["All", "Gainers", "Losers"].map((filter) => (
              <button
                key={filter}
                className="flex-shrink-0 flex items-center h-8 border border-[#333333] bg-[#1D1D1D] text-zinc-300 text-xs px-3 py-1 rounded-lg"
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Table Header */}
          <div className="flex justify-between px-4 py-2 text-xs text-zinc-500 -ml-3">
            <span>Symbol</span>
            <div className="flex items-center">
              <span className="mr-1">Price</span>
              <Info className="h-3 w-3" />
            </div>
          </div>

          {/* Stock List */}
          <div className="flex-1 overflow-y-auto max-h-[290px] scrollbar-hide">
            {filteredStockData.length > 0 ? (
              filteredStockData.map((stock) => (
                <StockListRow
                  key={stock.symbol}
                  stock={stock}
                  onSelect={handleStockSelection}
                />
              ))
            ) : (
              <div className="px-4 py-3 text-sm text-zinc-500">
                No matching stocks found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
