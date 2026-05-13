import React, { useState, useRef } from "react";
import Table from "@/shared/table";
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

const TradeHistory = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredData, setFilteredData] = useState(tradeData);
  const dateInputRef = useRef(null);

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
    <div className="min-h-screen  p-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-white font-roboto text-[24px] font-medium mb-6">
          Historic Trade Book
        </h1>

        {/* Filter Section */}
        <div className="rounded-lg p-6 mb-6">
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-6">
            <InputBox input="Member name/code" label="MEMBER NAME/CODE" />
            <InputBox input="Symbol" label="SYMBOL" />
            <DateInput
              label="BUSINESS DATE FROM"
              value={startDate}
              src1={Chart}
              src2={CalendarIcon}
              onChange={handleStartDateChange}
              className="w-full"
            />
            <DateInput
              label="BUSINESS DATE TO"
              value={endDate}
              src1={Chart}
              src2={CalendarIcon}
              onChange={handleEndDateChange}
              className="w-full"
            />
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="bg-[#F1F510] text-black px-8 py-3 rounded-md font-roboto text-[16px] font-medium hover:bg-[#e1e50f] transition-colors"
          >
            SEARCH
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="rounded-lg ">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white font-roboto text-[20px] font-medium">
            Order Book History
          </h2>
          <button
            onClick={exportToPDF}
            className="flex items-center bg-[#F1F510] text-black px-6 py-2.5 rounded-md hover:bg-[#e1e50f] transition-colors"
          >
            <span className="font-roboto text-[14px] font-medium mr-2">
              EXPORT
            </span>
            <img src={Export} alt="export" className="w-4 h-4" />
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-hidden">
          <Table
            headers={headers}
            data={filteredData}
            renderRow={renderRow}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TradeHistory;
