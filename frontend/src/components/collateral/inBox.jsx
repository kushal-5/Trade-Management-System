import { ChevronDown } from "lucide-react";
const InBox = ({ label, input, src }) => {
  return (
    <div className="flex justify-between rounded-lg border border-[#828282] bg-[#141414] w-[466px] h-[63px] p-2 py-2">
      <div className="flex gap-3 items-center">
        <img className="w-[17px] h-[17px] " src={src} />

        <div>
          <label
            className="text-[#828282] font-roboto text-[12px] font-normal leading-7 tracking-[0.15px]"
            htmlFor=""
          >
            {label}
          </label>
          <h1 className="text-white font-roboto text-[16px] font-normal leading-[12px] tracking-[0.15px]">
            {input}
          </h1>
        </div>
      </div>
      <ChevronDown className="text-[#828282] mt-2" />
    </div>
  );
};

export default InBox;
