import InputLabel from "../../shared/InputLabel"


const Indi1=({data})=>{

 
    return(<div className="grid grid-cols-4 gap-8  mt-10 h-full">

<InputLabel label="Date oF Birth AD" placeholder={data?.individualDetails?.dateOfBirthAD}
/>
<InputLabel label="Date oF Birth BS" placeholder={data?.individualDetails?.dateOfBirthBS}
/>
<InputLabel label="Father's Name" placeholder={data?.individualDetails?.fatherName}
/>
<InputLabel label="Mother's Name" placeholder={data?.individualDetails?.motherName}/>
<InputLabel label="Grand Father's Name" placeholder={data?.individualDetails?.grandfatherName}
/>
<InputLabel label="Marital Status" placeholder={data?.individualDetails?.maritalStatus}
/>
<InputLabel label="Nationality"placeholder={data?.individualDetails?.nationality}
/>
<InputLabel label="Is NRN? " placeholder={typeof data?.individualDetails?.isNRN === "boolean"? data.individualDetails.isNRN ?"Yes":"No":undefined}/>

<InputLabel label="Is Minor?" placeholder={typeof data?.individualDetails?.isMinor === "boolean" ? data.individualDetails.isMinor ?"Yes":"No":undefined}/>

<InputLabel label="Citizenship Number" placeholder={data?.individualDetails?.citizenshipNumber}/>
<InputLabel label="Citizenship Issued Place"placeholder={data?.individualDetails?.citizenshipIssuedDistrict}
/>
<InputLabel label="Citizenship Issued Date AD" placeholder={data?.individualDetails?.citizenshipIssuedDateAD}
/>
<InputLabel label="Citizenship Issued Date BS" placeholder={data?.individualDetails?.citizenshipIssuedDateBS}
/>
<InputLabel label="Financial Details" placeholder={data?.individualDetails?.financialDetails}/>

<InputLabel label="Is Involved in Investment Company?" placeholder={typeof data?.individualDetails?.isInvolvedInInvestmentCompany === "boolean" ? data.individualDetails.isInvolvedInInvestmentCompany ?"Yes":"No":undefined}/>

    </div>)
    
}


export default Indi1