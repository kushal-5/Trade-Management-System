import * as yup from "yup";

const userSchema = yup.object().shape({
  General: yup.object().shape({
    accountInfo: yup.string().required("Account info is required"),
    clientInfo: yup.object().shape({
      clientType: yup.string().oneOf(["individual", "corporate", "mutual"], "Invalid client type").required("Client type is required"),
      email: yup.string().email("Invalid email").required("Email is required"),
      mobileNumber: yup.string().matches(/^[0-9]{10}$/, "Phone number must be 10 digits").required("Mobile number is required"),
      panNumber: yup.string().matches(/^[A-Za-z0-9]{9}$/, "PAN must be 9 characters").required("PAN number is required"),
    }),
  }),

  Corporate: yup.object().shape({
    basic: yup.object().shape({
      companyname: yup.string().required("Company name is required"),
      companyType: yup.string().required("Company type is required"),
      companyRegistrationNum: yup.string().required("Company registration number is required"),
      isSubsidiary: yup.boolean().required("Subsidiary status is required"),
      isListed: yup.boolean().required("Listed status is required"),
    }),
    info: yup.object().shape({
      companyRegistrationAD: yup.date().nullable(),
      companyRegistrationBS: yup.date().nullable(),
      contactNum: yup.string().required("Contact number is required"),
      companyCEOName: yup.string().required("CEO name is required"),
      companySecretaryName: yup.string().required("Secretary name is required"),
      companyRegistrationOffice: yup.string().required("Registration office is required"),
      countryOfRegistration: yup.string().required("Country of registration is required"),
      typeOfBusiness: yup.string().required("Type of business is required"),
      dateOfIncorporationAD: yup.date().nullable(),
      dateOfIncorporationBS: yup.date().nullable(),
    }),
  }),

  Ownership: yup.object().shape({
    personalInfo: yup.object().shape({
      firstName: yup.string().required("First name is required"),
      middleName: yup.string(),
      lastName: yup.string().required("Last name is required"),
    }),
    personalDetail: yup.object().shape({
      designation: yup.string().required("Designation is required"),
      fatherName: yup.string().required("Father name is required"),
      grandfatherName: yup.string().required("Grandfather name is required"),
      panNumber: yup.string().required("PAN number is required"),
      email: yup.string().email().required("Email is required"),
    }),
  }),

  Individual: yup.object().shape({
    firstName: yup.string().required("First name is required"),
    middleName: yup.string(),
    lastName: yup.string().required("Last name is required"),
    gender: yup.string().oneOf(["male", "female", "other"], "Invalid gender"),
    dateOfBirthAD: yup.date().nullable(),
    dateOfBirthBS: yup.date().nullable(),
    isMinor: yup.boolean().required("Minor status is required"),

    // Conditional validation for minors
    minorDetails: yup.object().when("isMinor", {
      is: true,
      then: yup.object().shape({
        birthCertificateNumber: yup.string().required("Birth certificate number is required for minors"),
        guardianName: yup.string().required("Guardian name is required"),
        guardianRelationship: yup.string().required("Guardian relationship is required"),
        guardianMobileNumber: yup.string().matches(/^[0-9]{10}$/, "Invalid mobile number"),
      }),
    }),

    // Conditional validation for adults
    citizenshipNumber: yup.string().when("isMinor", {
      is: false,
      then: yup.string().required("Citizenship number is required for adults"),
    }),
  }),

  Address: yup.object().shape({
    countryOfResidence: yup.string().required("Country of residence is required"),
    state: yup.string().required("State is required"),
    district: yup.string().required("District is required"),
    municipality: yup.string().required("Municipality is required"),
    wardNum: yup.number().required("Ward number is required"),
    street: yup.string(),
  }),
  Depositary: yup.object().shape({
    BOID: yup.string().required("BOID is required"),
  }),
    Documents: yup.object().shape({
        citizenship: yup.string().required("Doucument is required"),
    }),
  Bank: yup.object().shape({
    bankType: yup.string().required("Bank type is required"),
    branch: yup.string().required("Branch is required"),
    accountType: yup.string().required("Account type is required"),
    accountNumber: yup.string().matches(/^[0-9]{9,18}$/, "Invalid account number").required("Account number is required"),
  }),
  UserAgreement: yup.boolean().oneOf([true], "You must agree to the terms"),
});

export default userSchema;
