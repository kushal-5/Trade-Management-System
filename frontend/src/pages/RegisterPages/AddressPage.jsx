import Corporate from "../../assets/images/registrationImages/corAddress.svg";
import UC from "../../assets/images/registrationImages/corporateC.svg";
import Registered from "../../assets/images/registrationImages/regAddress.svg";
import URegistered from "../../assets/images/registrationImages/registeredUC.svg";
import Branch from "../../assets/images/registrationImages/branAddress.svg";
import UBranch from "../../assets/images/registrationImages/branchC.svg";
import TickIcon from "../../assets/images/registrationImages/checkBlue.svg";
import LabelInput from "../../shared/LabelInput";
import { useFormContext } from "../../contexts/formProvider";
import { ChevronDown } from "lucide-react";
const addressTypes = [
  { name: "Corporate Office", image: Corporate, imageNC: UC },
  { name: "Registered Office", image: URegistered, imageNC: Registered },
  { name: "Branch Office", image: UBranch, imageNC: Branch },
];
const Address = () => {
  const { formData, updateNestedField } = useFormContext();
  const selectedAddress = formData?.Address?.addressType || "";
  const handleSelect = (key, value) =>
    updateNestedField(`Address.${key}`, value);
  return (
    <div className="flex flex-col">
      <h1 className="text-white font-roboto text-4xl font-medium tracking-[1.92px] mb-16 text-start">
        Address Information & Details
      </h1>
      <div className="grid grid-cols-2 gap-6 w-[60rem]">
        {/* Country Selection */}
        <div className="flex flex-col gap-2 w-[28rem]">
          <label
            htmlFor="countryType"
            className="text-[#828282] font-roboto text-base font-normal leading-2"
          >
            Country Of Residence
          </label>
          <div className="relative w-full">
            <select
              id="countryType"
              value={formData?.Address?.countryOfResidence || ""}
              onChange={(e) =>
                handleSelect("countryOfResidence", e.target.value)
              }
              className="text-[#BDBDBD] font-roboto w-full h-[3.75rem] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px]
            rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none "
            >
              <option value="" disabled>
                Select Country
              </option>
              <option value="Nepal">Nepal</option>
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#BDBDBD]">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>
        {/* State Selection */}
        <div className="flex flex-col gap-2 w-[28rem]">
          <label
            htmlFor="stateType"
            className="text-[#828282] font-roboto text-base font-normal leading-2"
          >
            State
          </label>
          <div className="relative w-full">
            <select
              id="stateType"
              value={formData?.Address?.state || ""}
              onChange={(e) => handleSelect("state", e.target.value)}
              className="text-[#BDBDBD] font-roboto w-full h-[3.75rem] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px]
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none "
            >
              <option value="" disabled>
                Select State
              </option>
              <option value="State 1">State 1</option>
              <option value="State 2">State 2</option>
              <option value="State 3">State 3</option>
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#BDBDBD]">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>

        {/* District Selection */}
        <div className="flex flex-col gap-2 w-[28rem]">
          <label
            htmlFor="districtType"
            className="text-[#828282] font-roboto text-base font-normal leading-4 py-0"
          >
            Select District
          </label>
          <div className="relative w-full">
            <select
              id="districtType"
              value={formData?.Address?.district || ""}
              onChange={(e) => handleSelect("district", e.target.value)}
              className="text-[#BDBDBD] font-roboto w-full h-[3.75rem] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px]
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none "
            >
              <option value="" disabled>
                Select District
              </option>
              <option value="District 1">District 1</option>
              <option value="District 2">District 2</option>
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#BDBDBD]">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>
        {/* Municipality Selection */}
        <div className="flex flex-col gap-2 w-[28rem] relative">
          <label
            htmlFor="municipality"
            className="text-[#828282] font-roboto text-base font-normal leading-4 py-0"
          >
            Municipality
          </label>

          <div className="relative">
            <select
              id="municipality"
              aria-label="Select Municipality"
              value={formData?.Address?.municipality || ""}
              onChange={(e) => handleSelect("municipality", e.target.value)}
              className="text-[#BDBDBD] font-roboto w-full h-[3.75rem] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px]
        rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none"
            >
              <option value="" disabled>
                Select Municipality
              </option>
              <option value="Kohalpur">Kohalpur</option>
              <option value="Nepalgunj">Nepalgunj</option>
            </select>

            {/* Custom dropdown arrow */}
            <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#BDBDBD]">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>

        {/* Ward No. & Street/Tole */}
        <LabelInput
          htmlFor="wardNum"
          labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 "
          label="Ward No."
          value={formData?.Address?.wardNum || ""}
          onChange={(e) => handleSelect("wardNum", e.target.value)}
          placeholder="Ward No."
        />
        <LabelInput
          htmlFor="street"
          labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 "
          label="Street/Tole"
          value={formData?.Address?.street || ""}
          onChange={(e) => handleSelect("street", e.target.value)}
          placeholder="Street/Tole"
        />
        {/* Address Type Selection */}
        <div className="flex flex-col gap-[0.75rem] mb-16">
          <label className="text-[#828282] font-roboto text-base mt-6">
            Address Type
          </label>
          <div className="flex gap-[1.875rem] w-[41.81462rem]">
            {addressTypes.map((item) => (
              <div
                key={item.name}
                role="button"
                tabIndex="0"
                className={`relative flex flex-row items-start w-[30rem] h-[4.75rem] border-[.1px] rounded-lg px-4 py-4 gap-2 ${
                  selectedAddress === item.name
                    ? "border-[#01BAEF] shadow-md "
                    : "border-[#BDBDBD]"
                }`}
                onClick={() => handleSelect("addressType", item.name)}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleSelect("addressType", item.name)
                }
              >
                {selectedAddress === item.name && (
                  <img
                    src={TickIcon}
                    alt="Selected"
                    className="absolute -top-2 -right-2 w-6 h-6 p-1 bg-[#2D2D2D] rounded-full"
                  />
                )}
                <img
                  src={
                    selectedAddress === item.name ? item.image : item.imageNC
                  }
                  alt={item.name}
                  className="w-10 h-10 object-contain"
                />
                <h1
                  className={`text-base font-medium ${
                    selectedAddress === item.name
                      ? "text-[#01BAEF]"
                      : "text-[#4F4F4F]"
                  }`}
                >
                  {item.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Address;
