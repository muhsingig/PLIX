'use client';
import React from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import Link from 'next/link';

function CountUp({ end, suffix = '' }: { end: number, suffix?: string }) {
  const [val, setVal] = React.useState(0);
  const nodeRef = React.useRef(null);
  const isInView = true; // Simplified for this implementation

  React.useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setVal(Math.floor(progress * end));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [end]);

  return <span>{val}{suffix}</span>;
}

export default function AboutPage() {
  return (
    <div className="bg-[var(--smoke)] min-h-screen">
      
      {/* ── Section 1: Full Bleed Opening ────────────────────────────── */}
      <section className="h-screen bg-[var(--g-900)] relative flex items-center justify-center text-center overflow-hidden">
        {/* Glow Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[var(--g-700)] opacity-40 blur-[180px] rounded-full" />
        
        <div className="relative z-10 p-[var(--s4)]">
           <p className="label text-[var(--g-300)] mb-[var(--s2)]">Est. 2019 · Mumbai, India</p>
           <h1 className="display text-white mb-2">Born from Plants.</h1>
           <h1 className="display text-[var(--p-300)] opacity-90">Built for You.</h1>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[var(--s5)] flex flex-col items-center gap-2"
        >
          <p className="label text-[var(--g-500)]">Scroll</p>
          <div className="w-px h-12 bg-gradient-to-b from-[var(--g-500)] to-transparent" />
        </motion.div>
      </section>

      {/* ── Section 2: Number Strip ─────────────────────────────────── */}
      <section className="py-[var(--s7)] bg-[var(--p-100)] border-y border-black/5">
        <div className="max-w-[1280px] mx-auto px-[var(--s4)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--s4)]">
             <div className="text-center md:text-left">
                <p className="text-[48px] md:text-[80px] font-extrabold text-[var(--g-700)] tracking-tight leading-none">2019</p>
                <p className="label text-black/30 mt-[var(--s1)]">Founded</p>
             </div>
             <div className="text-center md:text-left">
                <p className="text-[48px] md:text-[80px] font-extrabold text-[var(--g-700)] tracking-tight leading-none">₹150Cr</p>
                <p className="label text-black/30 mt-[var(--s1)]">Annual Revenue</p>
             </div>
             <div className="text-center md:text-left">
                <p className="text-[48px] md:text-[80px] font-extrabold text-[var(--g-700)] tracking-tight leading-none">5L+</p>
                <p className="label text-black/30 mt-[var(--s1)]">Customers Served</p>
             </div>
             <div className="text-center md:text-left">
                <p className="text-[48px] md:text-[80px] font-extrabold text-[var(--g-700)] tracking-tight leading-none">$45M</p>
                <p className="label text-black/30 mt-[var(--s1)]">Marico Partnership</p>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Founders Story ────────────────────────────────── */}
      <section className="py-[var(--s8)] max-w-[1100px] mx-auto px-[var(--s6)] grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-[var(--s6)]">
        <aside className="lg:sticky lg:top-[120px] h-fit">
           <p className="label text-[var(--g-700)] mb-[var(--s2)]">The Origin</p>
           <h2 className="h1 text-[var(--ink)] mb-[var(--s4)]">Two friends.<br/>One idea.<br/>Zero shortcuts.</h2>
           <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--g-100)] rounded-full text-[var(--body)] font-medium text-[var(--g-700)]">
                Rishubh Satiya <div className="w-1 h-1 rounded-full bg-[var(--g-700)]/40" /> Akash Zaveri
              </span>
           </div>
        </aside>

        <div className="space-y-[var(--s5)]">
           <p className="body-lg text-black/70">
             In 2019, Rishubh Satiya and Akash Zaveri merged their plant-based ventures into one mission: give India clean, effective wellness that actually works. No corporate experience. No big budgets. Just conviction.
           </p>
           <p className="body-lg text-black/70">
             They built every formula from scratch — starting with a real plant ingredient, then layering in clinical actives that science had actually proven. If it wasn&apos;t clean, it didn&apos;t ship.
           </p>
           <p className="body-lg text-black/70">
             The market agreed. From zero to ₹150 Crore in annual revenue, Plix became one of India&apos;s most trusted D2C beauty brands — built entirely on word-of-mouth and repeat customers.
           </p>
           <p className="body-lg text-black/70 italic border-l-4 border-[var(--p-300)] pl-[var(--s3)]">
             &ldquo;We didn&apos;t set out to build a beauty brand. We set out to fix the way we care for ourselves.&rdquo;
           </p>
           <p className="body-lg text-black/70">
             In 2023, Marico — one of India&apos;s largest FMCG conglomerates — acquired a majority stake at $45M+. But the mission stayed the same: plant-powered products, for every Indian skin type.
           </p>
        </div>
      </section>

      {/* ── Section 4: Ingredient Ticker ─────────────────────────────── */}
      <div className="py-[var(--s4)] bg-[var(--g-700)] relative overflow-hidden flex items-center h-20">
        <div className="marquee-track flex gap-8 whitespace-nowrap items-center">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-8 items-center">
              {["GUAVA", "JAMUN", "PINEAPPLE", "ROSEMARY", "POMEGRANATE", "WATERMELON", "AVOCADO", "HIBISCUS", "NEEM", "ACV"].map(tag => (
                <div key={tag} className="flex gap-8 items-center">
                  <span className="label text-white/90 tracking-[0.2em]">{tag}</span>
                  <span className="text-[var(--g-300)] text-xs">◆</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Section 5: Brand Values ─────────────────────────────────── */}
      <section className="py-[var(--s8)] px-[var(--s6)]">
        <div className="max-w-[1100px] mx-auto">
          <p className="label text-[var(--g-700)] mb-[var(--s2)]">What we stand for</p>
          <h2 className="h1 text-[var(--ink)] mb-[var(--s6)]">Every decision starts here.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 bg-black/[0.06] gap-px border border-black/[0.06]">
            {[
              { icon: '🌿', title: 'Clean Label Certified', text: 'Every batch tested for 400+ contaminants. What\'s on the label is exactly what\'s inside.' },
              { icon: '🐰', title: 'Cruelty-Free & Vegan', text: 'No animal testing. No animal ingredients. No exceptions.' },
              { icon: '🌱', title: 'Non-GMO & Toxin-Free', text: 'No parabens. No sulphates. No artificial preservatives. Just plants and proven actives.' },
              { icon: '🌍', title: 'Pledge a Tree', text: 'Every order plants a tree in India. Good skin and a good planet aren\'t mutually exclusive.' }
            ].map((v, i) => (
              <motion.div 
                key={v.title}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 32 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-[var(--cloud)] p-[var(--s6)]"
              >
                <div className="w-14 h-14 bg-[var(--g-100)] rounded-[var(--r-md)] flex items-center justify-center text-3xl mb-[var(--s4)]">{v.icon}</div>
                <h3 className="h3 mb-[var(--s2)]">{v.title}</h3>
                <p className="body text-black/50">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Closing CTA ──────────────────────────────────── */}
      <section className="py-[var(--s8)] bg-[var(--p-100)] text-center px-[var(--s4)] relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        
        <div className="relative z-10">
          <h2 className="display text-[var(--ink)] mb-[var(--s2)]">Ready for your plant fix?</h2>
          <p className="body-lg text-black/40 mb-[var(--s5)]">Join 5 lakh+ customers who switched to clean.</p>
          <Link 
            href="/products" 
            className="inline-flex items-center h-16 px-[var(--s6)] bg-[var(--g-700)] text-white rounded-[var(--r-md)] text-lg font-bold hover:bg-[var(--g-500)] hover:translate-y-[-3px] transition-all shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)]"
          >
            Explore All Products →
          </Link>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-20 bg-[var(--smoke)]" />
    </div>
  );
}
