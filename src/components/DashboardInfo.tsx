"use client";

import { useState } from "react";
import Image from "next/image";
import eye from "../assets/eye.svg";

interface DashboardInfoProps {
  user: string;
  balance: number;
}

export const DashboardInfo: React.FC<DashboardInfoProps> = ({
  user,
  balance,
}) => {
  const [showBalance, setShowBalance] = useState(true);

  const toggleBalance = () => {
    setShowBalance((prev) => !prev);
  };

  const dataAtual = new Date();
  const dataFormatada = dataAtual.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="w-full h-fit sm:h-[402px] rounded-lg bg-[#004D61] bg-cover bg-no-repeat bg-center flex flex-col gap-6 px-4 py-6 sm:px-6 sm:py-6">
      <label className="text-white font-semibold text-xl sm:text-2xl">
        Olá, {user}! :)
      </label>
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0">
        <label className="text-white text-sm sm:text-xs capitalize">
          {dataFormatada}
        </label>
        <div className="flex flex-col">
          <div className="flex items-center gap-2 sm:gap-4">
            <label className="text-white text-lg sm:text-xl font-semibold">
              Saldo
            </label>
            <button onClick={toggleBalance}>
              <Image src={eye} alt="Ícone ver saldo" />
            </button>
          </div>

          <div className="border border-[#FF5031] mt-3 sm:mt-4" />

          <label className="text-white text-sm sm:text-base mt-3">
            Conta corrente
          </label>
          <label className="text-white text-2xl sm:text-3xl mt-2">
            {showBalance
              ? `R$ ${balance < 0 ? "-" : ""}${Math.abs(balance).toFixed(2)}`
              : "*****"}
          </label>
        </div>
      </div>
    </div>
  );
};

export default DashboardInfo;
