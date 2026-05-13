import React from "react";
import Table from "../../shared/Table";
import Button from "../../shared/Button";

const FeeCommision = () => {
    const headers = [
      "Name Of Company",
      " Quantity",
      "Amount",
      "Commision",
      "Total Amount"
    ];
  
    const data = [
      {
        companyName: "ABC Company ",
        Quantity: "10",
        Amount: "12,254,254",
        Commision: "RS 5000",
        TotalAmount: "RS 12,416,254",
      },
      {
        companyName: "XYZ Company ",
        Quantity: "10",
        Amount: "12,254,254",
        Commision: "RS 5000",
        TotalAmount: "RS 12,416,254",
      },
      {
        companyName: "John Doe",
        Quantity: "10",
        Amount: "12,254,254",
        Commision: "RS 5000",
        TotalAmount: "RS 12,416,254",
      },
      {
        companyName: "John Doe",
        Quantity: "10",
        Amount: "12,254,254",
        Commision: "RS 5000",
        TotalAmount: "RS 12,416,254",
      },
    ];
    const renderRow = (row, index) => {
      return (
        <tr
          key={index}
          className="bg-[#0C0E12] text-white gap-10"
        >
          <td className="py-4 px-6">
            <div className="flex flex-col">
              <span className="text-[#828282]">
                {index + 1}. {row.companyName}
              </span>
            </div>
          </td>
  
          <td className="py-4 px-8">
            <div className="flex items-center gap-2 text-[#828282]">
              {row.Quantity}
            </div>
          </td>
  
          <td className="py-4 px-8">
            <div className="flex items-center gap-2 text-[#828282]">
              {row.Amount}
            </div>
          </td>
  
          <td className="py-4 px-8">
            <div className="flex items-center gap-2 text-[#828282]">
              {row.Commision}
            </div>
          </td>
          <td className="py-4 px-8">
            <div className="flex items-center gap-2 text-[#828282]">
              {row.TotalAmount}
            </div>
          </td>
          <td>
         
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

export default FeeCommision;
