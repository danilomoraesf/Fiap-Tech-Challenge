"use client";

import React from "react";

interface NumberInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const NumberInput: React.FC<NumberInputProps> = ({
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");

    const padded = raw.padStart(3, "0");
    const cents = padded.slice(-2);
    const units = padded.slice(0, -2);

    const formatted = `${parseInt(units, 10)},${cents}`;
    onChange(formatted);
  };

  return (
    <input
      type='text'
      value={value}
      onChange={handleChange}
      className='bg-[#FFFFFF] w-[250px] border border-[#004D61] rounded px-3 py-2 text-center'
    />
  );
};

export default NumberInput;
