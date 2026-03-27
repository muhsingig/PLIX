import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Manrope } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-sans' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title:       'Plix | Radiant Editorial',
  description: 'Clean-label, botanical beauty and wellness. High-performance formulas powered by nature.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${manrope.variable} font-body bg-background text-on-background antialiased selection:bg-primary-container selection:text-on-primary-container`}>
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <main>
              {children}
            </main>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
