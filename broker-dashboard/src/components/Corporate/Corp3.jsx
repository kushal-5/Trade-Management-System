import InputLabel from "../../shared/InputLabel";
const Corp3 = ({data}) => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-8  mt-10 h-full">
        <InputLabel label="Country Of Residence"  placeholder={data?.addresses[0]?.countryOfResidence}/>
        <InputLabel label="State" placeholder={data?.addresses[0]?.state} />
        <InputLabel
          label="District"
          placeholder={data?.addresses[0]?.district}
        />
        <InputLabel label="Municipality" placeholder={data?.addresses[0]?.municipality} />
        <InputLabel label="Ward No" placeholder={data?.addresses[0]?.wardNum} />
        <InputLabel label="Tole" placeholder={data?.addresses[0]?.tole} />
        <InputLabel
          label="Address Type"
          placeholder={data?.addresses[0]?.addressType}
        />
    
      </div>

    <div className="rounded-lg text-white py-3">
          <h2 className="font-semibold text-3xl">Bank Information & Details</h2>
          <div className="grid grid-cols-4 gap-8  mt-10 h-full">
            
          <InputLabel
          label="Bank Name"
          placeholder={data?.bankingInfo[0]?.bankName}
          />
        <InputLabel label="Bank Branch"   placeholder={data?.bankingInfo[0]?.branch}/>
        <InputLabel label="Account Type"   placeholder={data?.bankingInfo[0]?.accountType} />
        <InputLabel label="Account Number"   placeholder={data?.bankingInfo[0]?.accountNumber} />
          </div>
        </div>
        <div className="rounded-lg text-white py-3">
          <h2 className="font-semibold text-3xl ">Depositary Details(Beneficiary Owner Identity Number)</h2>
          <div className="grid grid-cols-4 gap-8  mt-10 h-full">
            
      
        <InputLabel label="BOID"   placeholder={data?.depositoryInfo[0]?.BOID}/>
          </div>
        </div>
    </div>

  );
};

export default Corp3;
