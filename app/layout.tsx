import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proyecto Web RML – IE Ramon Messa",
  description:
    "Iniciativa de programación web desarrollada en la Institución Educativa Ramon Messa en colaboración con la Universidad Autónoma de Manizales.",
  keywords: [
    "programación web",
    "educación tecnológica",
    "IE Ramon Messa",
    "Universidad Autónoma de Manizales",
    "Colombia",
    "STEM",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-white">{children}</body>
    </html>
  );
}
