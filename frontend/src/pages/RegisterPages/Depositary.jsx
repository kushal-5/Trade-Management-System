import LabelInput from "../../shared/LabelInput";
import { useFormContext } from "../../contexts/formProvider";

const Depositary = () => {
  const { formData, updateNestedField } = useFormContext();

  return (
    <div className="flex flex-col w-[80%]">
      <h1 className="text-white w-[full] font-roboto text-3xl font-medium leading-normal tracking-[1.92px] mb-10 text-start">
        Depositary Details (Beneficiary Owner Identity Number)
      </h1>
      <div className=" gap-12 w-11/12">
        <LabelInput
        
          htmlFor="text"
          className="w-[38rem]"
          value={formData?.Depositary?.BOID}
          onChange={(e) => {
            updateNestedField("Depositary.BOID", e.target.value);
          }}
          labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-3"

          type="text"
          id="Boid"
          label="BOID"
          placeholder="BOID"
        />
      </div>
    </div>
  );
};

export default Depositary;
