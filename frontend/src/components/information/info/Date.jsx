import React, { useRef } from "react";
import { UilCalendarAlt } from "@iconscout/react-unicons";

const DateInputWithIcon = () => {
  const dateInputRef = useRef(null); // Create a ref for the date input

  // Function to open the calendar
  const handleIconClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker(); // Open the date picker
    }
  };

  return (
    <div className="relative">
      {/* Calendar Icon */}
      <UilCalendarAlt
        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#828282] cursor-pointer"
        onClick={handleIconClick} // Trigger the calendar on icon click
      />
      {/* Label */}
      <label className="absolute top-2 left-[52px] text-[#828282] text-sm">
        BUSINESS DATE FROM
      </label>
      {/* Date Input */}
      <input
        type="date"
        ref={dateInputRef} // Attach the ref to the input
        className="bg-[#141414] border border-[#4F4F4F] p-2 pt-6 pl-12 rounded-lg w-[466px] h-[63px] text-white"
      />
    </div>
  );
};

export default DateInputWithIcon;