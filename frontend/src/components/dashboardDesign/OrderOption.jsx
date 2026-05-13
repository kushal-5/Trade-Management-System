import { X } from "lucide-react";
import buySell from "../../assets/sell_buy.png";
import orderBook from "../../assets/order_book.png";
import dailyOrder from "../../assets/daily_order.png";
import OrderItem from "../item/OrderItem";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const OrderOptions = ({ onClose }) => {
  const orderRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (orderRef.current && !orderRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div
      ref={orderRef}
      className="fixed top-0 left-[88px] bg-[#141414] p-4 w-[300px] h-screen z-10"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">Order</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white  duration-200"
          aria-label="Close order options"
        >
          <X size={24} />
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <Link to="orderentry" onClick={() => onClose()}>
          <OrderItem
            imageSrc={buySell}
            altText="Buy/Sell"
            title="Buy/Sell"
            bgColorClass="from-[#2E59E51A] to-[#2E59E599]"
          />
        </Link>
        <Link to={"historic_order"} onClick={() => onClose()}>
          <OrderItem
            imageSrc={orderBook}
            altText="Historic Order Book"
            title="Historic Order Book"
            bgColorClass="from-[#33C8F61A] to-[#33C8F6]"
          />
        </Link>

        <Link to="/daily_order" onClick={() => onClose()}>
          <OrderItem
            imageSrc={dailyOrder}
            altText="Daily Order Book"
            title="Daily Order Book"
            bgColorClass="from-[#35C0951A] to-[#35C095]"
          />
        </Link>
      </div>
    </div>
  );
};

export default OrderOptions;
