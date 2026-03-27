import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';

const inter    = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title:       'Plix | India\'s Plant-Based Beauty Brand',
  description: 'Clean-label, vegan, non-GMO skincare and wellness products. Trusted by 5 lakh+ Indians.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-[var(--plix-sage)] text-[var(--plix-ink)]`}>
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
