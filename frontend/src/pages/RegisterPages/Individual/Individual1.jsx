import { useFormContext } from "../../../contexts/formProvider";

const Individual1 = () => {
  const { formData, updateNestedField } = useFormContext();

  const handleSelect = (key, value) => {
    updateNestedField(`Individual.${key}`, value);
  };

  return (
    <div className="top-60 left-[32rem] w-[61.5rem]">
      <h1 className="text-white font-roboto text-4xl font-medium leading-none tracking-wider mb-20 text-start">
        Individual Information & Details
      </h1>
      <h1 className="text-white font-roboto text-4xl font-medium leading-none tracking-[1.92px] text-start mb-20">
        What is your name?
      </h1>
 
        <div className="flex flex-row gap-4 mb-4 items-center">
          <div className="w-[274px] h-[121px]">
            <label
              htmlFor={`firstName`}
              className="text-[#828282] font-roboto text-xl font-normal tracking-[0.8px] capitalize"
            >
              First Name
            </label>
            <input
              className="bg-black text-white font-roboto text-[48px] font-normal tracking-[1.92px] capitalize w-[240px] h-[99px] border-[#828282] border-b-[1px] outline-none"
              type="text"
              id={`firstName`}
              value={formData?.Individual?.firstName || ""}
              onChange={(e) => handleSelect("firstName", e.target.value)}
              required
            />
          </div>
          <div className="w-[274px] h-[121px]">
            <label
              htmlFor={`middleName`}
              className="text-[#828282] font-roboto text-xl font-normal tracking-[0.8px] capitalize"
            >
              Middle Name
            </label>
            <input
              className="bg-black text-white font-roboto text-[48px] font-normal tracking-[1.92px] capitalize w-[240px] h-[99px] border-[#828282] border-b-[1px] outline-none"
              type="text"
              id={`middleName`}
              value={formData?.Individual?.middleName || ""}
              onChange={(e) => handleSelect("middleName", e.target.value)}
            />
          </div>
          <div className="w-[274px] h-[121px]">
            <label
              htmlFor={`lastName`}
              className="text-[#828282] font-roboto text-xl font-normal tracking-[0.8px] capitalize"
            >
              Last Name
            </label>
            <input
              className="bg-black text-white font-roboto text-[48px] font-normal tracking-[1.92px] capitalize w-[240px] h-[99px] border-[#828282] border-b-[1px] outline-none"
              type="text"
              id={`lastName`}
              value={formData?.Individual?.lastName || ""}
              onChange={(e) => handleSelect("lastName", e.target.value)}
              required
            />
          </div>
        </div>    </div>
  );
};

export default Individual1;
