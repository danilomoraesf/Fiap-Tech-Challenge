"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import avatar from "../assets/avatar.svg";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/contexts/UserContext";

export const Menu: React.FC = () => {
  const { user } = useUser()!;
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    document.cookie = "token=; Max-Age=0; path=/";
    document.cookie = "user=; Max-Age=0; path=/";
    router.push("/");
  };

  return (
    <div className='bg-[#004D61] w-full py-[30px]'>
      <div
        className='w-full px-4 sm:px-8 md:px-12 lg:px-36 xl:px-[360px] flex justify-end items-center gap-[16px] sm:gap-[40px] relative'
        ref={menuRef}
      >
        <label className='text-[#FFFFFF] text-[13px] font-semibold truncate max-w-[140px] sm:max-w-[200px] md:max-w-none'>
          {user?.nome}
        </label>

        <button onClick={() => setOpen(!open)}>
          <Image
            className='cursor-pointer'
            width={40}
            src={avatar}
            alt='icone de avatar'
          />
        </button>

        {open && (
          <div className='absolute top-[50px]   sm:right-[80px] md:right-[40px] lg:right-[360px] bg-white shadow-md rounded-lg py-2 w-[160px] z-50'>
            <button
              onClick={() => router.push("/dashboard/myAccount")}
              className='block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer'
            >
              Minha conta
            </button>
            <button
              onClick={handleLogout}
              className='block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-600 cursor-pointer'
            >
              Sair
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
