"use client";

import { useRouter } from "next/navigation";
import IconButton from "./IconButton";
import trash from "../assets/trash.svg";
import pencil from "../assets/pencil.svg";
import ExtractItem from "./ExtractItem";
import { useUser } from "@/app/contexts/UserContext";

export const Extract = () => {
  const { user } = useUser()!;
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/dashboard/transactions");
  };

  const ultimasTransacoes = user?.transactions?.slice(-5).reverse();

  return (
    <div className='bg-[#F5F5F5] w-full lg:max-w-[300px] py-6 px-4 sm:px-6 rounded-lg flex flex-col gap-6'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6'>
        <label className='font-bold text-xl sm:text-2xl'>
          Extratos recentes
        </label>

        <div className='flex gap-3 sm:gap-4'>
          <IconButton
            icon={pencil}
            alt='Lápis de edição'
            onClick={handleRedirect}
          />
          <IconButton
            icon={trash}
            alt='Lata de lixo'
            onClick={handleRedirect}
          />
        </div>
      </div>
      {ultimasTransacoes?.length ? (
        ultimasTransacoes.map((t, index) => {
          const dateObj = new Date(t.data);
          const formattedDate = dateObj.toLocaleDateString("pt-BR");
          const formattedMonth = dateObj.toLocaleDateString("pt-BR", {
            month: "long",
          });

          return (
            <div key={index} className='flex flex-col gap-2'>
              <ExtractItem
                month={formattedMonth}
                type={t.tipo === "deposito" ? "Depósito" : "Transferência"}
                date={formattedDate}
                value={`${
                  t.tipo === "transferencia" ? "-" : ""
                }${t.valor.toFixed(2)}`}
              />
            </div>
          );
        })
      ) : (
        <p className='text-sm text-gray-500'>Nenhuma transação encontrada.</p>
      )}
    </div>
  );
};

export default Extract;
