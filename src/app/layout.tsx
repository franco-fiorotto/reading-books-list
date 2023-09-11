import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reading list",
  description: "Create a reading list",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <h1 className="text-center p-8 text-[3rem]">Reading Book List</h1>
        {children}
      </body>
    </html>
  );
}
