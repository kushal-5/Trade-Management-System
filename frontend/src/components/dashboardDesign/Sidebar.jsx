import { useState, useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import NavItem from "../item/NavItem";
import {
  ShoppingCart,
  BarChart2,
  LayoutGrid,
  Wallet,
  Search,
  HelpCircle,
} from "lucide-react";
import OrderOptions from "./OrderOption";
import TradesOptions from "./Trade";
import Market from "./Market";
import Fund from "./Fund";
import SearchOptions from "./SearchButton";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const sidebarRef = useRef(null);

  const handleItemClick = useCallback((label) => {
    setActiveItem((prevActiveItem) =>
      prevActiveItem === label ? null : label
    );
  }, []);

  const handleCloseOptions = useCallback(() => {
    setActiveItem(null);
  }, []);

  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     // Close if click is outside both the sidebar and the active panel (if any)
  //     if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
  //       setActiveItem(null);
  //     }
  //   }

  //   if (activeItem !== null) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [activeItem]);

  return (
    <div className="flex h-screen">
      {/* Main Sidebar Navigation */}
      <nav
        ref={sidebarRef}
        className="bg-[#141414] flex flex-col shrink-0 items-center w-[88px] p-[20px] px-[24px] border-r border-[#343434]"
      >
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-6">
          <Link to="/dashboard">
            <img
              src={logo || "/placeholder.svg"}
              alt="SWIVT TMS Logo"
              className="w-[55px] h-[55px] mb-2 object-cover"
            />
          </Link>
          <div className="flex justify-center items-center space-x-1">
            <h1 className="text-xs font-bold">SWIVT</h1>
            <h1 className="text-xs font-bold">TMS</h1>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex-grow space-y-8">
          <NavItem
            Icon={ShoppingCart}
            label="Order"
            onClick={() => handleItemClick("Order")}
            isActive={activeItem === "Order"}
          />
          <NavItem
            Icon={BarChart2}
            label="Trades"
            to="/trade_data"
            onClick={() => handleItemClick("Trades")}
            isActive={activeItem === "Trades"}
          />
          <NavItem
            Icon={LayoutGrid}
            label="Market"
            onClick={() => handleItemClick("Market")}
            isActive={activeItem === "Market"}
          />
          <NavItem
            Icon={Wallet}
            label="Fund"
            onClick={() => handleItemClick("Fund")}
            isActive={activeItem === "Fund"}
          />
          <NavItem
            Icon={Search}
            label="Search"
            onClick={() => handleItemClick("Search")}
            isActive={activeItem === "Search"}
          />
          <NavItem
            Icon={HelpCircle}
            label="Help"
            onClick={() => handleItemClick("Help")}
            isActive={activeItem === "Help"}
          />
        </div>

        {/* Footer Section */}
        <div className="mt-auto p-2 text-center text-gray-400 text-xs">
          23656262 <br /> Online
        </div>
      </nav>

      {/* Active Panels */}
      {activeItem === "Order" && <OrderOptions onClose={handleCloseOptions} />}
      {activeItem === "Trades" && (
        <TradesOptions onClose={handleCloseOptions} />
      )}
      {activeItem === "Market" && <Market onClose={handleCloseOptions} />}
      {activeItem === "Fund" && <Fund onClose={handleCloseOptions} />}
      {activeItem === "Search" && (
        <SearchOptions onClose={handleCloseOptions} />
      )}
    </div>
  );
};

export default Sidebar;
