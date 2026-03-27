'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'SHOP', path: '/shop' },
    { name: 'LEARN', path: '/learn/brewing' },
    { name: 'MERCH', path: '/merchandise' },
    { name: 'ABOUT', path: '/about/story' },
    { name: 'REWARDS', path: '/rewards' },
  ];

  return (
    <header className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out`}>
      <div 
        className={`flex items-center gap-2 md:gap-4 lg:gap-8 px-4 py-2 rounded-full border transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-[#1A1A1A]/5' 
            : 'bg-[#F9F0EC]/80 backdrop-blur-sm border-[#1A1A1A]/10'
        }`}
      >
        <Link href="/" className="font-serif font-extrabold text-xl tracking-tighter text-[#1e6931] mx-4 hidden md:block">
          PLIX<span className="text-[#f69420]">.</span>
        </Link>
        
        <nav className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.path);
            return (
              <Link 
                key={link.path} 
                href={link.path}
                className={`relative px-3 md:px-5 py-2 md:py-3 rounded-full font-bold text-[10px] md:text-xs tracking-widest transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-gray-600 hover:text-[#7B2D8B]'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-[#7B2D8B] rounded-full -z-10 shadow-sm" />
                )}
                {link.name}
              </Link>
            )
          })}
        </nav>
        
        <div className="flex items-center gap-4 px-4 border-l border-[#1A1A1A]/20">
          <Link href="/login" className="text-gray-600 hover:text-[#7B2D8B] font-bold text-[10px] md:text-xs tracking-widest transition-colors uppercase">
            Login
          </Link>
          <button className="text-gray-600 hover:text-[#7B2D8B] font-bold text-[10px] md:text-xs tracking-widest transition-colors uppercase">
            Cart
          </button>
        </div>
      </div>
    </header>
  );
}
