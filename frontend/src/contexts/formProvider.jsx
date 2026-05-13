import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";
import { userAuthServices } from "../services/authService";

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const initialFormState = {
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
      companyName: "",
      companyType: "",
      companyRegistrationNum: "",
      isSubsidiary: false,
      isListed: false,

      companyRegistrationAD: "",
      companyRegistrationBS: "",
      contactNumber: "",
      companyCEOName: "",
      companySecretaryName: "",
      companyRegistrationOffice: "",
      countryOfRegistration: "",
      typeOfBusiness: "",
      dateOfIncorporationAD: "",
      dateOfIncorporationBS: "",

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
    Ownership: {
      firstName: "",
      middleName: "",
      lastName: "",


      designation: "",
      fatherName: "",
      grandfatherName: "",
      panNumber: "",
      email: "",

      address:"",
      country:"",
      province:"",
      district:"",
      municipality:"",
      wardNumber:"",
      tole:"",
      postalCode:"",
      phoneNumber1:"",
      phoneNumber2:"",

      citizenshipNumber: "",
      citizenshipIssueDistrict: "",
      citizenshipIssueAD: "",
      citizenshipIssueBS: "",
      professionalQualification: "",
      professionalExperience: "",
      educationalQualification: "",
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
      grandfatherName: "",
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
      street: "",
      addressType: {
        corporateOffice: "",
        registeredOffice: "",
        branchOffice: "",
      },
    },
    Bank: {
      bankName: "",
      branch: "",
      accountType: "",
      accountNumber: "",
    },
    Depositary: {
      BOID: "",
    },
    Documents: {
      documentName:"",
      documentURL:"" 
    },
    UserAgreement: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});

  // Update a nested field in the form data
  const updateNestedField = (path, value) => {
    const newFormData = JSON.parse(JSON.stringify(formData));
    const pathArray = path.split(".");
    let current = newFormData;

    for (let i = 0; i < pathArray.length - 1; i++) {
        if (!current[pathArray[i]]) {
            current[pathArray[i]] = {}; // Ensure parent exists
        }
        current = current[pathArray[i]];
    }

    current[pathArray[pathArray.length - 1]] = value;
    setFormData(newFormData);
};

const calculateProgress = useCallback(() => {
  let total = 0;
  let filled = 0;
  const seen = new Set();

  const traverse = (current) => {
    if (!current || typeof current !== "object" || seen.has(current)) return;
    seen.add(current);

    Object.entries(current).forEach(([key, value]) => {
      if (typeof value === "object") {
        traverse(value);
      } else {
        total++;
        if (value !== "" && value !== null && value !== undefined && value !== false) {
          filled++;
        }
      }
    });
  };

  traverse(formData);
  return total > 0 ? Math.floor((filled / total) * 100) : 0;
}, [formData]);


  const validateForm = useCallback(
    (section) => {
      const errors = {};

      if (section === "General") {
        if (!formData.General.accountInfo) {
          errors["General.accountInfo"] = "Account info is required";
        }
        if (!formData.General.clientInfo.email) {
          errors["General.clientInfo.email"] = "Email is required";
        }
      }

      setFormErrors((prev) => ({
        ...prev,
        ...errors,
      }));

      return Object.keys(errors).length === 0;
    },
    [formData]
  );

  //File Upload
  const updateFileData = async (file) => {
    try {
      console.log("Uploading file:", file); // Added for debugging
      
      // Verify that file is actually a File object
      if (!(file instanceof File)) {
        throw new Error("Not a valid file object");
      }
      
      const response = await userAuthServices.uploadDocument(file);
      
      
      if (response && response.data && response.data.data) {
        const { documentURL } = response.data.data;
        setFormData({
          ...formData,
          Documents:{documentName : "Citizenship File", // Set the document name
          documentURL : documentURL
          }
        });
        
        console.log("File uploaded successfully:", response.data);
        return { success: true, data: response.data };
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  }

  const contextValue = {
    formData,
    formErrors,
    setFormData,
    updateFileData,
    updateNestedField,
    calculateProgress,
    validateForm,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};

const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

export default FormProvider;
export { useFormContext }