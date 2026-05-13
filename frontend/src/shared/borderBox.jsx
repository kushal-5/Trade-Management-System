const BorderBox = ({ label, input }) => {
  return (
    <div className="rounded-lg border border-[#828282] bottom-2 bg-black3 w-[466px] h-[63px] p-2 py-2">
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
  );
};

export default BorderBox;
