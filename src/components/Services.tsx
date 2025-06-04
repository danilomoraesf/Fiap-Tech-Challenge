import Image, { StaticImageData } from "next/image";

interface ServicesProps {
  title: string;
  image: StaticImageData;
  imageAlt: string;
}

export const Services: React.FC<ServicesProps> = ({
  title,
  image,
  imageAlt,
}) => {
  return (
    <div className='w-full h-[167px] rounded-lg bg-[#F2F2F2] p-[24px] flex flex-col items-center justify-center gap-[16px]'>
      <Image width={60} src={image} alt={imageAlt} />
      <label className='text-base text-[#000000] font-bold text-center'>
        {title}
      </label>
    </div>
  );
};

export default Services;
