import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import Menu from "@/components/Menu";
import SideMenu from "@/components/SideMenu";
import Extract from "@/components/Extract";
import { UserProvider } from "../contexts/UserContext";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const userCookie = (await cookieStore).get("user");

  if (!userCookie) {
    redirect("/login");
  }

  return (
    <UserProvider>
      <div className='min-h-screen flex flex-col'>
        <Menu />

        <div className='bg-[#E4EDE3] flex-1 pt-[24px] px-4 sm:px-8 md:px-12 lg:px-36 xl:px-[360px] pb-[24px]'>
          <div className='flex flex-col gap-[24px] lg:flex-row'>
            <div className='w-full lg:w-[220px]'>
              <SideMenu />
            </div>
            <div className='flex-1'>{children}</div>
            <div className='w-full lg:w-[280px]'>
              <Extract />
            </div>
          </div>
        </div>
      </div>
    </UserProvider>
  );
}
