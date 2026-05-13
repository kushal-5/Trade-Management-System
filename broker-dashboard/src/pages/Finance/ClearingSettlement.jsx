import React from "react";
import Table from "../../shared/Table";
import Button from "../../shared/Button";

const ClearSettlement = () => {
  const headers = [
    "User Name",
    " Date",
    "Amount(NPR)",
    "Share Type",
    "Transaction ID",
    "Payment Method",
    "Status",
  ];

  const data = [
    {
      fullName: "Preeti Raskoti",
      date: "2023-01-01",
      shareType: "Equity",
      transactionID: "123456",
      paymentMethod: "Bank Transfer",
      amount: "RS 120",
    },
    {
      fullName: "John Doe",
      date: "2023-01-01",
      shareType: "Equity",
      transactionID: "123456",
      paymentMethod: "Bank Transfer",
      amount: "RS 120",
    },
    {
      fullName: "John Doe",
      date: "2023-01-01",
      shareType: "Equity",
      transactionID: "123456",
      paymentMethod: "Bank Transfer",
      amount: "RS 120",
    },
    {
      fullName: "John Doe",
      date: "2023-01-01",
      shareType: "Equity",
      transactionID: "123456",
      paymentMethod: "Bank Transfer",
      amount: "RS 120",
    },
  ];
  const renderRow = (row, index) => {
    return (
      <tr
        key={index}
        className="bg-[#0C0E12] text-white "
      >
        <td className="py-4 px-4">
          <div className="flex flex-col">
            <span className="text-[#828282]">
              {index + 1}. {row.fullName}
            </span>
          </div>
        </td>

        <td className="py-4 px-6">
          <div className="flex items-center gap-2 text-[#828282]">
            {row.date}
          </div>
        </td>

        <td className="py-4 px-6">
          <div className="flex items-center gap-2 text-[#828282]">
            {row.amount}
          </div>
        </td>

        <td className="py-4 px-8">
          <div className="flex items-center gap-2 text-[#828282]">
            {row.shareType}
          </div>
        </td>
        <td className="py-4 px-8">
          <div className="flex items-center gap-2 text-[#828282]">
            {row.transactionID}
          </div>
        </td>
        <td className="py-4 px-8">
          <div className="flex items-center gap-2 text-[#828282]">
            {row.paymentMethod}
          </div>
        </td>

        <td>
          <div>
            <Button />
          </div>
        </td>
   
      </tr>
    );
  };

  return (
    <div className="flex  gap-4 w-full bg-slate-50 mt-10">
      <Table headers={headers} data={data} renderRow={renderRow} />
    </div>
  );
};

export default ClearSettlement;
