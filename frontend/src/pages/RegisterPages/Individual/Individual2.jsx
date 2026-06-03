import { useState } from "react";
import Umale from "../../../assets/images/registrationImages/uncolouredMale.svg";
import Male from "../../../assets/images/registrationImages/ColorMale.svg";
import Ufemale from "../../../assets/images/registrationImages/NoColorFemale.svg";
import Female from "../../../assets/images/registrationImages/colouredFemale.svg";
import Uother from "../../../assets/images/registrationImages/Vector.svg";
import Other from "../../../assets/images/registrationImages/ColorVector.svg";
import TickIcon from "../../../assets/images/registrationImages/checkBlue.svg"; // Add a blue tick icon here
import { useFormContext } from "../../../contexts/formProvider";

const Individual2 = () => {
  const { formData, updateNestedField } = useFormContext();
  const selected = formData?.Individual?.gender || ""; // Derive selection from form state
  const accountTypes = [
    {
      name: "Female",
      unselectedImage: Ufemale,
      selectedImage: Female,
    },
    {
      name: "Male",
      unselectedImage: Umale,
      selectedImage: Male,
    },
    {
      name: "Others",
      unselectedImage: Uother,
      selectedImage: Other,
    },
  ];

  const handleSelect = (name) => {
    updateNestedField("Individual.gender", name); // FIXED: Updating the correct field in form context
  };

  return (
    <div className=" items-start h-auto text-white overflow-hidden top-60 left-[32rem]">
      <h1 className="text-white font-roboto text-4xl font-medium leading-none tracking-[1.92px] mb-16">
        Select Your Gender!
      </h1>

      <div className="flex flex-row gap-8">
        {accountTypes.map((account) => (
          <div
            key={account.name}
            className={`relative flex w-60 p-8 px-8 flex-col items-center gap-4 flex-shrink-0 border-2 ${
              selected === account.name
                ? "border-[#01BAEF]"
                : "border-[#4F4F4F]"
            } rounded-xl cursor-pointer transition`}
            onClick={() => handleSelect(account.name)} // FIXED: Correct selection handling
          >
            {selected === account.name && (
              <img
                src={TickIcon}
                alt="Selected"
                className="absolute top-1 right-2 w-8 h-8 p-1 bg-[#2d2d2d] rounded-full"
              />
            )}

            <img
              src={
                selected === account.name
                  ? account.selectedImage
                  : account.unselectedImage
              }
              alt={account.name}
            />
            <h1
              className={`font-roboto text-xl font-medium leading-normal tracking-tight ${
                selected === account.name ? "text-[#01BAEF]" : "text-[#4F4F4F]"
              }`}
            >
              {account.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Individual2;
