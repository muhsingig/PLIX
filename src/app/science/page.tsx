'use client';
import React from 'react';
import Link from 'next/link';

export default function SciencePage() {
  return (
    <div className="bg-background min-h-screen font-body text-on-background">
      
      {/* ── [HERO SECTION] (Preserved) ───────────────────────────────── */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center shadow-ambient-lg">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1582215359424-dfb7ce126ec8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface/80 via-inverse-surface/40 to-transparent" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-secondary-container text-on-secondary-container label-md shadow-sm">
            CLEAN BEAUTY SCIENCE
          </div>
          
          <h1 className="text-[56px] md:text-[80px] font-sans font-bold tracking-tighter mb-6 max-w-2xl leading-[0.9] text-on-primary">
            <span className="block mb-2">The Science of</span>
            <span className="text-primary-container italic font-serif block mt-2 text-[1.1em] font-normal">Radiance</span>
          </h1>
          
          <p className="text-[16px] text-on-primary/90 max-w-lg font-medium leading-relaxed mb-10 text-shadow-sm">
            At Plix, we bridge the gap between botanical wisdom and clinical precision. Our formulas are engineered to deliver high-performance results using nature's most potent bioactive compounds.
          </p>
          
          <Link href="#ingredients" className="inline-flex px-10 h-[52px] items-center justify-center bg-primary text-on-primary font-bold rounded-full text-center hover:bg-primary-container hover:text-on-surface transition-organic shadow-ambient text-[13px] tracking-wide">
            Explore Formulations
          </Link>
        </div>
      </section>

      {/* ── [3 PILLARS ROW] ──────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          {[
            { 
              icon: <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>, 
              bg: 'bg-primary-container', textCol: 'text-on-surface', title: 'Clinical Rigor', desc: 'Every ingredient undergoes 3rd-party clinical testing to ensure bioavailability and efficacy at a cellular level.' 
            },
            { 
              icon: <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>, 
              bg: 'bg-secondary-container', textCol: 'text-on-secondary-container', title: 'Ethical Sourcing', desc: 'We source our botanical actives from sustainable farms that prioritize soil health and biodiversity.' 
            },
            { 
              icon: <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>, 
              bg: 'bg-surface-container-highest', textCol: 'text-primary', title: 'Bio-Active Fusion', desc: 'Our proprietary extraction methods preserve the molecular integrity of fruits like Pink Guava.' 
            }
          ].map((pillar, i) => (
            <div key={i} className="flex flex-col items-start text-left">
              <div className={`w-[48px] h-[48px] rounded-2xl ${pillar.bg} ${pillar.textCol} shadow-float flex items-center justify-center mb-6`}>
                {pillar.icon}
              </div>
              <h3 className="text-[17px] font-sans font-bold text-on-background mb-3 tracking-tight">{pillar.title}</h3>
              <p className="text-[13px] text-on-background/60 leading-relaxed font-medium">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── [POTENT ACTIVES SECTION] ─────────────────────────────────── */}
      <section id="ingredients" className="py-32 bg-background">
        <div className="max-w-[1100px] mx-auto px-6">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-outline-variant/20 pb-8">
            <div>
              <h2 className="display-lg text-primary mb-2">
                Potent <span className="text-secondary font-serif italic text-[1.1em] font-normal">Actives</span>
              </h2>
              <p className="text-[15px] text-on-background/60 font-medium max-w-xl mt-4">
                Our core ingredients are selected for their synergistic ability to brighten, hydrate, and refine.
              </p>
            </div>
            <div className="hidden md:block label-md text-primary mb-2">
              01 — 04 PRIMARY ASSETS
            </div>
          </div>

          {/* Ingredient 1: Pink Guava & Vitamin C */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 mb-24">
            
            {/* Left Col (Guava Visual) */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient relative flex flex-col justify-between overflow-hidden group ghost-border">
              <div 
                className="w-full h-[320px] rounded-md bg-cover bg-center mb-6 shadow-inner relative overflow-hidden group-hover:scale-[1.02] transition-organic"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")' }}
              >
                <div className="absolute inset-0 bg-inverse-surface/10" />
              </div>
              
              <div className="px-4 pb-2">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="headline-lg text-on-background tracking-tight">Pink Guava</h3>
                  <button className="h-[40px] px-6 text-[12px] font-bold text-on-background rounded-full flex items-center gap-2 hover:bg-surface-container-low transition-organic shadow-sm ghost-border">
                    Learn More
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                </div>
                <div className="flex gap-2">
                  <span className="bg-surface-container-low text-primary label-md px-4 py-2 rounded-full shadow-inner ghost-border">VITAMIN C</span>
                  <span className="bg-surface-container-low text-primary label-md px-4 py-2 rounded-full shadow-inner ghost-border">ANTIOXIDANTS</span>
                </div>
              </div>
            </div>

            {/* Right Col (Clinical Vit C Info) */}
            <div className="flex items-center">
              <div className="bg-surface-container-high rounded-xl p-12 lg:p-16 shadow-ambient w-full relative ghost-border">
                <div className="w-[48px] h-[48px] rounded-full bg-primary-container text-on-surface flex items-center justify-center mb-10 shadow-float relative overflow-hidden transition-organic hover:scale-110">
                   <div className="absolute inset-m bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-white/30 to-transparent" />
                   <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15 8l6 1-4.5 4L18 19l-6-3-6 3 1.5-6L3 9l6-1z"/></svg>
                </div>
                <h3 className="headline-lg text-primary mb-3">Clinical Vitamin C</h3>
                <p className="text-[14px] text-primary italic font-medium mb-10 opacity-80">Ethyl Ascorbic Acid: The most stable form of radiance.</p>
                <div className="space-y-4 text-on-background/70 leading-relaxed font-sans text-[14px]">
                  <p>
                    Optimized for deep dermal penetration, our clinical-grade Vitamin C triggers collagen synthesis and actively inhibits melanin overproduction.
                  </p>
                </div>
                <Link href="#" className="inline-flex items-center text-primary font-bold uppercase tracking-[0.15em] text-[11px] mt-10 hover:translate-x-2 transition-organic">
                  Clinical Data <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Ingredient 2: HA & Niacinamide */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Left Col (HA) */}
            <div className="lg:col-span-2 bg-secondary-container/30 border-4 border-secondary-container rounded-xl p-10 flex flex-col shadow-float relative overflow-hidden">
              <div className="mb-10">
                <div className="inline-block px-3 py-1.5 mb-6 rounded-full bg-surface-container-lowest text-secondary text-[9px] font-black tracking-widest uppercase shadow-sm ghost-border">
                  MULTI-MOLECULAR WEIGHT
                </div>
                <h3 className="headline-lg text-secondary mb-10">Hyaluronic Acid</h3>
                
                <ul className="space-y-8 text-secondary/80 font-medium">
                  <li className="flex gap-5 items-start">
                    <span className="font-bold text-secondary text-[10px] mt-1">01.</span>
                    <p className="text-[13px] leading-relaxed">High weight molecules form a protective moisture barrier on the surface.</p>
                  </li>
                  <li className="flex gap-5 items-start">
                    <span className="font-bold text-secondary text-[10px] mt-1">02.</span>
                    <p className="text-[13px] leading-relaxed">Low weight molecules penetrate deep into the dermis for long-term plumping.</p>
                  </li>
                </ul>
              </div>

              <div 
                className="w-full h-[180px] rounded-md bg-cover bg-center shadow-inner mt-auto transition-organic hover:scale-[1.03]"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542614945-812e96ebcc7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}
              />
            </div>

            {/* Right Col (Niacinamide) */}
            <div className="lg:col-span-3 bg-surface-container-low rounded-xl p-12 lg:p-16 shadow-ambient flex flex-col justify-center relative overflow-hidden ghost-border">
              <div className="absolute right-12 top-1/2 -translate-y-1/2 w-32 h-32 bg-surface-container-highest rounded-full flex items-center justify-center pointer-events-none shadow-inner border border-surface-container-lowest">
                 <div className="grid grid-cols-3 gap-2">
                    {[1,2,3,4,5,6,7].map(dot => <div key={dot} className="w-2.5 h-2.5 rounded-full bg-primary/20" />)}
                 </div>
              </div>
              
              <div className="relative z-10 max-w-[340px]">
                <h3 className="headline-lg text-primary mb-4 tracking-tight">Niacinamide</h3>
                <p className="text-primary/80 leading-relaxed font-body text-[14px] mb-12">
                  The ultimate multi-tasker. Vitamin B3 works to strengthen the lipid barrier, minimizing the appearance of pores and calming redness for a porcelain-smooth finish.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <span className="bg-surface-container-lowest text-primary shadow-sm text-[9px] font-black uppercase tracking-[0.15em] px-4 py-3 rounded-full ghost-border">
                    Skin Barrier Support
                  </span>
                  <span className="bg-surface-container-lowest text-primary shadow-sm text-[9px] font-black uppercase tracking-[0.15em] px-4 py-3 rounded-full ghost-border">
                    Sebum Control
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── [BOTTOM CTA BANNER] ──────────────────────────────────────── */}
      <section className="py-24 px-6 bg-surface-container-lowest">
        <div className="max-w-[1100px] mx-auto rounded-xl flex flex-col md:flex-row overflow-hidden shadow-ambient-lg min-h-[500px]">
          {/* Left Text Box */}
          <div className="flex-1 bg-inverse-surface p-16 lg:p-24 flex flex-col justify-center relative">
            <div className="relative z-10">
              <h2 className="display-lg text-on-primary mb-8 tracking-tighter">
                Experience the <br />
                <span className="text-primary-container">Botanical Efficacy</span>
              </h2>
              <p className="text-on-primary/60 font-medium max-w-[340px] mb-14 text-[14px] leading-relaxed">
                Our signature formulations house these star ingredients in biocompatible concentrations. See the difference that clinical nature makes.
              </p>
              <Link href="/shop" className="inline-flex w-[180px] h-[52px] items-center justify-center bg-primary-container text-on-surface font-bold rounded-full hover:bg-surface-container-lowest hover:scale-105 transition-organic shadow-float text-[13px] tracking-wide">
                Shop All Products
              </Link>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex-1 min-h-[400px] relative bg-surface-container-low">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}
            />
          </div>
        </div>
      </section>

      {/* ── [FOOTER] ─────────────────────────────────────────────────── */}
      <footer className="bg-surface pt-12 pb-12 px-6">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <img src="/logo.png" alt="Plix Logo" className="h-8 w-auto mb-6 object-contain" />
            <p className="text-[13px] text-on-background/50 leading-relaxed max-w-[200px] mb-8 font-medium">Clean, plant-based science. Radiant by nature, clinical by choice. We believe in the power of botanical synergy.</p>
          </div>
          <div>
            <h4 className="label-md text-primary mb-6 border-b border-outline-variant/20 pb-4">Quick Links</h4>
            <ul className="space-y-4 text-[13px] text-on-background/60 font-medium">
              <li><Link href="#" className="hover:text-primary transition-organic">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-organic">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="label-md text-primary mb-6 border-b border-outline-variant/20 pb-4">Support</h4>
            <ul className="space-y-4 text-[13px] text-on-background/60 font-medium">
              <li><Link href="#" className="hover:text-primary transition-organic">Shipping Tracking</Link></li>
              <li><Link href="#" className="hover:text-primary transition-organic">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="label-md text-primary mb-6 border-b border-outline-variant/20 pb-4">Partnership</h4>
            <ul className="space-y-4 text-[13px] text-on-background/60 font-medium">
              <li><Link href="#" className="hover:text-primary transition-organic">Wholesale Dashboard</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center md:text-left pt-8 max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-center text-[11px] font-bold text-on-background/30 md:border-t md:border-outline-variant/20">
          <p>© 2024 Plix Wellness. Radiant Editorial.</p>
        </div>
      </footer>

    </div>
  );
}
