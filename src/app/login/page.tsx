'use client';
import React from 'react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen relative flex flex-col pt-12 pb-8 overflow-hidden bg-background">
      
      {/* Background Radial Core */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-surface-container-low)_0%,var(--color-surface-container-highest)_100%)] pointer-events-none opacity-50" />

      {/* Decorative Floating Asset (Bottom Right) */}
      <div className="absolute -bottom-8 -right-8 md:bottom-20 md:right-32 w-[240px] h-[240px] md:w-[320px] h-[320px] bg-secondary-container rounded-xl rotate-[-5deg] shadow-ambient-lg z-20 pointer-events-none border-[12px] border-surface-container-lowest overflow-hidden flex items-center justify-center transition-organic hover:rotate-0">
        <div 
          className="w-[150%] h-[150%] bg-cover bg-center rotate-[5deg] absolute"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}
        />
        <div className="absolute inset-0 bg-secondary/10" />
      </div>

      {/* Basic Top Navigation */}
      <div className="relative z-10 w-full flex justify-center mb-8 md:mb-12">
        <Link href="/" className="text-[28px] font-sans font-black tracking-tighter text-primary">
          PLIX
        </Link>
      </div>

      {/* Main Login Card Wrapper */}
      <div className="flex-1 flex items-center justify-center w-full px-6 relative z-30 transition-organic">
        <div className="w-full max-w-[480px] bg-surface-container-lowest rounded-xl p-10 md:p-14 shadow-ambient flex flex-col items-center ghost-border">
          
          <h1 className="display-lg text-primary mb-3">Welcome Back</h1>
          <p className="text-[15px] font-medium text-on-background/50 mb-10">Step back into your glow journey.</p>

          <form className="w-full space-y-6" onSubmit={e => e.preventDefault()}>
            
            {/* Email Field */}
            <div className="space-y-2">
              <label className="label-md text-primary ml-4">Email Address</label>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="hello@wellness.com"
                  className="w-full h-[56px] rounded-full bg-surface-container-low px-6 text-[14px] outline-none placeholder:text-on-background/30 text-on-background font-medium ghost-border focus:border-outline-variant transition-organic shadow-inner"
                />
                <div className="absolute right-5 top-1/2 -translate-y-1/2 text-on-background/20">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                </div>
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-4 mr-4">
                <label className="label-md text-primary">Password</label>
                <Link href="#" className="label-md text-primary hover:text-primary-container transition-organic">Forgot Password?</Link>
              </div>
              <div className="relative">
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full h-[56px] rounded-full bg-surface-container-low px-6 text-[20px] outline-none placeholder:text-on-background/30 placeholder:tracking-widest text-on-background font-medium ghost-border focus:border-outline-variant transition-organic shadow-inner"
                />
                <div className="absolute right-5 top-1/2 -translate-y-1/2 text-on-background/20">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                </div>
              </div>
            </div>

            <button className="w-full h-[60px] bg-primary text-on-primary rounded-full font-bold text-[16px] hover:bg-primary-container hover:text-on-surface transition-organic shadow-ambient mt-8 mb-4">
              Login
            </button>

          </form>

          <div className="w-full h-px bg-outline-variant/20 my-8" />
          
          <p className="text-[14px] text-on-background/50 font-medium mb-5">New to the Plix ritual?</p>
          <Link href="/register" className="w-[200px] h-[48px] bg-secondary text-on-primary rounded-full flex items-center justify-center font-bold text-[14px] hover:bg-secondary-fixed-dim transition-organic shadow-float">
            Create Account
          </Link>
          
        </div>
      </div>

      {/* Quote */}
      <div className="relative z-10 w-full flex justify-center mt-12 mb-8 md:mb-0 text-center px-6">
        <p className="text-[14px] text-on-background/30 italic font-medium max-w-sm leading-relaxed">
          "Radiance is not just skin deep; it's the energy you bring to the world."
        </p>
      </div>

      {/* Footer */}
      <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center px-6 md:px-12 mt-auto pt-8">
        <span className="text-[11px] font-bold text-on-background/40 mb-4 md:mb-0">© 2024 Plix Life. Radiant Editorial Wellness.</span>
        <div className="flex gap-6 uppercase tracking-[0.15em] text-[10px] font-black text-primary/60">
          <Link href="#" className="hover:text-primary transition-organic">Privacy Policy</Link>
          <Link href="#" className="hover:text-primary transition-organic">Terms of Service</Link>
          <Link href="#" className="hover:text-primary transition-organic">Contact Us</Link>
        </div>
      </div>

    </div>
  );
}
