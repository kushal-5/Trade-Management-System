import React from "react";

const LabelInput = ({
  src,
  alt,
  htmlFor,
  label,
  type,
  id,
  placeholder,
  value,
  onChange,
  className = "",
  required = true,
}) => {
  return (
    <div className={`w-[28rem]  ${className}`}>
      {label && (
        <label
          htmlFor={htmlFor}
          className="flex flex-col text-[#828282] font-roboto text-sm font-normal leading-8 "
        >
          {label}
        </label>
      )}
      <div className="relative flex w-full">
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className={`w-full text-[#BDBDBD] font-roboto text-sm font-normal bg-black 
border-b border-[1px] border-[#BDBDBD] rounded-md leading-tight md:leading-tight flex  
  py-5 px-[var(--sds-size-space-400)] items-center gap-4  
  ${src ? "pl-12" : "pl-4"} outline-none autofill:bg-black`}
          placeholder={placeholder}
          required={required}
          autoComplete="off"
        />
        {src && (
          <img
            src={src}
            alt={alt || "input icon"}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 "
          />
        )}
      </div>
    </div>
  );
};

export default LabelInput;
