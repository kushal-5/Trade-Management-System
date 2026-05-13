import React from "react";
import Table from "../../../shared/table";
import { useOrder } from "../../../contexts/order/orderContext";

function CompletedTrade() {
  const { orderList } = useOrder();
  console.log(orderList);
  const lastOrder = orderList?.orderData?.[orderList?.orderData.length - 1];
  console.log(lastOrder);
  const headers = [
    "SN",
    "ACTION",
    "CLIENT",
    "CLIENT NAME",
    "STATUS",
    "SYMBOL",
    "TYPE",
    "QUANTITY",
    "TRADE QUANTITY",
  ];

  const data = [
    {
      sn: 1,
      action: `${lastOrder?.type}`,
      client: "C001",
      clientName: "Ram Shrestha",
      status: `${lastOrder?.status}`,
      symbol: `${lastOrder?.symbol}`,
      type: `${lastOrder?.type}`,
      quantity: `${lastOrder?.qty}`,
      tradeQuantity: `${lastOrder?.qty}`,
    },
  ];

  const renderRow = (row, index) => (
    <tr key={index} className="hover:bg-gray-800">
      <td className="px-4 py-2 border border-black">{row.sn}</td>
      <td className="px-4 py-2 border border-black">{row.action}</td>
      <td className="px-4 py-2 border border-black">{row.client}</td>
      <td className="px-4 py-2 border border-black">{row.clientName}</td>
      <td className="px-4 py-2 border border-black">{row.status}</td>
      <td className="px-4 py-2 border border-black">{row.symbol}</td>
      <td className="px-4 py-2 border border-black">{row.type}</td>
      <td className="px-4 py-2 border border-black">{row.quantity}</td>
      <td className="px-4 py-2 border border-black">{row.tradeQuantity}</td>
    </tr>
  );

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl">Dailly Order Book</h1>
      <Table headers={headers} data={data} renderRow={renderRow} />
    </div>
  );
}

export default CompletedTrade;
