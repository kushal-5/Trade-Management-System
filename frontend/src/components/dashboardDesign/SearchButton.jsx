import { X } from "lucide-react";
import { AiOutlineSearch, AiOutlineInfoCircle } from "react-icons/ai";
import nabilLogo from "../../assets/nabil.png";
import googlelogo from "../../assets/google.png"
import applelogo from "../../assets/apple.png"
import windowslogo from "../../assets/windows.png"
import amazonLogo from "../../assets/amazon.png"
import hblLogo from "../../assets/hbl.png";
import tsla from "../../assets/tsla.png"

import { useSearchBar } from "../../contexts/searchBar/searchContext";

const companies = [
  {
    id: 1,
    name: "AAPL",
    symbol: "NASDAQ:AAPL",
    value: "NPR 181.23",
    icon: applelogo,
  },
  {
    id: 2,
    name: "TSLA",
    symbol: "NASDAQ:TSLA",
    value: "NPR 181.23",
    icon: tsla,
  },
  {
    id: 3,
    name: "AMZN",
     symbol: "NASDAQ:AMZN", 
     value: "NPR 145.23",
      icon: amazonLogo,

  },
  {
    id: 4,
    name: "GOOGL",
    symbol: "NASDAQ:GOOGL",
    value: "NPR 181.23",
    icon: googlelogo,
  },
  {
    id: 5,
    name: "MSFT",
    symbol: "NASDAQ:MSFT",
    value: "NPR 315.78",
    icon: windowslogo,

  },
];
// const stockData = [
//   {
//     name: "NABIl",

//     profitability: "NPR181.23",
//     logo: nabilLogo,
//   },
//   {
//     name: "SANIMA",
//     symbol: "NASDAQ:TSLA",
//     profitability: "NPR181.23",
//     logo: sanimaLogo,
//   },
//   {
//     name: "NIMB",
//     symbol: "NASDAQ:AAPL",
//     profitability: "NPR181.23",
//     logo: nimbLogo,
//   },
//   {
//     name: "HBL",
//     symbol: "NASDAQ:GOOGL",
//     profitability: "NPR181.23",
//     logo: hblLogo,
//   },
//   // { name: "NABIL", profitability: "NPR181.23", logo: nabilLogo },
//   // { name: "SANIMA", profitability: "NPR181.23", logo: sanimaLogo },
// ];
const SearchOptions = ({ onClose }) => {
  const { handleSymbolChange } = useSearchBar();

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#141414] p-4 w-[800px] max-h-[500px] rounded-lg z-10 transform shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <div className="w-full">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search by companies"
              className="w-full bg-[#1C1C1C] text-white px-4 py-3 rounded-lg pl-10 focus:outline-none focus:ring-1 focus:ring-gray-600"
            />
            <AiOutlineSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white ml-4 duration-200"
          aria-label="Close search options"
        >
          <X size={24} />
        </button>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm text-gray-400 px-4 py-2">
          <span>Name</span>
          <div className="flex items-center gap-2">
            <span>Profitability</span>
            <AiOutlineInfoCircle size={16} />
          </div>
        </div>

        {companies.map((company) => (
          <div
            key={company.id}
            className="flex justify-between items-center px-4 py-3 hover:bg-[#1C1C1C] rounded-lg cursor-pointer"
            onClick={() => {
              handleSymbolChange(company.symbol);
              onClose();
            }}
          >
            <div className="flex items-center gap-3">
              <img src={company.icon} alt={company.name} className="w-8 h-8" />
              <span className="text-white">{company.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white">{company.value}</span>
              <AiOutlineInfoCircle size={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchOptions;
