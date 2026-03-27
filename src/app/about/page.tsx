'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport:   { once: true },
  transition: { duration: 0.6, delay },
});

const VALUES = [
  { icon: '🌿', title: 'Clean Label Certified', body: 'Every product passes rigorous testing for heavy metals, pesticides, and harmful chemicals. What\'s on the label is exactly what\'s in the bottle.' },
  { icon: '🐰', title: 'Cruelty-Free & Vegan', body: 'No animal testing. No animal-derived ingredients. Ever. Because compassion is part of the formula.' },
  { icon: '🌱', title: 'Non-GMO & Toxin-Free', body: 'We use only natural, non-genetically modified botanicals — free from artificial preservatives, parabens, and sulphates.' },
  { icon: '🌍', title: 'Pledge a Tree', body: 'Every order you place helps us plant trees across India. Because good skin and a good planet should go hand in hand.' },
];

const STATS = [
  { label: 'Founded', value: '2019' },
  { label: 'ARR', value: '₹150 Cr+' },
  { label: 'Customers', value: '5 Lakh+' },
  { label: 'Acquired by', value: 'Marico 2023' },
];

const MEDIA = ['Forbes India', 'Vogue India', 'Nykaa', 'Inc42', 'Femina'];

const TICKER_ITEMS = ['🍍 PINEAPPLE', '🫐 JAMUN', '🍈 GUAVA', '🌹 ROSEMARY', '🍎 ACV', '🥑 AVOCADO', '🍉 WATERMELON', '🌺 HIBISCUS', '🍑 POMEGRANATE'];

export default function AboutPage() {
  return (
    <div className="min-h-screen">

      {/* ── Section 1: Hero ── */}
      <section className="bg-[var(--plix-green)] py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--plix-pink)]/10 pointer-events-none" />
        <motion.div {...fadeInUp()} className="relative z-10 max-w-4xl mx-auto">
          <p className="text-[var(--plix-green-light)] text-xs font-bold tracking-[0.4em] uppercase mb-6">
            THE PLANT FIX
          </p>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-none">
            Born from Plants.<br />Built for You.
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
            Plix is India&apos;s leading plant-based beauty & wellness brand — where ancient botanical wisdom meets modern science.
          </p>
        </motion.div>
        {/* gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* ── Section 2: Origin Story ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left — story */}
          <motion.div {...fadeInUp()}>
            <span className="inline-block bg-[var(--plix-sage)] text-[var(--plix-ink)] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              OUR STORY
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--plix-ink)] mb-8 leading-tight">
              Two Founders.<br />One Mission.<br />Zero Compromise.
            </h2>
            <div className="space-y-4 text-[var(--plix-muted)] leading-relaxed">
              <p>In 2019, Rishubh Satiya and Akash Zaveri — two friends in their mid-twenties — merged their plant-based ventures into one. No corporate experience. No big budgets. Just a shared belief: that India deserved clean, effective, plant-powered wellness.</p>
              <p>Starting from a bootstrapped experiment, they grew Plix to <strong className="text-[var(--plix-green)]">₹150 Crore+ ARR</strong> — catching the eye of Marico, one of India&apos;s most respected FMCG giants, which acquired a majority stake in 2023 at a valuation of <strong className="text-[var(--plix-green)]">$45M+</strong>.</p>
              <p>Today, Plix serves <strong className="text-[var(--plix-green)]">5 lakh+ customers</strong> across India, with a product range spanning skincare, haircare, nutrition, and kids&apos; wellness — all Clean Label certified, vegan, and non-GMO.</p>
            </div>
          </motion.div>

          {/* Right — stats grid */}
          <motion.div {...fadeInUp(0.2)} className="grid grid-cols-2 gap-4">
            {STATS.map((s, i) => (
              <motion.div key={s.label} {...fadeInUp(i * 0.1)}
                className="bg-[var(--plix-sage)] rounded-2xl p-6">
                <p className="text-4xl font-bold text-[var(--plix-green)] mb-1">{s.value}</p>
                <p className="text-xs text-[var(--plix-muted)] font-medium tracking-wide uppercase">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 3: Brand Values ── */}
      <section className="bg-[var(--plix-sage)] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeInUp()} className="text-4xl md:text-5xl font-bold text-[var(--plix-ink)] text-center mb-16">
            What We Stand For
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <motion.div key={v.title} {...fadeInUp(i * 0.1)}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-[var(--plix-green)] text-base mb-2">{v.title}</h3>
                <p className="text-[var(--plix-muted)] text-sm leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Ticker + Philosophy ── */}
      <section className="bg-[var(--plix-green)] py-20 overflow-hidden">
        {/* Ticker */}
        <div className="relative flex overflow-x-hidden border-y border-white/10 py-4 mb-16">
          <div className="ticker-track flex whitespace-nowrap">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="mx-8 text-white font-bold tracking-widest text-sm uppercase">
                {item} <span className="text-white/30">·</span>
              </span>
            ))}
          </div>
        </div>
        <motion.div {...fadeInUp()} className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">From Nature&apos;s Lab to Your Skin.</h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Every Plix formula begins with a real plant ingredient — chosen for its proven efficacy, not just its marketing appeal. Then, our food scientists and dermatologists layer in clinical actives to create products that actually work.
          </p>
        </motion.div>
      </section>

      {/* ── Section 5: As Seen In ── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-[var(--plix-muted)] font-medium tracking-widest uppercase mb-8">As seen in</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {MEDIA.map(m => (
              <span key={m} className="text-gray-300 font-bold text-lg hover:text-[var(--plix-pink)] transition-colors cursor-default select-none">
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: CTA ── */}
      <section className="bg-[var(--plix-pink)] py-24 px-6 text-center">
        <motion.div {...fadeInUp()}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready for Your Plant Fix?</h2>
          <Link href="/products"
            className="inline-block bg-[var(--plix-green)] text-white rounded-full px-10 py-4 font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
            Shop All Products
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
