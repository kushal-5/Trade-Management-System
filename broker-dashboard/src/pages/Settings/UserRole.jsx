import React from 'react'
import MagicPen from "../../assets/dashboard/magicpen.svg"
import { useNavigate } from 'react-router-dom'

const UserRole = () => {
    const navigate = useNavigate()
    const headers = [
        "Role Name",
    "Permission",
    "Action",]

    const data=[
        {
            roleName: "Admin",
            permission:"Full Access",
            action:"Edit Access",
      
        },
        {
          roleName: "Manager",
            permission:"Full Access",
               action:"Edit Access",
      
        }
        , {
          roleName: "Worker",
            permission:"Trade Management",
               action:"Edit Access",
      
        }, {
          roleName: "Co-worker",
            permission:"No Access",
               action:"Edit Access",
      
        }
    ]
   
    const renderRow = (row, index) => {
        return (
          <tr key={index} className="bg-[#0C0E12] text-white border-b-[.1px] border-[#828282]">
            <td className="py-4 px-8 border-[1px] border-[#828282] ">
              <div className="flex flex-col rounded-md p-2 ">
                <span className="font-medium"> {row.roleName}</span>
              </div>
            </td>
      
            <td className="py-4 px-6 border-[1px] border-[#828282] ">
              <div className="flex items-center gap-2 text-[#828282]">
               
                <span>{row.permission}</span>
              </div>
            </td>
      
            <td className="py-4 px-6 border-[1px] border-[#828282] " onClick={()=> navigate("/admin/home")}>
              <div className="flex items-center gap-2 text-[#828282] ">
              <img src={MagicPen} alt="magicpen" />
                <span className='text-[#2F80ED]'>{row.action}</span>
              </div>
            </td>

          </tr>
        );
      };
  return (
    <div className="w-full bg-[#0c0e12] my-4">
    <div>
      <table className={`w-full text-md text-[#BDBDBD] `} >
        <thead>
          <tr className="bg-[#22262F] p-4 border-[1px] border-[#828282]">
            {headers.map((header, i) => (
              <th key={i} className="px-4 py-3 text-left border-[1px] border-[#828282]">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, index) =>
              renderRow ? (
                renderRow(row, index)
              ) : (
                <tr key={index} className="">
                  {Object.values(row).map((value, i) => (
                    <td key={i} className="px-3 py-3 ">
                      {value}
                    </td>
                  ))}
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={headers.length} className="text-center py-4">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default UserRole