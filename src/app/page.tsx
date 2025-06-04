import { HomeCard } from "@/components/HomeCard";
import Image from "next/image";
import banner from "../assets/banner.svg";
import gift from "../assets/gift.svg";
import draw from "../assets/draw.svg";
import star from "../assets/star.svg";
import devices from "../assets/devices.svg";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ClientLoginWrapper from "@/components/ClientLoginWrapper";
export default function Home() {
  return (
    <div>
      <Header loginActions={<ClientLoginWrapper />} />
      <div className="px-6 sm:px-10 md:px-[80px] lg:px-[160px] xl:px-[360px] pt-[24px] pb-[153px] bg-gradient-to-b from-[#004D61] to-[#FFFFFF]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[40px]">
          <label className="text-[28px] font-semibold leading-[35px] max-w-[400px] text-[#000000] text-center lg:text-left">
            Experimente mais liberdade no controle da sua vida financeira. Crie
            sua conta com a gente!
          </label>
          <Image
            src={banner}
            alt="banner ilustrativo"
            width={661}
            height={0}
            style={{ height: "auto" }}
          />
        </div>
        <div className="flex flex-col justify-center  mt-[40px]">
          <label className="text-[25px] text-[#000000] text-center font-semibold">
            Vantagens do nosso banco:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-[40px] place-items-center sm:place-items-stretch">
            <HomeCard
              image={gift}
              title="Conta e cartão gratuitos"
              description="Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção."
            />
            <HomeCard
              image={draw}
              title="Saques sem custo"
              description="Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h."
            />
            <HomeCard
              image={star}
              title="Programa de pontos"
              description="Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!"
            />
            <HomeCard
              image={devices}
              title="Seguro Dispositivos"
              description="Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica."
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
