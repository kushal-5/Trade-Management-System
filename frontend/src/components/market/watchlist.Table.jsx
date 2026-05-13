import { ClockAlert } from "lucide-react";
import { useMarket } from "../../contexts/market/MarketContext";
import { useEffect } from "react";

function MarketWatchTable() {
  const { fetchStockList, fetchWatchList, selectedTitle, watchList } =
    useMarket();

  useEffect(() => {
    fetchWatchList();
    fetchStockList();
  }, []);
  console.log(watchList);
  return (
    <>
      {watchList.length > 0 && watchList.some((item) => item?.title) ? (
        <div className="overflow-x-auto ">
          <table
            className="min-w-full border border-black text-white text-sm "
            style={{ backgroundColor: "#1f1f1f" }}
          >
            <thead>
              <tr className="bg-black2">
                {[
                  "SYMBOL",
                  "LTP",
                  "HIGH",
                  "LOW",
                  "OPEN",
                  "CLOSE",
                  "CHANGE",
                  "% CHANGE",
                  "52 WEEK HIGH",
                  "52 WEEK LOW",
                  "LTQ",
                  "TTQ",
                  "LIT",
                ].map((header) => (
                  <th key={header} className="px-4 py-2 border border-black ">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {watchList
                .find((item) => item?.title === selectedTitle)
                ?.symbols?.map((symbol, index, array) => {
                  return array ? (
                    <tr
                      key={index}
                      className="bg-black2 text-center text-white"
                    >
                      <td className="px-4 py-2 border border-black">
                        {symbol.symbol}
                      </td>
                      <td className="px-4 py-2 border border-black">
                        {symbol.finnhubLow}
                      </td>
                      <td className="px-4 py-2 border border-black">
                        {symbol.finnhubHigh}
                      </td>
                      <td className="px-4 py-2 border border-black">
                        {symbol.finnhubLow}
                      </td>
                      <td className="px-4 py-2 border border-black">
                        {symbol.polygonOpen}
                      </td>
                      <td className="px-4 py-2 border border-black">
                        {symbol.polygonClose}
                      </td>
                      <td className="px-4 py-2 border border-black">
                        {(
                          Number(symbol.polygonOpen) -
                          Number(symbol.polygonClose)
                        ).toFixed(2)}
                      </td>
                      <td className="px-4 py-2 border border-black">
                        {" "}
                        {(() => {
                          const open = Number(symbol.polygonOpen);
                          const close = Number(symbol.polygonClose);
                          const change = close - open;
                          const percentage = (change / open) * 100;
                          return percentage.toFixed(2);
                        })()}
                      </td>
                      <td className="px-4 py-2 border border-black">
                        {symbol.finnhub52WeekHigh}
                      </td>
                      <td className="px-4 py-2 border border-black">
                        {symbol.finnhub52WeekLow}
                      </td>
                      <td className="px-4 py-2 border border-black">
                        {symbol.finnhubHigh}
                      </td>
                      <td className="px-4 py-2 border border-black">
                        {symbol.finnhubLow}
                      </td>
                      <td className="px-4 py-2 border border-black">
                        {symbol.finnhubLow}
                      </td>
                    </tr>
                  ) : (
                    <tr> Add stocks to watch in watch list </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className="text-3xl justify-center text-center">
          Add New Market Watch
        </h1>
      )}
    </>
  );
}

export default MarketWatchTable;
