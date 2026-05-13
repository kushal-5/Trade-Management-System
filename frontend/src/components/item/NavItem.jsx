const NavItem = ({ Icon, label, onClick, isActive }) => (
  <div
    className={`flex flex-col items-center justify-center cursor-pointer transition-colors duration-200 ${
      isActive ? "text-white" : "text-gray-400 hover:text-white"
    }`}
    onClick={onClick}
  >
    <Icon size={20} />
    <span className="text-xs mt-1">
    {label}</span>
  </div>
)

export default NavItem

