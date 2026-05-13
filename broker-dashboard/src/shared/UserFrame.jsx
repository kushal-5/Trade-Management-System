import Vector from '../assets/dashboard/Vector1.svg'
import Eclipse from '../assets/dashboard/Eclipse.svg'

const UserFrame= ({title,value})=>{
    const today = new Date();

    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
    };
  
    const formattedDate = today.toLocaleDateString('en-US', options);
return (
    <div className=' w-[27.1875rem] h-[14rem]  bg-[#0c0e12] '>
        <div  className='gap-6'>

    <h1 className='px-5 py-3 bg-[#13161B] '>{title}</h1>
        </div>
    <div className='mx-4 mt-4 flex flex-row gap-2 justify-between '>
    <h1 className='text-md font-normal'> {value} <span className='text-[#27AE60]'> ↑ 23.24 %</span></h1>
  <p>{formattedDate}</p>
    </div>
 
    <div className='relative flex justify-center mt-12  '>
    <img className=" h-9" src={Vector} />
      <img className="absolute top-[-20px]" src={Eclipse} />

    </div>
   </div>
)

}

export default UserFrame;