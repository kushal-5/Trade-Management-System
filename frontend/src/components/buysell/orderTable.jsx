import { useOrder } from "../../contexts/order/orderContext";

import { Edit, Delete } from "lucide-react";

function OrderTable() {
  const { orderData, handleOrderDelete } = useOrder();
  console.log(orderData);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-black  ">
          <thead>
            <tr className="bg-black2">
              {[
                "SN",
                "ACTION",
                "SYMBOL",
                "STATUS",
                "TYPE",
                "QUANTITY",
                "PRICE(NPR)",
                "REMAINING QUANTITY",
                "VALUE",
              ].map((header) => (
                <th
                  key={header}
                  className="px-4 py-2 border border-black text-base font-normal "
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {orderData ? (
              <tr className="bg-black2 text-center">
                <td className="px-4 py-2 border border-black">1</td>
                <td className="px-4 py-2 border border-black">
                  <div className="flex flex-row items-center justify-center gap-3">
                    {/* <Edit /> */}
                    <Delete onClick={() => handleOrderDelete(orderData._id)} />
                  </div>
                </td>
                <td className="px-4 py-2 border border-black">
                  {orderData.symbol}
                </td>
                <td className="px-4 py-2 border border-black text-blue-400">
                  {orderData?.status}
                </td>
                <td className="px-4 py-2 border border-black">
                  {orderData.mode}
                </td>
                <td className="px-4 py-2 border border-black">
                  {orderData.qty}
                </td>
                <td className="px-4 py-2 border border-black">
                  {orderData.price}
                </td>
                <td className="px-4 py-2 border border-black">
                  {orderData.qty}
                </td>
                <td className="px-4 py-2 border border-black">
                  {orderData.qty * orderData.price}
                </td>
              </tr>
            ) : (
              <tr>
                <td colSpan="9" className="text-center py-4">
                  No orders available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderTable;
