'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const { user, signOut } = useAuth();
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', path: '/products' },
    { name: 'About',    path: '/about'    },
  ];

  const initials = user?.displayName
    ? user.displayName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : user?.email?.[0]?.toUpperCase() ?? '?';

  return (
    <>
      <nav 
        className="fixed top-[var(--s3)] left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-[var(--ease)]"
        style={{ 
          width: 'min(calc(100% - 48px), 860px)',
        }}
      >
        <div className={`
          h-14 px-[var(--s3)] flex items-center justify-between rounded-full border border-black/5 backdrop-blur-xl
          transition-all duration-300 ease-[var(--ease)]
          ${scrolled ? 'bg-white/90 shadow-[var(--shadow-float)]' : 'bg-white/70 shadow-[var(--shadow-card)]'}
        `}>
          
          {/* Left: Logo */}
          <Link href="/" className="text-[22px] font-black tracking-[-0.05em] select-none flex items-center gap-0.5">
            <span style={{ color: 'var(--g-700)' }}>PL</span>
            <span style={{ color: 'var(--p-300)' }}>I</span>
            <span style={{ color: 'var(--g-700)' }}>X</span>
          </Link>

          {/* Center: Nav Links */}
          <div className="hidden md:flex items-center gap-[var(--s5)]">
            {navLinks.map(l => (
              <Link 
                key={l.path} 
                href={l.path}
                className={`text-[var(--body)] font-medium transition-colors duration-200 ${
                  pathname.startsWith(l.path) 
                    ? 'text-[var(--g-700)] font-bold' 
                    : 'text-black/60 hover:text-[var(--g-700)]'
                }`}
              >
                {l.name}
              </Link>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-[var(--s2)]">
            {/* Cart */}
            <Link href="/cart" className="relative w-10 h-10 flex items-center justify-center bg-[var(--smoke)] rounded-full hover:bg-[var(--p-100)] transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[var(--g-700)] group-hover:text-[var(--p-700)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                    className="absolute top-1 right-1 w-4 h-4 bg-[var(--p-300)] text-[var(--ink)] text-[10px] font-bold rounded-full flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            {/* Auth */}
            {user ? (
              <div className="relative">
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-9 h-9 rounded-full bg-[var(--g-700)] text-white text-xs font-bold flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  {initials}
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-3 w-48 bg-white rounded-[var(--r-md)] shadow-[var(--shadow-float)] border border-black/5 overflow-hidden"
                    >
                      <div className="px-4 py-3 border-bottom border-black/5">
                        <p className="text-xs font-bold text-black/40 uppercase tracking-widest">Account</p>
                        <p className="text-sm font-semibold truncate">{user.displayName || user.email}</p>
                      </div>
                      <Link href="/cart" className="block px-4 py-3 text-sm hover:bg-[var(--smoke)] transition-colors" onClick={() => setDropdownOpen(false)}>My Cart</Link>
                      <button 
                        onClick={() => { signOut(); setDropdownOpen(false); }}
                        className="w-full text-left px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition-colors"
                      >
                        Sign Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link 
                href="/login"
                className="hidden md:inline-flex items-center h-9 px-[var(--s3)] bg-[var(--g-700)] text-white rounded-full text-[var(--micro)] font-bold hover:bg-[var(--g-500)] transition-all"
              >
                Sign In
              </Link>
            )}

            {/* Mobile Hamburger */}
            <button onClick={() => setMenuOpen(true)} className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1">
              <div className="w-5 h-0.5 bg-[var(--g-700)] rounded-full" />
              <div className="w-5 h-0.5 bg-[var(--g-700)] rounded-full" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-[var(--g-900)] flex flex-col p-[var(--s6)]"
          >
            <button 
              onClick={() => setMenuOpen(false)}
              className="self-end text-white text-4xl font-light hover:text-[var(--p-300)] transition-colors"
            >
              ×
            </button>
            
            <div className="flex flex-col gap-[var(--s4)] mt-[var(--s6)]">
              {[{ name: 'Home', path: '/' }, ...navLinks, { name: 'Cart', path: '/cart' }, { name: 'Login', path: '/login' }].map((l, i) => (
                <motion.div
                  key={l.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={l.path} 
                    onClick={() => setMenuOpen(false)}
                    className={`text-[var(--display)] font-extrabold flex items-center gap-4 ${
                      pathname === l.path ? 'text-[var(--p-300)]' : 'text-white'
                    }`}
                  >
                    {l.name}
                    {pathname === l.path && <div className="w-4 h-4 rounded-full bg-[var(--p-300)]" />}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto">
              <p className="text-white/40 text-[var(--micro)] font-bold uppercase tracking-widest mb-2">Socials</p>
              <div className="flex gap-6 text-white/60 text-[var(--body)]">
                <a href="#" className="hover:text-[var(--p-300)] transition-colors">Instagram</a>
                <a href="#" className="hover:text-[var(--p-300)] transition-colors">Twitter</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
