// import React from "react";
// import { X } from "lucide-react";

// const TradingSymbol = ({ name, logo, currency, onRemove }) => (
//   <div className="relative flex items-center space-x-2 p-2 bg-[#141414] rounded-lg w-[160px] h-[45px] hover:bg-[#333333] transition-colors duration-200 group flex-shrink-0">
//     <img 
//       src={logo || "https://via.placeholder.com/24"} 
//       alt={name} 
//       className="w-6 h-6 rounded-full flex-shrink-0"
//       onError={(e) => {
//         e.target.src = "https://via.placeholder.com/24";
//       }}
//     />
//     <div className="flex-1 min-w-0">
//       <div className="text-white text-sm font-semibold truncate">{name}</div>
//       <div className="text-gray-400 text-xs truncate">{currency}</div>
//     </div>
//     <button
//       onClick={(e) => {
//         e.stopPropagation();
//         onRemove();
//       }}
//       className="absolute right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
//       aria-label={`Remove ${name}`}
//     >
//       <X size={14} className="text-gray-400 hover:text-white" />
//     </button>
//   </div>
// );

// export default TradingSymbol;