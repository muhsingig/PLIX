"use client";

import React from 'react';
import Link from 'next/link';

export default function LandingContent() {
  return (
    <div className="bg-background flex flex-col pt-16 pb-24 relative overflow-hidden">
      
      {/* 1. The Guava Synthesis */}
      <section className="w-full max-w-[1280px] mx-auto px-6 mb-32 relative z-10">
        <div className="text-center mb-16">
          <h2 className="display-lg text-[40px] md:text-[56px] text-primary tracking-tighter mb-4 font-sans font-black">
            The Guava <span className="text-secondary">Synthesis</span>
          </h2>
          <p className="text-[14px] md:text-[16px] text-on-background/50 font-medium max-w-[500px] mx-auto leading-relaxed">
            The secrets behind most potent ingredients to deliver real clinical results without the harsh chemicals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto">
          {/* Card 1: Vitamin C */}
          <div className="relative rounded-[40px] p-8 min-h-[460px] bg-surface-container-lowest shadow-ambient ghost-border flex flex-col justify-end group overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542168340-0b62e49cce8e?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-organic duration-700 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-transparent" />
            <div className="relative z-10">
              <div className="w-10 h-10 border-2 border-primary text-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 className="text-[22px] font-sans font-black text-primary mb-3">Vitamin C+ Complex</h3>
              <p className="text-[13px] font-medium text-on-background/60 leading-relaxed max-w-[260px]">
                Clinically proven to boost radiance and fade dark spots while delivering powerful antioxidant defense.
              </p>
            </div>
          </div>

          {/* Card 2: Hyaluronic */}
          <div className="relative rounded-[40px] p-8 min-h-[460px] bg-[#aacd90] shadow-ambient text-on-secondary-fixed flex flex-col justify-end group overflow-hidden border border-secondary/10">
            <div className="absolute top-0 right-0 w-full h-[60%] bg-[url('https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=800&auto=format&fit=crop')] bg-cover bg-top opacity-30 group-hover:opacity-40 transition-organic duration-700 mix-blend-color-burn" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#aacd90] via-[#aacd90]/90 to-transparent" />
            <div className="relative z-10">
              <div className="w-10 h-10 border-2 border-secondary-fixed-dim text-secondary-fixed-dim rounded-full flex items-center justify-center mb-6">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-[22px] font-sans font-black text-on-secondary-fixed mb-3">Botanical Hyaluronic</h3>
              <p className="text-[13px] font-medium text-on-secondary-fixed/70 leading-relaxed max-w-[260px]">
                Multi-weight molecules that penetrate deep within to drench the skin in intense hydration.
              </p>
            </div>
          </div>

          {/* Card 3: Actives */}
          <div className="relative rounded-[40px] p-8 min-h-[460px] bg-[#f0a6b5] shadow-ambient text-on-primary-fixed flex flex-col justify-end group overflow-hidden border border-primary/10">
            <div className="absolute top-0 left-0 w-[150%] h-[80%] bg-[url('https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center -translate-y-8 -translate-x-8 opacity-20 group-hover:opacity-30 transition-organic duration-700 mix-blend-color-burn" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f0a6b5] via-[#f0a6b5]/80 to-transparent" />
            <div className="relative z-10">
              <div className="w-10 h-10 border-2 border-primary-fixed text-primary-fixed rounded-full flex items-center justify-center mb-6">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 className="text-[22px] font-sans font-black text-on-primary-fixed mb-3">Encapsulated Actives</h3>
              <p className="text-[13px] font-medium text-on-primary-fixed/80 leading-relaxed max-w-[260px]">
                Time-released technology ensures ingredients arrive intact and activate when skin actually needs it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* spacer line */}
      <div className="w-full h-px bg-outline-variant/10 max-w-[1280px] mx-auto mb-32" />

      {/* 2. Your Skin's Perfect Match */}
      <section className="w-full max-w-[1280px] mx-auto px-6 mb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Text Block */}
          <div className="flex flex-col justify-center max-w-[500px]">
            <h2 className="display-lg text-[48px] md:text-[64px] text-primary tracking-tighter leading-[1.05] font-sans font-black mb-6">
              Your Skin's<br/>Perfect Match.
            </h2>
            <p className="text-[15px] font-medium text-on-background/60 leading-relaxed mb-8">
              Brain the guesswork. Our AI-powered routine builder analyzes your skin type and concern to curate the ultimate Glow Routine.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 rounded-full border-2 border-background object-cover" alt="User 1" />
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 rounded-full border-2 border-background object-cover" alt="User 2" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 rounded-full border-2 border-background object-cover" alt="User 3" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.15em] font-black text-primary/60">
                JOIN 50K+ HAPPY GLOWERS
              </span>
            </div>
          </div>

          {/* Right Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full min-h-[460px]">
            {/* Big Green Block */}
            <div className="relative bg-[#90be6d] rounded-[32px] p-8 shadow-ambient flex flex-col justify-between overflow-hidden group cursor-pointer border border-[#7cae5c] md:row-span-2 min-h-[300px] md:min-h-full">
               <div className="relative z-10 w-full flex justify-between items-start">
                 <h3 className="text-[20px] font-sans font-black text-[#2a4519]">Ritual Quiz</h3>
                 <p className="text-[9px] uppercase tracking-widest text-[#2a4519]/60 font-bold max-w-[100px] text-right">Discover your ritual</p>
               </div>
               {/* Abstract decorative element (representing the spirograph flower) */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] opacity-20 group-hover:opacity-30 transition-organic mix-blend-color-burn pointer-events-none">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
                   <circle cx="50" cy="50" r="40" fill="none" stroke="#2a4519" strokeWidth="1" strokeDasharray="4 4" />
                 </svg>
               </div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] opacity-30 group-hover:scale-110 transition-organic duration-700 mix-blend-color-burn pointer-events-none">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
                   <polygon points="50,10 90,90 10,90" fill="none" stroke="#2a4519" strokeWidth="0.5" />
                 </svg>
               </div>
               
               <div className="relative z-10 w-12 h-12 bg-[#2a4519] rounded-full flex items-center justify-center text-[#90be6d] group-hover:bg-background group-hover:text-[#2a4519] transition-organic mt-auto">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
               </div>
            </div>

            {/* Stacked Blocks */}
            <div className="flex flex-col gap-6 h-full">
               <div className="flex-1 bg-primary-container/40 rounded-[32px] p-8 shadow-ambient border border-primary-container flex flex-col items-center justify-center text-center min-h-[160px]">
                 <h3 className="display-lg text-[48px] text-primary tracking-tighter leading-none mb-2 font-sans font-black">98%</h3>
                 <p className="text-[12px] font-bold text-primary/60 max-w-[160px] uppercase tracking-wider">saw an improvement in fine lines</p>
               </div>
               <div className="flex-1 bg-surface-container-lowest rounded-[32px] shadow-ambient ghost-border p-8 flex items-center gap-6 min-h-[160px]">
                 <div className="w-14 h-14 bg-surface-container-low rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-primary">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                    </div>
                 </div>
                 <div>
                   <h3 className="text-[18px] font-sans font-black text-on-background">Personalized Plan</h3>
                   <p className="text-[12px] font-medium text-on-background/50 leading-tight mt-1">Built just for you.</p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. The #PlixGlow Feed */}
      <section className="w-full bg-surface-container-lowest border-y border-outline-variant/10 py-32 mb-32 relative z-10">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h2 className="display-lg text-[36px] md:text-[48px] tracking-tighter text-on-background font-sans font-black">
                The <span className="text-primary">#PlixGlow</span> Feed
              </h2>
              <p className="text-[15px] font-medium text-on-background/50 mt-2">Discover the Plix global community. Tag @plixworldwide to be featured.</p>
            </div>
            <a href="#" className="h-[44px] px-8 bg-surface-container-lowest ghost-border shadow-float rounded-full flex items-center justify-center text-[13px] font-bold text-on-background hover:bg-primary hover:text-on-primary transition-organic whitespace-nowrap">
              Follow on Instagram
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feed item 1 */}
            <div className="aspect-square bg-[#0b0f19] rounded-[32px] overflow-hidden relative shadow-ambient group cursor-pointer">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-organic duration-700" />
            </div>
            {/* Feed item 2 (REVIEW text block on dark canvas) */}
            <div className="aspect-square bg-[#1a1e28] rounded-[32px] overflow-hidden relative shadow-ambient flex items-center justify-center p-8 text-center group cursor-pointer border border-white/5">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-organic bg-primary/40 duration-500" />
              <div className="relative z-10 w-full h-full bg-[#12161f] border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-3 p-6 shadow-2xl">
                <h3 className="text-[16px] font-bold text-white tracking-widest uppercase">Review</h3>
                <p className="text-[14px] text-white/70">"It actually works. Within 2 weeks."</p>
                <div className="w-6 h-[2px] bg-primary/50 mt-2" />
              </div>
            </div>
            {/* Feed item 3 (Abstract silhouette) */}
            <div className="aspect-square bg-[#0d1522] rounded-[32px] overflow-hidden relative shadow-ambient flex items-center justify-center group cursor-pointer border border-white/5">
              <div className="absolute top-6 left-0 w-full text-center z-10 text-[13px] text-white/60 font-medium">Almost arrived..</div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-organic duration-700 mix-blend-luminosity" />
              <div className="absolute inset-x-0 bottom-8 text-center text-white/80 font-bold text-[18px] z-10 transition-organic group-hover:-translate-y-2">Yes it works</div>
            </div>
            {/* Feed item 4 (Glowing element) */}
            <div className="aspect-square bg-[#07050a] rounded-[32px] overflow-hidden relative shadow-ambient flex items-center justify-center group cursor-pointer border border-white/5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.4)_0%,rgba(0,0,0,0)_60%)] opacity-60 group-hover:opacity-100 transition-organic duration-700 scale-[0.8] group-hover:scale-[1.2]" />
              <svg className="w-8 h-8 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Don't Miss the Glow (Newsletter) */}
      <section className="w-full max-w-[1280px] mx-auto px-6 mb-32 relative z-10">
        <div className="w-full max-w-[800px] mx-auto bg-surface-container-lowest rounded-[40px] shadow-ambient ghost-border p-12 md:p-20 text-center relative overflow-hidden">
          {/* Subtle decorative burst */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary-container/20 blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-secondary-container/20 blur-[60px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="display-lg text-[36px] md:text-[52px] text-on-background tracking-tighter mb-4 font-sans font-black">
              Don't Miss the <span className="text-primary">Glow.</span>
            </h2>
            <p className="text-[15px] font-medium text-on-background/60 mb-10 max-w-[400px] mx-auto">
              Subscribe for early access to new launches, skin tips, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-[420px] mx-auto" onSubmit={e => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full sm:w-[280px] h-[54px] rounded-full bg-surface-container-low px-6 text-[14px] outline-none placeholder:text-primary/40 text-primary font-medium focus:ring-2 focus:ring-primary/20 transition-organic shadow-inner text-center sm:text-left border border-outline-variant/20"
                required
              />
              <button 
                type="submit" 
                className="w-full sm:w-[120px] h-[54px] rounded-full bg-primary text-on-primary font-bold text-[14px] hover:bg-primary-container hover:text-on-surface shadow-ambient transition-organic flex-shrink-0"
              >
                Join Us
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 5. Minimalist Footer */}
      <footer className="w-full max-w-[1280px] mx-auto px-6 relative z-10 pb-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-outline-variant/10 pt-8">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          {/* Left: Logo and copy */}
          <div className="flex flex-col items-center md:items-start">
            <img src="/logo.png" alt="Plix Logo" className="h-[22px] w-auto mb-2 object-contain" />
            <p className="text-[9px] font-bold text-on-background/40 uppercase tracking-[0.1em]">
              © 2024 Plix Life. What you search is what you get.
            </p>
          </div>
          {/* Middle: Links */}
          <div className="flex gap-4 md:gap-6 text-[10px] font-black text-primary/60 uppercase tracking-[0.1em]">
            <Link href="#" className="hover:text-primary transition-organic">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-organic">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-organic">Shipping & Returns</Link>
            <Link href="/about" className="hover:text-primary transition-organic">Sustainability</Link>
          </div>
        </div>
        
        {/* Right: Socials */}
        <div className="flex items-center gap-4 text-primary/40">
           <a href="#" className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-organic">
             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
           </a>
           <a href="#" className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-organic">
             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
           </a>
        </div>
      </footer>

    </div>
  );
}
