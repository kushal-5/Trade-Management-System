import { useState, useEffect, useRef } from "react";
import { Plus, ChevronDown, User, X } from "lucide-react";
import SearchBar from "./SearchBar";
import UserMenu from "@/components/userSection/UserMenu";
import AccountMenu from "@/components/userSection/AccountMenu";
import { watchListApiServices } from "../../services/watchListService";
import { useNavigate } from "react-router-dom";

function WatchlistChip({ stock, formatNum, onRemove }) {
  const [logoFailed, setLogoFailed] = useState(false);
  const showLogo = stock.logo && !logoFailed;

  return (
    <div className="relative flex h-[45px] w-[168px] flex-shrink-0 items-center gap-2 rounded-lg bg-[#141414] p-2 transition group hover:bg-[#333]">
      {showLogo ? (
        <img
          src={stock.logo}
          alt=""
          className="h-8 w-8 flex-shrink-0 rounded-md bg-white object-contain"
          onError={() => setLogoFailed(true)}
        />
      ) : (
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-zinc-700 text-[10px] font-bold uppercase text-zinc-400">
          {(stock.symbol || "?").slice(0, 2)}
        </div>
      )}
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-semibold text-white">
          {stock.symbol}
        </div>
        <div className="truncate text-xs">
          <span
            className={
              (stock.change ?? 0) >= 0 ? "text-green-500" : "text-red-500"
            }
          >
            ${formatNum(stock.currentPrice)} ({formatNum(stock.percentChange)}%)
          </span>
        </div>
      </div>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(stock.symbol);
        }}
        className="absolute right-2 opacity-0 transition group-hover:opacity-100"
      >
        <X size={14} className="text-gray-400 hover:text-white" />
      </button>
    </div>
  );
}

const Header = () => {
  const navigate = useNavigate();
  const [watchlistData, setWatchlistData] = useState([]);
  const [showAddSymbolModal, setShowAddSymbolModal] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isAccountModelOpen, setAccountModelOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const modalRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isUserMenuOpen && !event.target.closest(".user-menu-container")) {
        setIsUserMenuOpen(false);
      }
      if (
        isAccountModelOpen &&
        !event.target.closest(".account-menu-container")
      ) {
        setAccountModelOpen(false);
      }
      if (
        showAddSymbolModal &&
        !event.target.closest(".stock-menu-container")
      ) {
        console.log("Hello");
        setShowAddSymbolModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isUserMenuOpen, isAccountModelOpen, showAddSymbolModal]);

  useEffect(() => {
    fetchWatchlist();
  }, []);

  const fetchWatchlist = async () => {
    setIsLoading(true);
    try {
      const res = await watchListApiServices.getwatchList();
      const body = res?.data;
      if (body?.success && Array.isArray(body.data)) {
        setWatchlistData(body.data);
      } else if (Array.isArray(body)) {
        setWatchlistData(body);
      } else {
        setWatchlistData([]);
      }
    } catch (error) {
      const msg =
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.message;
      alert(`Error loading watchlist: ${msg || "Unknown error"}`);
      setWatchlistData([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddSymbol = async (stock) => {
    try {
      await watchListApiServices.addWatchList(stock.symbol);
      await fetchWatchlist();
      setShowAddSymbolModal(false);
    } catch (error) {
      alert(`Add failed: ${error.response?.data?.error || error.message}`);
    }
  };

  const handleRemoveSymbol = async (symbol) => {
    try {
      await watchListApiServices.removeWatchList(symbol);
      await fetchWatchlist();
    } catch (error) {
      alert(`Remove failed: ${error.response?.data?.error || error.message}`);
    }
  };

  const formatNum = (n, digits = 2) =>
    typeof n === "number" && !Number.isNaN(n) ? n.toFixed(digits) : "—";

  return (
    <header className="flex items-center justify-between p-5 border-b border-gray-600 bg-black w-full">
      {/* Watchlist: was `hidden md:flex` so nothing rendered below md breakpoint */}
      <div className="flex flex-1 min-w-0 items-center gap-2 sm:gap-4 mr-2 sm:mr-4 max-w-[min(930px,calc(100vw-220px))] overflow-hidden">
        <button
          className="bg-[#141414] h-11 w-11 p-1 rounded-lg flex-shrink-0 flex justify-center items-center hover:bg-gray-600 transition"
          onClick={() => setShowAddSymbolModal(true)}
        >
          <Plus size={24} className="text-gray-300" />
        </button>
        <div className="overflow-hidden flex gap-4 overflow-x-auto scrollbar-hide pb-2">
          {watchlistData.map((stock) => (
            <WatchlistChip
              key={stock.symbol}
              stock={stock}
              formatNum={formatNum}
              onRemove={handleRemoveSymbol}
            />
          ))}
        </div>
      </div>

      {/* User Section */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 account-menu-container">
          <div className="text-right">
            <div className="text-sm font-semibold text-gray-300">NRP 0.00</div>
            <div className="text-xs text-gray-400">NRP Account</div>
          </div>
          <ChevronDown
            className="text-gray-300"
            onClick={() => setAccountModelOpen(true)}
          />
          <AccountMenu
            isOpen={isAccountModelOpen}
            onClose={() => setAccountModelOpen(false)}
          />
        </div>
        <button
          className="bg-[#F1F510] w-[95px] text-black px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition"
          onClick={() => navigate("/collateral")}
        >
          Payments
        </button>
        {/* User Menu */}
        <div className="relative user-menu-container">
          <button
            className="bg-[#141414] h-[44px] w-[44px] p-1 rounded-lg flex justify-center items-center hover:bg-gray-600 transition-colors"
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          >
            <User size={30} className="text-gray-300" />
          </button>
          <UserMenu
            isOpen={isUserMenuOpen}
            onClose={() => setIsUserMenuOpen(false)}
          />
        </div>
      </div>

      {/* Add Symbol Modal */}
      {showAddSymbolModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-start p-6 z-50">
          <div
            className="bg-[#141414] p-6 rounded-lg w-[323px] ml-24 mt-24 stock-menu-container"
            ref={modalRef}
          >
            <SearchBar onSelect={handleAddSymbol} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
