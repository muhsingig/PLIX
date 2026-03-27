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
    { name: 'Shop', path: '/shop' },
    { name: 'Ingredients', path: '/science#ingredients' },
    { name: 'Our Story', path: '/about' },
    { name: 'Science', path: '/science' },
    { name: 'Contact', path: '/contact' },
  ];

  const initials = user?.displayName
    ? user.displayName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : user?.email?.[0]?.toUpperCase() ?? '?';

  return (
    <>
      <nav 
        className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-organic"
        style={{ width: 'min(calc(100% - 48px), 860px)' }}
      >
        <div className={`
          h-14 px-6 flex items-center justify-between rounded-full ghost-border backdrop-blur-[24px]
          transition-organic
          ${scrolled ? 'bg-surface/80 shadow-float' : 'bg-surface/50'}
        `}>
          
          {/* Left: Logo */}
          <Link href="/" className="flex items-center select-none">
            <img src="/logo.png" alt="Plix Logo" className="h-8 w-auto object-contain" />
          </Link>

          {/* Center: Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <Link 
                key={l.path} 
                href={l.path}
                className={`text-sm tracking-wide font-medium transition-organic ${
                  pathname.startsWith(l.path) 
                    ? 'text-primary font-bold' 
                    : 'text-on-background/60 hover:text-primary'
                }`}
              >
                {l.name}
              </Link>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <Link href="/cart" className="relative w-10 h-10 flex items-center justify-center bg-surface-container-low rounded-full hover:bg-surface-container-high transition-organic group">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-on-background group-hover:text-primary transition-organic" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                    className="absolute top-1 right-1 w-4 h-4 bg-primary text-on-primary text-[9px] font-bold rounded-full flex items-center justify-center"
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
                  className="w-10 h-10 rounded-full bg-primary text-on-primary text-xs font-bold flex items-center justify-center hover:bg-primary-container hover:text-on-surface transition-organic"
                >
                  {initials}
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-3 w-48 bg-surface-container-lowest rounded-md shadow-ambient ghost-border overflow-hidden"
                    >
                      <div className="px-4 py-3 border-b border-outline-variant/10">
                        <p className="text-[10px] font-bold text-on-background/50 uppercase tracking-[0.15em]">Account</p>
                        <p className="text-sm font-semibold truncate text-primary">{user.displayName || user.email}</p>
                      </div>
                      <Link href="/cart" className="block px-4 py-3 text-sm text-on-background hover:bg-surface-container-low transition-organic" onClick={() => setDropdownOpen(false)}>My Cart</Link>
                      <button 
                        onClick={() => { signOut(); setDropdownOpen(false); }}
                        className="w-full text-left px-4 py-3 text-sm text-error hover:bg-surface-container-high transition-organic font-bold"
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
                className="hidden md:inline-flex items-center h-10 px-6 bg-primary text-on-primary rounded-full text-xs tracking-widest uppercase font-bold hover:bg-primary-container hover:text-on-surface transition-organic"
              >
                Sign In
              </Link>
            )}

            {/* Mobile Hamburger */}
            <button onClick={() => setMenuOpen(true)} className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 focus:outline-none">
              <div className="w-5 h-[2px] bg-on-background rounded-full" />
              <div className="w-5 h-[2px] bg-on-background rounded-full" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-inverse-surface flex flex-col p-8"
          >
            <button 
              onClick={() => setMenuOpen(false)}
              className="self-end text-on-tertiary text-4xl font-light hover:text-primary-container transition-organic focus:outline-none"
            >
              ×
            </button>
            
            <div className="flex flex-col gap-6 mt-12">
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
                    className={`text-[40px] font-sans font-extrabold tracking-tighter flex items-center gap-4 ${
                      pathname === l.path ? 'text-primary-container' : 'text-on-tertiary'
                    }`}
                  >
                    {l.name}
                    {pathname === l.path && <div className="w-3 h-3 rounded-full bg-primary-container" />}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pb-8">
              <p className="text-on-tertiary/40 text-[10px] font-bold uppercase tracking-widest mb-4">Socials</p>
              <div className="flex gap-6 text-on-tertiary/80 text-sm">
                <a href="#" className="hover:text-primary-container transition-organic">Instagram</a>
                <a href="#" className="hover:text-primary-container transition-organic">Twitter</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
