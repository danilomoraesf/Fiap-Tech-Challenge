"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import hamburg from "../assets/hamburg.svg";

const routes = [
  { label: "Início", path: "/dashboard" },
  { label: "Transferências", path: "/dashboard/transactions" },
  { label: "Investimentos", path: "/dashboard/investments" },
  { label: "Serviços", path: "/dashboard/otherServices" },
  { label: "Meus cartões", path: "/dashboard/myCards" },
];

export const SideMenu = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const renderMenuItems = () => (
    <div className='flex flex-col sm:flex-row lg:flex-col sm:gap-[24px] gap-[16px]'>
      {routes.map(({ label, path }) => {
        const isActive = pathname === path;

        return (
          <div
            key={path}
            className='flex flex-col items-center group cursor-pointer mt-[14px] md:mt-0 lg:mt-[14px]'
            onClick={() => {
              if (!isActive) router.push(path);
              setIsOpen(false);
            }}
          >
            <label
              className={`text-center font-normal text-base cursor-pointer ${
                isActive
                  ? "text-[#47A138] cursor-default"
                  : "text-black group-hover:text-[#47A138]"
              }`}
            >
              {label}
            </label>
            <div
              className={`w-full border ${
                isActive
                  ? "border-[#47A138]"
                  : "border-black group-hover:border-[#47A138]"
              }`}
            />
          </div>
        );
      })}
    </div>
  );

  return (
    <div className='relative'>
      <button
        className='sm:hidden bg-[#004D61] rounded fixed top-7 left-4 z-50 w-10 h-10  flex items-center justify-center '
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image width={32} src={hamburg} alt='icone de menu' />
      </button>
      {isOpen && (
        <div className='sm:hidden fixed top-16 left-4 z-40 bg-[#F5F5F5] pb-[40px] p-4 rounded-lg shadow-lg'>
          {renderMenuItems()}
        </div>
      )}
      <div className='hidden sm:flex flex-col bg-[#F5F5F5] py-[10px] lg:pb-[30px] sm:pb-[10px] sm:items-center px-[34px] rounded-lg'>
        {renderMenuItems()}
      </div>
    </div>
  );
};

export default SideMenu;
