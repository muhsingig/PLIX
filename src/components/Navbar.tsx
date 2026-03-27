'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const pathname       = usePathname();
  const { totalItems } = useCart();
  const { user, signOut } = useAuth();
  const [menuOpen, setMenuOpen]     = useState(false);
  const [dropdownOpen, setDropdown] = useState(false);

  const navLinks = [
    { name: 'Products', path: '/products' },
    { name: 'About',    path: '/about'    },
  ];

  const initials = user?.displayName
    ? user.displayName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : user?.email?.[0]?.toUpperCase() ?? '?';

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#F9F0EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="font-black text-2xl tracking-tight select-none">
            <span style={{ color: 'var(--plix-green)' }}>PL</span>
            <span style={{ color: 'var(--plix-pink)' }}>IX</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <Link key={l.path} href={l.path}
                className={`font-medium text-sm transition-colors duration-200 ${
                  pathname.startsWith(l.path)
                    ? 'text-[var(--plix-pink)]'
                    : 'text-[var(--plix-ink)] hover:text-[var(--plix-pink)]'
                }`}>
                {l.name}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Cart */}
            <Link href="/cart" className="relative p-2 hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--plix-ink)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--plix-pink)] text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Auth */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setDropdown(d => !d)}
                  className="w-9 h-9 rounded-full bg-[var(--plix-green)] text-white text-xs font-bold flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  {initials}
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                      className="absolute right-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-[#F9F0EC] overflow-hidden"
                    >
                      <Link href="/cart" className="block px-4 py-3 text-sm text-[var(--plix-ink)] hover:bg-[#F9F0EC]" onClick={() => setDropdown(false)}>My Cart</Link>
                      <button onClick={() => { signOut(); setDropdown(false); }}
                        className="w-full text-left px-4 py-3 text-sm text-red-500 hover:bg-red-50">Sign Out</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link href="/login"
                className="hidden md:inline-flex items-center border border-[var(--plix-green)] text-[var(--plix-green)] rounded-full px-4 py-1.5 text-sm font-medium hover:bg-[var(--plix-green)] hover:text-white transition-all duration-300">
                Login
              </Link>
            )}

            {/* Mobile hamburger */}
            <button onClick={() => setMenuOpen(true)} className="md:hidden p-2">
              <div className="w-5 h-0.5 bg-[var(--plix-ink)] mb-1" />
              <div className="w-5 h-0.5 bg-[var(--plix-ink)] mb-1" />
              <div className="w-5 h-0.5 bg-[var(--plix-ink)]" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[var(--plix-green)] flex flex-col p-8"
          >
            <button onClick={() => setMenuOpen(false)} className="self-end text-white text-3xl mb-12">×</button>
            <div className="flex flex-col gap-8">
              {[{ name: 'Home', path: '/' }, ...navLinks, { name: 'Cart', path: '/cart' }, { name: 'Login', path: '/login' }].map(l => (
                <Link key={l.path} href={l.path} onClick={() => setMenuOpen(false)}
                  className={`text-4xl font-bold transition-colors ${pathname === l.path ? 'text-[var(--plix-pink)]' : 'text-white hover:text-[var(--plix-pink)]'}`}>
                  {l.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
