import React, { useState } from 'react'
import UserRole from '../Settings/UserRole'
import ModuleScreen from '../Settings/ModuleScreen'


const SettingContent = () => {
    const [activeTab, setActiveTab]= useState(0)
    const tabs= [
      {
        label: `User Role`,
  
      },
      {
        label: `Module Screen`,
  
      },

    ] 
  return (
    <div className='w-full bg-[#0C0E12]'>
  <div className='bg-[#13161B] py-6 '>
    <h1 className='text-[#BDBDBD] text-xl font-semibold ms-8 '>Listed Companies</h1>

  </div>
  <div className='flex flex-row justify-between items-center'>

  <nav className='flex items-center'>
 {tabs.map((tab, index) => ( 
   <button
    key={index}
    onClick={() => setActiveTab(index)}
    className={`
     justify-center rounded-md items-center py-3 mt-8 w-[200px] 
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
  </div>
  {activeTab=== 0 && (<UserRole/>)}
  {activeTab=== 1 && (<ModuleScreen/>)}

  </div>
  )
}

export default SettingContent
