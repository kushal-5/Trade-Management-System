import { useRef } from "react";

const DateInput = ({ label, src1, src2, value, onChange }) => {
  const dateInputRef = useRef(null);

  return (
    <div className="w-full relative">
      <label className="text-[#828282] font-roboto text-base font-normal leading-4">
        {label}
      </label>
      <div className="relative">
        <img
          src={src1}
          alt="img1"
          className="absolute left-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={() => dateInputRef.current?.showPicker()}
        />
        <input
          type="date"
          value={value}
          onChange={onChange}
          className="text-[#BDBDBD] font-roboto w-[470px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[#BDBDBD] rounded-md py-[1.5rem] px-2 pl-12"
        />
      </div>
    </div>
  );
};

export default DateInput;
