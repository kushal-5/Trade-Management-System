import { useState } from "react";
import { Link } from "react-router-dom";
import NavIconItem from "./NavIcon";
import logo from "../../assets/dashboard/Group.png";
import HomeIcon from "../../assets/dashboard/home.svg";
import BarChartIcon from "../../assets/dashboard/trade.svg";
import UsersIcon from "../../assets/dashboard/profile.svg";
import FileTextIcon from "../../assets/dashboard/Vector.svg";
import SettingsIcon from "../../assets/dashboard/setting.svg";
import { useNavigate } from "react-router";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const navigate = useNavigate();
  const [managementOpen, setManagementOpen] = useState(false);
  const [financeOpen, setFinanceOpen] = useState(false);

  return (
    <div className="w-[18rem] bg-[#0C0E12] border-r border-[#151219] flex flex-col py-4 overflow-y-auto h-full scrollbar-hide">
      <div className="flex items-center gap-3 px-6 mb-8">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
          onClick={() => navigate("/admin/home")}
            src={logo || "/placeholder.svg"}
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="font-semibold text-white">Swivt TMS</span>
      </div>

      <div className="mt-2 px-2">
        <Link to="home">
        <NavIconItem
          icon={<img src={HomeIcon} alt="Home" className="w-5 h-5" />}
          iconName="Home"
          onClick={() => setActiveSection("home")}
          // active={activeSection === "home"}
          />
          </Link>
        
        <Link to="trade">
        <NavIconItem
          icon={<img src={BarChartIcon} alt="Trade" className="w-5 h-5" />}
          iconName="Trade Management"
          onClick={() => setActiveSection("trade")}
          active={activeSection === "trade"}
          />
          </Link>

        {/* Management Dropdown Toggle */}

        <NavIconItem
          icon={<img src={UsersIcon} alt="Users" className="w-5 h-5" />}
          iconName="Management"
          onClick={() => setManagementOpen(!managementOpen)}
          active={activeSection.startsWith("management")}
        />


        {/* Management Dropdown Items */}
        {managementOpen && (
          <div className="pl-10 flex flex-col gap-2">
                    <Link to="trademanagement">
            <NavIconItem
              iconName="Trade Users Account"
              className="w-full"
              onClick={() => setActiveSection("tradeUserAccount")}
            />
                    </Link>
                    <Link to="brokermanagement">
            <NavIconItem
              iconName="Broker Management"
              onClick={() => setActiveSection("brokerManagement")}
              />
              </Link>
              <Link to="stockmanagement">
            <NavIconItem
              iconName="Stocks & Company Management"
              onClick={() => setActiveSection("stockCompanyManagement")}
              />
              </Link>
          </div>
        )}

        <NavIconItem
          icon={<img src={FileTextIcon} alt="Finance" className="w-5 h-5" />}
          iconName="Finance & Settlement"
          onClick={() => setFinanceOpen(!financeOpen)}
          active={activeSection.startsWith("finance")}
        />
            {/* Finance Dropdown Items */}
            {financeOpen && (
          <div className="pl-10 flex flex-col gap-2">
            <Link to="transactionSettlement">
            <NavIconItem
              iconName="Transaction Settlement"
              className="w-full"
              onClick={() => setActiveSection("transactionSettlement")}
              />      
              </Link>
          </div>
        )}
        <Link to="settings">
        <NavIconItem
          icon={<img src={SettingsIcon} alt="Settings" className="w-5 h-5" />}
          iconName="Settings"
          onClick={() => setActiveSection("settings")}
          active={activeSection === "settings"}
          />
          </Link>
      </div>
    </div>
  );
};

export default Sidebar;
