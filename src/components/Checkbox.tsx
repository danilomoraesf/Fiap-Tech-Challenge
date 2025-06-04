"use client";
import React from "react";

interface CheckBoxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const CheckBox: React.FC<CheckBoxProps> = ({ checked, onChange }) => {
  return (
    <input
      type='checkbox'
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      style={{ width: "40px" }}
      className={`w-6 h-6 cursor-pointer border-[#47A138] border-2 rounded-sm checked:bg-[#47A138] checked:border-[#47A138] appearance-none accent-[#47A138]`}
    />
  );
};

export default CheckBox;
