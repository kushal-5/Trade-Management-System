import { useState, useRef, useEffect } from "react";
import { Plus, ChevronDown } from "lucide-react";
import { useMarket } from "../../contexts/market/MarketContext";

function Searchbar() {
  const { stockList, selectedTitle, addOnWatchList } = useMarket();
  const searchInputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleWatchListSubmit = async (e) => {
    e.preventDefault();
    await addOnWatchList(selectedTitle, searchTerm);

    setSearchTerm("");
  };

  return (
    <>
      <form onSubmit={handleWatchListSubmit}>
        <div className="flex gap-9">
          <div
            onClick={() => setShowSuggestions((prev) => !prev)}
            className="flex items-center gap-2 rounded-md bg-white"
          >
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Select SYMBOL"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowSuggestions(!!e.target.value);
              }}
              className="w-48 focus:outline-none border-none rounded-md p-2  text-black relative"
            />

            <button className="p-2 text-black">
              <ChevronDown />
            </button>
          </div>
          <button
            type="submit"
            className={`p-2 rounded-md flex items-center bg-seeWarnings text-black ${selectedTitle}`}
            disabled={!selectedTitle}
          >
            <Plus /> ADD SECURITY
          </button>

          {/* Search Suggestions */}
          {showSuggestions && (
            <ul className="bg-black2 rounded-md  absolute mt-11 w-[240px] max-h-40 overflow-y-scroll ">
              {stockList
                .filter((symbol) =>
                  symbol.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((symbol) => (
                  <li
                    key={symbol}
                    onClick={() => {
                      setSearchTerm(symbol);
                      setShowSuggestions(false);
                    }}
                    className="p-2 text-center cursor-pointer hover:bg-black h-auto rounded-md"
                  >
                    {symbol}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </form>
    </>
  );
}

export default Searchbar;
