import { X } from "lucide-react";
import marketWatch from "../../assets/market_watch.png";
import marketDepth from "../../assets/market_depth.png";
import news from "../../assets/news.png";
import OrderItem from "../item/OrderItem";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Market = ({ onClose }) => {
  const marketRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (marketRef.current && !marketRef.current.contains(event.target)) {
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
      ref={marketRef}
      className="fixed top-0 left-[88px] bg-[#141414] p-4 space-y-6 w-[300px] h-screen z-10"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">Market</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white  duration-200"
          aria-label="Close order options"
        >
          <X size={24} />
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <Link to="market-watch" onClick={() => onClose()}>
          <OrderItem
            imageSrc={marketWatch}
            altText="Market Watch"
            title="Market Watch"
            bgColorClass="from-[#2E59E51A] to-[#2E59E599]"
            to="market-watch"
          />
        </Link>
        <Link to="market-depth" onClick={() => onClose()}>
          <OrderItem
            imageSrc={marketDepth}
            altText=" Market Depth"
            title="Market Depth"
            bgColorClass="from-[#33C8F61A] to-[#33C8F6]"
          />
        </Link>
        <OrderItem
          imageSrc={news}
          altText="News"
          title="News"
          bgColorClass="from-[#35C0951A] to-[#35C095]"
        />
      </div>
    </div>
  );
};

export default Market;
