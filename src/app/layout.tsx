import type { Metadata } from 'next';
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });

export const metadata: Metadata = {
  title: "Plix Guava Glow | The Plant Fix",
  description: "India's Most Trusted Clean Beauty Brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans min-h-screen flex flex-col bg-[#F9F0EC] text-[#1a1a1a]`}>
        {children}
      </body>
    </html>
  );
}
