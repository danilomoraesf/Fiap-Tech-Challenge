import Image, { StaticImageData } from "next/image";
import byte from "../assets/byte.svg";
import { Button } from "./Button";

interface CardProps {
  name: string;
  cardType: string;
  valueCard: string;
}

export const Card: React.FC<CardProps> = ({ name, cardType, valueCard }) => {
  return (
    <div className='flex flex-col'>
      <label className='text-[20px] text-[#2F2E41] font-normal'>
        {cardType}
      </label>
      <div className='flex flex-row gap-[33px] mt-[24px]'>
        <div className='bg-[#004D61] py-[16px] pl-[16px] w-[327px] flex flex-col gap-[32px] rounded-lg '>
          <div className='flex flex-col gap-[10px]'>
            <Image src={byte} alt='marca do cartão' />
            <label className='text-[16px] text-[#FFFFFF] font-normal'>
              {valueCard}
            </label>
          </div>
          <div className='flex flex-col gap-[4px]'>
            <label className='text-[14px] text-[#FFFFFF]'>{name}</label>
            <label className='text-[12px] text-[#FFFFFF]'>*******</label>
          </div>
        </div>
        <div className='flex flex-col gap-[16px]'>
          <Button
            bgColor='#FF5031'
            borderColor='#FF5031'
            label='Configurar'
            variant='primary'
          />
          <Button variant='outline' borderColor='#BF1313' label='Bloquear' />
          <label className='text-[16px] text-[#2F2E41] font-normal'>
            Função: Débito/Crédito
          </label>
        </div>
      </div>
    </div>
  );
};

export default Card;
