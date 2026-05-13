function TabButton({ label, active, onClick }) {
  return (
    <button
      className={`px-4 py-2 text-sm rounded-md mr-2 ${active ? "bg-[#1a1a1a]" : "text-gray-400"}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default TabButton;