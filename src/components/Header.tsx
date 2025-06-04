import Image from "next/image";
import logo from "../assets/logo.svg";

interface HeaderProps {
  loginActions?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ loginActions }) => {
  return (
    <header className='w-full bg-[#000000] px-4 sm:px-8 md:px-[80px] lg:px-[160px] xl:px-[360px] py-[24px]'>
      <div className='flex flex-wrap items-center justify-between gap-y-4'>
        <div className='flex items-center gap-6 sm:gap-10'>
          <Image height={32} alt='Logo' src={logo} />
          <label className='text-[#47A138] font-semibold text-sm sm:text-base cursor-pointer'>
            Sobre
          </label>
          <label className='text-[#47A138] font-semibold text-sm sm:text-base cursor-pointer'>
            Serviços
          </label>
        </div>
        {loginActions}
      </div>
    </header>
  );
};

export default Header;
