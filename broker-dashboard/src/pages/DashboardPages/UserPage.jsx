import React, { useState } from 'react'
import { Search } from 'react-feather'  
import AllUsers from '../UserVerify/AllUsers'
import PendingUsers from '../UserVerify/PendingUsers'
import RejectedUsers from '../UserVerify/RejectedUsers'
import Setting from '../../assets/dashboard/setting.svg'
import Filter from "../../assets/dashboard/Filter.svg"

const BrokerManagementContent = () => {
  const [activeTab, setActiveTab]= useState(0)

  const tabs= [
    {
      label: `All Users`,

    },
    {
      label: `Pending`,

    },
    {
      label: `Rejected`,

    },
  ] 
  return (
    <div className='w-full bg-[#0C0E12]'>
  <div className='bg-[#13161B] py-6 '>
    <h1 className='text-[#BDBDBD] text-xl font-semibold ms-8 '>New User Request</h1>

  </div>
  <div className='flex flex-row justify-between items-center'>

  <nav className='flex items-center'>
 {tabs.map((tab, index) => ( 
   <button
    key={index}
    onClick={() => setActiveTab(index)}
    className={`
     justify-center rounded-md items-center py-3 mt-8 w-[102px] 
    ${
      activeTab === index
      ? "bg-[#22262F] text-[#828282]"
      : "border-transparent text-[#828282]"
    }
    `}
    >
    {tab.label}
  </button>
  ))}
  </nav>
  <div className="flex items-center mt-8 gap-4 mr-4">
  {/* Search Input with Icon and Settings */}
  <div className="relative flex items-center bg-[#1a1a1a] border border-gray-800 rounded-md px-4 py-3 w-[20rem]">
    <Search className="text-[#828282] w-4 h-4 mr-2" />
    <input
      type="text"
      placeholder="Search Name / Client Code"
      className="bg-transparent text-sm text-white focus:outline-none w-full placeholder:text-[#828282]"
    />
    <img src={Setting} alt="Setting" className="w-4 h-4 ml-2" />
  </div>

  {/* Filters Button */}
  <div className="flex items-center gap-2 cursor-pointer">
    <img src={Filter} alt="Filter" className="w-4 h-4" />
    <p className="text-[#828282] text-md font-medium">Filters</p>
  </div>
</div>
</div>

  {activeTab=== 0 && (<AllUsers/>)}
  {activeTab=== 1 && (<PendingUsers/>)}
  {activeTab=== 2 && (<RejectedUsers/>)}

    </div>
  )
}

export default BrokerManagementContent
