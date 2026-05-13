import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { UilCalendarAlt } from "@iconscout/react-unicons";
import Export from "../../../assets/export.svg";
import SucessTab from "../info/buyTab/SucessTab";
import ProgressTab from "../info/buyTab/ProgressTab"; 
import DateInputWithIcon from "./Date";

const data = [
  {
    id: 1,
    action: "Net Information",
    startDate: "2023-01-01",
    endDate: "2023-06-01",
    amount: "NRP 10,000",
    status: "Manually Paid",
    amount1: "NRP 20,000",
  },
 ];

const columns = [
  { accessorKey: "id", header: "S.N" },
  { accessorKey: "action", header: "ACTION" },
  { accessorKey: "startDate", header: "BUSINESS DATE" },
  { accessorKey: "endDate", header: "SETTLEMENT DATE" },
  { accessorKey: "amount", header: "TOTAL AMOUNT (NRP)" },
  { accessorKey: "amount1", header: "AMOUNT PENDING (NRP)" },
  { accessorKey: "status", header: "PAYMENT STATUS" },
];

const BuyInfo = () => {
  const [rowsPerPage, setRowsPerPage] = useState(2);
  const [activeTab, setActiveTab] = useState("Payment Due");

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
    const tableData = table.getRowModel().rows.map((row) =>
      row.getVisibleCells().map((cell) => cell.getValue())
    );
    autoTable(doc, {
      head: [columns.map((col) => col.header)],
      body: tableData,
      startY: 20,
    });
    doc.save("table-data.pdf");
  };

  const generatePaginationNumbers = () => {
    const totalPages = table.getPageCount();
    const currentPage = table.getState().pagination.pageIndex + 1;
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="w-full p-6 -mt-6">
      {/* Tab Navigation */}
      <nav className="flex flex-wrap gap-3 mb-6">
        {["Payment Due", "Success", "In Progress"].map((tab) => (
          <button
            key={tab}
            className={`px-5 py-2 w-[150px] h-[48px] ${
              activeTab === tab ? "bg-[#01BAEF] text-white" : "bg-black text-[#828282]"
            } text-lg`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}

      </nav>

      {/* Conditional Content Based on Active Tab */}
      {activeTab === "Payment Due" && (
        <>
          {/* Date Filters */}
          <div className="grid grid-cols-1 gap-6 mb-6">
            <div className="relative">
              {/* <UilCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-[#828282]" />
              <label className="absolute top-2 left-[52px] text-[#828282] text-sm">
                BUSINESS DATE FROM
              </label>
              <input
                type="date"
                className="bg-[#141414] border border-[#4F4F4F] p-2 pt-6 pl-12 rounded-lg w-[399px] h-[63px] text-white"
              /> */}
              <DateInputWithIcon/>
            </div>
            <div className="relative">
              <UilCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-[#828282]" />
              <label className="absolute top-2 left-[52px] text-[#828282] text-sm">
                BUSINESS DATE TO
              </label>
              <input
                type="date"
                className="bg-[#141414] border border-[#4F4F4F] p-2 pt-6 pl-12 rounded-lg w-[466px] h-[63px] text-white"
              />
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-4 mb-6">
            <button className="bg-[#F1F510] text-gray-900 px-4 py-2 rounded">
              SEARCH
            </button>
            <button className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded">
              CLEAR FILTER
            </button>
          </div>

          {/* Table Section */}
          <div className="w-full overflow-hidden mb-6">
            <h1 className="text-white font-roboto text-[20px] mb-4">
              Payment Settlement Buy Information
            </h1>

            <table className="w-full border-collapse border border-black bg-[#1D1D1D]">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="border border-black px-4 py-2 text-left text-white"
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="text-gray-400">
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="border border-black px-4 py-2">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center text-white">
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
                  onClick={() => typeof pageNum === "number" && table.setPageIndex(pageNum - 1)}
                  className={`px-3 py-1 rounded ${
                    pageNum === table.getState().pagination.pageIndex + 1
                      ? "bg-[#01BAEF] text-black"
                      : "bg-transparent"
                  }`}
                  disabled={pageNum === "..."}
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

            <div className="flex items-center gap-2">
              <span className="text-[#9A9EA5]">Shows:</span>
              <select
                value={rowsPerPage}
                onChange={(e) => {
                  setRowsPerPage(Number(e.target.value));
                  table.setPageSize(Number(e.target.value));
                }}
                className="bg-black px-2 py-1 text-white"
              >
                {[2, 5, 10, 20, 50].map((size) => (
                  <option key={size} value={size}>
                    {size} rows
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Export Button */}
          <div className="mt-4 flex justify-start">
            <button
              onClick={exportToPDF}
              className="flex items-center gap-2 px-6 py-3 rounded-md bg-[#F1F510] text-black"
            >
              Export <img src={Export} alt="export" className="h-5 w-5" />
            </button>
          </div>
        </>
      )}

      {/* Success Tab */}
      {activeTab === "Success" && <SucessTab />}

      {/* In Progress Tab */}
      {activeTab === "In Progress" && <ProgressTab />}
    </div>
  );
};

export default BuyInfo;