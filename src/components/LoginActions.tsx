"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./Button";
import Modal from "./Modal";
import register from "../assets/register.svg";
import login from "../assets/login.svg";
import Input from "./Input";
import CheckBox from "./Checkbox";
import { useRouter } from "next/navigation";

interface LoginProps {
  email: string;
  senha: string;
}

interface RegisterProps {
  nome: string;
  email: string;
  senha: string;
}

export const LoginActions = () => {
  const [registerModal, setRegisterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const [loginForm, setLoginForm] = useState<LoginProps>({
    email: "",
    senha: "",
  });

  const [registerForm, setRegisterForm] = useState<RegisterProps>({
    nome: "",
    email: "",
    senha: "",
  });
  const router = useRouter();

  async function handleRegister() {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerForm),
    });

    if (res.ok) {
      setRegisterModal(false);
    }
  }

  async function handleLogin() {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginForm),
    });

    if (res.ok) {
      setLoginModal(false);
      router.push("/dashboard");
    } else {
      alert("Email ou senha inválidos");
    }
  }

  return (
    <div className="flex gap-[24px]">
      <Button
        onClick={() => setRegisterModal(true)}
        variant="primary"
        bgColor="#47A138"
        borderColor="#47A138"
        label="Abrir minha conta"
      />
      <Button
        onClick={() => setLoginModal(true)}
        borderColor="#47A138"
        variant="outline"
        label="Já tenho conta"
      />
      <Modal isOpen={registerModal} onClose={() => setRegisterModal(false)}>
        <div className="flex flex-col items-center gap-8 px-4 sm:px-10 md:px-20  w-full">
          <Image
            src={register}
            width={300}
            alt="imagem de login"
            className="w-full max-w-[300px] h-auto"
          />

          <label className="text-[18px] sm:text-[20px] font-bold text-center">
            Preencha os campos abaixo para criar sua conta corrente!
          </label>

          <div className="flex w-full flex-col gap-6">
            <Input
              value={registerForm.nome}
              onChange={(e) =>
                setRegisterForm((prev) => ({ ...prev, nome: e.target.value }))
              }
              title="Nome"
              placeholder="Digite seu nome completo"
            />

            <Input
              title="Email"
              type="email"
              value={registerForm.email}
              onChange={(e) =>
                setRegisterForm((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Digite seu email"
              validateEmail
            />

            <Input
              value={registerForm.senha}
              onChange={(e) =>
                setRegisterForm((prev) => ({ ...prev, senha: e.target.value }))
              }
              type="password"
              title="Senha"
              placeholder="Digite sua senha"
            />
          </div>
          <div className="flex items-start gap-2 text-sm sm:text-base">
            <CheckBox checked={checked} onChange={setChecked} />
            <label>
              Li e estou ciente quanto às condições de tratamento dos meus dados
              conforme descrito na Política de Privacidade do banco.
            </label>
          </div>
          <Button
            variant="primary"
            bgColor="#FF5031"
            borderColor="#FF5031"
            label="Criar conta"
            onClick={handleRegister}
            disabled={
              !checked ||
              !registerForm.nome.trim() ||
              !registerForm.senha.trim() ||
              !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registerForm.email)
            }
          />
        </div>
      </Modal>
      <Modal isOpen={loginModal} onClose={() => setLoginModal(false)}>
        <div className="flex flex-col items-center gap-8 px-4 sm:px-10 md:px-20 w-full">
          <Image
            src={login}
            width={300}
            alt="imagem de login"
            className="w-full max-w-[300px] h-auto"
          />

          <label className="text-[18px] sm:text-[20px] font-bold text-center">
            Login
          </label>

          <div className="flex w-full flex-col gap-6">
            <Input
              value={loginForm.email}
              onChange={(e) =>
                setLoginForm((prev) => ({ ...prev, email: e.target.value }))
              }
              title="Email"
              placeholder="Digite seu email"
            />
            <div className="flex flex-col gap-[6px]">
              <Input
                value={loginForm.senha}
                onChange={(e) =>
                  setLoginForm((prev) => ({ ...prev, senha: e.target.value }))
                }
                title="Senha"
                placeholder="Digite sua senha"
                type="password"
              />
              <label className="text-[#47A138] underline font-normal text-base">
                Esqueci a senha!
              </label>
            </div>
          </div>

          <Button
            variant="primary"
            bgColor="#47A138"
            borderColor="#47A138"
            label="Acessar"
            onClick={handleLogin}
          />
        </div>
      </Modal>
    </div>
  );
};
