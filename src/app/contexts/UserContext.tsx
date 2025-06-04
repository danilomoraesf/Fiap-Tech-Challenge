"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface Transaction {
  tipo: "deposito" | "transferencia";
  valor: number;
  data: string;
}

interface User {
  nome: string;
  email: string;
  balance: number;
  transactions: Transaction[];
}

interface UserContextType {
  user: User | null;
  refreshUser: () => Promise<void>;
}

const UserContext = createContext<UserContextType | null>(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const pathname = usePathname();

  const fetchUser = async () => {
    const res = await fetch("/api/user", { cache: "no-store" });
    const data = await res.json();
    setUser(data.user);
  };

  useEffect(() => {
    fetchUser();
  }, [pathname]);

  return (
    <UserContext.Provider value={{ user, refreshUser: fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};
