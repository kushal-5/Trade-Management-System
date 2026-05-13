import { createContext, useContext, useState, useEffect } from "react";
import { orderApiServices } from "../../services/orderApiService";
import { useMarket } from "../market/MarketContext";
import { toast } from "react-toastify";
const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderData, setOrderData] = useState(null);
  const [orderList, setOrderList] = useState([]);
  const [mode, setMode] = useState("default");
  const [formData, setFormData] = useState({
    inst: "EQ",
    symbol: "",
    qty: 0,
    price: 0,
    validity: "DAY",
    validtill: "",
  });

  const handleClick = (event) => {
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const clickPosition = event.clientX - left;

    if (clickPosition < width / 3) {
      setMode("sell");
    } else if (clickPosition > (2 * width) / 3) {
      setMode("buy");
    } else {
      setMode("default");
    }
  };
  const handleInputChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleFormSubmit = async () => {
    const updatedOrderData = {
      ...formData,
      type: mode,
    };

    try {
      const response = await orderApiServices.postOrderData(updatedOrderData);

      if (response.status === "success") {
        toast("Order submitted successfully!", {
          className: "bg-green-500 text-white",
        });
        setOrderData({ ...response.data, mode: response.data.type });
      } else if (response.status === "fail") {
        toast(response.error || "Something went wrong", {
          className: "bg-red-400 text-white",
        });
      } else {
        console.log("Unexpected response:", response);
      }
    } catch (error) {
      toast(error.response?.data.error || "Network error", {
        className: "bg-red-400 text-white",
      });
      console.error(
        "Error submitting order:",
        error.response?.data || error.message
      );
    } finally {
      // Always reset form, whether success or error
      setMode("default");
      setFormData({
        inst: "EQ",
        symbol: "",
        qty: 0,
        price: 0,
        validity: "DAY",
        validtill: "",
      });
    }
  };

  const handleOrderDelete = async (id) => {
    try {
      console.log("id", id);
      const response = await orderApiServices.deleteOrder(id);
      console.log("Order deleted successfully:", response.data);

      // Clear the orderData state
      setOrderData(null); // or setOrderData({}) depending on your initial state

      // Optionally, refresh the order list or update the UI accordingly
    } catch (err) {
      console.error("Error deleting order:", err.message);
    }
  };

  const fetchOrderList = async () => {
    try {
      const response = await orderApiServices.getOrderList();
      setOrderList(response.data);
    } catch (err) {
      console.error("Error fetching order list:", err.message);
    }
  };

  useEffect(() => {
    fetchOrderList();
  }, []);
  console.log(orderList);
  return (
    <OrderContext.Provider
      value={{
        formData,
        setFormData,
        handleInputChange,
        fetchOrderList,
        handleFormSubmit,
        handleClick,
        handleOrderDelete,
        mode,
        orderData,
        orderList,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
