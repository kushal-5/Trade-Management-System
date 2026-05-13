import { useState, useEffect } from "react";
import { useMarket } from "../../contexts/market/MarketContext";
function OrderSearchBar({ value, onChange }) {
  const { fetchOrderList, depthList, fetchTopBuySellList, setSelected } =
    useMarket();
  const [showSuggestions, setShowSuggestions] = useState(false);

  const symbolList = [
    "AAPL",
    "TSLA",
    "GOLD",
    "META",
    "MSFT",
    "AMZN",
    "GOOGL",
    "NFLX",
  ];

  useEffect(() => {
    fetchTopBuySellList();
    fetchOrderList();
  }, []);

  const handleSubmit = async (symbol) => {
    onChange("symbol", symbol); // update form data in parent
    setShowSuggestions(false);

    if (depthList && Array.isArray(depthList)) {
      const selectedData = depthList.find(
        (data) => data.securityName === symbol
      );
      setSelected(selectedData || {});
    }

    try {
      await fetchOrderList(symbol);
    } catch (err) {
      console.error("Error fetching order list:", err.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          onChange("symbol", e.target.value);
          setShowSuggestions(!!e.target.value);
        }}
        placeholder="Search stocks..."
        className="w-full text-white border bg-black3 border-none focus:outline-none"
      />

      {showSuggestions && (
        <ul className="absolute w-52 bg-black3 border border-gray-300 rounded-md shadow-md max-h-40 overflow-y-auto">
          {symbolList
            .filter((symbol) =>
              symbol.toLowerCase().includes(value.toLowerCase())
            )
            .map((symbol) => (
              <li
                key={symbol}
                onClick={() => handleSubmit(symbol)}
                className="p-2 cursor-pointer text-white hover:bg-gray-500"
              >
                {symbol}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default OrderSearchBar;
