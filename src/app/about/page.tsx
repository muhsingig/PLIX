'use client';
import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen text-on-background font-body">
      
      {/* ── [HERO SECTION] ────────────────────────────────────────── */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image (Tropical Palm Leaf) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
        />
        <div className="absolute inset-0 bg-inverse-surface/30 mix-blend-multiply" /> {/* Dimming overlay for text readability */}

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-20">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-secondary text-on-primary text-[10px] font-bold tracking-[0.15em] uppercase shadow-ambient">
            Our Philosophy
          </div>
          <h1 className="display-lg text-primary-container mb-6 max-w-3xl">
            Radiant Science <br />
            <span className="italic font-serif text-secondary-container font-medium">meets</span> Nature.
          </h1>
          <p className="text-lg md:text-xl text-on-primary/95 max-w-xl font-medium leading-relaxed drop-shadow-md">
            We believe wellness shouldn't be a chore. It should be a moment of juicy vitality that fuels your glow from the inside out.
          </p>
        </div>
      </section>

      {/* ── [MISSION SECTION] ──────────────────────────────────────── */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="max-w-lg pr-8">
            <h2 className="headline-lg text-primary mb-8 tracking-tight">Our Mission</h2>
            <div className="space-y-6 text-on-background/70 text-lg leading-relaxed font-body">
              <p>
                Plix was born from a simple realization: the wellness industry was too serious, too clinical, and frankly, a bit dull. We set out to create a world where high-performance botanical science meets the joy of everyday ritual.
              </p>
              <p>
                Our goal is to democratize radiant health by making premium plant-based nutrition as accessible as it is delicious. No more hard-to-swallow pills—just pure, juicy vitality in every drop, powder, and fizz.
              </p>
            </div>
          </div>

          <div className="relative h-[650px] w-full flex items-center justify-end">
            <div 
              className="absolute right-0 top-1/2 -translate-y-1/2 w-[85%] h-[90%] rounded-xl shadow-ambient overflow-hidden"
            >
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}
              />
            </div>
            {/* Overlapping fluffy botanical */}
            <div className="absolute left-[-20px] bottom-12 w-64 h-64 rounded-full shadow-float border-[8px] border-surface-container-low overflow-hidden z-10 transition-organic hover:scale-105">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542614945-812e96ebcc7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80")' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── [BOTANICAL POWERHOUSE SECTION] ─────────────────────────── */}
      <section className="py-32 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="max-w-2xl">
              <h2 className="display-lg text-primary mb-6">
                The botanical <br /> powerhouse.
              </h2>
              <p className="text-[17px] text-on-background/60 font-medium">
                We source only the most potent natural ingredients, backed by <br /> clinical research and perfected by nature.
              </p>
            </div>
            <button className="h-[52px] px-8 bg-primary text-on-primary font-bold rounded-full hover:bg-primary-container hover:text-on-surface transition-organic shadow-ambient text-sm">
              Explore Science
            </button>
          </div>

          {/* Precision 3-column Grid Mosaic */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto md:h-[600px]">
            {/* Guava Image (Span 2) */}
            <div className="md:col-span-2 rounded-xl relative overflow-hidden group shadow-ambient text-on-primary">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-organic duration-700 group-hover:scale-[1.03]"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/10 to-transparent mix-blend-multiply transition-organic" />
              <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col justify-end text-on-primary z-10">
                <h3 className="text-[32px] font-sans font-bold mb-3 tracking-tight text-primary-container">Tropical Guava</h3>
                <p className="opacity-90 max-w-sm text-sm leading-relaxed">Naturally rich in lycopene and fibers, our guavas are hand-picked for peak antioxidant potency.</p>
              </div>
            </div>

            {/* Vitamin C Glow Card */}
            <div className="md:col-span-1 bg-surface-container-high rounded-xl p-10 flex flex-col justify-center text-on-surface shadow-float relative overflow-hidden group">
              <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary mb-auto shadow-sm transition-organic group-hover:scale-110">
                <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </div>
              <div className="mt-8">
                <h3 className="text-[28px] font-sans font-bold mb-3 tracking-tight text-primary">Vitamin C Glow</h3>
                <p className="text-[15px] opacity-80 leading-relaxed font-medium">Bio-available Vitamin C extracted from Amla to supercharge your skin's collagen production.</p>
              </div>
              <div className="absolute bottom-10 left-10 right-10 h-0.5 bg-outline-variant/30 rounded-full" />
            </div>

            {/* 98% Absorption Rate Card */}
            <div className="md:col-span-1 bg-secondary-container rounded-xl p-10 flex flex-col justify-center text-on-secondary-container text-center shadow-ambient">
              <h3 className="text-[64px] font-sans font-black tracking-tighter mb-1">98%</h3>
              <p className="font-bold text-secondary mb-4 text-lg">Absorption Rate</p>
              <p className="text-[14px] text-secondary/70 font-medium leading-relaxed">Our patented delivery systems ensure nutrients reach your cells, not just your stomach.</p>
            </div>

            {/* Clean Science Card */}
            <div className="md:col-span-1 bg-surface-container-low rounded-xl p-10 flex flex-col justify-center shadow-float">
              <h3 className="text-[28px] font-sans font-bold text-primary mb-4 tracking-tight">Clean Science</h3>
              <p className="text-[15px] text-on-surface/70 font-medium leading-relaxed">No fillers, no artificial sweeteners. Just pure botanical extracts in their most active forms.</p>
            </div>

            {/* Lab Image */}
            <div className="md:col-span-1 rounded-xl relative overflow-hidden shadow-ambient">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-organic hover:scale-105"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1582215359424-dfb7ce126ec8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── [WHY PLIX SECTION] ───────────────────────────────────────── */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="headline-lg text-primary mb-4 tracking-tight">Why Plix?</h2>
          <p className="text-[16px] text-on-background/50 mx-auto mb-20 font-medium">
            We're reimagining the supplement aisle as a wellness sanctuary.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
            {[
              { icon: '🌿', title: '100% Plant Based', desc: 'Vegan-friendly and ethically-sourced botanical ingredients.' },
              { icon: '💦', title: 'Effervescent Joy', desc: 'Dissolvable formulas for faster absorption and better taste.' },
              { icon: '✅', title: 'Lab Tested', desc: 'Every batch is third-party tested for purity and potency.' },
              { icon: '✨', title: 'Real Results', desc: 'Visible glow and improved energy levels in 30 days.' }
            ].map(item => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-surface-container-low ghost-border shadow-float flex items-center justify-center text-3xl mb-8 transition-organic hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="font-bold text-primary mb-3 text-[17px] font-sans">{item.title}</h3>
                <p className="text-[13px] text-on-background/60 leading-relaxed px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── [CTA BANNER] ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-surface-container-lowest">
        <div className="max-w-[1100px] mx-auto bg-gradient-to-br from-primary to-primary-container rounded-xl p-16 md:p-24 text-center shadow-ambient-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-inverse-surface/5 opacity-0 group-hover:opacity-100 transition-organic pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="display-lg text-on-primary mb-12">
              Ready to start your <br /> radiant journey?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link href="/shop" className="w-[200px] h-[54px] flex items-center justify-center rounded-full bg-surface-container-lowest text-primary font-bold hover:scale-[1.02] transition-organic shadow-ambient text-[14px]">
                Shop the Collection
              </Link>
              <Link href="#" className="w-[200px] h-[54px] flex items-center justify-center rounded-full border border-on-primary/50 text-on-primary font-bold hover:bg-on-primary/10 transition-organic text-[14px]">
                Take the Quiz
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── [FOOTER] ─────────────────────────────────────────────────── */}
      <footer className="bg-surface pt-24 pb-12 px-6">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-4 pr-8">
            <h2 className="headline-lg text-primary mb-6">Plix</h2>
            <p className="text-[14px] text-on-background/50 mb-8 max-w-[280px] leading-relaxed">
              Empowering your wellness journey with juicy, high-impact botanical science. Born in the garden, perfected in the lab.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-surface-container-high ghost-border flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-organic">
                {/* FB Icon */}
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163...z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface-container-high ghost-border flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-organic">
                {/* Twitter / X icon */}
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557...z"/></svg>
              </a>
            </div>
          </div>

          {/* Links Cols */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="label-md text-primary mb-6">Explore</h4>
            <ul className="space-y-4 text-[13px] text-on-background/60 font-medium">
              <li><Link href="/shop" className="hover:text-primary transition-organic">All Products</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-organic">Our Ingredients</Link></li>
              <li><Link href="/science" className="hover:text-primary transition-organic">Scientific Research</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="label-md text-primary mb-6">Support</h4>
            <ul className="space-y-4 text-[13px] text-on-background/60 font-medium">
              <li><Link href="#" className="hover:text-primary transition-organic">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-organic">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary transition-organic">Shipping Info</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 md:col-span-4 pl-0 md:pl-8">
            <h4 className="label-md text-primary mb-6">Newsletter</h4>
            <p className="text-[13px] text-on-background/60 mb-6 leading-relaxed">Get weekly wellness tips and early drop access.</p>
            <form className="relative flex items-center max-w-[300px]" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email"
                className="w-full bg-surface-container-lowest ghost-border rounded-full h-[48px] pl-6 pr-14 text-[13px] focus:outline-none focus:border-outline-variant transition-organic shadow-float text-on-background"
              />
              <button 
                type="submit"
                className="absolute right-2 w-[32px] h-[32px] bg-primary text-on-primary rounded-full flex items-center justify-center hover:bg-primary-container hover:text-inverse-surface transition-organic"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="max-w-[1100px] mx-auto pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center text-[12px] text-on-background/40 font-medium">
          <p>© 2024 Plix Life. Radiant Editorial Wellness.</p>
        </div>
      </footer>

    </div>
  );
}
