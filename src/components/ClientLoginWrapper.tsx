"use client";

import dynamic from "next/dynamic";

const LoginActions = dynamic(
  () => import("@/components/LoginActions").then((mod) => mod.LoginActions),
  { ssr: false }
);

export default function ClientLoginWrapper() {
  return <LoginActions />;
}
