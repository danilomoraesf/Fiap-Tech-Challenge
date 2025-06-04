"use client";

import { useUser } from "@/app/contexts/UserContext";
import { Button } from "@/components/Button";
import Input from "@/components/Input";
import Image from "next/image";
import { useState } from "react";
import account from "../../../assets/account.svg";

export const MyAccount = () => {
  const { user, refreshUser } = useUser()!;
  const [nome, setNome] = useState(user?.nome || "");
  const [email, setEmail] = useState(user?.email || "");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = { nome, email };

    await fetch("/api/user", {
      method: "PUT",
      body: JSON.stringify(payload),
    });

    await refreshUser?.();
    alert("Dados atualizados com sucesso!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-[#CBCBCB] rounded-lg px-4 sm:px-6 md:px-10 py-6 flex flex-col gap-[32px] max-w-[1200px] mx-auto"
    >
      <label className="text-[#000000] text-[22px] sm:text-[25px] font-bold text-center sm:text-left">
        Minha conta
      </label>

      <div className="flex flex-col lg:flex-col gap-6 items-center lg:items-start">
        <div className="w-full max-w-[400px]">
          <Image
            src={account}
            alt="imagem da conta"
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        <div className="flex flex-col gap-[24px] w-full">
          <Input
            title="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
          />
          <Input
            title="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
          />
          <Input
            title="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite nova senha (opcional)"
            type="password"
          />

          <Button
            variant="primary"
            bgColor="#FF5031"
            borderColor="#FF5031"
            label="Salvar alterações"
            type="submit"
          />
        </div>
      </div>
    </form>
  );
};

export default MyAccount;
