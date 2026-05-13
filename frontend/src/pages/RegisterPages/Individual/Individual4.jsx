import { useState, useRef } from "react";
import "nepali-datepicker-reactjs/dist/index.css";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import CalendarIcon from "../../../assets/images/registrationImages/calendar.svg";
import LabelInput from "../../../shared/LabelInput";
import { useFormContext } from "../../../contexts/formProvider";
import { ChevronDown } from "lucide-react";

const Individual4 = () => {
  const { formData, updateNestedField } = useFormContext();

  const initialValues = {
    citizenshipNumber: formData?.Individual?.citizenshipNumber || "",
    citizenshipIssuedDistrict:
      formData?.Individual?.citizenshipIssuedDistrict || "",
    citizenshipIssuedDateAD:
      formData?.Individual?.citizenshipIssuedDateAD || "",
    citizenshipIssuedDateBS:
      formData?.Individual?.citizenshipIssuedDateBS || "",
    financialDetails: formData?.Individual?.financialDetails || "",
    isInvolvedInInvestmentCompany:
      formData?.Individual?.isInvolvedInInvestmentCompany || false,
  };
  const [citizenshipIssuedDistrict, setCitizenshipIssue] = useState(
    formData?.Individual?.citizenshipIssuedDistrict || ""
  );
  const [financialDetails, setFinancialDetails] = useState(
    formData?.Individual?.financialDetails || ""
  );

  const [isInvolved, setIsInvolved] = useState(
    formData?.Individual?.isInvolvedInInvestmentCompany || false
  );

  const regDateADRef = useRef(null);
  const regDateBSRef = useRef(null);

  const handleSelect = (key, value) => {
    updateNestedField(`Individual.${key}`, value);
  };

  const handleCitizenshipIssue = (e) => {
    const value = e.target.value;
    setCitizenshipIssue(value);
    handleSelect("citizenshipIssuedDistrict", value);
  };

  const handleFinancial = (e) => {
    const value = e.target.value;
    setFinancialDetails(value);
    handleSelect("financialDetails", value);
  };

  const handleInvolved = () => {
    const value = !isInvolved;
    setIsInvolved(value);
    updateNestedField("Individual.isInvolvedInInvestmentCompany", value);
  };

  // Handle date changes
  const handleDateChange = (key, value) => {
    handleSelect(key, value);
  };

  return (
    <div className="top-60 left-[32rem] w-[61.5rem]">
      <h1 className="text-white font-roboto text-4xl font-medium leading-none tracking-[1.92px] mb-20 text-start">
        Individual Information & Details
      </h1>
      <div className="grid grid-cols-2 gap-6 w-[61.5rem]">
        {/* Row 1 */}
        <LabelInput
          htmlFor="number"
          labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
          type="string"
          id="citizenshipNumber"
          label="Citizenship Number"
          placeholder="Citizenship Number"
          value={formData?.Individual?.citizenshipNumber || ""}
          onChange={(e) => handleSelect("citizenshipNumber", e.target.value)}
        />

        <div className="flex flex-col gap-4 w-[28rem]">
          {/* Label */}
          <label
            htmlFor="citizenshipIssuePlace"
            className="text-[#828282] font-roboto text-base font-normal leading-4"
          >
            Citizenship Issued Place
          </label>

          {/* Styled Select Box */}
          <div className="relative w-[28rem]">
            <select
              id="citizenshipIssuePlace"
              value={citizenshipIssuedDistrict}
              onChange={handleCitizenshipIssue}
              className="text-[#BDBDBD] font-roboto w-full h-[3.75rem] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none "
            >
              <option
                value=""
                defaultValue="Select Citizenship Issued Place"
                className="text-[#E0E0E0] bg-black"
              >
                Select Citizenship Issued Place
              </option>
              <option className="text-[#E0E0E0] bg-black">Banke</option>
              <option className="text-[#E0E0E0] bg-black">Bardiya</option>
              <option className="text-[#E0E0E0] bg-black">Dang</option>
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#BDBDBD]">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="w-full relative">
          <label className="text-[#828282] font-roboto text-base font-normal leading-4">
            Citizenship Issued Date A.D
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
              value={formData?.Individual?.citizenshipIssuedDateAD || ""}
              onChange={(e) =>
                handleDateChange("citizenshipIssuedDateAD", e.target.value)
              }
              className="text-[#BDBDBD] font-roboto w-[28rem] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
                    border-[#BDBDBD] rounded-md py-6 px-2 pl-12"
            />
          </div>
        </div>

        <div className="w-full relative">
          <label className="text-[#828282] font-roboto text-base font-normal leading-4">
            Citizenship Issued Date B.S.
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
              value={formData?.Individual?.citizenshipIssuedDateBS || ""}
              onChange={(date) =>
                handleDateChange("citizenshipIssuedDateBS", date)
              }
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />
          </div>
        </div>

        {/* Row 3 */}

        <div className="flex gap-8">
          <div className="flex flex-col gap-4 w-[28rem]">
            {/* Label */}
            <label
              htmlFor="financialDetails"
              className="text-[#828282] font-roboto text-base font-normal leading-4"
            >
              Financial Details
            </label>

            {/* Styled Select Box */}
            <div className="relative w-[29.75rem]">
              <select
                id="financialDetails"
                value={financialDetails}
                onChange={handleFinancial}
                className="text-[#BDBDBD] font-roboto w-[28rem] h-[3.75rem] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none "
              >
                <option
                  value=""
                  defaultValue="Select a financial Details"
                  className="text-[#E0E0E0] bg-black"
                >
                  Select a financial Details
                </option>
                <option className="text-[#E0E0E0] bg-black">
                  Upto 5,00,000
                </option>
                <option className="text-[#E0E0E0] bg-black">
                  5,00,001 to 10,00,000
                </option>
                <option className="text-[#E0E0E0] bg-black">
                  Above 10,00,000
                </option>
              </select>
              <div className="pointer-events-none absolute right-10 top-1/2 transform -translate-y-1/2 text-[#BDBDBD]">
              <ChevronDown size={20} />
            </div>
            </div>
          </div>

          {/* Is User NRN Section */}
          <div className="flex flex-col items-start  w-[28rem] ms-6">
            <label className="text-[#828282] font-roboto text-base font-normal leading-2  w-[476px]">
              Is user involved in investment company?
            </label>
            <div className="flex items-start gap-3 mt-8">
              <span
                className={`font-medium ${
                  !isInvolved ? "text-[#BDBDBD]" : "text-gray-400"
                }`}
              >
                No
              </span>
              <button
                aria-checked={isInvolved}
                onClick={handleInvolved}
                className={`w-16 h-8 flex items-center px-1 rounded-full transition duration-300 ${
                  isInvolved ? "bg-[#F1F510]" : "bg-gray-500"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-black rounded-full shadow-md transform transition ${
                    isInvolved ? "translate-x-8" : "translate-x-0"
                  }`}
                />
              </button>
              <span
                className={`font-medium ${
                  isInvolved ? "text-[#BDBDBD]" : "text-gray-400"
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

export default Individual4;
