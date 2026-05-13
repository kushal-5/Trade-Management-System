import { useState } from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom";
import { CheckAuthProvider } from "../../provider/CheckAuthProvider"


const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("home")

  // Function to get the page title based on active section
  const getPageTitle = () => {
    switch (activeSection) {
      case "home":
        return "Welcome To TMS"
      case "trade":
        return "Trade Management"
      case "tradeUserAccount":
        return "Trade User Account"
             case "brokerManagement":
        return "Broker Management"
                case "stockCompanyManagement":
        return "Stock & Company Management"
      case "transactionSettlement":
        return "Finance & Settlement"

      case "settings":
        return "Settings"
      default:
        return "Welcome To Swivt TMS"
    }
  }
  return (
    <div className="flex h-screen bg-[#0c0e12] text-white">
     <CheckAuthProvider>
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header pageTitle={getPageTitle()} date="Sat 13 Aug" />
        <main className="flex-1 overflow-auto p-6 flex justify-center">
          <div className="w-full max-w-6xl">
            <Outlet/>
            </div>
        </main>
      </div>
    </CheckAuthProvider>
    </div>
  )
}

export default Dashboard
