import { useFormContext } from "../../../contexts/formProvider";

const Ownership1 = () => {
  const { formData, updateNestedField } = useFormContext();

  const initialValues = {
    firstName: formData?.Ownership?.firstName || "",
    middleName: formData?.Ownership?.middleName || "",
    lastName: formData?.Ownership?.lastName || "",
  };

  const handleSelect = (key, value) => {
    updateNestedField(`Ownership.${key}`, value);
  };

  return (
    <div className="top-60 left-[32rem] w-[61.5rem]">
      <h1 className="text-white font-roboto text-4xl font-medium leading-none tracking-[1.92px] text-start mb-20">
        What is your name?
      </h1>
      <div className="gap-[2.75rem]">
        <div className="flex flex-row mb-4 items-center gap-[2.75rem]">
          <div className="w-[274px] h-[121px]">
            <label
              htmlFor={`firstName`}
              className="text-[#828282] font-roboto text-xl font-normal tracking-[0.8px] capitalize"
            >
              First Name
            </label>
            <input
              className="bg-black text-white font-roboto text-5xl font-normal tracking-[1.92px] capitalize w-[15rem] h-[5.375rem] border-[#828282] border-b-[1px] outline-none "
              type="text"
              id={`firstName`}
              value={formData?.Ownership?.firstName || ""}
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
              className="bg-black text-white font-roboto text-5xl font-normal tracking-[1.92px] capitalize w-[15rem] h-[5.375rem] border-[#828282] border-b-[1px] outline-none "
              type="text"
              id={`middleName`}
              value={formData?.Ownership?.middleName || ""}
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
              className="bg-black text-white font-roboto text-5xl font-normal tracking-[1.92px] capitalize w-[15rem] h-[5.375rem] border-[#828282] border-b-[1px] outline-none "
              type="text"
              id={`lastName`}
              value={formData?.Ownership?.lastName || ""}
              onChange={(e) => handleSelect("lastName", e.target.value)}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ownership1;
