import { X } from "lucide-react";
import historyTradeBook from "../../assets/history_trade.png";
import tradeBook from "../../assets/trade.png";
import OrderItem from "../item/OrderItem";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const TradesOptions = ({ onClose }) => {
  const tradeRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (tradeRef.current && !tradeRef.current.contains(event.target)) {
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
      ref={tradeRef}
      className="fixed top-0 left-[88px] bg-[#141414] p-4  w-[300px] h-screen z-10"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">Trade</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white  duration-200"
          aria-label="Close order options"
        >
          <X size={24} />
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <Link to="/trade_data" onClick={() => onClose()}>
          <OrderItem
            imageSrc={tradeBook}
            altText="Daily Trade Book"
            title="Daily Trade Book"
            bgColorClass="from-[#2E59E51A] to-[#2E59E599]"
          />
        </Link>

        <Link to="/historic_trade" onClick={() => onClose()}>
          <OrderItem
            imageSrc={historyTradeBook}
            altText="Historic Trade Book"
            title="Historic Trade Book"
            bgColorClass="from-[#33C8F61A] to-[#33C8F6]"
          />
        </Link>
      </div>
    </div>
  );
};

export default TradesOptions;
