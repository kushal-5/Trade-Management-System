import React from "react"
import Table from "../../shared/Table"



const AllCompanies = () => {    
    const headers = [
        "Name of Company",
    "Current Price",
    "Closed Price",
    "Highest Price",
"Lowest Price"]

    const data=[
        {
            companyName: "Diksha Muktan",
            currentPrice:"RS 150",
            closedPrice: "RS 250",
            highPrice: "RS 140",
            lowPrice: "RS 450",
        },
        {
          companyName: "John Doe",
            currentPrice:"RS 150",
            closedPrice: "RS 250",
            highPrice: "RS 140",
            lowPrice: "RS 450",
        }
        , {
          companyName: "John Doe",
            currentPrice:"RS 150",
            closedPrice: "RS 250",
            highPrice: "RS 140",
            lowPrice: "RS 450",
        }, {
          companyName: "John Doe",
            currentPrice:"RS 150",
            closedPrice: "RS 250",
            highPrice: "RS 140",
            lowPrice: "RS 450",
        }
    ]
   
    
    const renderRow = (row, index) => {
      return (
        <tr key={index} className="bg-[#0C0E12] text-white border-b-[.1px] border-[#828282]">
          <td className="py-4 px-8">
            <div className="flex flex-col">
              <span className="font-medium">{index + 1}. {row.companyName}</span>
            </div>
          </td>
    
          <td className="py-4 px-6">
            <div className="flex items-center gap-2 text-[#828282]">
             
              <span>{row.currentPrice}</span>
            </div>
          </td>
    
          <td className="py-4 px-6">
            <div className="flex items-center gap-2 text-[#828282]">
      
              <span>{row.closedPrice}</span>
            </div>
          </td>
    
          <td className="py-4 px-8">
            <div className="flex items-center gap-2 text-[#828282]">
              <span>{row.highPrice}</span>
            </div>

          </td>
          <td className="py-4 px-8">
            <div className="flex items-center gap-2 text-[#828282]">
              <span>{row.lowPrice}</span>
            </div>

          </td>
<td>

        <button onClick={() => setOpen(!open)} className="p-2 rounded py-5">
     ⁝
       </button>
</td>
        </tr>
      );
    };
      
    return(
        <div className="flex  gap-4 w-full bg-slate-50 mt-4">
         <Table headers={headers} data={data} renderRow={renderRow}/>
        </div>
    )}

export default AllCompanies