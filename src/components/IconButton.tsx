import Image from "next/image";

interface IconButtonProps {
  icon: string;
  alt: string;
  onClick?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  alt,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className='cursor-pointer w-[40px] h-[40px] rounded-full flex justify-center items-center'
    >
      <Image width={40} src={icon} alt={alt} />
    </button>
  );
};

export default IconButton;
