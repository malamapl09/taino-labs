import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taíno Labs — AI Consulting",
  description:
    "Portales, sistemas y plataformas para tu empresa. Cuéntanos qué necesitas — nosotros lo diseñamos y entregamos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
