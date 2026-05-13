import { useState } from "react";
import LabelInput from "../../../shared/LabelInput";
import { useFormContext } from "../../../contexts/formProvider";
import { ChevronDown } from "lucide-react";

const CompanyDetails3 = () => {
  const { formData, updateNestedField } = useFormContext();

  const initialValues = {
    firstContactPersonName: formData?.Corporate?.firstContactPersonName || "",
    firstContactFatherName: formData?.Corporate?.firstContactFatherName || "",
    firstContactGrandfatherName:
      formData?.Corporate?.firstContactGrandfatherName || "",
    firstContactDesignation: formData?.Corporate?.firstContactDesignation || "",
    secondContactPersonName: formData?.Corporate?.secondContactPersonName || "",
    secondContactFatherName: formData?.Corporate?.secondContactFatherName || "",
    secondContactGrandfatherName:
      formData?.Corporate?.secondContactGrandfatherName || "",
    secondContactDesignation:
      formData?.Corporate?.secondContactDesignation || "",
    fax: formData?.Corporate?.fax || "",
    companyWebsite: formData?.Corporate?.companyWebsite || "",
  };

  const [FirstDesignation, setFirstDesignation] = useState(
    initialValues.firstContactDesignation
  );
  const [SecondDesignation, setSecondDesignation] = useState(
    initialValues.secondContactDesignation
  );

  const handleSelect = (key, value) => {
    updateNestedField(`Corporate.${key}`, value);
  };

  const handleFirstDesignation = (e) => {
    const value = e.target.value;
    setFirstDesignation(value);
    handleSelect("firstContactDesignation", value);
  };

  const handleSecondDesignation = (e) => {
    const value = e.target.value;
    setSecondDesignation(value);
    handleSelect("secondContactDesignation", value);
  };

  return (
    <div className="top-32 left-[32rem] w-[61.5rem]">
      <h1 className="text-white font-roboto text-4xl font-medium leading-none tracking-[1.92px] mb-10 text-start">
        Corporate Information & Details
      </h1>
      <div className="grid grid-cols-2 gap-4 w-[60rem]">
        {/* Row 1 */}
        <LabelInput
          htmlFor="fisrtname"
          type="text"
          id="firstContactName"
          label="First Contact Person Name"
          placeholder="First Contact Person Name"
          value={formData?.Corporate?.firstContactPersonName || ""}
          onChange={(e) =>
            handleSelect("firstContactPersonName", e.target.value)
          }
        />

        <LabelInput
          htmlFor="firstfathername"
          type="text"
          id="firstContactFatherName"
          label="First Contact Father Name"
          placeholder="First Contact Father Name"
          value={formData?.Corporate?.firstContactFatherName || ""}
          onChange={(e) =>
            handleSelect("firstContactFatherName", e.target.value)
          }
        />

        {/* Row 2 */}

        <LabelInput
          htmlFor="firstgrandfathername"
          type="text"
          id="firstContactGrandFatherName"
          label="First Contact Grandfather Name"
          placeholder="First Contact Grandfather Name"
          value={formData?.Corporate?.firstContactGrandfatherName || ""}
          onChange={(e) =>
            handleSelect("firstContactGrandfatherName", e.target.value)
          }
        />

        <div className="flex flex-col gap-2 w-[28rem]">
          {/* Label */}
          <label
            htmlFor="firstbusinessType"
            className="text-[#828282] font-roboto text-sm font-normal leading-5"
          >
            First Contact Designation
          </label>

          {/* Styled Select Box */}
          <div className="relative w-[28rem]">
            <select
              id="firstDesignation"
              value={FirstDesignation}
              onChange={handleFirstDesignation}
              className="text-[#BDBDBD] font-roboto w-[28rem] h-[3.75rem] text-sm font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
          rounded-md px-3 cursor-pointer appearance-none focus:outline-none "
            >
              <option value="" disabled className="text-[#E0E0E0] bg-black">
                Select Designation
              </option>
              <option value="Director" className="text-[#E0E0E0] bg-black">
                Director
              </option>
              <option value="Executive" className="text-[#E0E0E0] bg-black">
                Executive
              </option>
              <option value="Shareholder" className="text-[#E0E0E0] bg-black">
                Shareholder
              </option>
              <option value="Employee" className="text-[#E0E0E0] bg-black">
                Employee
              </option>
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#BDBDBD]">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <LabelInput
          htmlFor="secondname"
          type="text"
          id="secondContactName"
          label="Second Contact Person Name"
          placeholder="Second Contact Person Name"
          value={formData?.Corporate?.secondContactPersonName || ""}
          onChange={(e) =>
            handleSelect("secondContactPersonName", e.target.value)
          }
        />

        <LabelInput
          htmlFor="secondfathername"
          type="text"
          id="SecondContactFatherName"
          label="Second Contact Father Name"
          placeholder="Second Contact Father Name"
          value={formData?.Corporate?.secondContactFatherName || ""}
          onChange={(e) =>
            handleSelect("secondContactFatherName", e.target.value)
          }
        />

        {/* Row 4 */}
        <LabelInput
          htmlFor="secondgrandfathername"
          type="text"
          id="SecondContactGrandFatherName"
          label="Second Contact Grandfather Name"
          placeholder="Second Contact Grandfather Name"
          value={formData?.Corporate?.secondContactGrandfatherName || ""}
          onChange={(e) =>
            handleSelect("secondContactGrandfatherName", e.target.value)
          }
        />

        <div className="flex flex-col gap-4 w-[28rem]">
          {/* Label */}
          <label
            htmlFor="secondbusinessType"
            className="text-[#828282] font-roboto text-sm font-normal leading-5"
          >
            Second Contact Designation
          </label>

          {/* Styled Select Box */}
          <div className="relative w-[28rem]">
            <select
              id="SecondDesignation"
              value={SecondDesignation}
              onChange={handleSecondDesignation}
              className="text-[#BDBDBD] font-roboto w-[28rem] h-[3.75rem] text-sm font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
              rounded-md px-3 cursor-pointer appearance-none focus:outline-none"
            >
              <option value="" disabled className="text-[#E0E0E0] bg-black">
                Select Designation
              </option>
              <option value="Director" className="text-[#E0E0E0] bg-black">
                Director
              </option>
              <option value="Executive" className="text-[#E0E0E0] bg-black">
                Executive
              </option>
              <option value="Shareholder" className="text-[#E0E0E0] bg-black">
                Shareholder
              </option>
              <option value="Employee" className="text-[#E0E0E0] bg-black">
                Employee
              </option>
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#BDBDBD]">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>

        {/* Row 5 */}
        <LabelInput
          htmlFor="number"
          labelClassName="text-[#828282] font-roboto text-sm font-normal leading-4 py-2"
          type="number"
          id="faxNumber"
          label="Fax"
          placeholder="Fax"
          value={formData?.Corporate?.fax || ""}
          onChange={(e) => handleSelect("fax", e.target.value)}
        />

        <LabelInput
          htmlFor="name"
          labelClassName="text-[#828282] font-roboto text-sm font-normal leading-4 py-2"
          inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-sm font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
          type="text"
          id="companyWebsite"
          label="Company Website"
          placeholder="Company Website"
          value={formData?.Corporate?.companyWebsite || ""}
          onChange={(e) => handleSelect("companyWebsite", e.target.value)}
        />
      </div>
    </div>
  );
};

export default CompanyDetails3;
