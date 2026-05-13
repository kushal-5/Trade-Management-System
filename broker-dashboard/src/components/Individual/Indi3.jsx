import InputLabel from "../../shared/InputLabel";

const Indi3 = ({data}) => {
    return (
        <div className="rounded-lg text-white py-2">
        <h2 className="font-semibold text-3xl ">Depositary Details(Beneficiary Owner Identity Number)</h2>
        <div className="grid grid-cols-4 gap-8 py-3 h-full">
          
    
        
        <InputLabel label="BOID"   placeholder={data?.depositoryInfo[0]?.BOID}/>
        </div>
      </div>
    );
    }

export default Indi3