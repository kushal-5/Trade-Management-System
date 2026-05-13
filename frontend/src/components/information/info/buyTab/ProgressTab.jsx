import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { UilCalendarAlt } from "@iconscout/react-unicons"; // Ensure you install iconscout/unicons if needed
import Export from "../../../../assets/export.svg";

const data = [
  {
    id: 1,
    startDate: "2023-01-01",
    endDate: "2023-06-01",
    amount: "NRP 10,000",
    status: "Manually Paid",
    amount1: "NRP 20,000",

  },
  {
    id: 1,
    startDate: "2023-01-01",
    endDate: "2023-06-01",
    amount: "NRP 10,000",
    status: "Manually Paid",
    amount1: "NRP 20,000",
  },
];

const columns = [
  { accessorKey: "id", header: "S.N" },
  { accessorKey: "startDate", header: "BUSINESS DATE" },
  { accessorKey: "endDate", header: "SETTLEMENT DATE" },
  { accessorKey: "amount", header: "TOTAL AMOUNT (NRP)" },
  { accessorKey: "amount1", header: "AMOUNT PENDING (NRP)" },
  { accessorKey: "status", header: "PAYMENT STATUS" },
];

const ProgressTab = () => {
  const [rowsPerPage, setRowsPerPage] = useState(2);

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
        pages.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="">
      {/* Filter Section */}
     

      <div className="grid grid-cols gap-6 mb-6 max-w-[960px]">
        {/* BUSINESS DATE FROM */}
        <div className="relative w-[466px]">
          <UilCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-[#828282]" />
          <label className="absolute top-2 left-[52px] text-[#828282] text-sm">
            BUSINESS DATE FROM
          </label>
          <input
            type="date"
            placeholder="MM/DD/YYYY"
            className="bg-[#141414] border border-[#4F4F4F] p-2 pt-6 pl-12 rounded-lg w-full h-[63px] text-white"
          />
        </div>

        {/* BUSINESS DATE TO */}
        <div className="relative w-[466px]">
          <UilCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-[#828282]" />
          <label className="absolute top-2 left-[52px] text-[#828282] text-sm">
            BUSINESS DATE TO
          </label>
          <input
            type="date"
            placeholder="MM/DD/YYYY"
            className="bg-[#141414] border border-[#4F4F4F] p-2 pt-6 pl-12 rounded-lg w-full h-[63px] text-white"
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
      <div className="w-full overflow-hidden">
        <h1 className="text-white font-roboto text-[20px] mb-4">
          Payment Settlement Buy Information
        </h1>

        <table className="w-full border-collapse border border-black bg-[#1D1D1D]">
          <thead className="bg-[#1D1D1D]">
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

      {/* Pagination + Export Button */}
      <div className="mt-6 flex flex-col items-end gap-4">
        {/* Pagination */}
        <div className="flex items-center justify-between w-full text-white">
          <div className="flex items-center gap-2">
            <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} className="px-3 py-1 disabled:opacity-50">
              &lt;
            </button>
            {generatePaginationNumbers().map((pageNum, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (typeof pageNum === 'number') {
                    table.setPageIndex(pageNum - 1);
                  }
                }}
                disabled={pageNum === '...'}
                className={`px-3 py-1 rounded ${
                  pageNum === table.getState().pagination.pageIndex + 1
                    ? 'bg-[#01BAEF] text-black rounded-full'
                    : 'bg-black '
                } ${pageNum === '...' ? '' : ''}`}
              >
                {pageNum}
              </button>
            ))}
            <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} className="px-3 py-1 disabled:opacity-50">
              &gt;
            </button>
          </div>
          {/* Rows Per Page */}
          <div className="flex items-center gap-2 text-[#9A9EA5] font-roboto text-[14px] not-italic font-normal leading-[18px]">
            <span>Shows:</span>
            <select
              value={rowsPerPage}
              onChange={e => {
                setRowsPerPage(Number(e.target.value));
                table.setPageSize(Number(e.target.value));
              }}
              className="bg-black px-2 py-1 text-white font-roboto text-[14px] not-italic font-medium leading-[18px]"
            >
              {[2, 5, 10, 20, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  {pageSize} rows
                </option>
              ))}
            </select>
          </div>
        </div>


        {/* Export Button - End of Section, Aligned to Table Start */}
        <div className="mt-6 flex flex-wrap gap-4 items-center justify-start w-full ">
        <button className="bg-[#F1F510] h-12 text-black px-6 py-2 rounded">Make Payment Request</button>
        <button onClick={exportToPDF} className="flex h-12 items-center gap-2 bg-[#F1F510] text-black px-6 py-2 rounded">
          Export <img src={Export} alt="export" />
        </button>
      </div>
    </div>
    </div>
  );
};

export default ProgressTab;