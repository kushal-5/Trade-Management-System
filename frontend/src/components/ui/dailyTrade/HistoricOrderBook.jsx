import React, { useState, useRef } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import InputBox from "../../../shared/borderBox";
import Export from "../../../assets/export.svg";
import CalendarIcon from "../../../assets/images/registrationImages/calendar.svg";
import Chart from "../../../assets/chart.svg";
import DateInput from "../../../shared/DateInput";

// Sample trade data
const tradeData = [
  {
    id: 1,
    contractNumber: "CN-001",
    client: "John Doe",
    project: "Website Development",
    amount: "$5000",
    status: "Completed",
    startDate: "2023-01-01",
    endDate: "2023-06-01",
    remarks: "On time",
  },
  {
    id: 2,
    contractNumber: "CN-005",
    client: "Jane Smith",
    project: "Mobile App",
    amount: "$8000",
    status: "Ongoing",
    startDate: "2023-01-01",
    endDate: "2023-08-01",
    remarks: "Delayed due to API issues",
  },
  {
    id: 3,
    contractNumber: "CN-009",
    client: "Privik Thapa Magar",
    project: "Mobile App",
    amount: "$8000",
    status: "Ongoing",
    startDate: "2023-02-01",
    endDate: "2023-08-01",
    remarks: "Delayed due to API issues",
  },
  {
    id: 4,
    contractNumber: "CN-100",
    client: "Bikram Thapa",
    project: "Mobile App",
    amount: "$8000",
    status: "Ongoing",
    startDate: "2023-02-01",
    endDate: "2024-08-01",
    remarks: "Delayed due to API issues",
  },
  {
    id: 5,
    contractNumber: "CN-002",
    client: "Jane Smith",
    project: "Mobile App",
    amount: "$8000",
    status: "Ongoing",
    startDate: "2023-02-01",
    endDate: "2023-08-01",
    remarks: "Delayed due to API issues",
  },
  {
    id: 6,
    contractNumber: "CN-002",
    client: "Jane Smith",
    project: "Mobile App",
    amount: "$8000",
    status: "Ongoing",
    startDate: "2023-02-01",
    endDate: "2023-08-01",
    remarks: "Delayed due to API issues",
  },
];

// Table columns configuration
const columns = [
  { accessorKey: "id", header: "S.N" },
  { accessorKey: "client", header: "Client" },
  { accessorKey: "project", header: "Client Name" },
  { accessorKey: "amount", header: "Symbol" },
  { accessorKey: "status", header: "Exchange Order Id" },
  { accessorKey: "startDate", header: "Order Date" },
  { accessorKey: "endDate", header: "Order Time" },
  { accessorKey: "remarks", header: "Buy/sell" },
];
const HistoricOrder = () => {
  const [rowsPerPage, setRowsPerPage] = useState(2);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredData, setFilteredData] = useState(tradeData);
  const dateInputRef = useRef(null);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSearch = () => {
    const filtered = tradeData.filter((item) => {
      const itemDate = new Date(item.startDate);
      const start = startDate ? new Date(startDate) : new Date(0);
      const end = endDate ? new Date(endDate) : new Date(8640000000000000);
      return itemDate >= start && itemDate <= end;
    });
    setFilteredData(filtered);
  };

  const generatePaginationNumbers = () => {
    const currentPage = table.getState().pagination.pageIndex + 1;
    const totalPages = table.getPageCount();
    const pages = [];

    pages.push(1);

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      if (i === 2 && currentPage > 3) pages.push("...");
      pages.push(i);
    }

    if (currentPage < totalPages - 2) pages.push("...");
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  const table = useReactTable({
    data: filteredData,
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
    doc.text("Trade History", 20, 10);

    const tableData = table
      .getRowModel()
      .rows.map((row) => row.getVisibleCells().map((cell) => cell.getValue()));

    autoTable(doc, {
      head: [columns.map((col) => col.header)],
      body: tableData,
      startY: 20,
    });

    doc.save("trade-history.pdf");
  };

  return (
    <div className="w-[1546px] overflow-hidden">
      <h1 className="absolute left-40 top-40 text-white font-roboto text-[20px] font-normal leading-[20px]">
        Historic Order Book
      </h1>
      <div className="grid grid-rows-2 grid-cols-2 absolute left-40 top-52 gap-4">
        <InputBox input="Member name/code" label="MEMBER NAME/CODE" />

        <InputBox input="Symbol" label="SYMBOL" />

        <DateInput
          label="Start Date"
          value={startDate}
          src1={Chart}
          src2={CalendarIcon}
          onChange={handleStartDateChange}
        />

        <DateInput
          label="End Date"
          value={endDate}
          src1={Chart}
          src2={CalendarIcon}
          onChange={handleEndDateChange}
        />
      </div>

      {/* Search Button */}
      <div className="absolute left-40 top-[28rem]">
        <button
          onClick={handleSearch}
          className="leading-none font-roboto text-[16px] font-normal capitalizeflex items-center text-black justify-center gap-[10px] px-[24px] py-[8px] rounded-md bg-[#F1F510]"
        >
          Search
        </button>
      </div>

      <div className="w-[1546px] overflow-hidden absolute left-40 top-[32rem]">
        {/* Table */}
        <h1 className="py-6  text-white font-roboto text-[20px] font-normal leading-[20px]">
          Order Book History
        </h1>

        <div className="left-36 top-[22rem] w-full">
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

            <tbody className="text-gray-400 font-roboto text-[14px] font-normal leading-[24px]">
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
            <div className="flex items-center gap-2 text-[#9A9EA5] font-roboto text-[14px] not-italic font-normal leading-[18px]">
              <span>Shows:</span>
              <select
                value={rowsPerPage}
                onChange={(e) => {
                  setRowsPerPage(Number(e.target.value));
                  table.setPageSize(Number(e.target.value));
                }}
                className="bg-black px-2 py-1 text-white font-roboto text-[14px] not-italic font-medium leading-[18px]"
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
          <div className="mt-4 flex justify-start mr-[90rem]">
            <button
              onClick={exportToPDF}
              className="flex items-center text-black justify-center gap-[10px] px-[24px] py-[10px] rounded-md bg-[#F1F510]"
            >
              Export <img src={Export} alt="export" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoricOrder;

{
  /* <div className="grid grid-cols-2 gap-4 w-[1000px]">
        <InputBox label="MEMBER NAME/CODE" />
        <InputBox label="SYMBOL" />
        <div className="rounded-lg flex items-center gap-3 border border-[#828282] bottom-2 bg-[#141414] w-[466px] h-[63px] p-2 py-2">
          <img className="w-[17px] h-[17px]" src={dateimg} />
          <div className="flex flex-col px-1">
            <label
              className="text-[#828282] font-roboto text-[12px] font-normal leading-7 tracking-[0.15px]"
              htmlFor=""
            >
              BUSINESS DATE FROM
            </label>
            <input
              type="date"
              className="text-white outline-none bg-[#141414] font-roboto text-[16px] font-normal leading-[12px] tracking-[0.15px]"
            />{" "}
          </div>
        </div>
        <div className="rounded-lg flex gap-3 items-center border border-[#828282] bottom-2 bg-[#141414] w-[466px] h-[63px] p-2 py-2">
          <img className="w-[17px] h-[17px]" src={dateimg} />
          <div className="flex flex-col">
            <label
              className="text-[#828282] font-roboto text-[12px] font-normal leading-7 tracking-[0.15px]"
              htmlFor=""
            >
              BUSINESS DATE TO
            </label>
            <input
              type="date"
              className="text-white outline-none bg-[#141414] font-roboto text-[16px] font-normal leading-[12px] tracking-[0.15px]"
            />{" "}
          </div>
        </div>
      </div>
      <Buttons label="SEARCH" /> */
}
