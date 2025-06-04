import Image from "next/image";
import logoWhite from "../assets/logo-white.svg";
import instagram from "../assets/instagram.svg";
import whatsapp from "../assets/whatsapp.svg";
import youtube from "../assets/youtube.svg";

export const Footer = () => {
  return (
    <footer className='bg-[#000000] py-[43px] px-6 sm:px-10 md:px-[160px] lg:px-[360px]'>
      <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 text-center lg:text-left'>
        <div className='flex flex-col gap-[16px]'>
          <label className='text-[#FFFFFF] text-[16px] font-bold'>
            Serviços
          </label>
          <label className='text-[#FFFFFF] text-[16px] font-normal'>
            Conta corrente
          </label>
          <label className='text-[#FFFFFF] text-[16px] font-normal'>
            Conta PJ
          </label>
          <label className='text-[#FFFFFF] text-[16px] font-normal'>
            Cartão de crédito
          </label>
        </div>

        <div className='flex flex-col gap-[16px]'>
          <label className='text-[#FFFFFF] text-[16px] font-bold'>
            Contato
          </label>
          <label className='text-[#FFFFFF] text-[16px] font-normal'>
            0800 004 250 08
          </label>
          <label className='text-[#FFFFFF] text-[16px] font-normal'>
            meajuda@bytebank.com.br
          </label>
          <label className='text-[#FFFFFF] text-[16px] font-normal'>
            ouvidoria@bytebank.com.br
          </label>
        </div>

        <div className='flex flex-col gap-[16px] items-center'>
          <label className='text-[#FFFFFF] text-[16px] font-bold'>
            Desenvolvido por Alura
          </label>
          <Image width={145} src={logoWhite} alt='logo branco' />
          <div className='flex gap-[24px] mt-2'>
            <Image width={30} src={instagram} alt='Instagram' />
            <Image width={30} src={whatsapp} alt='WhatsApp' />
            <Image width={30} src={youtube} alt='YouTube' />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
