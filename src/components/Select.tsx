"use client";

import Image from "next/image";
import React from "react";
import arrowDown from "../assets/arrow-down.svg";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className='relative flex flex-col gap-1 w-fit'>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`appearance-none w-[355px] bg-[#FFFFFF] border border-[#004D61] rounded px-3 py-2 pr-8 text-base focus:outline-none`}
      >
        <option value='' disabled hidden>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <div className='pointer-events-none absolute right-5 top-[17px] text-[#004D61]'>
        <Image src={arrowDown} alt='seta para baixo' />
      </div>
    </div>
  );
};

export default Select;
