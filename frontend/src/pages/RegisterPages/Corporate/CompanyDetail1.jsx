import { useState } from "react";
import LabelInput from "../../../shared/LabelInput";
import { useFormContext } from "../../../contexts/formProvider";
import { ChevronDown } from "lucide-react";

const CompanyDetails1 = () => {
  const { formData, updateNestedField } = useFormContext();

  const [isSubsidiary, setIsSubsidiary] = useState(
    formData?.Corporate?.isSubsidiary || false
  );
  const [isListed, setIsListed] = useState(
    formData?.Corporate?.isListed || false
  );

  const handleSelect = (key, value) => {
    updateNestedField(`Corporate.${key}`, value);
  };

  const handleToggleSubsidiary = () => {
    const newValue = !isSubsidiary;
    setIsSubsidiary(newValue);
    updateNestedField("Corporate.isSubsidiary", newValue); // Update formData
  };

  const handleToggleListed = () => {
    const newValue = !isListed;
    setIsListed(newValue);
    updateNestedField("Corporate.isListed", newValue); // Update formData
  };

  return (
    <div className="top-60 left-[32rem]">
      <h1 className="text-white font-roboto text-4xl font-medium leading-none tracking-[1.92px] mb-20 text-start">
        Corporate Information & Details
      </h1>

      {/* Grid with 2 Rows */}
      <div className="grid grid-cols-2 gap-4">
        {/* Company Name */}
        <LabelInput
          htmlFor="name"
          value={formData?.Corporate?.companyName || ""}
          onChange={(e) => handleSelect("companyName", e.target.value)}
          type="text"
          id="name"
          label="Company Name"
          placeholder="Company Name"
        />

        {/* Company Type */}
        <div className="flex flex-col gap-2 w-[28rem] ">
          {/* Label */}
          <label
            htmlFor="companyType"
            className="text-[#828282] font-roboto text-base font-normal"
          >
            Company Type
          </label>

          {/* Styled Select Box */}
          <div className="relative ">
            <select
              id="companyType"
              value={formData?.Corporate?.companyType || ""}
              onChange={(e) => handleSelect("companyType", e.target.value)}
              className="text-[#BDBDBD] font-roboto w-full h-[3.75rem] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px]
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none "
            >
              <option value="" disabled className="text-[#E0E0E0] bg-black">
                Select Company Type
              </option>
              <option value="Private" className="text-[#E0E0E0] bg-black">
                Private Limited
              </option>
              <option value="Public Ltd." className="text-[#E0E0E0] bg-black">
                Public Limited
              </option>
              <option value="Govt. Owned" className="text-[#E0E0E0] bg-black">
                Government Owned
              </option>
            </select>
          </div>
        </div>

        {/* Row 2: Registration Number + Toggle Buttons */}

        <LabelInput
          htmlFor="number"
          value={formData?.Corporate?.companyRegistrationNum || ""}
          onChange={(e) =>
            handleSelect("companyRegistrationNum", e.target.value)
          }
          type="number"
          id="number"
          label="Company Registration Number"
          placeholder="Company Registration Number"
        />

        {/* Toggle Buttons */}
        <div className="flex-row flex gap-[2rem]">
          {/* Is Subsidiary Toggle */}
          <div>
            <label className="flex-row text-[#828282] font-roboto text-base font-normal leading-4 py-2">
              Is it a subsidiary?
            </label>
            <div className="flex items-center  gap-3">
              <span
                className={`font-medium ${
                  !isSubsidiary ? "text-[#BDBDBD]" : "text-gray-400"
                }`}
              >
                No
              </span>
              <button
                aria-checked={isSubsidiary}
                onClick={handleToggleSubsidiary}
                className={`w-16 h-8 flex items-center px-1 rounded-full transition duration-300 ${
                  isSubsidiary ? "bg-[#F1F510]" : "bg-gray-500"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-black rounded-full shadow-md transform transition ${
                    isSubsidiary ? "translate-x-8" : "translate-x-0"
                  }`}
                />
              </button>
              <span
                className={`font-medium ${
                  isSubsidiary ? "text-[#BDBDBD]" : "text-gray-400"
                }`}
              >
                Yes
              </span>
            </div>
          </div>

          {/* Is Listed Toggle */}
          <div>
            <label className="text-[#828282] font-roboto text-base font-normal leading-4 py-2">
              Is it listed?
            </label>
            <div className="flex items-center gap-3">
              <span
                className={`font-medium ${
                  !isListed ? "text-[#BDBDBD]" : "text-gray-400"
                }`}
              >
                No
              </span>
              <button
                aria-checked={isListed}
                onClick={handleToggleListed}
                className={`w-16 h-8 flex items-center px-1 rounded-full transition duration-300 ${
                  isListed ? "bg-[#F1F510]" : "bg-gray-500"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-black rounded-full shadow-md transform transition ${
                    isListed ? "translate-x-8" : "translate-x-0"
                  }`}
                />
              </button>
              <span
                className={`font-medium ${
                  isListed ? "text-[#BDBDBD]" : "text-gray-400"
                }`}
              >
                Yes
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails1;
