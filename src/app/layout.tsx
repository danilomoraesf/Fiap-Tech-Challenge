import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projeto Financeiro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='h-full' lang='pt-BR'>
      <body className='h-full'>{children}</body>
    </html>
  );
}
