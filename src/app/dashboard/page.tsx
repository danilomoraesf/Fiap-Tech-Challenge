"use client";

import { useUser } from "../contexts/UserContext";
import DashboardInfo from "@/components/DashboardInfo";

export default function DashboardPage() {
  const user = useUser();

  return (
    <div className='w-full'>
      <DashboardInfo
        balance={user?.user?.balance ?? 0}
        user={user?.user?.nome ?? "Usuário"}
      />
    </div>
  );
}
