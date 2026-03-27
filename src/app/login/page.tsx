'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="fixed inset-0 z-[200] overflow-y-auto">
      {/* ── [BACKGROUND] radial gradient & bloom ────────────────────────── */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_#FDE8EC_0%,_#FDF0EE_100%)]">
        {/* Soft light bloom effects */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#F4A0A8] opacity-20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#5DBB63] opacity-5 rounded-full blur-[140px]" />
      </div>

      <div className="relative min-h-screen flex flex-col justify-between py-12 px-6">
        
        {/* ── [HEADER] ────────────────────────────────────────────────── */}
        <div className="w-full flex justify-center mb-12">
          <Link href="/" className="text-4xl font-black text-[var(--p-700)] tracking-tighter hover:scale-105 transition-transform">
            PLIX
          </Link>
        </div>

        {/* ── [LOGIN CARD] ────────────────────────────────────────────── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[var(--cloud)] rounded-[32px] p-8 md:p-12 w-full max-w-md mx-auto shadow-[var(--shadow-float)] border border-black/5"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-serif font-bold text-[var(--ink)] mb-2">Welcome Back</h1>
            <p className="text-black/50 italic font-medium">Step back into your glow journey.</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            
            {/* Email Field */}
            <div>
              <label className="block text-xs font-bold text-[var(--ink)] uppercase tracking-widest mb-2 pl-4">
                Email Address
              </label>
              <div className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="hello@wellness.com"
                  className="w-full h-14 bg-[var(--p-100)]/50 rounded-full pl-6 pr-12 text-sm font-bold text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--p-500)] placeholder:text-black/30 placeholder:font-medium placeholder:italic transition-shadow"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--p-700)]/40 pointer-events-none">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-end mb-2 px-4">
                <label className="block text-xs font-bold text-[var(--ink)] uppercase tracking-widest">
                  Password
                </label>
                <Link href="#" className="text-xs font-bold text-[var(--p-700)] hover:text-[var(--p-500)] underline">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <input 
                  type="password" 
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-14 bg-[var(--p-100)]/50 rounded-full pl-6 pr-12 text-lg font-black text-[var(--ink)] tracking-widest focus:outline-none focus:ring-2 focus:ring-[var(--p-500)] placeholder:text-black/30 transition-shadow"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--p-700)]/40 pointer-events-none">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
              </div>
            </div>

            {/* Login CTA */}
            <div className="pt-2">
              <button 
                type="submit"
                className="w-full h-14 bg-[var(--p-700)] text-white rounded-full font-bold text-lg hover:bg-[var(--ink)] transition-colors shadow-lg"
              >
                Login
              </button>
            </div>
            
          </form>

          <div className="flex items-center gap-4 my-8">
            <div className="h-px bg-black/5 flex-1" />
            <span className="text-xs font-medium text-black/30">New to the Plix ritual?</span>
            <div className="h-px bg-black/5 flex-1" />
          </div>

          <button className="w-full h-14 border border-[var(--g-500)] text-[var(--g-700)] rounded-full font-bold hover:bg-[var(--g-500)] hover:text-white transition-colors uppercase tracking-widest text-sm shadow-sm">
            Create Account
          </button>
        </motion.div>

        {/* ── [BOTTOM AREA] ────────────────────────────────────────────── */}
        <div className="w-full max-w-md mx-auto text-center mt-12 mb-auto">
          <p className="italic text-sm text-black/40 font-medium">
            "Radiance is not just skin deep; it's the energy you bring to the world."
          </p>
        </div>

        {/* ── [FOOTER] ─────────────────────────────────────────────────── */}
        <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-[10px] font-bold text-black/40 tracking-widest mt-12">
          <p className="mb-4 sm:mb-0">© 2024 PLIX LIFE. RADIANT EDITORIAL WELLNESS.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[var(--p-700)] transition-colors">PRIVACY POLICY</Link>
            <span>·</span>
            <Link href="#" className="hover:text-[var(--p-700)] transition-colors">TERMS OF SERVICE</Link>
            <span>·</span>
            <Link href="#" className="hover:text-[var(--p-700)] transition-colors">CONTACT US</Link>
          </div>
        </div>

        {/* Visual Product Image Float */}
        <div className="fixed bottom-0 right-[-2%] w-64 h-64 rounded-[40px] shadow-2xl overflow-hidden pointer-events-none rotate-12 opacity-90 hidden md:block z-[-1]">
          <div 
            className="w-full h-full bg-cover bg-center mix-blend-multiply"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80")' }}
          />
        </div>

      </div>
    </div>
  );
}
