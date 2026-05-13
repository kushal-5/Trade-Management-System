import React from "react";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import InputBox from "../../../shared/borderBox";
import Export from "../../../assets/export.svg";
import Table from "@/shared/table";

const data = [
  {
    id: 1,
    contractNumber: "CN-001",
    client: "John Doe",
    project: "Website Development",
    amount: "RS 500000",
    status: "Completed",
    startDate: "2023-01-01",
    endDate: "2023-06-01",
    remarks: "On time",
  },
  {
    id: 2,
    contractNumber: "CN-002",
    client: "Jane Smith",
    project: "Mobile App",
    amount: "Rs 80000",
    status: "Ongoing",
    startDate: "2023-02-01",
    endDate: "2023-08-01",
    remarks: "Delayed due to API issues",
  },
  {
    id: 1,
    contractNumber: "CN-001",
    client: "John Doe",
    project: "Website Development",
    amount: "Rs 50000",
    status: "Completed",
    startDate: "2023-01-01",
    endDate: "2023-06-01",
    remarks: "On time",
  },
  {
    id: 2,
    contractNumber: "CN-002",
    client: "Jane Smith",
    project: "Mobile App",
    amount: "Rs 80000",
    status: "Ongoing",
    startDate: "2023-02-01",
    endDate: "2023-08-01",
    remarks: "Delayed due to API issues",
  },
  {
    id: 1,
    contractNumber: "CN-001",
    client: "John Doe",
    project: "Website Development",
    amount: "Rs 50000",
    status: "Completed",
    startDate: "2023-01-01",
    endDate: "2023-06-01",
    remarks: "On time",
  },
  {
    id: 2,
    contractNumber: "CN-002",
    client: "Jane Smith",
    project: "Mobile App",
    amount: "Rs 80000",
    status: "Ongoing",
    startDate: "2023-02-01",
    endDate: "2023-08-01",
    remarks: "Delayed due to API issues",
  },
];

const headers = [
  "S.N",
  "Client",
  "Client Name",
  "Project",
  "Amount",
  "status",
  "Start Date",
  "End Date",
  "remarks",
];

const TradeData = () => {
  const renderRow = (row, index) => (
    <tr key={index} className="hover:bg-gray-800">
      <td className="px-4 py-2 border border-black">{row.id}</td>
      <td className="px-4 py-2 border border-black">{row.contractNumber}</td>
      <td className="px-4 py-2 border border-black">{row.client}</td>
      <td className="px-4 py-2 border border-black">{row.project}</td>
      <td className="px-4 py-2 border border-black">{row.amount}</td>
      <td className="px-4 py-2 border border-black">{row.status}</td>
      <td className="px-4 py-2 border border-black">{row.startDate}</td>
      <td className="px-4 py-2 border border-black">{row.endDate}</td>
      <td className="px-4 py-2 border border-black">{row.remarks}</td>
    </tr>
  );

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

  return (
    <div className="w-full pt-10 pl-10 flex gap-6 flex-col">
      <h1 className="text-white font-roboto text-[20px] font-normal leading-[20px]">
        Daily Trade Book
      </h1>
      <div className="flex gap-8">
        <InputBox input="Client name/code" label="CLIENT NAME/CODE" />
        <InputBox input="Symbol" label="SYMBOL" />
      </div>

      <h1 className="text-white font-roboto text-[20px] font-normal leading-[20px]">
        Trade Book
      </h1>
      <div className="overflow-hidden">
        {/* Table */}
        <div className="flex flex-col gap-3">
          <Table headers={headers} data={data} renderRow={renderRow} />
        </div>
        {/* Pagination + Export Button */}
        <div className="mt-6 flex flex-col items-start gap-4 ">
          {/* Pagination */}
          {/* <div className="flex items-center justify-between w-full text-white">
            <div className="flex items-center gap-2">
              <button
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className="px-3 py-1 disabled:opacity-50"
              >
                &lt;
              </button>

              <button
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                className="px-3 py-1 disabled:opacity-50"
              >
                &gt;
              </button>
            </div>

            {/* Rows Per Page */}
          {/* <div className="flex items-center gap-2 text-[#9A9EA5] font-roboto text-[14px] not-italic font-normal leading-[18px]">
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
          </div>  */}

          {/* Export Button - End of Section, Aligned to Table Start */}
          <div className="mt-4 flex justify-start">
            <button
              onClick={exportToPDF}
              className="flex items-center text-black justify-center gap-[10px] px-[24px] py-[14px] rounded-md bg-[#F1F510]"
            >
              Export <img src={Export} alt="export" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeData;
