import { useState } from "react";
import LabelInput from "../../../shared/LabelInput";
import { useFormContext } from "../../../contexts/formProvider";
import { ChevronDown } from "lucide-react";

const Ownership3 = () => {
  const { formData, updateNestedField } = useFormContext();

  const initialValues = {
    address: formData?.Ownership?.address || "",
    country: formData?.Ownership?.country || "",
    province: formData?.Ownership?.province || "",
    district: formData?.Ownership?.district || "",
    municipality: formData?.Ownership?.municipality || "",
    wardNumber: formData?.Ownership?.wardNumber || "",
    tole: formData?.Ownership?.tole || "",
    postalCode: formData?.Ownership?.postalCode || "",
    phoneNumber1: formData?.Ownership?.phoneNumber1 || "",
    phoneNumber2: formData?.Ownership?.phoneNumber2 || "",
  };

  const [address, setAddress] = useState(initialValues.address);
  const [country, setCountry] = useState(initialValues.country);
  const [province, setProvince] = useState(initialValues.province);
  const [district, setDistrict] = useState(initialValues.district);
  const [municipality, setMunicipality] = useState(initialValues.municipality);

  const handleSelect = (key, value) => {
    updateNestedField(`Ownership.${key}`, value);
  };

  const handleAddress = (e) => {
    const value = e.target.value;
    setAddress(value);
    updateNestedField("Ownership.address", value);
  };

  const handleCountry = (e) => {
    const value = e.target.value;
    setCountry(value);
    updateNestedField("Ownership.country", value);
  };

  const handleProvince = (e) => {
    const value = e.target.value;
    setProvince(value);
    updateNestedField("Ownership.province", value);
  };

  const handleDistrict = (e) => {
    const value = e.target.value;
    setDistrict(value);
    updateNestedField("Ownership.district", value);
  };

  const handleMunicipality = (e) => {
    const value = e.target.value;
    setMunicipality(value);
    updateNestedField("Ownership.municipality", value);
  };

  return (
    <div className="top-52 left-[32rem] w-[61.5rem]">
      <h1 className="text-white font-roboto text-4xl font-medium leading-none tracking-[1.92px] mb-16 text-start">
        Ownership Information & Details
      </h1>
      <div className="grid grid-cols-2 gap-4 w-[61.5rem]">
        {/* Row 1 */}
        <div className="flex flex-col gap-4 w-[28rem]">
          {/* Label */}
          <label
            htmlFor="address"
            className="text-[#828282] font-roboto text-base font-normal leading-4"
          >
            Select Address Type
          </label>

          <div className="relative w-[28rem]">
            <select
              id="address"
              value={address}
              onChange={handleAddress}
              className="text-[#BDBDBD] font-roboto w-[28rem] h-[60px] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-[#BDBDBD] transition-all duration-300"
            >
              <option value="" disabled className="text-[#E0E0E0] bg-black">
                Select Address Type
              </option>
              <option value="Kohalpur" className="text-[#E0E0E0] bg-black">
                Kohalpur
              </option>
              <option value="Nepalgunj" className="text-[#E0E0E0] bg-black">
                Nepalgunj
              </option>
              <option value="Dang" className="text-[#E0E0E0] bg-black">
                Dang
              </option>
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#BDBDBD]">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[426px]">
          {/* Label */}
          <label
            htmlFor="country"
            className="text-[#828282] font-roboto text-base font-normal leading-4"
          >
            Select Country
          </label>

          <div className="relative w-[28rem]">
            <select
              id="country"
              value={country}
              onChange={handleCountry}
              className="text-[#BDBDBD] font-roboto w-[28rem] h-[60px] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-[#BDBDBD] transition-all duration-300"
            >
              <option
                value=""
                defaultValue="Nepal"
                className="text-[#E0E0E0] bg-black"
              >
                Nepal
              </option>
              <option value="Nepal" className="text-[#E0E0E0] bg-black">
                Nepal
              </option>
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#BDBDBD]">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col gap-4 w-[426px]">
          {/* Label */}
          <label
            htmlFor="provinceType"
            className="text-[#828282] font-roboto text-base font-normal leading-4"
          >
            Select Province
          </label>

          <div className="relative w-[28rem]">
            <select
              id="provice"
              value={province}
              onChange={handleProvince}
              className="text-[#BDBDBD] font-roboto w-[28rem] h-[60px] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-[#BDBDBD] transition-all duration-300"
            >
              <option value="" disabled className="text-[#E0E0E0] bg-black">
                Select Province
              </option>
              <option value="  Province 1" className="text-[#E0E0E0] bg-black">
                Province 1
              </option>
              <option value="  Province 2" className="text-[#E0E0E0] bg-black">
                Province 2
              </option>
              <option value="  Province 3" className="text-[#E0E0E0] bg-black">
                Province 3
              </option>
              <option value="  Province 4" className="text-[#E0E0E0] bg-black">
                Province 4
              </option>
              <option value="  Province 5" className="text-[#E0E0E0] bg-black">
                Province 5
              </option>
              <option value="  Province 6" className="text-[#E0E0E0] bg-black">
                Province 6
              </option>
              <option value="  Province 7" className="text-[#E0E0E0] bg-black">
                Province 7
              </option>
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#BDBDBD]">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[426px]">
          {/* Label */}
          <label
            htmlFor="districtType"
            className="text-[#828282] font-roboto text-base font-normal leading-4"
          >
            Select District
          </label>

          <div className="relative w-[28rem]">
            <select
              id="district"
              value={district}
              onChange={handleDistrict}
              className="text-[#BDBDBD] font-roboto w-[28rem] h-[60px] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-[#BDBDBD] transition-all duration-300"
            >
              <option value="" disabled className="text-[#E0E0E0] bg-black">
                Select District
              </option>
              <option value="Banke" className="text-[#E0E0E0] bg-black">
                Banke
              </option>
              <option value="Bardiya" className="text-[#E0E0E0] bg-black">
                Bardiya
              </option>
              <option value="Kathmandu" className="text-[#E0E0E0] bg-black">
                Kathmandu
              </option>
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#BDBDBD]">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col gap-4 w-[426px]">
          {/* Label */}
          <label
            htmlFor="municipality"
            className="text-[#828282] font-roboto text-base font-normal leading-4"
          >
            Municipality
          </label>

          <div className="relative w-[28rem]">
            <select
              id="municipality"
              value={municipality}
              onChange={handleMunicipality}
              className="text-[#BDBDBD] font-roboto w-[28rem] h-[60px] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-[#BDBDBD] transition-all duration-300"
            >
              <option value="" disabled className="text-[#E0E0E0] bg-black">
                Select Municipality
              </option>
              <option value="Kohalpur" className="text-[#E0E0E0] bg-black">
                Kohalpur
              </option>
              <option value="Nepalgunj" className="text-[#E0E0E0] bg-black">
                Nepalgunj
              </option>
              <option value="Dang" className="text-[#E0E0E0] bg-black">
                Dang
              </option>
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#BDBDBD]">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>

        <LabelInput
          htmlFor="wardNum"
          className="w-[28rem] "
          labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
          inputClassName="text-[#BDBDBD] font-roboto w-[28rem] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
          type="text"
          id="wardNum"
          label="Ward No."
          placeholder="Ward No."
          value={formData?.Ownership?.wardNumber || ""}
          onChange={(e) => handleSelect("wardNumber", e.target.value)}
        />

        {/* Row 4 */}

        <LabelInput
          htmlFor="name"
          className="w-[28rem] "
          labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
          inputClassName="text-[#BDBDBD] font-roboto w-[28rem] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
          type="text"
          id="tole"
          label="Tole"
          placeholder="Tole"
          value={formData?.Ownership?.tole || ""}
          onChange={(e) => handleSelect("tole", e.target.value)}
        />

        <LabelInput
          htmlFor="name"
          className="w-[28rem] "
          labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
          inputClassName="text-[#BDBDBD] font-roboto w-[28rem] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
          type="text"
          id="postalCode"
          label="Postal Code"
          placeholder="Postal Code"
          value={formData?.Ownership?.postalCode || ""}
          onChange={(e) => handleSelect("postalCode", e.target.value)}
        />

        {/* Row 5 */}
        <LabelInput
          htmlFor="number"
          className="w-[28rem] "
          labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
          inputClassName="text-[#BDBDBD] font-roboto w-[28rem] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
          type="number"
          id="number1"
          label="Phone Number 1."
          placeholder="Phone Number 1."
          value={formData?.Ownership?.phoneNumber1 || ""}
          onChange={(e) => handleSelect("phoneNumber1", e.target.value)}
        />

        <LabelInput
          htmlFor="number"
          className="w-[28rem] "
          labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
          inputClassName="text-[#BDBDBD] font-roboto w-[28rem] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
          type="number"
          id="number2"
          label="Phone Number 2."
          placeholder="Phone Number 2."
          value={formData?.Ownership?.phoneNumber2 || ""}
          onChange={(e) => handleSelect("phoneNumber2", e.target.value)}
        />
      </div>
    </div>
  );
};

export default Ownership3;
