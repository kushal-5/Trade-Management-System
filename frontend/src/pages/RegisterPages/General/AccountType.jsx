import { useState } from "react";
import Ucorporate from "../../../assets/images/registrationImages/uncolouredCorporate.svg";
import Corporate from "../../../assets/images/registrationImages/ColuredCorporate.svg";
import Uindividual from "../../../assets/images/registrationImages/uncolouredIndividual.svg";
import Individual from "../../../assets/images/registrationImages/colouredIndividual.svg";
import Umutual from "../../../assets/images/registrationImages/uncolouredMutual.svg";
import Mutual from "../../../assets/images/registrationImages/colouredMutual.svg";
import TickIcon from "../../../assets/images/registrationImages/checkBlue.svg";
import { useFormContext } from "../../../contexts/formProvider";

const AccountType = () => {
  const { formData, updateNestedField } = useFormContext();
  const selected = formData.General?.accountInfo || ""; // Derive selection from form state

  const accountTypes = [
    {
      name: "Corporate",
      unselectedImage: Ucorporate,
      selectedImage: Corporate,
    },
    {
      name: "Individual",
      unselectedImage: Uindividual,
      selectedImage: Individual,
    },
    { name: "Mutual Funds", unselectedImage: Umutual, selectedImage: Mutual },
  ];

  const handleSelect = (name) => {
    updateNestedField("General.accountInfo", name); // FIXED: Updating the correct field in form context
  };

  return (
    <div className="flex items-start justify-center flex-col h-auto text-white overflow-hidden">
      <h1 className="text-white font-roboto text-4xl font-medium leading-none tracking-[1.92px] mb-16">
        What is your account type ?
      </h1>

      <div className="flex flex-row gap-6  overflow-x-auto scrollbar-hide">
        {accountTypes.map((account) => (
          <div
            key={account.name}
            className={`relative flex flex-col items-center w-[15rem] gap-4 p-8 flex-shrink-0 border-2 ${
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
                className="absolute top-2 right-3 p-1 bg-[#2d2d2d] rounded-full"
              />
            )}

            <img
              src={
                selected === account.name
                  ? account.selectedImage
                  : account.unselectedImage
              }
              className="w-16 h-14"
              alt={account.name}
            />
            <h1
              className={`font-roboto text-2xl font-medium leading-normal tracking-tight ${
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

export default AccountType;
