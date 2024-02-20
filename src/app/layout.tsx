import { Metadata } from "next";
import { NavBar } from "./components/NavBar";

export const metadata: Metadata = {
  title: "Site E-commerce",
  description: "Criando um site e-commerce com NextJS e outras tecnologias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-customLightGreen">
        <NavBar />
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}

import "./globals.css";
