import InputLabel from "../../shared/InputLabel";
const Indi2 = ({data}) => {
  
  return (
      <div>
        <h2 className="font-semibold text-3xl">Money Laundering Prevention</h2>
      <div className="grid grid-cols-4 gap-8 w-full h-full">
        <InputLabel label="Politicain or a High-Ranked politician ?" placeholder={typeof data?.moneyLaunder?.isHighRankingPolitician === "boolean" ? data.individualDetails.isHighRankingPolitician ?"Yes":"No":undefined} />
        <InputLabel label="Related to Politicain or High-Ranked Official ?" placeholder={typeof data?.moneyLaunder?.isRelatedToHighRankingPolitician === "boolean" ? data.individualDetails.isRelatedToHighRankingPolitician ?"Yes":"No":undefined}/>
        <InputLabel
          label="Have Beneficiary?"
          placeholder={typeof data?.moneyLaunder?.haveBeneficiary === "boolean" ? data.individualDetails.haveBeneficiary ?"Yes":"No":undefined}
        />
        <InputLabel label="Convicted of Felony in the past?"     placeholder={typeof data?.moneyLaunder?.felonyRecord === "boolean" ? data.individualDetails.felonyRecord ?"Yes":"No":undefined} />
      
    
      </div>
      <div className="rounded-lg text-white ">
      <h2 className="font-semibold text-3xl">Address Information & Details</h2>
      <div className="grid grid-cols-4 gap-8   h-full">
      <InputLabel label="Country Of Residence"  placeholder={data?.addresses[0]?.countryOfResidence}/>
        <InputLabel label="State" placeholder={data?.addresses[0]?.state} />
        <InputLabel
          label="District"
          placeholder={data?.addresses[0]?.district}
        />
        <InputLabel label="Municipality" placeholder={data?.addresses[0]?.municipality} />
        <InputLabel label="Ward No" placeholder={data?.addresses[0]?.wardNum} />
        <InputLabel label="Tole" placeholder={data?.addresses[0]?.street} />
        <InputLabel
          label="Address Type"
          placeholder={data?.addresses[0]?.addressType}
        />
    
      </div>
          </div> 

    <div className="rounded-lg text-white py-3">
          <h2 className="font-semibold text-3xl">Bank Information & Details</h2>
          <div className="grid grid-cols-4 gap-8 h-full">
          <InputLabel
          label="Bank Name"
          placeholder={data?.bankingInfo[0]?.bankName}
          />
        <InputLabel label="Bank Branch"   placeholder={data?.bankingInfo[0]?.branch}/>
        <InputLabel label="Account Type"   placeholder={data?.bankingInfo[0]?.accountType} />
        <InputLabel label="Account Number"   placeholder={data?.bankingInfo[0]?.accountNumber} />
          </div>
        </div>

    </div>

  );
};

export default Indi2;
