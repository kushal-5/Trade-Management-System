import { useState } from "react";
import LoadCollateral from "../components/collateral/loadCollateral";
import RefundCollateral from "../components/collateral/refundCollateral";
import HistoryCollateral from "../components/collateral/historyCollateral";

function CollateralPage() {
  const [activeTab, setActiveTab] = useState("Load Collateral");
  return (
    <div className="flex flex-col w-[1300px] ms-4 ">
      <div className="mt-2 flex justify-between mr-6">
        <div className="flex space-x-4 p-2 ">
          {[
            "Load Collateral",
            "Refund Collateral",
            "Collateral History",
            "Collateral Statement",
            "Menage Collateral",
          ].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 font-normal transition-all duration-300 ${
                activeTab === tab ? "bg-blue1 text-white" : " text-gray4"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-5">
        {activeTab === "Load Collateral" && (
          <div>
            <LoadCollateral />
          </div>
        )}
        {activeTab === "Refund Collateral" && (
          <div>
            <RefundCollateral />
          </div>
        )}
        {activeTab === "Collateral History" && (
          <div>
            <HistoryCollateral />
          </div>
        )}
        {/* {activeTab === "ODD LOT" && (
          <div className="">
            <BuySellSection />
          </div>
        )} */}
      </div>
    </div>
  );
}

export default CollateralPage;
