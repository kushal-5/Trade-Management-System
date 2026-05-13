import React from "react";
import { useFormContext } from "../../../contexts/formProvider";

const MoneyLaunder1 = () => {
  const { formData, updateNestedField } = useFormContext();

  const selected = formData?.MoneyLaunder?.isHighRankingPolitician || "";

  const handleSelect = (value) => {
    updateNestedField("MoneyLaunder.isHighRankingPolitician", value);
  };

  return (
    <div className=" top-60 left-[32rem] w-[61.5rem]">
      <h1 className="text-white font-roboto text-4xl font-medium leading-none tracking-[1.92px] text-start mb-20">
        Money Laundering Prevention
      </h1>
      <div className="flex flex-col gap-20">
        <label className="text-white font-roboto text-2xl  items-start font-normal leading-normal tracking-[0.96px] capitalize">
          Are You A Politician Or A High-Ranking Politician?
        </label>
        <div className="flex gap-8 ms-44">
          {/* Yes Button */}
          <div
            onClick={() => handleSelect("yes")}
            className={`w-[114px] h-[114px] rounded-full flex items-center justify-center cursor-pointer transition-colors ${
              selected === "yes"
                ? "bg-[#01BAEF] text-[#4F4F4F]"
                : "bg-black border-2 border-[#4F4F4F] text-[#4F4F4F] hover:bg-[#4F4F4F]"
            } text-[#4F4F4F] font-roboto text-3xl font-normal leading-[140%] capitalize`}
          >
            Yes
          </div>

          {/* No Button */}
          <div
            onClick={() => handleSelect("no")}
            className={`w-[114px] h-[114px] rounded-full flex items-center justify-center cursor-pointer transition-colors ${
              selected === "no"
                ? "bg-[#01BAEF] text-[#4F4F4F]"
                : "bg-black border-2 border-[#4F4F4F] text-[#4F4F4F] hover:bg-[#4F4F4F]"
            } text-[#4F4F4F] font-roboto text-3xl font-normal leading-[140%] capitalize`}
          >
            No
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyLaunder1;
