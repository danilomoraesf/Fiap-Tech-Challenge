"use client";
import { useUser } from "@/app/contexts/UserContext";
import { useState } from "react";
import { Button } from "./Button";
import NumberInput from "./NumberInput";
import Select from "./Select";

export const Transaction = () => {
  const { refreshUser } = useUser()!;

  const [tipo, setTipo] = useState("");
  const [valor, setValor] = useState("00,00");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const valorNumerico = parseFloat(valor.replace(".", "").replace(",", "."));

    const novaTransacao = {
      tipo,
      valor: valorNumerico,
    };

    try {
      const res = await fetch("/api/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novaTransacao),
      });

      if (!res.ok) {
        const erro = await res.json();
        alert(
          "Erro: Por favor selecione o tipo de transação ou verifique se voce possui saldo suficiente para transferencia"
        );
        return;
      }

      alert("Transação adicionada com sucesso!");
      setTipo("");
      setValor("00,00");
      await refreshUser();
    } catch (err) {
      console.error(err);
      alert("Erro ao salvar transação");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-[#CBCBCB] rounded-lg w-full sm:max-w-[690px] px-4 sm:px-[24px] py-[24px] flex flex-col gap-[32px]'
    >
      <label className='text-[#000000] text-[25px] font-bold'>
        Nova transação
      </label>

      <Select
        placeholder='Selecione o tipo de transação'
        value={tipo}
        onChange={setTipo}
        options={[
          { label: "Depósito", value: "deposito" },
          { label: "Transferência", value: "transferencia" },
        ]}
      />

      <div className='flex flex-col gap-[16px]'>
        <label className='text-[#000000] text-base font-semibold'>Valor</label>
        <NumberInput value={valor} onChange={setValor} />
      </div>

      <Button
        bgColor='#004D61'
        borderColor='#004D61'
        label='Concluir transação'
        variant='primary'
        type='submit'
      />
    </form>
  );
};

export default Transaction;
