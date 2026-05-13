import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import OrderSearrchBar from "./ordersearch";
import { useMarket } from "../../contexts/market/MarketContext";
import { useOrder } from "../../contexts/order/orderContext";
import { useCheckAuth } from "@/providers/CheckAuthProvider";

const InfoCard = ({ title, value, hasBorder = false }) => {
  return (
    <h1
      className={`p-2 text-gray3 rounded-md bg-black3 ${
        hasBorder ? "border border-gray-600 w-[290px]" : ""
      }`}
    >
      {title}
      <br />
      <span className="text-white">{value}</span>
    </h1>
  );
};

function TopInformation() {
  const { user } = useCheckAuth();

  console.log(user);
  const { selected, orderList } = useMarket();
  const { formData, setFormData } = useOrder();
  const [selectedInst, setSelectedInst] = useState("EQ");
  const [message, setMessage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [qtyError, setQtyError] = useState("");

  const clientDetails = [
    {
      title: "CLIENT NAME / CODE",
      value: `${user?.individualDetails?.firstName}  ${user?.individualDetails?.middleName} ${user?.individualDetails?.lastName}`,
      hasBorder: true,
    },
    { title: "CLIENT CODE", value: `${user?.mobileNumber}` },
    { title: "FATHER'S NAME", value: `${user?.individualDetails?.fatherName}` },
    {
      title: "GRAND FATHER'S NAME",
      value: `${user?.individualDetails?.grandfatheName}`,
    },
    { title: "PAN", value: `${user?.panNumber}` },
  ];

  const handleInputChange = (key, value) => {
    setMessage(null);
    if (key == "price") {
      if (
        Number(value) < orderList?.finnhubLow ||
        Number(value) > orderList?.finnhubHigh
      ) {
        console.log("test");
        setMessage(
          `Price should in the range of ${orderList.finnhubLow} and ${orderList.finnhubHigh}`
        );
      }
    }
    // if (key == "qty") {
    //   const numericValue = parseInt(value);
    //   if (numericValue <= 10) {
    //     setQtyError("Order quantity must be greater than 10");
    //   } else {
    //     setQtyError("");
    //   }
    // }
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const options = ["EQ", "BO", "MF", "NCD", "PS", "WS", "PCD", "FCD"];
  const validityOptions = ["DAY", "GTC", "GTD", "IOC", "FOK"];

  return (
    <div className="flex flex-col gap-7">
      <div className="flex gap-20">
        <div className="flex gap-6 text-base font-normal">
          <h1>
            Product Type{" "}
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="order"
                className="hidden peer"
                defaultChecked
              />
              <div className="w-5 h-5 border-2 border-blue1 rounded-full flex items-center justify-center peer-checked:bg-black-500">
                <div className="w-2.5 h-2.5 bg-blue1 rounded-full"></div>
              </div>
              <span className="text-white ">CNC</span>
            </label>
          </h1>
          <h1>
            Order Type
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="order"
                className="hidden peer"
                defaultChecked
              />
              <div className="w-5 h-5 border-2 border-blue1 rounded-full flex items-center justify-center peer-checked:bg-black-500">
                <div className="w-2.5 h-2.5 bg-blue1 rounded-full"></div>
              </div>
              <span className="text-white">LMT</span>
            </label>
          </h1>
        </div>
        <div className="flex gap-6 font-normal text-base">
          {clientDetails.map((detail, index) => (
            <InfoCard key={index} {...detail} />
          ))}
        </div>
      </div>
      <div className="flex gap-6 font-normal text-base">
        {/* INST Dropdown */}
        <div className="relative flex flex-col justify-center p-2 border border-gray-600 rounded-md bg-black3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            name="inst"
            value={formData.inst}
            onChange={handleInputChange}
            className="font-normal text-base text-gray3 flex gap-5"
          >
            INST
            <ChevronDown />
          </button>
          <span className="text-white">{selectedInst}</span>

          {/* Dropdown Menu for INST */}
          {isOpen && (
            <div className="absolute left-0 mt-[250px] w-24 bg-black3 border border-gray-600 rounded-md shadow-lg">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    handleInputChange("inst", option);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-700"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center p-2 border w-56 border-gray-600 rounded-md bg-black3">
          <label className="font-normal text-base text-gray3">SYMBOL</label>
          <OrderSearrchBar
            value={formData.symbol}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col justify-center p-2 w-32 border border-gray-600 rounded-md bg-black3">
          <label className="font-normal text-base text-gray3">QTY</label>
          <input
            className="bg-black3 text-white outline-none"
            name="qty"
            value={formData.qty}
            onChange={(e) => handleInputChange("qty", e.target.value)}
            type="number"
            placeholder="0"
          />
        </div>

        <div className="flex flex-col justify-center p-2 w-48 border border-gray-600 rounded-md bg-black3">
          <label className="font-normal text-base text-gray3">PRICE(NRP)</label>
          <input
            className="bg-black3 text-white outline-none"
            type="number"
            name="price"
            value={formData.price}
            onChange={(e) => handleInputChange("price", e.target.value)}
            placeholder="0"
          />
        </div>

        {/* VALIDITY Dropdown */}

        <div className="relative flex flex-col justify-center p-2 border border-gray-600 rounded-md bg-black3">
          <div className="flex gap-2">
            <label className="font-normal text-base text-gray3">VALIDITY</label>
            <ChevronDown className="text-gray2" />
          </div>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="font-normal text-base text-gray3 flex gap-5"
          >
            {formData.validity}
          </button>

          {open && (
            <div className="absolute left-0 mt-[130px] w-32 bg-black3 border border-gray-600 rounded-md shadow-lg">
              {validityOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    handleInputChange("validity", option);
                    setOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-700"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center p-2 border border-gray-600 rounded-md bg-black3">
          <label className="font-normal text-base text-gray3">VALID TILL</label>

          <input
            type="date"
            name="validtill"
            value={formData.validtill}
            onChange={(e) => handleInputChange("validtill", e.target.value)}
            placeholder="DD/MM/YYYY"
            className="placeholder-white bg-black3 w-28 text-white outline-none focus:ring-0"
          />
        </div>
      </div>
      {message && <p className="text-red-500 text-xl mt-1">{message}</p>}
      {qtyError && <p className="text-red-500 text-xl mt-1">{qtyError}</p>}
    </div>
  );
}

export default TopInformation;
