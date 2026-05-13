import { useEffect, useState } from "react";
import OpenTrade from "../components/ui/dailyTrade/OpenTrade";
import CompletedTrade from "../components/ui/dailyTrade/completedTrade";
import { useCheckAuth } from "@/providers/CheckAuthProvider";
import { useOrder } from "../contexts/order/orderContext";
import BorderBox from "../shared/borderBox";
import InputBox from "../shared/inputBox";
import OrderSearchBar from "../components/buysell/ordersearch";

const DailyTrade = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { user } = useCheckAuth();
  const { orderList } = useOrder();
  const [formData, setFormData] = useState({ symbol: "" });
  const [tabNum, setTabNum] = useState(0); // Initialize with 0

  console.log(orderList);
  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // Function to count open trades
  const countOpenTrades = () => {
    // Fetch or pass data from OpenTrade and filter by open status
    return OpenTrade.data?.filter((trade) => trade.Status === true).length || 0;
  };

  useEffect(() => {
    setTabNum(countOpenTrades());
  }, []);

  const tabs = [
    {
      label: `Open`,
      // content: ,
    },
    {
      label: `Completed`,
      // content: ,
    },
  ];

  const logedinUser = `${user?.individualDetails?.firstName} ${user?.individualDetails?.middleName} ${user?.individualDetails?.lastName}`;
  // const lastOrder = orderList?.orderData?.[orderList?.orderData.length - 1];

  return (
    <div className="">
      <div className="container flex flex-col gap-7 ms-6">
        <nav className="flex ">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`
                flex justify-center items-center gap-2 px-5 py-3 mt-8 w-[102px] text-white text-center font-roboto text-base font-medium leading-6 transition-colors duration-200
                ${
                  activeTab === index
                    ? "bg-[#01BAEF] text-white"
                    : "border-transparent text-gray-500 hover:text-gray-700 "
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
        <div className="flex gap-5 ">
          <BorderBox label="CLIENT NAME/CODE" input={logedinUser} />
          <div className="rounded-lg border border-[#828282] bottom-2 bg-black3 w-[466px] h-[63px] p-2 py-2">
            <label className="font-normal text-base text-gray3">SYMBOL</label>
            <OrderSearchBar
              value={formData.symbol}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {activeTab == 0 && <OpenTrade details={user} formData={formData} />}
        {activeTab === 1 && <CompletedTrade details={user} />}
      </div>
    </div>
  );
};

export default DailyTrade;
