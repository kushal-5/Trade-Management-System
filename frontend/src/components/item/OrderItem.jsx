
const OrderItem = ({ imageSrc, altText, title, bgColorClass }) => {
  return (
    <button
      className={`w-full h-[220px] relative overflow-hidden rounded-xl bg-gradient-to-tr ${bgColorClass} text-white text-left p-4 shadow-lg transition-transform hover:scale-105 flex flex-col justify-between `}
    >
      <div className="flex items-center justify-center flex-grow -mt-8">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={altText}
          className="w-[194px] h-[187px] ms-28 "
        />
      </div>
      <div className="flex justify-center">
        <span className="text-lg font-semibold">{title}</span>
       
      </div>
    </button>
  );
};

export default OrderItem;
