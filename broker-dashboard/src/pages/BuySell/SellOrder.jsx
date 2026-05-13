import React from "react";
import Table from "../../shared/Table";
import Money from "../../assets/dashboard/money.svg";
import Phone from "../../assets/dashboard/phone.svg";
import Button from "../../shared/Button";
import axiosInstance from "../../services/axiosInstance";
import { useEffect,useState } from "react";


const SellOrder = () => {
  const [sellOrder, setSellOrder] = useState([]);

  const fetchSellOrder = async () => {
    try {
      const response = await axiosInstance.get("/admin/getSellOrders");
  
  
      const mappedOrders = response.data.data.map((item) => {
        // Make sure clientName exists
        const clientName = item.clientName || 'N/A';
  
        // Ensure other fields exist in the response (adjust as needed)
        return {
          fullName: clientName,
          ClientCode: item.panNumber || 'N/A', // Placeholder if clientCode doesn't exist
          companyName: item.bankName || 'N/A', // Adjust according to actual field names
          totalAmt: item.price || 0, // Adjust according to actual field names
          totalOrder: item.qty || 0, // Adjust according to actual field names
          phone: item.phoneNumber || 'N/A', // Ensure phone is present
        };
      });
  
      setSellOrder(mappedOrders);
    } catch (error) {
      console.error("Error fetching buy orders:", error.response?.data?.message || error.message);
    }
  };
  const headers = [
    "Full Name/Client Code",
    "Name Of Company",
    "Total Amount",
    "Total Orders",
    "Phone Number",
    "Action",
  ];

  useEffect(() => {
    fetchSellOrder()},[])
 
  const renderRow = (row, index) => {
    return (
      <tr
        key={index}
        className="bg-[#0C0E12] text-white border-b-[.1px] border-[#828282]"
      >
        <td className="py-4 px-8">
          <div className="flex flex-col">
            <span className="font-medium">
              {index + 1}. {row.fullName}
            </span>
            <span className="text-sm text-[#828282]">{row.ClientCode}</span>
          </div>
        </td>

        <td className="py-4 px-4">
          <div className="flex items-center gap-2 text-[#828282]">
            {row.companyName}
          </div>
        </td>

        <td className="py-4 px-4">
          <div className="flex items-center gap-2 text-[#828282]">
            <img src={Money} alt="Email icon" className="w-5 h-5" />
            <span>{row.totalAmt}</span>
          </div>
        </td>
        <td className="py-4 px-8">
          <div className="flex text-red-600 text-xl font-semibold items-center gap-2 ">
            {row.totalOrder}
          </div>
        </td>

        <td className="py-4 px-8">
          <div className="flex items-center gap-2 text-[#828282]">
            <img src={Phone} alt="Phone icon" className="w-5 h-5" />
            <span>{row.phone}</span>
          </div>
        </td>

        <td>
          <div>
            <Button isOnline={true} />
          </div>
        </td>
        <td>

        <button onClick={() => setOpen(!open)} className="p-2 rounded py-5">
          ⁝
        </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="flex  gap-4 w-full bg-slate-50 mt-4">
      <Table headers={headers} data={sellOrder} renderRow={renderRow} />
    </div>
  );
};

export default SellOrder;
