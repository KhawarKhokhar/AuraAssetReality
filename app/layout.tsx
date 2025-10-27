import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

 const inter = Inter({
      subsets: ['latin'], // Specify the necessary subsets
      display: 'swap', // Recommended for better performance
      variable: '--font-inter', // Optional: Define a CSS variable for Tailwind CSS
    });

export const metadata: Metadata = {
  title: "Aura Assets",
  description: "Real Estate Company",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.variable}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
