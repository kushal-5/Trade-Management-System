import React from 'react'
import { Search } from 'react-feather'
import Setting from '../../assets/dashboard/setting.svg'
import Filter from "../../assets/dashboard/Filter.svg"
import Table from '../../shared/Table'
import Calender from "../../assets/dashboard/calender.svg"
import Email from "../../assets/dashboard/email.svg"
import Phone from "../../assets/dashboard/phone.svg"
import Button from "../../shared/Button"

const TradeUserContent = () => {
    const headers = [
        "Full Name/Client Code",
        "Email ",
    "Registered Date",
    "Modified Date",
    "Phone Number",
  "Action"]

    const data=[
        {
            fullName: "Armita Thapa",
            ClientCode:"254541",
            registeredDate: "2023-01-01",
            email: " preeti@gmail.com",
            modifiedDate:"2024-04-04",
            phone: " 9822593122",
        },
        {
            fullName: "John Doe",
            ClientCode:"254541",
            registeredDate: "2023-01-01",
            modifiedDate:"2024-04-04",
            email: " preeti@gmail.com",
            phone: " 9822593122",
        }
        , {
            fullName: "John Doe",
            ClientCode:"254541",
            registeredDate: "2023-01-01",
            modifiedDate:"2024-04-04",
            email: " preeti@gmail.com",
            phone: " 9822593122",
        }, {
            fullName: "John Doe",
            ClientCode:"254541",
            registeredDate: "2023-01-01",
            modifiedDate:"2024-04-04",
            email: " preeti@gmail.com",
            phone: " 9822593122",
        }
    ]
  
    const renderRow = (row, index) => {
        return (
          <tr key={index} className="bg-[#0C0E12] text-white border-b-[.1px] border-[#828282]">
            <td className="py-4 px-8">
              <div className="flex flex-col">
                <span className="font-medium">{index + 1}. {row.fullName}</span>
                <span className="text-sm text-[#828282]">{row.ClientCode}</span>
              </div>
            </td>
      
      
            <td className="py-4 px-2">
              <div className="flex items-center gap-2 text-[#828282]">
                <img src={Email} alt="Email icon" className="w-5 h-5" />
                <span>{row.email}</span>
              </div>
            </td>
            
            <td className="py-4 px-6">
              <div className="flex items-center gap-2 text-[#828282]">
                <img src={Calender} alt="Calendar icon" className="w-5 h-5" />
                <span>{row.registeredDate}</span>
              </div>
            </td>
                  
            <td className="py-4 px-6">
              <div className="flex items-center gap-2 text-[#828282]">
                <img src={Calender} alt="Calendar icon" className="w-5 h-5" />
                <span>{row.modifiedDate}</span>
              </div>
            </td>
      
            <td className="py-4 px-8">
              <div className="flex items-center gap-2 text-[#828282]">
                <img src={Phone} alt="Phone icon" className="w-5 h-5" />
                <span>{row.phone}</span>
              </div>
            </td>
  
            <td>
              <div>
            <Button isOnline={true}/>
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
  return (
    <div className='w-full bg-[#0C0E12]'>
      <div className='bg-[#13161B] py-6 px-8 flex flex-col md:flex-row justify-between items-center'>
        <h1 className='text-[#BDBDBD] text-xl font-semibold mb-4 md:mb-0'>User Request</h1>

        <div className="flex flex-wrap items-center gap-4">
          {/* Search Input */}
          <div className="relative flex items-center bg-[#1a1a1a] border border-gray-800 rounded-md px-4 py-2 w-[20rem] max-w-full">
            <Search className="text-[#828282] w-4 h-4 mr-2" />
            <input
              type="text"
              placeholder="Search Name / Client Code"
              className="bg-transparent text-sm text-white focus:outline-none w-full placeholder:text-[#828282]"
            />
            <button type="button">
              <img src={Setting} alt="Setting" className="w-4 h-4 ml-2" />
            </button>
          </div>

          {/* Filters Button */}
          <button className="flex items-center gap-2 text-[#828282] text-sm font-medium hover:text-white transition">
            <img src={Filter} alt="Filter" className="w-4 h-4" />
            Filters
          </button>
        </div>
      </div>
      <div className="flex  gap-4 w-full bg-slate-50 mt-4">
         <Table headers={headers} data={data} renderRow={renderRow}/>
        </div>
    </div>
  )
}

export default TradeUserContent
