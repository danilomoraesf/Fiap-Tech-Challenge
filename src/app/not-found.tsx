"use client";

import Image from "next/image";
import error from "../assets/404.svg";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import dynamic from "next/dynamic";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

const ClientLoginActions = dynamic(
  () => import("@/components/LoginActions").then((mod) => mod.LoginActions),
  { ssr: true }
);

export default function NotFound() {
  const router = useRouter();

  const handleBackHome = () => {
    router.push("/");
  };
  return (
    <div>
      <Header loginActions={<ClientLoginActions />} />
      <div className='px-6 sm:px-10 md:px-[80px] lg:px-[160px] xl:px-[360px] pt-[24px] pb-[153px] bg-gradient-to-b from-[#004D61] to-[#FFFFFF]'>
        <div className='flex flex-col gap-[32px] items-center justify-center'>
          <label className='text-[25px] font-bold'>
            Ops! Não encontramos a página...
          </label>
          <label className='font-normal text-base'>
            E olha que exploramos o universo procurando por ela! Que tal voltar
            e tentar novamente?
          </label>
          <Button
            label='Voltar ao início'
            bgColor='#FF5031'
            borderColor='#FF5031'
            onClick={handleBackHome}
          />
          <Image width={470} src={error} alt='Imagem de erro' />
        </div>
      </div>
      <Footer />
    </div>
  );
}
