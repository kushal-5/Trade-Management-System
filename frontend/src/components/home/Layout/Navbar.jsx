import { useEffect, useState } from "react";
import Coin from "@/assets/icons/Coin.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navLinks = [
    { path: "#about", label: "About" },
    { path: "#features", label: "Features" },
    { path: "#insights", label: "Insights" },
    { path: "#contacts", label: "Contacts" },
  ];

  const handleMenuClick = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle("dark", !isDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <nav
      className={`flex mx-24 items-center justify-between mt-8 px-8 py-2 rounded-full space-x-2 ${
        isDarkMode
          ? "bg-[#112125f8]"
          : "bg-gradient-to-r from-gray-800 to-gray-400"
      } relative`}
    >
      {/* Logo Section */}
      <Link to="/" className="flex items-center">
        <img className="flex shrink-0 w-14 ml-2" src={Coin} alt="frame logo" />
        <p className="text-[#F1F510] font-extrabold text-3xl px-5">SWIVT TMS</p>
      </Link>

      {/* Navigation Items */}
      <div className="hidden lg:flex items-center gap-4 lg:gap-2 xl:gap-6 text-lg font-normal rounded-md p-4 xl:p-6">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => handleMenuClick(link.label)}
            className="text-white text-center transition-transform transform hover:scale-105 hover:bg-[#F1F510] hover:text-black px-4 py-2 rounded-full"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-7">
        {/* <button
          onClick={toggleTheme}
          className="flex items-center text-white ml-5 gap-3"
        >
          <img
            src={isDarkMode ? Sun : Moon}
            alt={isDarkMode ? " Light Theme" : " Dark Theme"}
            className="flex flex-grid h-8 w-auto"
          />
          {isDarkMode ? "Light" : "Dark"}
        </button> */}

        <button
          onClick={() => {
            window.location.href = "signin";
          }}
          className="text-white text-center transition-transform transform hover:scale-105 hover:bg-[#F1F510] hover:text-black px-4 py-2 rounded-full"
        >
          Log In
        </button>

        <button
          onClick={() => {
            window.location.href = "register";
          }}
          className="text-white text-center transition-transform transform hover:scale-105 hover:bg-[#F1F510] hover:text-black px-4 py-2 rounded-full"
        >
          Registration
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
