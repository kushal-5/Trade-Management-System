import { useState, useRef } from "react";
import "nepali-datepicker-reactjs/dist/index.css";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import CalendarIcon from "../../../assets/images/registrationImages/calendar.svg";
import LabelInput from "../../../shared/LabelInput";
import { useFormContext } from "../../../contexts/formProvider";
import { ChevronDown } from "lucide-react";

const CompanyDetails2 = () => {
  const { formData, updateNestedField } = useFormContext();

  // Get initial values from formData if they exist
  const initialValues = {
    countryOfRegistration: formData?.Corporate?.countryOfRegistration || "",
    typeOfBusiness: formData?.Corporate?.typeOfBusiness || "",
    companyRegistrationAD: formData?.Corporate?.companyRegistrationAD || "",
    companyRegistrationBS: formData?.Corporate?.companyRegistrationBS || "",
    contactNumber: formData?.Corporate?.contactNumber || "",
    companyCEOName: formData?.Corporate?.companyCEOName || "",
    companySecretaryName: formData?.Corporate?.companySecretaryName || "",
    companyRegistrationOffice:
      formData?.Corporate?.companyRegistrationOffice || "",
    dateOfIncorporationAD: formData?.Corporate?.dateOfIncorporationAD || "",
    dateOfIncorporationBS: formData?.Corporate?.dateOfIncorporationBS || "",
  };

  // Local state
  const [countryType, setCountryType] = useState(
    initialValues.countryOfRegistration
  );
  const [businessType, setBusinessType] = useState(
    initialValues.typeOfBusiness
  );

  // Create separate refs for each date input
  const regDateADRef = useRef(null);
  const regDateBSRef = useRef(null);
  const incorpDateADRef = useRef(null);
  const incorpDateBSRef = useRef(null);

  // Handle select change (dropdowns)
  const handleSelect = (key, value) => {
    updateNestedField(`Corporate.${key}`, value);
  };

  // Handle country type change
  const handleCountryChange = (e) => {
    const value = e.target.value;
    setCountryType(value);
    handleSelect("countryOfRegistration", value);
  };

  // Handle business type change
  const handleBusinessChange = (e) => {
    const value = e.target.value;
    setBusinessType(value);
    handleSelect("typeOfBusiness", value);
  };

  // Handle date changes
  const handleDateChange = (key, value) => {
    handleSelect(key, value || "mm/dd/yyyy");
  };

  return (
    <div className="top-40 left-[32rem] w-[61.5rem]">
      <h1 className="text-white font-roboto text-4xl font-medium leading-none tracking-wider mb-10 text-start">
        Corporate Information & Details
      </h1>

      <div className="grid grid-cols-2 gap-4 w-[61.5rem]">
        {/* Row 1 */}
        <div className="w-[28rem] relative">
          <label className="text-[#828282] font-roboto text-base font-normal leading-4">
            Company Registration Date A.D
          </label>
          <div className="relative">
            <img
              src={CalendarIcon}
              alt="calendar"
              className="absolute left-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
            />
            <input
              type="date"
              onClick={() => regDateADRef.current?.showPicker()}
              ref={regDateADRef}
              value={formData?.Corporate?.companyRegistrationAD || ""}
              onChange={(e) =>
                handleDateChange("companyRegistrationAD", e.target.value)
              }
              className="text-[#BDBDBD] font-roboto w-full h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[#BDBDBD] rounded-md py-6 px-2 pl-12"
            />
          </div>
        </div>

        <div className="w-[28rem] relative ">
          <label className="text-[#828282] font-roboto text-base font-normal leading-4">
            Company Registration Date B.S.
          </label>
          <div className="relative bg-black w-[28rem] border-[.1px] border-[#BDBDBD] rounded-md">
            <img
              src={CalendarIcon}
              alt="calendar"
              className="absolute left-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => regDateBSRef.current?.focus()}
            />
            <NepaliDatePicker
              inputClassName="form-control"
              inputRef={regDateBSRef}
              value={formData?.Corporate?.companyRegistrationBS || ""}
              onChange={(date) =>
                handleDateChange("companyRegistrationBS", date)
              }
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />
          </div>
        </div>

        {/* Row 2 */}
        <LabelInput
          htmlFor="contactNumber"
          labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
    
          type="number"
          id="contactNumber"
          label="Contact Number"
          placeholder="Contact Number"
          value={formData?.Corporate?.contactNumber || ""}
          onChange={(e) => handleSelect("contactNumber", e.target.value)}
        />

        <LabelInput
          htmlFor="companyCEOName"
          labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
          
          type="text"
          id="companyCEOName"
          label="Company CEO Name"
          placeholder="Company CEO Name"
          value={formData?.Corporate?.companyCEOName || ""}
          onChange={(e) => handleSelect("companyCEOName", e.target.value)}
        />

        {/* Row 3 */}
        <LabelInput
          htmlFor="companySecretaryName"
          labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
          
          type="text"
          id="companySecretaryName"
          label="Company Secretary Name"
          placeholder="Company Secretary Name"
          value={formData?.Corporate?.companySecretaryName || ""}
          onChange={(e) => handleSelect("companySecretaryName", e.target.value)}
        />

        <LabelInput
          htmlFor="companyRegistrationOffice"
          labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
          
          type="text"
          id="companyRegistrationOffice"
          label="Company Registration Office"
          placeholder="Company Registration Office"
          value={formData?.Corporate?.companyRegistrationOffice || ""}
          onChange={(e) =>
            handleSelect("companyRegistrationOffice", e.target.value)
          }
        />

        {/* Row 4 */}
        <div className="flex flex-col gap-4 w-full">
          <label
            htmlFor="countryOfRegistration"
            className="text-[#828282] font-roboto text-base font-normal leading-4"
          >
            Country Of Registration
          </label>

          <div className="relative w-full">
            <select
              id="countryOfRegistration"
              value={countryType}
              onChange={handleCountryChange}
              className="text-[#BDBDBD] font-roboto w-[28rem] h-[3.75rem] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none "
            >
              <option value="" disabled className="text-[#E0E0E0] bg-black">
                Nepal
              </option>
              <option value="Nepal" className="text-[#E0E0E0] bg-black">
                Nepal
              </option>
            </select>
            <div className="pointer-events-none absolute right-12 top-1/2 transform -translate-y-1/2 text-[#BDBDBD]">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <label
            htmlFor="typeOfBusiness"
            className="text-[#828282] font-roboto text-base font-normal leading-4"
          >
            Type of Business
          </label>

          <div className="relative w-full">
            <select
              id="typeOfBusiness"
              value={businessType}
              onChange={handleBusinessChange}
              className="text-[#BDBDBD] font-roboto w-[28rem] h-[60px] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
              rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none "
            >
              <option value="" disabled className="text-[#E0E0E0] bg-black">
                Select Type
              </option>
              <option value="Manufacturing" className="text-[#E0E0E0] bg-black">
                Manufacturing
              </option>
              <option value="Service" className="text-[#E0E0E0] bg-black">
                Service Oriented
              </option>
              <option
                value="ShareInvestment"
                className="text-[#E0E0E0] bg-black"
              >
                SHARE INVESTMENT
              </option>
              <option value="Investment" className="text-[#E0E0E0] bg-black">
                INVESTMENT
              </option>
            </select>
            <div className="pointer-events-none absolute right-12 top-1/2 transform -translate-y-1/2 text-[#BDBDBD]">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>

        {/* Row 5 */}
        <div className="w-full relative">
          <label className="text-[#828282] font-roboto text-base font-normal leading-4">
            Date of Incorporation A.D
          </label>
          <div className="relative">
            <img
              src={CalendarIcon}
              alt="calendar"
              className="absolute left-5 top-1/2 transform -translate-y-1/2 "
            />
            <input
              onClick={() => incorpDateADRef.current?.showPicker()}
              type="date"
              ref={incorpDateADRef}
              value={formData?.Corporate?.dateOfIncorporationAD || ""}
              onChange={(e) =>
                handleDateChange("dateOfIncorporationAD", e.target.value)
              }
              className="text-[#BDBDBD] font-roboto w-[28rem] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[#BDBDBD] rounded-md py-6 px-2 pl-12"
            />
          </div>
        </div>

        <div className="w-[28rem] relative ">
          <label className="text-[#828282] font-roboto text-base font-normal leading-4">
            Date of Incorporation B.S.
          </label>
          <div className="relative bg-black w-[28rem] border-[.1px] border-[#BDBDBD] rounded-md">
            <img
              src={CalendarIcon}
              alt="calendar"
              className="absolute left-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => incorpDateBSRef.current?.focus()}
            />

            <NepaliDatePicker
              inputClassName="form-control"
              inputRef={incorpDateBSRef}
              value={formData?.Corporate?.dateOfIncorporationBS || ""}
              onChange={(date) =>
                handleDateChange("dateOfIncorporationBS", date)
              }
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails2;
