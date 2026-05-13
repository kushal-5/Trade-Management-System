import React from "react";
import Table from "../../../shared/table";
import { useOrder } from "../../../contexts/order/orderContext";
import { useCheckAuth } from "@/providers/CheckAuthProvider";
import Buttons from "../../../shared/buttons";
import { Delete, FileUp } from "lucide-react";
import { formatedTime, formatedDate } from "@/utils/formatedTime";

function OpenTrade({ formData }) {
  const { orderList, handleOrderDelete } = useOrder();
  const { user } = useCheckAuth();

  console.log(orderList);
  const todayDate = new Date().toISOString().split("T")[0];

  const todayOrders =
    orderList?.orderData?.filter((order) => {
      const orderDate = new Date(order?.createdAt).toISOString().split("T")[0];
      return orderDate === todayDate;
    }) || [];
  console.log(todayOrders);
  const data = todayOrders.map((order, index) => ({
    sn: index + 1,
    action: (
      <button onClick={() => handleOrderDelete(order._id)}>
        <Delete size={20} />
      </button>
    ),
    client: order.clientId, // hardcoded, change if needed
    clientName: `${user?.individualDetails?.firstName || ""} ${
      user?.individualDetails?.middleName || ""
    } ${user?.individualDetails?.lastName || ""}`,
    status: order.status,
    symbol: order.symbol,
    type: order.type,
    quantity: order.qty,
    price: order.price,
    tradeTime: formatedTime(order.createdAt),
    updatedAt: order.updatedAt, // still included for potential future use
  }));

  const headers = [
    "SN",
    "ACTION",
    "CLIENT",
    "CLIENT NAME",
    "STATUS",
    "SYMBOL",
    "TYPE",
    "QUANTITY",
    "PRICE",
    "TRADE TIME",
  ];

  const renderRow = (row, index) => (
    <tr key={index} className="hover:bg-gray-800">
      <td className="px-4 py-2 border border-black">{row.sn}</td>
      <td className="px-4 py-2 border border-black">{row.action}</td>
      <td className="px-4 py-2 border border-black">{row.client}</td>
      <td className="px-4 py-2 border border-black">{row.clientName}</td>
      <td
        className={`px-4 py-2 border border-black ${
          row.status === "active"
            ? "text-blue1"
            : row.status === "failed"
            ? "text-red1"
            : row.status === "success"
            ? "text-green1"
            : "text-gray-500"
        }`}
      >
        {row.status}
      </td>
      <td className="px-4 py-2 border border-black">{row.symbol}</td>
      <td className="px-4 py-2 border border-black">{row.type}</td>
      <td className="px-4 py-2 border border-black">{row.quantity}</td>
      <td className="px-4 py-2 border border-black">{row.price}</td>
      <td className="px-4 py-2 border border-black">{row.tradeTime}</td>
    </tr>
  );

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl">Daily Order Book</h1>
      <Table headers={headers} data={data} renderRow={renderRow} />
      <div className=" flex gap-3">
        <button className="bg-seeWarnings flex gap-3 text-black p-2 w-40 rounded-md">
          CANCEL ORDERS
        </button>
        <Buttons label="EXPORT" icon={<FileUp />} />
      </div>
    </div>
  );
}

export default OpenTrade;
