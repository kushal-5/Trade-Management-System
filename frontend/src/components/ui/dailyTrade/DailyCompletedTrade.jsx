// import InputBox from "../../../shared/Inputbox";
import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Export from "../../../assets/export.svg";
import { useOrder } from "../../../contexts/order/orderContext";

const columns = [
  { accessorKey: "id", header: "S.N" },
  { accessorKey: "Action", header: "Action" },
  { accessorKey: "Client", header: "Client" },
  { accessorKey: "ClientName", header: "Client Name" },

  {
    accessorKey: "Status",
    header: "Status",
    cell: ({ row }) => (
      <span className={row.original.Status ? "text-green-600" : "text-red-600"}>
        {row.original.Status ? "SUCCESS" : "FAILED"}
      </span>
    ),
  },
  { accessorKey: "Symbol", header: "Symbol" },
  { accessorKey: "Type", header: "Type" },
  { accessorKey: "Quantity", header: "Quantity" },
  { accessorKey: "TradeQuantity", header: "Trade Quantity" },
];
const CompletedTrade = ({ details }) => {
  const [rowsPerPage, setRowsPerPage] = useState(2);
  const { orderData } = useOrder();

  console.log(orderData);
  // const lastOrder = orderList?.orderData?.[orderList.orderData.length - 1];

  const data = [
    {
      id: 1,
      Action: "CN-002",
      Client: `${details?.individualDetails?.firstName} ${details?.individualDetails?.middleName} ${details?.individualDetails?.lastName}`,
      ClientName: `${details?.individualDetails?.firstName} ${details?.individualDetails?.middleName} ${details?.individualDetails?.lastName}`,
      Status: "",
      symbol: "",
      Type: "2023-02-01",
      Quantity: "2023-08-01",
      TradeQuantity: "Delayed due to API issues",
    },
  ];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: rowsPerPage,
      },
    },
  });

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Contract Details", 20, 10);

    const tableData = table
      .getRowModel()
      .rows.map((row) => row.getVisibleCells().map((cell) => cell.getValue()));

    autoTable(doc, {
      head: [columns.map((col) => col.header)],
      body: tableData,
      startY: 20,
    });

    doc.save("table-data.pdf");
  };

  // Generate page numbers for pagination
  const generatePaginationNumbers = () => {
    const currentPage = table.getState().pagination.pageIndex + 1;
    const totalPages = table.getPageCount();
    const pages = [];

    // Always show first page
    pages.push(1);

    // Current page and surrounding pages
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      if (i === 2 && currentPage > 3) pages.push("...");
      pages.push(i);
    }

    // Always show last page
    if (currentPage < totalPages - 2) pages.push("...");
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  return (
    <div>
      <div className="absolute top-28 flex gap-8">
        <InputBox input="Client name/code" label="CLIENT NAME/CODE" />
        <InputBox input="Symbol" label="SYMBOL" />
      </div>
      <h1 className="absolute top-60 text-white font-roboto text-xl font-normal leading-5">
        Daily Order Book
      </h1>

      <div className="w-[100rem] overflow-hidden absolute top-[20rem]">
        <div className=" top-[22rem] w-full">
          <table className="w-full border-collapse rounded-3xl border-2 border-black bg-[#1D1D1D] py-4 px-5">
            <thead className="bg-[#1D1D1D] border-2 rounded-lg">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr
                  key={headerGroup.id}
                  className="rounded-lg border-2 border-black"
                >
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="rounded-lg border-2 border-black px-4 py-2 text-left text-white font-roboto text-[16px] font-medium leading-[24px] uppercase"
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

            <tbody className="text-gray-400 font-roboto text-sm font-normal leading-6">
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="rounded-lg border-2 border-black hover:bg-[#1D1D1D]"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="border-2 rounded-lg border-black px-4 py-2 bg-[#1D1D1D]"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                      {/*       
        {/* Only show "Success" or "Failed" if the column is "Status" */}
                      {/* {cell.column.id === "Status" && (
          row.original.Status ? (
            <h1 className="text-base text-green-600">Success</h1>
          ) : (
            <h1 className="text-base text-red-600">Failed</h1>
          )
        )} */}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination + Export Button */}
        <div className="mt-6 flex flex-col items-end gap-4">
          {/* Pagination */}
          <div className="flex items-center justify-between w-full text-white">
            <div className="flex items-center gap-2">
              <button
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className="px-3 py-1 disabled:opacity-50"
              >
                &lt;
              </button>

              {generatePaginationNumbers().map((pageNum, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (typeof pageNum === "number") {
                      table.setPageIndex(pageNum - 1);
                    }
                  }}
                  disabled={pageNum === "..."}
                  className={`px-3 py-1 rounded ${
                    pageNum === table.getState().pagination.pageIndex + 1
                      ? "bg-[#01BAEF] text-black rounded-full"
                      : "bg-black "
                  } ${pageNum === "..." ? "" : ""}`}
                >
                  {pageNum}
                </button>
              ))}

              <button
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                className="px-3 py-1 disabled:opacity-50"
              >
                &gt;
              </button>
            </div>

            {/* Rows Per Page */}
            <div className="flex items-center gap-2 text-[#9A9EA5] font-roboto text-sm not-italic font-normal leading-5">
              <span>Shows:</span>
              <select
                value={rowsPerPage}
                onChange={(e) => {
                  setRowsPerPage(Number(e.target.value));
                  table.setPageSize(Number(e.target.value));
                }}
                className="bg-black px-2 py-1 text-white font-roboto text-sm not-italic font-medium leading-5"
              >
                {[2, 5, 10, 20, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize} rows
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Export Button - End of Section, Aligned to Table Start */}
          <div className="mt-4 flex justify-start mr-[77rem] gap-4">
            <button
              // onClick={handleCancelOrder}
              className="flex items-center text-center w-44 font-medium text-black justify-center py-3 gap-3 rounded-md bg-[#F1F510] "
            >
              CANCEL ORDERS
            </button>

            <button
              onClick={exportToPDF}
              className="flex items-center text-black w-44 font-medium justify-center gap-3 rounded-md bg-[#F1F510]"
            >
              Export <img src={Export} alt="export" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedTrade;
