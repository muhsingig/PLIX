'use client';
import React from 'react';
import Link from 'next/link';

export default function SciencePage() {
  return (
    <div className="bg-[var(--smoke)] min-h-screen font-sans text-[var(--ink)]">
      
      {/* ── [HERO SECTION] ───────────────────────────────────────────── */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center shadow-xl">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1582215359424-dfb7ce126ec8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-[var(--g-500)] text-white text-xs font-bold tracking-widest uppercase shadow-sm">
            CLEAN BEAUTY SCIENCE
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight mb-6 max-w-2xl leading-[0.9]">
            <span className="text-white block">The Science of</span>
            <span className="text-[var(--p-700)] italic block mt-2 text-[1.1em]">Radiance</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-lg font-medium leading-relaxed mb-10 text-shadow-sm">
            At Plix, we bridge the gap between botanical wisdom and clinical precision. Our formulas are engineered to deliver high-performance results using nature's most potent bioactive compounds.
          </p>
          
          <Link href="#ingredients" className="inline-block px-10 py-5 bg-[var(--p-700)] text-white font-bold rounded-full text-center hover:bg-[#5C1B34] transition-colors shadow-lg uppercase tracking-widest text-sm">
            Explore Formulations ↓
          </Link>
        </div>
      </section>

      {/* ── [3 PILLARS ROW] ──────────────────────────────────────────── */}
      <section className="py-24 bg-[var(--smoke)] border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {[
            { icon: '⚗️', title: 'Clinical Rigor', desc: 'Every ingredient undergoes 3rd-party clinical testing to ensure bioavailability and efficacy at a cellular level.' },
            { icon: '🌿', title: 'Ethical Sourcing', desc: 'We source our botanical actives from sustainable farms that prioritize soil health and biodiversity.' },
            { icon: '🧬', title: 'Bio-Active Fusion', desc: 'Our proprietary extraction methods preserve the molecular integrity of fruits like Pink Guava.' }
          ].map((pillar, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[var(--cloud)] shadow-md flex items-center justify-center text-3xl mb-6 border border-black/5">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--ink)] mb-3">{pillar.title}</h3>
              <p className="text-black/60 leading-relaxed font-medium">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── [POTENT ACTIVES SECTION] ─────────────────────────────────── */}
      <section id="ingredients" className="py-32 bg-[var(--cloud)]">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-black/10 pb-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-[var(--ink)] mb-4">
                Potent <span className="text-[var(--g-500)] italic">Actives</span>
              </h2>
              <p className="text-lg text-black/50 font-medium max-w-xl">
                Our core ingredients are selected for their synergistic ability to brighten, hydrate, and refine.
              </p>
            </div>
            <div className="hidden md:block text-xs font-bold text-black/30 uppercase tracking-widest bg-[var(--smoke)] px-4 py-2 rounded-full border border-black/5">
              01 — 04 PRIMARY ASSETS
            </div>
          </div>

          {/* Ingredient 1: Pink Guava & Vitamin C */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-center">
            
            {/* Left Col (Guava Visual) */}
            <div className="flex flex-col gap-6">
              <div 
                className="w-full aspect-[4/3] rounded-[32px] bg-cover bg-center shadow-lg relative overflow-hidden"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")' }}
              >
                <div className="absolute inset-0 bg-black/10" />
              </div>
              
              <div className="bg-[var(--smoke)] p-6 rounded-[24px] border border-black/5">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold">Pink Guava</h3>
                  <div className="flex gap-2">
                    <span className="bg-[var(--g-500)] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">VITAMIN C</span>
                    <span className="bg-[var(--g-500)] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">ANTIOXIDANTS</span>
                  </div>
                </div>
                <button className="text-sm font-bold text-[var(--p-700)] uppercase tracking-widest flex items-center gap-1 hover:text-[var(--p-500)] transition-colors">
                  Learn More ↓
                </button>
              </div>
            </div>

            {/* Right Col (Clinical Vit C Info) */}
            <div className="bg-[#FFFDFD] border border-[#FDE8EC] rounded-[40px] p-10 lg:p-14 shadow-xl relative mt-12 lg:mt-0 -ml-0 lg:-ml-24 z-10">
              <div className="w-16 h-16 rounded-full bg-[var(--p-100)] text-[var(--p-700)] flex items-center justify-center absolute top-10 right-10 shadow-sm border border-white">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 className="text-4xl font-serif font-bold text-[var(--ink)] mb-3">Clinical Vitamin C</h3>
              <p className="text-[var(--p-700)] italic font-medium mb-8 text-lg">Ethyl Ascorbic Acid: The most stable form of radiance.</p>
              <div className="space-y-4 text-black/60 leading-relaxed font-sans text-lg mb-10">
                <p>
                  Optimized for deep dermal penetration, our clinical-grade Vitamin C triggers collagen synthesis and actively inhibits melanin overproduction.
                </p>
                <p>
                  Unlike traditional L-Ascorbic Acid which degrades quickly, our ethylated form maintains 100% molecular stability even in water-based serums.
                </p>
              </div>
              <Link href="#" className="inline-flex items-center text-[var(--p-700)] font-bold uppercase tracking-widest text-sm hover:translate-x-2 transition-transform">
                Clinical Data <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

          {/* Ingredient 2: HA & Niacinamide */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Col (HA) */}
            <div className="bg-[var(--smoke)] border border-black/5 rounded-[40px] p-10 lg:p-14 flex flex-col justify-between shadow-sm">
              <div className="mb-10">
                <div className="inline-block px-3 py-1.5 mb-6 rounded-full border border-[var(--g-500)] text-[var(--g-500)] text-[10px] font-bold tracking-widest uppercase bg-white">
                  MULTI-MOLECULAR WEIGHT
                </div>
                <h3 className="text-4xl font-serif font-bold text-[var(--g-700)] mb-8">Hyaluronic Acid</h3>
                
                <ul className="space-y-6 text-black/70 font-medium">
                  <li className="flex gap-4 items-start">
                    <span className="font-bold text-[var(--g-500)]">01.</span>
                    <p>High weight molecules form a protective moisture barrier on the surface, defending against trans-epidermal water loss.</p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="font-bold text-[var(--g-500)]">02.</span>
                    <p>Low weight molecules penetrate deep into the dermis for long-term clinical plumping and intense dermal hydration.</p>
                  </li>
                </ul>
              </div>

              <div 
                className="w-full h-48 rounded-3xl bg-cover bg-center shadow-inner"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542614945-812e96ebcc7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}
              />
            </div>

            {/* Right Col (Niacinamide) */}
            <div className="bg-[var(--p-100)] border border-[var(--p-700)]/10 rounded-[40px] p-10 lg:p-14 shadow-sm flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white opacity-40 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-5xl font-serif font-bold text-[var(--ink)] mb-3">Niacinamide</h3>
                <p className="text-[var(--p-700)] italic font-medium mb-10 text-xl">The ultimate multi-tasker.</p>
                <p className="text-black/70 leading-relaxed font-sans text-lg mb-12 max-w-sm">
                  Vitamin B3 works to strengthen the lipid barrier, minimizing the appearance of pores and calming redness for a porcelain-smooth finish. It is the perfect synergistic partner to Vitamin C.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <span className="bg-white text-[var(--ink)] shadow-sm text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-black/5">
                    Skin Barrier Support
                  </span>
                  <span className="bg-white text-[var(--ink)] shadow-sm text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-black/5">
                    Sebum Control
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── [BOTTOM CTA BANNER] ──────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[var(--smoke)]">
        <div className="max-w-6xl mx-auto rounded-[40px] flex flex-col md:flex-row overflow-hidden shadow-2xl min-h-[500px]">
          {/* Left Text Box */}
          <div className="flex-1 bg-[var(--g-700)] p-12 lg:p-20 flex flex-col justify-center relative">
            <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[var(--g-900)] to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.9] tracking-tight mb-8">
                Experience the <br />
                <span className="font-serif italic text-[var(--p-300)] font-normal text-[0.85em]">Botanical Efficacy</span>
              </h2>
              <p className="text-white/80 font-medium max-w-md mb-12 text-lg">
                Our signature formulations house these star ingredients in biocompatible concentrations. See the difference that clinical nature makes.
              </p>
              <Link href="/shop" className="inline-block px-10 py-5 border-2 border-[var(--p-300)] text-[var(--p-300)] font-bold rounded-full hover:bg-[var(--p-300)] hover:text-[var(--ink)] transition-colors uppercase tracking-widest text-sm">
                Shop All Products
              </Link>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex-1 min-h-[400px] relative">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}
            />
          </div>
        </div>
      </section>

      {/* ── [FOOTER] ─────────────────────────────────────────────────── */}
      <footer className="bg-[var(--cloud)] pt-16 pb-8 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-black text-[var(--p-700)] tracking-tighter mb-2">PLIX</h2>
            <p className="text-xs text-black/50 uppercase tracking-widest font-bold">Clinical Nature.</p>
          </div>
          <div>
            <h4 className="font-bold text-[var(--ink)] uppercase text-xs tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-[var(--ink)]/60 font-medium">
              <li><Link href="#" className="hover:text-[var(--p-700)]">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[var(--p-700)]">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[var(--ink)] uppercase text-xs tracking-widest mb-4">Support</h4>
            <ul className="space-y-3 text-sm text-[var(--ink)]/60 font-medium">
              <li><Link href="#" className="hover:text-[var(--p-700)]">Shipping Info</Link></li>
              <li><Link href="#" className="hover:text-[var(--p-700)]">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[var(--ink)] uppercase text-xs tracking-widest mb-4">Partnerships</h4>
            <ul className="space-y-3 text-sm text-[var(--ink)]/60 font-medium">
              <li><Link href="#" className="hover:text-[var(--p-700)]">Wholesale</Link></li>
              <li><Link href="#" className="hover:text-[var(--p-700)]">Press</Link></li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  );
}
