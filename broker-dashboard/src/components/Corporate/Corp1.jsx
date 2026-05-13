import InputLabel from "../../shared/InputLabel"


const Corp1=({data})=>{


    return(<div className="grid grid-cols-4 gap-8  mt-10 h-full">
<InputLabel
  label="Subsidiary Company"
  placeholder={
    typeof data?.companyDetails?.isSubsidiary === "boolean"
      ? data.companyDetails.isSubsidiary
        ? "Yes"
        : "No"
      : undefined
  }
/>

<InputLabel
  label="Listed Company"
  placeholder={
    typeof data?.companyDetails?.isListed === "boolean"
      ? data.companyDetails.isListed
        ? "Yes"
        : "No"
      : undefined
  }
/>


<InputLabel label=" Company Registration Date AD" placeholder={data?.companyDetails?.companyRegistrationAD}
/>
<InputLabel label=" Company Registration Date BS" placeholder={data?.companyDetails?.companyRegistrationBS}
/>
<InputLabel label="Contact Number" placeholder={data?.mobileNumber}
/>
<InputLabel label=" Company CEO Name" placeholder={data?.companyDetails?.companyCEOName}
/>
<InputLabel label=" Company Secretary Name" placeholder={data?.companyDetails?.companySecretaryName}
/>
<InputLabel label=" Company Registration Office" placeholder={data?.companyDetails?.companyRegistrationOffice}
/>
<InputLabel label="Country Of Registration " placeholder={data?.companyDetails?.countryOfRegistration}
/>
<InputLabel label="Type Of Business" placeholder={data?.companyDetails?.typeOfBusiness}
/>
<InputLabel label="Date Of Incorporation AD"placeholder={data?.companyDetails?.dateOfIncorporationAD}
/>
<InputLabel label="Date Of Incorporation BS" placeholder={data?.companyDetails?.dateOfIncorporationBS}
/>
<InputLabel label="First Contact Person Name" placeholder={data?.companyDetails?.firstContactPersonName}
/>
<InputLabel label="First Contact Fathers Name" placeholder={data?.companyDetails?.firstContactFatherName}
/>
<InputLabel label="First Contact GrandFathers Name" placeholder={data?.companyDetails?.firstContactGrandfatherName}
/>
<InputLabel label="First Contact Designation" placeholder={data?.companyDetails?.firstContactDesignation}
/>
<InputLabel label="Second Contact Person Name" placeholder={data?.companyDetails?.secondContactPersonName}
/>
<InputLabel label="Second Contact Fathers Name" placeholder={data?.companyDetails?.secondContactFatherName}
/>
<InputLabel label="Second Contact GrandFathers Name" placeholder={data?.companyDetails?.secondContactGrandfatherName}
/>
<InputLabel label="Second Contact Designation" placeholder={data?.companyDetails?.secondContactDesignation}
/>
<InputLabel label="Fax" placeholder={data?.companyDetails?.fax}
/>
<InputLabel label="Company Website" placeholder={data?.companyDetails?.companyWebsite}
/>

    </div>)
    
}


export default Corp1