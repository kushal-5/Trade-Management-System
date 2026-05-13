import { useState, useRef } from "react";
import "nepali-datepicker-reactjs/dist/index.css";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import CalendarIcon from "../../../assets/images/registrationImages/calendar.svg";
import LabelInput from "../../../shared/LabelInput";
import { useFormContext } from "../../../contexts/formProvider";
import { ChevronDown } from "lucide-react";

const Ownership4 = () => {
  const { formData, updateNestedField } = useFormContext();

  const initialValues = {
    citizenshipNumber: formData?.Ownership?.citizenshipNumber || "",
    citizenshipIssueDistrict:
      formData?.Ownership?.citizenshipIssueDistrict || "",
    citizenshipIssueAD: formData?.Ownership?.citizenshipIssueAD || "",
    citizenshipIssueBS: formData?.Ownership?.citizenshipIssueBS || "",
    professionalQualification:
      formData?.Ownership?.professionalQualification || "",
    professionalExperience: formData?.Ownership?.professionalExperience || "",
    educationalQualification:
      formData?.Ownership?.educationalQualification || "",
  };

  const regDateADRef = useRef(null);
  const regDateBSRef = useRef(null);

  const [citizenshipIssueDistrict, setCitizenshipIssueDistrict] = useState(
    initialValues.citizenshipIssueDistrict
  );
  const [educationalQualification, setEducationalQualification] = useState(
    initialValues.educationalQualification
  );

  const handleSelect = (key, value) => {
    updateNestedField(`Ownership.${key}`, value);
  };

  const handleIssueDistrict = (e) => {
    const value = e.target.value;
    setCitizenshipIssueDistrict(value);
    handleSelect("citizenshipIssueDistrict", value);
  };

  const handleEducationalQualification = (e) => {
    const value = e.target.value;
    setEducationalQualification(value);
    handleSelect("educationalQualification", value);
  };

  const handleDateChange = (key, value) => {
    handleSelect(key, value);
  };

  return (
    <div className="top-40 left-[32rem]">
      <h1 className="text-white font-roboto text-4xl font-medium leading-none tracking-[1.92px] mb-10">
        Ownership Information & Details
      </h1>

     
        <div className="grid grid-cols-2 gap-4 w-[60rem]">
          {/* Row 1 */}
          <LabelInput
            id="citizenship"
            label="Citizenship Number"
            placeholder="Citizenship Number"
            type="string"
            value={formData?.Ownership?.citizenshipNumber}
            onChange={(e) => handleSelect("citizenshipNumber", e.target.value)}
          />

          <div className="flex flex-col gap-4 w-[29.75rem]">
            <label
              htmlFor="citizenshipIssueDistrict"
              className="text-[#828282] font-roboto text-base font-normal leading-4"
            >
              Citizenship Issue District
            </label>
            <div className="relative w-[28rem]">
              <select
                id="citizenshipIssueDistrict"
                value={citizenshipIssueDistrict}
                onChange={handleIssueDistrict}
                className="text-[#BDBDBD] font-roboto w-[28rem] h-[60px] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-[#BDBDBD] transition-all duration-300"
              >
                <option className="bg-black text-white" value="">
                  Select District
                </option>
                <option value="Banke">Banke</option>
                <option value="Bardiya">Bardiya</option>
                <option value="Dang">Dang</option>
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#BDBDBD]">
              <ChevronDown size={20} />
            </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="w-[28rem] relative">
            <label className="text-[#828282] font-roboto text-base font-normal leading-4">
              Citizenship Issue Date A.D
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
                value={formData?.Ownership?.citizenshipIssueAD || ""}
                onChange={(e) =>
                  handleDateChange("citizenshipIssueAD", e.target.value)
                }
                className="text-[#BDBDBD] font-roboto w-[28rem] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
                border-[#BDBDBD] rounded-md py-6 px-2 pl-12 outline-none"
              />
            </div>
          </div>

          <div className="w-[29.75rem] relative">
            <label className="text-[#828282] font-roboto text-base font-normal leading-4">
              Citizenship Issue Date B.S.
            </label>
            <div className="relative bg-black w-[28rem] h-[3.75rem] border-[.1px] border-[#BDBDBD] rounded-md">
              <img
                src={CalendarIcon}
                alt="calendar"
                className="absolute left-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => regDateBSRef.current?.focus()}
              />
              <NepaliDatePicker
                inputClassName="form-control"
                inputRef={regDateBSRef}
                value={formData?.Corporate?.dateOfIncorporationBS || ""}
                onChange={(date) =>
                  handleDateChange("citizenshipIssueBS", date)
                }
                options={{ calenderLocale: "ne", valueLocale: "en" }}
              />
            </div>
          </div>

          {/* Row 3 */}
          <LabelInput
            id="professionalQualification"
            label="Professional Qualification"
            placeholder="Professional Qualification"
            type="text"
            value={formData?.Ownership?.professionalQualification || ""}
            onChange={(e) =>
              handleSelect("professionalQualification", e.target.value)
            }
          />

          <LabelInput
            id="professionalExperience"
            label="Professional Experience"
            placeholder="Professional Experience"
            type="text"
            value={formData?.Ownership?.professionalExperience || ""}
            onChange={(e) =>
              handleSelect("professionalExperience", e.target.value)
            }
          />

          {/* Row 4 */}
          <div className="flex flex-col">
            <label
              htmlFor="educationalQualification"
              className="text-[#828282] font-roboto text-lg font-normal leading-8"
            >
              Educational Qualification
            </label>
            <select
              id="educationalQualification"
              value={educationalQualification}
              onChange={handleEducationalQualification}
              className="text-[#BDBDBD] font-roboto w-[28rem] h-[3.75rem] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
              rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none"
            >
              <option value="">Select Qualification</option>
              <option value="Graduate">Graduate</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Post Graduate">Postgraduate</option>
              <option value="Professional">Professional</option>
            </select>
            <div className="pointer-events-none absolute right-4 top-3/4 transform -translate-y-1/2 text-[#BDBDBD]">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>
      </div>  );
};

export default Ownership4;
