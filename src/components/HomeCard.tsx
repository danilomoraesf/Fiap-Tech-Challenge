import React from "react";
import Image, { StaticImageData } from "next/image";

interface HomeCardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

export const HomeCard: React.FC<HomeCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className='flex justify-center items-center flex-col text-center max-w-[300px] px-4'>
      <Image width={73} src={image} alt='ícone' />
      <label className='font-bold text-xl text-[#47A138] mt-4 text-[20px]'>
        {title}
      </label>
      <label className='text-[#767676] mt-2 text-[16px]'>{description}</label>
    </div>
  );
};
