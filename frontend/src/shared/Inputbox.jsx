export default function InputBox({ label, date }) {
  return (
    <div className="rounded-lg flex flex-col  border border-[#828282] bottom-2 bg-[#141414] w-[466px] h-[63px] p-2 py-2">
      <label
        className="text-[#828282] font-roboto text-[12px] font-normal leading-7 tracking-[0.15px]"
        htmlFor=""
      >
        {label}
      </label>
      <input className="text-white outline-none bg-[#141414] font-roboto text-[16px] font-normal leading-[12px] tracking-[0.15px]" />{" "}
    </div>
  );
}
