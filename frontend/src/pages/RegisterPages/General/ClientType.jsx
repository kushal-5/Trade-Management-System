import Sms from "../../../assets/images/signinImages/sms.svg";
import { useFormContext } from "../../../contexts/formProvider";
import LabelInput from "../../../shared/LabelInput";
import { ChevronDown } from "lucide-react";

const ClientType = ({ data, setData, setClientType }) => {
  const { updateNestedField } = useFormContext();

  // Fix: Ensure `handleSelect` updates state correctly
  const handleSelect = (key, value) => {
    updateNestedField(`General.clientInfo.${key}`, value);
  };

  return (
    <div className="flex flex-col ">
      <div>
        <h1 className="text-white font-roboto text-4xl font-medium leading-none tracking-[1.92px] mb-20 text-start">
          General Information & Details
        </h1>

        {/* Grid with 2 Rows */}
        <div className="grid grid-cols-2 gap-4 w-[60rem]">

        <div className="flex flex-col gap-[1rem] w-[28rem]">
  <label
    htmlFor="clientType"
    className="text-[#828282] font-roboto text-base font-normal leading-4 py-0"
  >
    Client Type
  </label>
  <div className="relative w-full">
    <select
      id="clientType"
      value={data.clientTypeData?.type || ""}
      onChange={(e) => {
        const selectedType = e.target.value;
        setClientType(selectedType);
        setData((prevData) => ({
          ...prevData,
          clientTypeData: {
            ...prevData.clientTypeData,
            type: selectedType,
          },
        }));
        handleSelect("clientType", selectedType);
      }}
      className="appearance-none text-[#BDBDBD] font-roboto w-full h-[3.75rem] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] rounded-md py-2 px-3 pr-10 focus:outline-none"
    >
      <option value="" disabled>
        Select Client Type
      </option>
      <option value="corporate">Corporate</option>
      <option value="individual">Individual</option>
      <option value="mutual">Mutual</option>
    </select>

    {/* Custom Dropdown Icon */}
    <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#BDBDBD]">
      <ChevronDown size={20} />
    </div>
  </div>
</div>



          <LabelInput
            htmlFor="email"
            className="-top-2"
            labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 "
            src={Sms}
            onChange={(e) => {
              setData((prevData) => ({ ...prevData, email: e.target.value }));
              updateNestedField("General.clientInfo.email", e.target.value);
            }}
            value={data.email || ""}
            type="email"
            id="email"
            label="Email"
            placeholder="Enter your email"
          />

          <LabelInput
            htmlFor="password"
            labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 "
            onChange={(e) => {
              setData((prevData) => ({
                ...prevData,
                password: e.target.value,
              }));
              updateNestedField("General.clientInfo.password", e.target.value);
            }}
            value={data.password || ""}
            type="password"
            id="password"
            label="Password"
            placeholder="At least 6 characters"
          />

          <LabelInput
            htmlFor="mobileNumber"
            labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 "
            onChange={(e) => {
              setData((prevData) => ({
                ...prevData,
                mobileNumber: e.target.value,
              }));
              updateNestedField(
                "General.clientInfo.mobileNumber",
                e.target.value
              );
            }}
            value={data.mobileNumber || ""}
            type="number"
            id="mobileNumber"
            label="Mobile Number"
            placeholder="Mobile Number"
          />

          <LabelInput
            htmlFor="panNumber"
            labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 "
            onChange={(e) => {
              setData((prevData) => ({
                ...prevData,
                panNumber: e.target.value,
              }));
              updateNestedField("General.clientInfo.panNumber", e.target.value);
            }}
            value={data.panNumber || ""}
            type="number"
            id="panNumber"
            label="PAN Number"
            placeholder="PAN Number"
          />
        </div>
            </div>
                </div>
    );
};

export default ClientType;
