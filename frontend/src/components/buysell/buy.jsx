import OrderTable from "./orderTable";
import TopInformation from "./topinfo";
import { CircleSlash } from "lucide-react";
import OrderWatchTable from "./watchtable";
import OrderBuySellTable from "./buyselltable";
import { useOrder } from "../../contexts/order/orderContext";
import { ToastContainer } from "react-toastify";

function BuySellSection() {
  const { handleFormSubmit, handleOrderDelete, formData, mode, orderData } =
    useOrder();

  const isFormValid = Object.values(formData).every(
    (value) => value !== "" && value !== 0
  );
  console.log(orderData);
  return (
    <div className="flex flex-col gap-5 ms-6 ">
      <TopInformation />

      <div className="flex justify-between">
        <div className="w-full">
          <OrderWatchTable />
        </div>
        <div className=" flex flex-col gap-1 ">
          <button
            onClick={handleFormSubmit}
            value={orderData?.symbol}
            disabled={!isFormValid}
            className={`p-1 rounded-md ${
              mode === "buy"
                ? "bg-blue1"
                : mode === "sell"
                ? "bg-red1"
                : "opacity-0"
            } ${!isFormValid ? "opacity-0 cursor-not-allowed" : ""}`}
          >
            {mode.toUpperCase()}
          </button>
          <ToastContainer />
          <button
            onClick={() => handleOrderDelete(orderData._id)}
            className="bg-seeWarnings p-1 text-black rounded-md flex gap-2 items-center w-[150px]"
          >
            <CircleSlash size={20} />
            CANCEL
          </button>
        </div>
      </div>
      <div>
        <OrderBuySellTable />
      </div>
      <div>
        <h1 className="text-xl font-normal ms-2">Order Book</h1>
        <div className="mt-5">
          <OrderTable />
        </div>
      </div>
    </div>
  );
}

export default BuySellSection;
