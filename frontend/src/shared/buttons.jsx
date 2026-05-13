const Buttons = ({ label, onClick, icon }) => {
  return (
    <button
      className="bg-seeWarnings flex gap-3 text-black p-2 w-28 rounded-md"
      onClick={onClick}
    >
      {label}
      {icon}
    </button>
  );
};

export default Buttons;
