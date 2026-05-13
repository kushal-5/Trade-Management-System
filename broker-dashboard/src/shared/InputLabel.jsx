import React from "react";

const InputLabel = ({
  htmlFor,
  label,
  type = "text",
  id,
  placeholder,
  value,
  onChange,
  className = "",
  labelClass = "",
  required = true,
}) => {
  const isControlled = value !== undefined && onChange !== undefined;

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          htmlFor={htmlFor}
          className={`flex flex-col text-[#828282] font-roboto  font-normal leading-8 ${labelClass} cursor-default    focus:outline-none focus:ring-0 focus:border-none`}
        >
          {label}
        </label>
      )}

      <div className="relative flex w-full">
        <input
          type={type}
          id={id}
          readOnly
          placeholder={placeholder}
          required={required}
          autoComplete="off"
          className={`w-full text-[#BDBDBD] font-bold font-roboto text-sm leading-tight md:leading-tight flex items-center gap-3 bg-[#0c0e12]`}
          {...(isControlled ? { value, onChange } : {})}
          style={{
            border: "none",
            boxShadow: "none",
            outline: "none"
          }}
        />
      </div>
    </div>
  );
};

export default InputLabel;
