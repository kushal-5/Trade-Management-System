import { useMarket } from "../../contexts/market/MarketContext";
import { useEffect } from "react";

function OrderWatchTable() {
  const { orderList, fetchOrderList } = useMarket();

  useEffect(() => {
    fetchOrderList();
  }, [fetchOrderList]);

  return (
    <>
      {orderList ? (
        <div className="overflow-x-auto mr-11">
          <table
            className="min-w-full border border-black text-white text-sm"
            style={{ backgroundColor: "#1f1f1f" }}
          >
            <thead>
              <tr className="bg-black2">
                {[
                  "SYMBOL",
                  // "LTP",
                  "HIGH",
                  "LOW",
                  "OPEN",
                  "AVG PRICE",
                  "PRE CLOSE",
                  "52 WEEK HIGH",
                  "52 WEEK LOW",
                ].map((header) => (
                  <th key={header} className="px-4 py-2 border border-black">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-black2 text-center text-white">
                <td className="px-4 py-2 border border-black">
                  {orderList.symbol}
                </td>
                <td className="px-4 py-2 border border-black">
                  {orderList.finnhubLow}
                </td>
                <td className="px-4 py-2 border border-black">
                  {orderList.finnhubHigh}
                </td>
                <td className="px-4 py-2 border border-black">
                  {orderList.polygonOpen}
                </td>
                <td className="px-4 py-2 border border-black">
                  {orderList.currentPrice}
                </td>
                <td className="px-4 py-2 border border-black">
                  {orderList.polygonClose}
                </td>
                <td className="px-4 py-2 border border-black">
                  {orderList.finnhub52WeekHigh}
                </td>

                <td className="px-4 py-2 border border-black">
                  {orderList.finnhub52WeekLow}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default OrderWatchTable;
