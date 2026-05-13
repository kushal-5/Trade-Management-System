"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function DropdownSelect({ options, label, icon: Icon, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectOption = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
    if (onSelect) onSelect(value);
  };

  return (
    <div className="relative w-full"> {/* Changed from fixed width to full width */}
      <div
        className="w-full bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800/50 transition-colors rounded-xl h-[63px] flex items-center justify-between px-4 cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon className="h-5 w-5 text-zinc-400" />}
          <div className="flex flex-col items-start gap-0.5">
            <span className="text-xs text-zinc-400 font-medium">{label}</span>
            <span className="text-base">
              {selectedOption
                ? options.find((option) => option.value === selectedOption)?.label
                : "Select an option"}
            </span>
          </div>
        </div>
        <ChevronDown className={`h-5 w-5 text-zinc-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>
      {isOpen && (
        <div className="absolute w-full mt-2 bg-zinc-900 border border-zinc-800 text-white rounded-xl overflow-hidden z-10">
          {options.map((option) => (
            <div
              key={option.value}
              className="px-4 py-2 hover:bg-zinc-800 cursor-pointer"
              onClick={() => selectOption(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}