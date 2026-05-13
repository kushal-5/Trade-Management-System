import { useState } from "react";
import BuyInfo from "./info/BuyInfo";
import NetInfo from "./info/NetInfo";
import SellInfo from "./info/SellInfo";

// Components for each tab


function App() {
  const [activeTab, setActiveTab] = useState("net");

  return (
    <div className="p-6 text-white">
      {/* Tab Buttons */}
      <div className="flex mb-6">
        {["net", "buy", "sell"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 mx-2 ${activeTab === tab ? "border-b-2 border-white" : "text-[#828282]"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} Information
          </button>
        ))}
      </div>

      {/* Conditionally Render Tab Content */}
      <div className="mt-4">
        {activeTab === "net" && <NetInfo />}
        {activeTab === "buy" && <BuyInfo />}
        {activeTab === "sell" && <SellInfo />}
      </div>
    </div>
  );
  
}

export default App;
