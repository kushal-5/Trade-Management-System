import { useState, useEffect } from "react";
import BuySellSection from "../components/buysell/buy";
import { useOrder } from "../contexts/order/orderContext";

export default function BuySell() {
  const [activeTab, setActiveTab] = useState("CONTINUOUS");
  const [currentTime, setCurrentTime] = useState(new Date());
  const { handleClick, mode } = useOrder();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const isPreOpen =
    currentTime.getHours() === 10 &&
    currentTime.getMinutes() >= 30 &&
    currentTime.getMinutes() < 45;
  const isContinuousOrOddLot =
    (currentTime.getHours() >= 11 && currentTime.getHours() < 15) ||
    (currentTime.getHours() === 15 && currentTime.getMinutes() === 0);

  return (
    <div className="flex flex-col w-[1300px] ms-4 ">
      <div className="mt-2 flex justify-between mr-6">
        <div className="flex space-x-4 p-2 ">
          {["CONTINUOUS", "PRE OPEN", "ODD LOT", "SPECIAL PRE OPEN"].map(
            (tab) => (
              <button
                key={tab}
                className={`px-4 py-2 font-normal transition-all duration-300 ${
                  activeTab === tab ? "bg-blue1 text-white" : " text-gray4"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            )
          )}
        </div>

        <div className="flex items-center space-x-4">
          <span
            className={`font-normal ${
              mode === "sell" ? "text-red1" : "text-white"
            }`}
          >
            SELL
          </span>
          <div
            className={`relative w-24 h-8 rounded-full flex items-center cursor-pointer transition-all duration-300 ${
              mode === "sell"
                ? "bg-red1"
                : mode === "buy"
                ? "bg-blue1"
                : "bg-gray-600"
            }`}
            onClick={handleClick}
          >
            <div
              className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                mode === "sell"
                  ? "translate-x-1"
                  : mode === "buy"
                  ? "translate-x-16"
                  : "translate-x-8"
              }`}
            ></div>
          </div>
          <span
            className={`font-normal ${
              mode === "buy" ? "text-blue1" : "text-white"
            }`}
          >
            BUY
          </span>
        </div>
      </div>
      <div className="mt-5">
        {activeTab === "PRE OPEN" && (
          <div className={`${!isPreOpen ? "" : ""}`}>
            <BuySellSection data={mode} />
          </div>
        )}
        {activeTab === "SPECIAL PRE OPEN" && (
          <div className="blur-sm">
            <BuySellSection data={mode} />
          </div>
        )}
        {activeTab === "CONTINUOUS" && (
          <div className={`${!isContinuousOrOddLot ? "blur-sm" : ""}`}>
            <BuySellSection data={mode} />
          </div>
        )}
        {activeTab === "ODD LOT" && (
          <div className={`${!isContinuousOrOddLot ? "blur-sm" : ""}`}>
            <BuySellSection />
          </div>
        )}
      </div>
    </div>
  );
}
