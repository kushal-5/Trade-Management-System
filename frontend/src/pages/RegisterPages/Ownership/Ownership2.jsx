import { useState } from "react";
import Sms from "../../../assets/images/signinImages/sms.svg";
import LabelInput from "../../../shared/LabelInput";
import { useFormContext } from "../../../contexts/formProvider";
import { ChevronDown } from "lucide-react";

const Ownership2 = () => {
  const { formData, updateNestedField } = useFormContext();

  const initialValues = {
    designation: formData?.Ownership?.designation || "",
    fatherName: formData?.Ownership?.fatherName || "",
    grandfatherName: formData?.Ownership?.grandfatherName || "",
    panNumber: formData?.Ownership?.panNumber || "",
    email: formData?.Ownership?.email || "",
  };

  const [selectDesignation, setSelectDesignation] = useState(
    initialValues.designation
  );

  const handleSelect = (key, value) => {
    updateNestedField(`Ownership.${key}`, value);
  };

  const handleDesignation = (e) => {
    const value = e.target.value;
    setSelectDesignation(value);
    updateNestedField("Ownership.designation", value);
  };

  return (
    <div className="top-60 left-[32rem] w-[61.5rem]">
      <h1 className="text-white font-roboto text-4xl font-medium leading-none tracking-[1.92px] mb-20 text-start">
        Ownership Information & Details
      </h1>

      <div className="grid  grid-cols-2 gap-4 w-full ">
        {/* Designation Dropdown */}
        <div className="flex flex-col gap-2 w-[28rem]">
          <label
            htmlFor="designation"
            className="text-[#828282] font-roboto text-lg font-normal"
          >
            Designation
          </label>
          <div className="relative w-full ">
            <select
              id="designation"
              value={selectDesignation}
              onChange={handleDesignation}
              className="text-[#BDBDBD] font-roboto w-full h-[3.75rem] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
          rounded-md  px-3 cursor-pointer appearance-none focus:outline-none "
            >
              <option value="" disabled className="text-[#E0E0E0] bg-black">
                Select Designation
              </option>
              <option value="Director" className="text-[#E0E0E0] bg-black">
                Director
              </option>
              <option value="Chairman" className="text-[#E0E0E0] bg-black">
                Chairman
              </option>
              <option value="Board Member" className="text-[#E0E0E0] bg-black">
                Board Member
              </option>
              <option value="CEO" className="text-[#E0E0E0] bg-black">
                CEO
              </option>
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#BDBDBD]">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>

        {/* Father Name Input */}
        <LabelInput
          htmlFor="fatherName"
          labelClassName="text-[#828282] font-roboto text-lg font-normal leading-4 py-2"
          inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-6 px-2"
          type="text"
          id="fatherName"
          label="Father Name"
          placeholder="Father Name"
          value={formData?.Ownership?.fatherName || ""}
          onChange={(e) => handleSelect("fatherName", e.target.value)}
        />

        {/* Grandfather Name Input */}
        <LabelInput
          htmlFor="grandfatherName"
          labelClassName="text-[#828282] font-roboto text-lg font-normal leading-4 py-2"
          inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-6 px-2"
          type="text"
          id="grandfatherName"
          label="Grandfather Name"
          placeholder="Grandfather Name"
          value={formData?.Ownership?.grandfatherName || ""}
          onChange={(e) => handleSelect("grandfatherName", e.target.value)}
        />

        {/* Pan Number Input */}
        <LabelInput
          htmlFor="panNumber"
          labelClassName="text-[#828282] font-roboto text-lg font-normal leading-4 py-2"
          inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-6 px-2"
          type="number"
          id="panNumber"
          label="Pan Number"
          placeholder="Pan Number"
          value={formData?.Ownership?.panNumber || ""}
          onChange={(e) => handleSelect("panNumber", e.target.value)}
        />

        {/* Email Input */}
        <LabelInput
          htmlFor="email"
          src={Sms}
          labelClassName="text-[#828282] font-roboto text-lg font-normal leading-4 py-2"
          inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-6 px-2"
          type="email"
          id="email"
          label="Email"
          placeholder="Email"
          value={formData?.Ownership?.email || ""}
          onChange={(e) => handleSelect("email", e.target.value)}
        />
      </div>
    </div>
  );
};

export default Ownership2;
