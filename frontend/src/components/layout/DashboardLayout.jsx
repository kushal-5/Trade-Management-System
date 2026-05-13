import React, { useState } from "react";
import Sidebar from "@/components/dashboardDesign/Sidebar";
import Header from "@/components/dashboardDesign/Header";
import { Outlet } from "react-router-dom";
import nabilLogo from "@/assets/nabil.png";
import sanimaLogo from "@/assets/sanima.png";
import hblLogo from "@/assets/hbl.png";
import { CheckAuthProvider } from "../../providers/CheckAuthProvider";

const DashboardLayout = () => {
  const initialTradingSymbols = [
    { name: "NABIL", logo: nabilLogo, currency: "ST NRP 1023" },
    { name: "SANIMA", logo: sanimaLogo, currency: "ST NRP 2945" },
    { name: "HBL", logo: hblLogo, currency: "ST NRP 3110" },
    { name: "NABIL", logo: nabilLogo, currency: "ST NRP 1223" },
    { name: "NIMB", logo: hblLogo, currency: "ST NRP 4305" },
    { name: "NABIL", logo: nabilLogo, currency: "ST NRP 1223" },
    { name: "NIMB", logo: hblLogo, currency: "ST NRP 4705" },
    { name: "NABIL", logo: nabilLogo, currency: "ST NRP 1223" },
    { name: "HBL", logo: hblLogo, currency: "ST NRP 3110" },
    { name: "SANIMA", logo: sanimaLogo, currency: "ST NRP 2945" },
  ];

  const [tradingSymbols, setTradingSymbols] = useState(initialTradingSymbols);
  const [showSearchSidebar, setShowSearchSidebar] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex overflow-hidden">
      <CheckAuthProvider>
        <Sidebar />
        <div className="flex-1 flex flex-col max-h-screen overflow-hidden">
          <Header
            tradingSymbols={tradingSymbols}
            setTradingSymbols={setTradingSymbols}
            showSidebar={showSearchSidebar}
            setShowSidebar={setShowSearchSidebar}
          />
          <main className="flex-1 overflow-auto bg-[#0A0A0A]">
            <Outlet />
          </main>
        </div>
      </CheckAuthProvider>
    </div>
  );
};

export default DashboardLayout;
