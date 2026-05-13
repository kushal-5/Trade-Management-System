import React from "react";

const Table = ({ headers = [], data = [{}], renderRow }) => {
  return (
    <div className="w-full bg-[#0c0e12]">
      <div >
        <table className={`w-full text-md text-[#BDBDBD]`} >
          <thead>
            <tr className="bg-[#0c0e12]">
              {headers.map((header, i) => (
                <th key={i} className="px-4 py-3 text-left">
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
                  <tr key={index} className="">
                    {Object.values(row).map((value, i) => (
                      <td key={i} className="px-3 py-3 ">
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
    </div>
  );
};

export default Table;
