import React from "react";
import Table from "../../../shared/table";
import { useOrder } from "../../../contexts/order/orderContext";
import { useCheckAuth } from "@/providers/CheckAuthProvider";
import InputBox from "../../../shared/Inputbox";
import dateimg from "../../../assets/images/orderLogo/date.svg";
import Buttons from "../../../shared/buttons";
import { formatedTime, formatedDate } from "@/utils/formatedTime";

function HistoricOrders() {
  const { user } = useCheckAuth();
  const { orderList } = useOrder();
  const logedinUser = `${user?.individualDetails?.firstName} ${user?.individualDetails?.middleName} ${user?.individualDetails?.lastName}`;

  const headers = [
    "SN",
    "CLIENT",
    "CLIENT NAME",
    "SYMBOL",
    "QTY",
    "PRICE",
    "EXCHANGE TRADE ID",
    "TRADE DATE",
    "TRADE TIME",
    "BUY/SELL",
  ];

  const data =
    orderList?.orderData?.map((order, index) => {
      return {
        sn: index + 1,
        client: order.clientId,
        clientName: logedinUser, // Replace with dynamic name if available
        symbol: order.symbol,
        qty: order.qty,
        price: order.price,
        exchangeTradeId: order._id, // or another trade ID field if exists
        tradeDate: formatedDate(order?.createdAt), // Assuming validtill as trade date
        tradeTime: order.createdAt ? formatedTime(order.createdAt) : "10:30 AM", // Using the formatted time
        buySell: order.type,
      };
    }) || [];

  const renderRow = (row, index) => (
    <tr key={index} className="hover:bg-gray-800">
      <td className="px-4 py-2 border border-black">{row.sn}</td>
      <td className="px-4 py-2 border border-black">{row.client}</td>
      <td className="px-4 py-2 border border-black">{row.clientName}</td>
      <td className="px-4 py-2 border border-black">{row.symbol}</td>
      <td className="px-4 py-2 border border-black">{row.qty}</td>
      <td className="px-4 py-2 border border-black">{row.price}</td>
      <td className="px-4 py-2 border border-black">{row.exchangeTradeId}</td>
      <td className="px-4 py-2 border border-black">{row.tradeDate}</td>
      <td className="px-4 py-2 border border-black">{row.tradeTime}</td>
      <td className="px-4 py-2 border border-black">{row.buySell}</td>
    </tr>
  );

  return (
    <div className="flex flex-col gap-6 px-6 py-4">
      <h1 className="text-[20px]">Historic Trade Book</h1>
      <div className="grid grid-cols-2 gap-4 w-[1000px]">
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
      <Buttons label="SEARCH" />
      <div className="flex flex-col gap-3">
        <h1 className="text-xl">Order Book History</h1>
        <Table headers={headers} data={data} renderRow={renderRow} />
      </div>
    </div>
  );
}

export default HistoricOrders;
