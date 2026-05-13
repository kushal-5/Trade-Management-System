import { useState } from "react"

const NavIconItem = ({ icon, iconName, onClick, active = false }) => {
  
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-6 py-3 rounded-md mb-1 w-full text-left ${
        active ? "bg-[#1a1a1a]" : "hover:bg-[#1a1a1a]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={`${active ? "text-[#BDBDBD]" : "text-[#BDBDBD]"}`}>{icon}</span>
      <span className={`text-sm ${active ? "text-white" : "text-gray-400"}`}>{iconName}</span>
    </button>
  )
}

export default NavIconItem
