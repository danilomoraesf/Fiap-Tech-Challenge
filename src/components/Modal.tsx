"use client";
import Image from "next/image";
import React from "react";
import close from "../assets/close.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="overflow-y-auto p-[20px] bg-[#F8F8F8] h-screen w-[800px]">
        <div className="flex justify-end">
          <button onClick={onClose} className="cursor-pointer">
            <Image src={close} alt="icone de fechar" width={10} />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
