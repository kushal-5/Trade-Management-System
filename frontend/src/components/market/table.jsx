import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

const MyTable = ({ data, columns, showType }) => {
  // Extract buy or sell data as an array
  const tableData =
    showType === "topsell"
      ? data?.sell || []
      : showType === "topbuy"
      ? data?.buy || []
      : [];

  // Initialize TanStack Table
  const table = useReactTable({
    data: tableData, // Buy or Sell data
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full">
      <table className="w-full border-collapse">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-black2 w-full ">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-3 py-2 border items-center justify-center border-black text-base "
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {tableData.length > 0 ? (
            tableData.map((rowData, index) => (
              <tr key={index} className="bg-black2 w-full">
                {columns.map((col) => (
                  <td
                    key={col.accessorKey}
                    className="px-3 py-2 border text-gray-400 text-center justify-center border-black"
                  >
                    {rowData[col.accessorKey] ?? "-"}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center text-gray-500 py-3"
              >
                No {showType === "topsell" ? "sell" : "buy"} orders available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;
