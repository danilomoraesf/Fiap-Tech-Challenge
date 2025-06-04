"use client";

import { useState } from "react";
import { useUser } from "@/app/contexts/UserContext";
import Transaction from "@/components/Transaction";
import ExtractItem from "@/components/ExtractItem";
import { Button } from "@/components/Button";
import Input from "@/components/Input";

export const Transactions = () => {
  const { user, refreshUser } = useUser()!;
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [newValue, setNewValue] = useState<string>("");

  if (!user) return null;

  const handleRemove = async (index: number) => {
    await fetch("/api/transactions", {
      method: "DELETE",
      body: JSON.stringify({ index }),
    });
    await refreshUser();
  };

  const handleStartEdit = (index: number, valorAtual: number) => {
    setEditIndex(index);
    setNewValue(String(valorAtual));
  };

  const handleSaveEdit = async (index: number) => {
    const valorNumber = parseFloat(newValue);
    if (isNaN(valorNumber)) return alert("Valor inválido");

    await fetch("/api/transactions", {
      method: "PUT",
      body: JSON.stringify({ index, valor: valorNumber }),
    });

    setEditIndex(null);
    await refreshUser();
  };

  return (
    <div className='w-full flex flex-col gap-[24px]'>
      <Transaction />

      <div className='bg-white rounded-lg w-full sm:max-w-[690px] px-4 sm:px-[24px] py-[24px] flex flex-col gap-[32px]'>
        <label className='text-2xl font-bold'>Histórico de transações</label>

        {user.transactions?.length ? (
          user.transactions.map((t, index) => {
            const dateObj = new Date(t.data);
            const formattedDate = dateObj.toLocaleDateString("pt-BR");
            const formattedMonth = dateObj.toLocaleDateString("pt-BR", {
              month: "long",
            });

            return (
              <div key={index} className='flex flex-col gap-2'>
                {editIndex === index ? (
                  <Input
                    type='number'
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                    placeholder='Novo valor'
                    title='Novo valor'
                  />
                ) : (
                  <ExtractItem
                    month={formattedMonth}
                    type={t.tipo === "deposito" ? "Depósito" : "Transferência"}
                    date={formattedDate}
                    value={`${
                      t.tipo === "transferencia" ? "-" : ""
                    }${t.valor.toFixed(2)}`}
                  />
                )}

                <div className='flex gap-4'>
                  {editIndex === index ? (
                    <Button
                      label='Salvar'
                      variant='primary'
                      bgColor='#004D61'
                      borderColor='#004D61'
                      onClick={() => handleSaveEdit(index)}
                    />
                  ) : (
                    <Button
                      label='Editar'
                      bgColor='#47A138'
                      borderColor='#47A138'
                      variant='primary'
                      onClick={() => handleStartEdit(index, t.valor)}
                    />
                  )}

                  <Button
                    label='Remover'
                    variant='primary'
                    bgColor='#BF1313'
                    borderColor='#BF1313'
                    onClick={() => handleRemove(index)}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <p className='text-sm text-gray-500'>Nenhuma transação encontrada.</p>
        )}
      </div>
    </div>
  );
};

export default Transactions;
