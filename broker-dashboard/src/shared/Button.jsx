const Button = ({ isOnline, onClick, isCompleted, isNext }) => {
  let buttonClass = "";
  let buttonText = "";

  if (isNext !== undefined) {
    buttonClass = isNext ? "bg-[#9E77ED] border-2 border-white px-8" : "bg-[#121212] rounded-md border-2 border-[#828282]"; 
    buttonText = isNext ? "Next" : "Previous";
  } else if (isCompleted !== undefined) {
    buttonClass = isCompleted ? "bg-[#27AE60]" : "bg-[#EB5757]";
    buttonText = isCompleted ? "Completed" : "Rejected";
  } else if (isOnline !== undefined) {
    buttonClass = isOnline ? "bg-[#27AE60]" : "bg-[#EB5757]";
    buttonText = isOnline ? "Online" : "Offline";
  } else {
    buttonClass = "bg-[#0c0e12]";
    buttonText = "DONE";
  }

  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 text-white text-center rounded-md ${buttonClass}`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
