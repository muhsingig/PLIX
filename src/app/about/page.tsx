'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="bg-[var(--smoke)] min-h-screen text-[var(--ink)] font-sans">
      
      {/* ── [HERO SECTION] ────────────────────────────────────────── */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image (Tropical Palm Leaf) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Dimming overlay for text readability */}

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-20">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[var(--g-500)] text-white text-xs font-bold tracking-widest uppercase shadow-sm">
            Our Philosophy
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-[var(--p-700)] leading-[1.05] tracking-tight mb-6 max-w-3xl">
            Radiant Science <br />
            <span className="italic text-[var(--g-500)] font-medium">meets</span> Nature.
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-xl font-medium leading-relaxed drop-shadow-md">
            We believe wellness shouldn't be a chore. It should be a moment of juicy vitality that fuels your glow from the inside out.
          </p>
        </div>
      </section>

      {/* ── [MISSION SECTION] ──────────────────────────────────────── */}
      <section className="py-24 bg-[var(--cloud)]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="max-w-lg">
            <h2 className="text-5xl font-serif font-bold text-[var(--ink)] mb-8">Our Mission</h2>
            <div className="space-y-6 text-black/60 text-lg leading-relaxed font-sans">
              <p>
                At Plix, we started with a simple observation: the supplement aisle felt like a pharmacy, clinical and cold. We wanted to transform routines into rituals by marrying the highest-grade plant extracts with real clinical science. 
              </p>
              <p>
                From lush Guava to potent Hyaluronic Acid, our formulas deliver multi-layered benefits. It's not just about looking your best; it's about the feeling of complete, radiant vitality pouring out of you.
              </p>
            </div>
          </div>

          <div className="relative h-[600px] w-full flex items-center justify-center">
            {/* Main terracotta card */}
            <div 
              className="absolute right-0 top-1/2 -translate-y-1/2 w-4/5 h-[85%] rounded-[24px] overflow-hidden shadow-xl"
            >
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}
              />
              <div className="absolute inset-0 bg-[#E8A598]/20 mix-blend-multiply" /> {/* Warm peach tone injection */}
            </div>

            {/* Overlapping fluffy pink botanical */}
            <div className="absolute left-0 bottom-16 w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-[var(--cloud)] z-10">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542614945-812e96ebcc7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80")' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── [BOTANICAL POWERHOUSE SECTION] ─────────────────────────── */}
      <section className="py-28 bg-[var(--smoke)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-[var(--p-700)] leading-tight mb-4">
                The botanical <br /> powerhouse.
              </h2>
              <p className="text-lg text-black/60 font-medium">
                Sourced from the earth. Engineered in the lab.
              </p>
            </div>
            <button className="h-12 px-8 bg-[var(--p-700)] text-white font-bold rounded-full hover:opacity-90 transition-all text-sm uppercase tracking-wider">
              Explore Science
            </button>
          </div>

          {/* Mosaic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
            {/* Card 1 (Half width) */}
            <div className="md:col-span-2 md:row-span-1 rounded-[24px] relative overflow-hidden group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-3xl font-serif font-bold mb-2">Tropical Guava</h3>
                <p className="opacity-90 max-w-md">Packed with 4x more Vitamin C than oranges to shield and brighten your skin barrier.</p>
              </div>
            </div>

            {/* Card 2 (Quarter width) */}
            <div className="md:col-span-1 md:row-span-1 bg-[var(--cloud)] rounded-[24px] p-8 flex flex-col justify-between shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[var(--p-100)] flex items-center justify-center text-[var(--p-700)]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[var(--ink)] mb-1">Vitamin C Glow</h3>
                <p className="text-sm text-black/60">Ethyl Ascorbic Acid for deep dermal penetration.</p>
              </div>
            </div>

            {/* Card 3 (Quarter width) */}
            <div className="md:col-span-1 md:row-span-1 bg-[var(--g-500)] rounded-[24px] p-8 flex flex-col justify-center text-white text-center shadow-lg">
              <h3 className="text-6xl font-sans font-black tracking-tighter mb-1">98%</h3>
              <p className="font-bold text-white/90 uppercase tracking-widest text-xs mb-2">Absorption Rate</p>
              <p className="text-sm text-white/80">Bio-compatible formulations that your body recognizes immediately.</p>
            </div>

            {/* Card 4 (Quarter width) */}
            <div className="md:col-span-1 md:row-span-1 bg-[var(--p-100)] rounded-[24px] p-8 flex flex-col justify-center shadow-sm">
              <h3 className="text-2xl font-serif font-bold text-[var(--p-700)] mb-2">Clean Science</h3>
              <p className="text-sm text-black/70">No fillers, no sulfates, strictly clinically backed actives.</p>
            </div>

            {/* Card 5 (Half width) */}
            <div className="md:col-span-3 md:row-span-1 rounded-[24px] relative overflow-hidden group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1582215359424-dfb7ce126ec8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--p-700)]/80 to-transparent mix-blend-multiply" />
              <div className="absolute bottom-6 left-8 right-8 text-white">
                <h3 className="text-2xl font-serif font-bold mb-1">Precision Formulations</h3>
                <p className="opacity-90 max-w-sm text-sm">Every active is tested in isolation before compounding.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── [WHY PLIX SECTION] ───────────────────────────────────────── */}
      <section className="py-24 bg-[var(--cloud)] border-y border-black/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--ink)] mb-4">Why Plix?</h2>
          <p className="text-lg text-black/60 max-w-2xl mx-auto mb-16">
            We're reimagining the supplement aisle as a wellness sanctuary.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: '🌿', title: '100% Plant Based', desc: 'Sourced directly from the earth.' },
              { icon: '✨', title: 'Effervescent Joy', desc: 'Delicious formats that you\'ll love.' },
              { icon: '✓', title: 'Lab Tested', desc: 'Third-party clinical validation.' },
              { icon: '🌟', title: 'Real Results', desc: 'Visible radiance within weeks.' }
            ].map(item => (
              <div key={item.title} className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-full bg-[var(--smoke)] flex items-center justify-center text-2xl mb-4 group-hover:-translate-y-2 transition-transform duration-300 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="font-bold text-[var(--ink)] mb-1">{item.title}</h3>
                <p className="text-xs text-black/50 tracking-wide uppercase">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── [CTA BANNER] ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[var(--smoke)]">
        <div className="max-w-5xl mx-auto bg-[var(--p-700)] rounded-[32px] p-12 md:p-20 text-center shadow-xl relative overflow-hidden">
          {/* Subtle decoration inside card */}
          <div className="absolute top-[-50%] left-[-10%] w-[60%] h-[200%] bg-white/5 rotate-12 blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-10 leading-tight">
              Ready to start your <br /> radiant journey?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/shop" className="w-full sm:w-auto px-10 py-4 rounded-full border border-white text-white font-bold hover:bg-white hover:text-[var(--p-700)] transition-colors shadow-sm text-sm uppercase tracking-widest">
                Shop the Collection
              </Link>
              <Link href="#" className="w-full sm:w-auto px-10 py-4 rounded-full border border-white text-white font-bold hover:bg-white hover:text-[var(--p-700)] transition-colors shadow-sm text-sm uppercase tracking-widest">
                Take the Quiz
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── [FOOTER] ─────────────────────────────────────────────────── */}
      <footer className="bg-[var(--p-100)] pt-20 pb-10 px-6 border-t border-[var(--p-700)]/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-black text-[var(--p-700)] tracking-tighter mb-4">PLIX</h2>
            <p className="text-sm text-[var(--p-700)]/80 mb-6 max-w-xs">
              Botanical wellness designed to fuel your glow from the inside out.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[var(--cloud)] flex items-center justify-center text-[var(--p-700)] hover:scale-110 transition-transform">IG</div>
              <div className="w-8 h-8 rounded-full bg-[var(--cloud)] flex items-center justify-center text-[var(--p-700)] hover:scale-110 transition-transform">TT</div>
              <div className="w-8 h-8 rounded-full bg-[var(--cloud)] flex items-center justify-center text-[var(--p-700)] hover:scale-110 transition-transform">FB</div>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-bold text-[var(--ink)] uppercase text-xs tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-[var(--ink)]/70">
              <li><Link href="/shop" className="hover:text-[var(--p-700)] transition-colors">Shop All</Link></li>
              <li><Link href="/about" className="hover:text-[var(--p-700)] transition-colors">Our Story</Link></li>
              <li><Link href="/science" className="hover:text-[var(--p-700)] transition-colors">The Science</Link></li>
              <li><Link href="/ingredients" className="hover:text-[var(--p-700)] transition-colors">Ingredients Glossary</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold text-[var(--ink)] uppercase text-xs tracking-widest mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-[var(--ink)]/70">
              <li><Link href="#" className="hover:text-[var(--p-700)] transition-colors">Track Order</Link></li>
              <li><Link href="#" className="hover:text-[var(--p-700)] transition-colors">Shipping & Returns</Link></li>
              <li><Link href="#" className="hover:text-[var(--p-700)] transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-[var(--p-700)] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-[var(--ink)] uppercase text-xs tracking-widest mb-6">Newsletter</h4>
            <p className="text-sm text-[var(--ink)]/70 mb-4">Sign up for early drops and exclusive tips.</p>
            <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full bg-[var(--cloud)] border-none rounded-full h-12 pl-6 pr-12 text-sm focus:ring-2 focus:ring-[var(--p-700)] placeholder:text-black/30 shadow-sm font-sans"
              />
              <button 
                type="submit"
                className="absolute right-2 w-8 h-8 bg-[var(--p-700)] text-[var(--cloud)] rounded-full flex items-center justify-center hover:bg-[var(--p-500)] transition-colors"
              >
                →
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-6 border-t border-[var(--p-700)]/10 text-center md:flex md:justify-between items-center text-xs text-[var(--p-700)]/60 font-medium">
          <p>© {new Date().getFullYear()} Plix Life. Radiant Editorial Wellness.</p>
          <div className="space-x-4 mt-4 md:mt-0 uppercase tracking-widest">
            <Link href="#" className="hover:text-[var(--p-700)]">Privacy Policy</Link>
            <Link href="#" className="hover:text-[var(--p-700)]">Terms of Service</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
