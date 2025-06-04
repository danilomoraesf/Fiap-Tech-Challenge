import { ChangeEvent, useState } from "react";

interface InputProps {
  title?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value: string;
  type?: string;
  validateEmail?: boolean;
}

export const Input: React.FC<InputProps> = ({
  title,
  onChange,
  placeholder,
  value,
  type = "text",
  validateEmail = false,
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (validateEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setError(
        emailRegex.test(val)
          ? null
          : "Dado incorreto. Revise e digite novamente."
      );
    }
    onChange(e);
  };

  return (
    <div className='flex flex-col gap-[8px] w-full'>
      <label className='font-bold text-base'>{title}</label>
      <input
        type={type}
        className={`focus:outline-none bg-white rounded-lg border h-[48px] p-[16px] w-full ${
          error ? "border-[#BF1313]" : "border-[#DEE9EA]"
        }`}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {error && <span className='text-sm text-[#BF1313]'>{error}</span>}
    </div>
  );
};

export default Input;
