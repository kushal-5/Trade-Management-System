import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import collateral from "../../assets/collateral.png";
import settlement from "../../assets/fund.png";
import history from "../../assets/transfer_history.png";
import OrderItem from "../item/OrderItem";

const Fund = ({ onClose }) => {
  const fundRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (fundRef.current && !fundRef.current.contains(event.target)) {
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
      ref={fundRef}
      className="fixed top-0 left-[88px] bg-[#141414] p-4 space-y-6 w-[300px] h-screen z-10"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">Fund</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white duration-200"
          aria-label="Close order options"
        >
          <X size={24} />
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <Link to="/collateral" className="block" onClick={() => onClose()}>
          <OrderItem
            imageSrc={collateral}
            altText="Market Watch"
            title="Collateral Manage"
            bgColorClass="from-[#2E59E51A] to-[#2E59E599]"
          />
        </Link>
        <Link to="/information" className="block" onClick={() => onClose()}>
          <OrderItem
            imageSrc={settlement}
            altText="Fund"
            title="Fund Settlement"
            bgColorClass="from-[#33C8F61A] to-[#33C8F6]"
          />
        </Link>

        <Link to="/history" className="block" onClick={() => onClose()}>
          <OrderItem
            imageSrc={history}
            altText="History"
            title="Transfer History"
            bgColorClass="from-[#35C0951A] to-[#35C095]"
          />
        </Link>
      </div>
    </div>
  );
};

export default Fund;
