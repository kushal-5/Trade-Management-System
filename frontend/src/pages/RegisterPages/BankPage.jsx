import { useState } from "react";
import LabelInput from "../../shared/LabelInput";
import { useFormContext } from "../../contexts/formProvider";
import { ChevronDown } from "lucide-react";

const Bank = () => {
  const { formData, updateNestedField } = useFormContext();


  const [bankName, setBankName] = useState(formData?.Bank?.bankName || "");
  const [branch, setBranch] = useState(formData?.Bank?.branch || "");

  const [accountType, setAccountType] = useState(
    formData?.Bank?.accountType || ""
  );
  const handleSelect = (key, value) => {
    updateNestedField(`Bank.${key}`, value);
  };

  const handleBankName = (e) => {
    const value = e.target.value;
    setBankName(value);
    handleSelect("bankName", value);
  };

  const handleBranch = (e) => {
    const value = e.target.value;
    setBranch(value);
    handleSelect("branch", value);
  };

  const handleAccountType = (e) => {
    const value = e.target.value;
    setAccountType(value);
    handleSelect("accountType", value);
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-white font-roboto text-4xl font-medium leading-none tracking-[1.92px] mb-20 text-start">
        Bank Information & Details
      </h1>
      <div className="grid grid-cols-2 gap-6 w-[60rem]">
        {/* Bank Name */}
        <div className="flex flex-col gap-2 w-[28rem]">
          <label className="text-[#828282] font-roboto text-base font-normal leading-2">
            Bank Name
          </label>
          <select
            id="bankName"
            value={bankName}
            onChange={handleBankName}
            className="text-[#BDBDBD] font-roboto  text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] w-[28rem]
          rounded-md py-4 px-3 cursor-pointer appearance-none focus:outline-none focus:none focus:ring-[#BDBDBD] transition-all duration-300"
          >
            <option
              value=""
              defaultValue="Select Bank"
              className="text-[#E0E0E0] bg-black"
            >
              Select Bank
            </option>
            <option value="Global IME Bank" className="text-[#E0E0E0] bg-black">
              Global IME Bank
            </option>
            <option value="Sanima Bank" className="text-[#E0E0E0] bg-black">
              Sanima Bank
            </option>
            <option value="NIC Asia Bank" className="text-[#E0E0E0] bg-black">
              NIC Asia Bank
            </option>
          </select>
               <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#BDBDBD]">
                        <ChevronDown size={20} />
                      </div>
        </div>

        {/* Branch */}
        <div className="flex flex-col gap-2 w-[28rem]">
          <label className="text-[#828282] font-roboto text-base font-normal leading-2">
            Branch
          </label>
          <select
            id="branch"
            value={branch}
            onChange={handleBranch}
               className="text-[#BDBDBD] font-roboto w-full h-[3.75rem] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px]
            rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none "
            >
          
            <option value="" className="text-[#E0E0E0] bg-black">
              Select Branch
            </option>
            <option value="Kohalpur" className="text-[#E0E0E0] bg-black">
              Kohalpur
            </option>
            <option value="Kathmandu" className="text-[#E0E0E0] bg-black">
              Kathmandu
            </option>
            <option value="Lalitpur" className="text-[#E0E0E0] bg-black">
              Lalitpur
            </option>
          </select>
        </div>

        {/* Account Type */}
        <div className="flex flex-col gap-2 w-[28rem]">
          <label className="text-[#828282] font-roboto text-base font-normal leading-2">
            Account Type
          </label>
                   <div className="relative w-full">
          <select
            id="accountType"
            value={accountType}
            onChange={handleAccountType}
        className="text-[#BDBDBD] font-roboto w-full h-[3.75rem] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px]
            rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none "
          >
            <option value="">Select Account Type</option>
            <option value="Saving">Saving</option>
            <option value="Current">Current</option>
            <option value="Collateral">Collateral</option>
          </select>
            <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#BDBDBD]">
                        <ChevronDown size={20} />
                      </div>
                      </div>
        </div>


        {/* Account Number */}
        <LabelInput
          htmlFor="accountNumber"
          label="Account Number"
          value={formData?.Bank?.accountNumber || ""}
          onChange={(e) => handleSelect("accountNumber", e.target.value)}
          placeholder="Enter Account Number"
        />
      </div>
    </div>
  );
};

export default Bank;
