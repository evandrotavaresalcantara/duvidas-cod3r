'use client'
import "./globals.css";
import { UsuarioProvedor } from "./data/context/UsuarioContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <UsuarioProvedor>
          {children}
        </UsuarioProvedor>
      </body>
    </html>
  );
}
