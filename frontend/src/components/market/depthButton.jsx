import { useState, useRef } from "react";
import { EllipsisVertical } from "lucide-react";
export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button onClick={toggleDropdown}>
        <EllipsisVertical />
      </button>
      <div
        className={`absolute w-40 mt-3 mr- bg-black2 border rounded-lg shadow-md transition-opacity text-white duration-200 ${
          isOpen ? "visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="">
          <li>
            <button className="block w-full text-left p-2 hover:bg-gray-600">
              Edit
            </button>
          </li>
          <li>
            <button className="block w-full text-left p-2 hover:bg-gray-600 text-red-500">
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
