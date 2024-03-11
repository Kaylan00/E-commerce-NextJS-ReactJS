import { Metadata } from "next";

import { NavBar } from "./components/NavBar";

import clsx from "clsx";

import { ClerkProvider } from "@clerk/nextjs";

import { ptBR } from "@clerk/localizations";

import Hydrate from "./components/Hydrate";

import "./globals.css";



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
    <ClerkProvider localization={ptBR}>
      <html lang="pt-br">

        <body className={clsx("bg-white")}>
          <Hydrate>
            <NavBar />
            <main className="container mx-auto p-4">{children}</main>
          </Hydrate>
        </body>
      </html>
    </ClerkProvider>
  );
}

