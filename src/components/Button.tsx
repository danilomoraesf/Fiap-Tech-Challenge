"use client";

import React, { useState } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "primary" | "secondary" | "outline";
  bgColor?: string;
  borderColor?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  className = "",
  bgColor = "#2563eb",
  borderColor = "#2563eb",
  disabled = false,
  ...rest
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const baseStyles =
    "border-2 px-[16px] py-[12px] text-white rounded-lg text-[16px] font-semibold w-fit h-fit cursor-pointer transition-colors duration-200";

  let variantStyles = "";
  const inlineStyles: React.CSSProperties = {};

  if (disabled) {
    variantStyles = "bg-gray-400 border-gray-400 text-white cursor-not-allowed";
    inlineStyles.backgroundColor = "#9CA3AF";
    inlineStyles.borderColor = "#9CA3AF";
  } else {
    inlineStyles.borderColor = isHovering ? "#000000" : borderColor;

    if (variant === "primary") {
      inlineStyles.backgroundColor = isHovering ? "#000000" : bgColor;
    } else if (variant === "outline") {
      variantStyles = "bg-transparent";
      inlineStyles.backgroundColor = isHovering ? "#000000" : "transparent";
    }
  }

  const combinedClassName = `${baseStyles} ${variantStyles} ${className}`;

  return (
    <button
      className={combinedClassName}
      style={inlineStyles}
      disabled={disabled}
      onMouseEnter={() => !disabled && setIsHovering(true)}
      onMouseLeave={() => !disabled && setIsHovering(false)}
      {...rest}
    >
      {label}
    </button>
  );
};
