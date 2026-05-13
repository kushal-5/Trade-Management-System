const Box = ({ label, input }) => {
  return (
    <div className="rounded-lg  bottom-2 bg-black2  p-4 py-2">
      <label
        className="text-white font-roboto text-[16px] font-normal leading-7 tracking-[0.15px]"
        htmlFor=""
      >
        {label}
      </label>
      <h1 className="text-white font-roboto text-[12px]  font-normal leading-[12px] tracking-[0.15px]">
        {input}
      </h1>
    </div>
  );
};

export default Box;
