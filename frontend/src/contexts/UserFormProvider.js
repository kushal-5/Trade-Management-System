import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import userSchema from "../schemas/UserSchema"; // Import Yup schema

const UserFormProvider = ({ children, onSubmit }) => {
  const methods = useForm({
    // resolver: yupResolver(userSchema), // Validation
    defaultValues: {
      General: {
        accountInfo: "",
        clientInfo: {
          clientType: "",
          email: "",
          password: "",
          mobileNumber: "",
          panNumber: "",
        },
      },
      Corporate: {
        basic: {
          companyname: "",
          companyType: "",
          companyRegistrationNum: "",
          isSubsidiary: false,
          isListed: false,
        },
        info: {
          companyRegistrationAD: "",
          companyRegistrationBS: "",
          contactNum: "",
          companyCEOName: "",
          companySecretaryName: "",
          companyRegistrationOffice: "",
          countryOfRegistration: "",
          typeOfBusiness: "",
          dateOfIncorporationAD: "",
          dateOfIncorporationBS: "",
        },
        detail: {
          firstContactPersonName: "",
          firstContactFatherName: "",
          firstContactGrandfatherName: "",
          firstContactDesignation: "",
          secondContactPersonName: "",
          secondContactFatherName: "",
          secondContactGrandfatherName: "",
          secondContactDesignation: "",
          fax: "",
          companyWebsite: "",
        },
      },
      Ownership: {
        personalInfo: {
          firstName: "",
          middleName: "",
          lastName: "",
        },
        personalDetail: {
          designation: "",
          fatherName: "",
          grandfatherName: "",
          panNumber: "",
          email: "",
        },
      },
      Individual: {
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "",
        dateOfBirthAD: "",
        dateOfBirthBS: "",
        fatherName: "",
        motherName: "",
        grandfatherName: "", // Fixed typo
        maritalStatus: "",
        nationality: "",
        isNRN: false,
        NRNdetails: "",
        isMinor: false,

        // Adult specific fields
        citizenshipNumber: "",
        citizenshipIssuedDistrict: "",
        citizenshipIssuedDateAD: "",
        citizenshipIssuedDateBS: "",
        financialDetails: "",
        isInvolvedInInvestmentCompany: false,

        // Minor specific fields
        minorDetails: {
          birthCertificateNumber: "",
          birthCertificateIssuedPlace: "",
          birthCertificateIssuedDateAD: "",
          birthCertificateIssuedDateBS: "",
          guardianName: "",
          guardianRelationship: "",
          guardianTelephoneNumber: "",
          guardianMobileNumber: "",
          guardianPANNumber: "",
          guardianEmail: "",
          isGuardianInvolvedInInvestmentCompany: false,
        },
      },
      MoneyLaunder: {
        isHighRankingPolitician: false,
        isRelatedToHighRankingPolitician: false,
        politicalRelationDetails: {
          relatedPersonName: "",
          relationshipType: "",
        },
        haveBeneficiary: false,
        beneficiaryDetails: {
          beneficiaryName: "",
          relationshipToBeneficiary: "",
        },
        felonyRecord: false,
      },
      Address: {
        countryOfResidence: "",
        state: "",
        district: "",
        municipality: "",
        wardNum: "",
        street: "", // Fixed capitalization
        addressType: {
          corporateOffice: "",
          registeredOffice: "",
          branchOffice: "",
        },
      },
      Bank: {
        bankType: "",
        branch: "",
        accountType: "",
        accountNumber: "",
      },
      Depositary: {
        BOID: "",
      },
      Documents: {
        documentName: "",
        documentURL: "",
      },
      UserAgreement: false,
    },
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default UserFormProvider;
