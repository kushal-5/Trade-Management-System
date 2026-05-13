import React from "react";
import { useFormContext } from "react-hook-form";
import UserFormProvider from "../contexts/UserFormProvider";

const RegistrationForm = () => {
  const onSubmit = async (data) => {
    console.log("Form data:", data);

    try {
      const res = await userAuthServices.register({
        email: data.General.clientInfo.email,
        mobileNumber: data.General.clientInfo.mobileNumber,
        panNumber: data.General.clientInfo.panNumber,
        clientType: data.General.clientInfo.clientType,
        fullName: data.Individual?.firstName,
        ...data,
      });

      console.log("Success:", res);
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  return (
    <UserFormProvider onSubmit={onSubmit}>
      <RegistrationFields />
    </UserFormProvider>
  );
};

export default RegistrationForm;

