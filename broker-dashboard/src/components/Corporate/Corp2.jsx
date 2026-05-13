import InputLabel from "../../shared/InputLabel";

const Corp2 = ({data}) => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-8  mt-10 h-full">
        <InputLabel label="Designation" placeholder={data?.ownershipDetails?.designation}  />
        <InputLabel label="Father's Name"  placeholder={data?.ownershipDetails?.fatherName} />
        <InputLabel
          label="Grand Father's Name"
          placeholder={data?.ownershipDetails?.grandfatherName} 
        />
        <InputLabel label="Pan Number"  placeholder={data?.ownershipDetails?.panNumber}  />
        <InputLabel label="Email"  placeholder={data?.ownershipDetails?.email}  />
        <InputLabel label="Address"  placeholder={data?.ownershipDetails?.address} />
        <InputLabel label="Country"  placeholder={data?.ownershipDetails?.country} />
        <InputLabel label="Province"  placeholder={data?.ownershipDetails?.province}  />
        <InputLabel label="District"  placeholder={data?.ownershipDetails?.district}  />
        <InputLabel label="Municipality"  placeholder={data?.ownershipDetails?.municipality}  />
        <InputLabel label="Ward No"  placeholder={data?.ownershipDetails?.wardNumber}  />
        <InputLabel label="Tole"  placeholder={data?.ownershipDetails?.tole}  />
        <InputLabel label="Postal Code"  placeholder={data?.ownershipDetails?.postalCode}  />
        <InputLabel label="Phone Number 1"  placeholder={data?.ownershipDetails?.phoneNumber1}  />
        <InputLabel label="Phone Number 2"  placeholder={data?.ownershipDetails?.phoneNumber2}  />
        <InputLabel label="Citizenship Number"  placeholder={data?.ownershipDetails?.citizenshipNumber} />
        <InputLabel label="Citizenship Issue District"  placeholder={data?.ownershipDetails?.citizenshipIssueDistrict} />
        <InputLabel
          label="Citizenship Issue Date AD"
          placeholder={data?.ownershipDetails?.citizenshipIssueAD}/>
        <InputLabel
          label="Citizenship Issue Date BS"
          placeholder={data?.ownershipDetails?.citizenshipIssueBS} 
        />
        <InputLabel
          label="Professional Qualification"
          placeholder={data?.ownershipDetails?.professionalQualification}
        />
        <InputLabel label="Professional Experience in Years"  placeholder={data?.ownershipDetails?.professionalExperience} />
        <InputLabel
          label="Educational Qualification"
          placeholder={data?.ownershipDetails?.educationalQualification}
        />
      </div>
    </div>
  );
};

export default Corp2;
