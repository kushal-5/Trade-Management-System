import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Table = ({ headers = [], data = [], renderRow }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="">
      <div
        className={`w-[1300px] overflow-auto transition-all duration-300 ease-in-out `}
      >
        <table
          className="min-w-[800px] w-full text-sm text-white border border-black"
          style={{ backgroundColor: "#1f1f1f" }}
        >
          <thead>
            <tr className="bg-black2">
              {headers.map((header, i) => (
                <th
                  key={i}
                  className="px-4 py-3 border border-black text-left whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((row, index) =>
                renderRow ? (
                  renderRow(row, index)
                ) : (
                  <tr key={index} className="hover:bg-gray-800">
                    {Object.values(row).map((value, i) => (
                      <td key={i} className="px-3 py-3 border border-black">
                        {value}
                      </td>
                    ))}
                  </tr>
                )
              )
            ) : (
              <tr>
                <td colSpan={headers.length} className="text-center py-4">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mr-4 mt-2">
        <h1 className="text-[#828282] mr-2">
          Show <span className="text-white">10 rows</span>
        </h1>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center p-1"
        >
          <ChevronDown
            size={20}
            className={`transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default Table;
