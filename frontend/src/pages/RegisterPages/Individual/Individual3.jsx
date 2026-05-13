import { useState, useRef } from "react";
import "nepali-datepicker-reactjs/dist/index.css";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import CalendarIcon from "../../../assets/images/registrationImages/calendar.svg";
import LabelInput from "../../../shared/LabelInput";
import { useFormContext } from "../../../contexts/formProvider";
import { ChevronDown } from "lucide-react";

const Individual3 = () => {
  const { formData, updateNestedField } = useFormContext();

  const initialValues = {
    dateOfBirthAD: formData?.Individual?.dateOfBirthAD || "",
    dateOfBirthBS: formData?.Individual?.dateOfBirthAD || "",
    fatherName: formData?.Individual?.fatherName || "",
    motherName: formData?.Individual?.motherName || "",
    grandfatherName: formData?.Individual?.grandfatherName || "",
    maritalStatus: formData?.Individual?.maritalStatus || "",
    nationality: formData?.Individual?.nationality || "",
    isNRN: formData?.Individual?.isNRN || false,
    isMinor: formData?.Individual?.isMinor || false,
  };
  const [maritalStatus, setMaritalStatus] = useState(
    formData?.Individual?.maritalStatus || ""
  );
  const [nationality, setNationality] = useState(
    formData?.Individual?.nationality || ""
  );
  const [isMinor, setIsMinor] = useState(
    formData?.Individual?.isMinor || false
  );
  const [isNRN, setIsNRN] = useState(formData?.Individual?.isNRN || false);

  const regDateADRef = useRef(null);
  const regDateBSRef = useRef(null);

  const handleSelect = (key, value) => {
    updateNestedField(`Individual.${key}`, value);
  };

  const handleMaritalStatus = (e) => {
    const value = e.target.value;
    setMaritalStatus(value);
    handleSelect("maritalStatus", value);
  };

  const handleNationality = (e) => {
    const value = e.target.value;
    setNationality(value);
    handleSelect("nationality", value);
  };

  const handleMinor = () => {
    const value = !isMinor;
    setIsMinor(value);
    updateNestedField("Individual.isMinor", value);
  };

  const handleNRN = () => {
    const value = !isNRN;
    setIsNRN(value);
    updateNestedField("Individual.isNRN", value);
  };

  // Handle date changes
  const handleDateChange = (key, value) => {
    handleSelect(key, value);
  };

  return (
    <div className="top-40 left-[32rem]  w-[61.5rem]">
      <h1 className="text-white font-roboto text-5xl font-medium leading-none tracking-[1.92px] mb-20 text-start">
        Individual Information & Details
      </h1>
      <div className="grid  grid-cols-2 gap-4 w-[full]">
        {/* Row 1 */}
        <div className="w-[28rem] relative">
          <label className="text-[#828282] font-roboto text-base font-normal leading-4">
            Date of Birth A.D
          </label>
          <div className="relative">
            <img
              src={CalendarIcon}
              alt="calendar"
              className="absolute left-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
              />
            <input
              onClick={() => regDateADRef.current?.showPicker()}
              type="date"
              ref={regDateADRef}
              value={formData?.Individual?.dateOfBirthAD || ""}
              onChange={(e) =>
                handleDateChange("dateOfBirthAD", e.target.value)
              }
              className="text-[#BDBDBD] font-roboto w-full h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
               border-[#BDBDBD] rounded-md py-6 px-2 pl-12"
            />
          </div>
        </div>

        <div className="w-[28rem] relative ">
        <label className="text-[#828282] font-roboto text-base font-normal leading-4">
            Date of Birth B.S.
          </label>
          <div className="relative bg-black w-[28rem] border-[.1px] border-[#BDBDBD] rounded-md">
            <img
              src={CalendarIcon}
              alt="calendar"
              className="absolute left-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
              />
            <NepaliDatePicker
              onClick={() => regDateBSRef.current?.focus()}
              inputClassName="form-control"
              inputRef={regDateBSRef}
              value={formData?.Individual?.dateOfBirthBS || ""}
              onChange={(date) => handleDateChange("dateOfBirthBS", date)}
              options={{ calenderLocale: "ne", valueLocale: "en" }}
          
            />
          </div>
        </div>

        {/* Row 2 */}
        <LabelInput
          htmlFor="name"
          labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
          type="name"
          id="fatherName"
          label="Father's Name"
          placeholder="Father's Name"
          value={formData?.Individual?.fatherName || ""}
          onChange={(e) => handleSelect("fatherName", e.target.value)}
        />
        <LabelInput
          htmlFor="name"
          labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
          type="name"
          id="motherName"
          label="Mother's Name"
          placeholder="Mother's Name"
          value={formData?.Individual?.motherName || ""}
          onChange={(e) => handleSelect("motherName", e.target.value)}
        />

        {/* Row 3 */}
        <LabelInput
          htmlFor="name"
          labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
          type="name"
          id="grandfatherName"
          label="Grandfather's Name"
          placeholder="Grandfather's Name"
          value={formData?.Individual?.grandfatherName || ""}
          onChange={(e) => handleSelect("grandfatherName", e.target.value)}
        />

        <div className="flex flex-col gap-4 w-[28rem]">
          {/* Label */}
          <label
            htmlFor="text"
            className="text-[#828282] font-roboto text-base font-normal leading-4"
          >
            Marital Status
          </label>

          {/* Styled Select Box */}
          <div className="relative w-[28rem]">
            <select
              id="countryType"
              value={maritalStatus}
              onChange={handleMaritalStatus}
             className="text-[#BDBDBD] font-roboto w-full h-[3.75rem] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none "
            >
              <option
                value=""
                defaultValue="Select Marital Status"
                className="text-[#E0E0E0] bg-black"
              >
                Select Marital Status
              </option>
              <option className="text-[#E0E0E0] bg-black">Single</option>
              <option className="text-[#E0E0E0] bg-black">Married</option>
              <option className="text-[#E0E0E0] bg-black">Others</option>
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#BDBDBD]">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>

        {/* Row 4 */}
        <div className="flex gap-8">
          <div className="flex flex-col gap-4 w-[28rem]">
            {/* Label */}
            <label
              htmlFor="text"
              className="text-[#828282] font-roboto text-base font-normal leading-4"
            >
              Nationality
            </label>

            {/* Styled Select Box */}
            <div className="relative w-[28rem]">
              <select
                id="nationality"
                value={nationality}
                onChange={handleNationality}
                  className="text-[#BDBDBD] font-roboto w-full h-[3.75rem] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none " 
              >
                <option
                  value="Nepalese"
                  defaultValue="Nepalese"
                  className="text-[#E0E0E0] bg-black"
                >
                  Nepalese
                </option>
                <option value="Nepalese" className="text-[#E0E0E0] bg-black">Nepalese</option>

              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#BDBDBD]">
              <ChevronDown size={20} />
            </div>
            </div>
          </div>

          <div className="flex flex-row gap-32 ms-4 mt-2">
            {/* Is User NRN Section */}
            <div className="flex flex-col items-start gap-0">
              <label className="text-[#828282] font-roboto text-base font-normal leading-4">
                Is user NRN?
              </label>
              <div className="flex items-center gap-5 mt-8">
                <span
                  className={`font-medium ${
                    !isNRN ? "text-[#BDBDBD]" : "text-gray-400"
                  }`}
                >
                  No
                </span>
                <button
                  aria-checked={isNRN}
                  onClick={handleNRN}
                  className={`w-16 h-8 flex items-center px-1 rounded-full transition duration-300 ${
                    isNRN ? "bg-[#F1F510]" : "bg-gray-500"
                  }`}
                >
                  <div
                    className={`w-6 h-6 bg-black rounded-full shadow-md transform transition ${
                      isNRN ? "translate-x-8" : "translate-x-0"
                    }`}
                  />
                </button>
                <span
                  className={`font-medium ${
                    isNRN ? "text-[#BDBDBD]" : "text-gray-400"
                  }`}
                >
                  Yes
                </span>
              </div>
            </div>

            {/* Is User Minor Section */}
            <div className="flex flex-col items-start gap-2">
              <label className="text-[#828282] font-roboto text-base font-normal leading-4">
                Is user a minor?
              </label>
              <div className="flex items-center gap-3  mt-8">
                <span
                  className={`font-medium ${
                    !isMinor ? "text-[#BDBDBD]" : "text-gray-400"
                  }`}
                >
                  No
                </span>
                <button
                  aria-checked={isMinor}
                  onClick={handleMinor}
                  className={`w-16 h-8 flex items-center px-1 rounded-full transition duration-300 ${
                    isMinor ? "bg-[#F1F510]" : "bg-gray-500"
                  }`}
                >
                  <div
                    className={`w-6 h-6 bg-black rounded-full shadow-md transform transition ${
                      isMinor ? "translate-x-8" : "translate-x-0"
                    }`}
                  />
                </button>
                <span
                  className={`font-medium ${
                    isMinor ? "text-[#BDBDBD]" : "text-gray-400"
                  }`}
                >
                  Yes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Individual3;
