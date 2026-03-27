'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function AuraBentoGrid() {
  const features = [
    { title: "Vitamin C Extract", desc: "Fades dark spots instantly", span: "col-span-1 md:col-span-2", bg: "bg-white", text: "text-[#1A1A1A]" },
    { title: "Alpha Lipoic Acid", desc: "Brightening powerhouse", span: "col-span-1", bg: "bg-[#7B2D8B]", text: "text-white" },
    { title: "Pro-Vitamin B5", desc: "72-Hour lock-in moisture", span: "col-span-1 text-center", bg: "bg-[#F4A0A8]", text: "text-[#1A1A1A]" },
    { title: "Pentavitin", desc: "Deep layer hydration", span: "col-span-1 md:col-span-2", bg: "bg-white", text: "text-[#1A1A1A]" },
    { title: "Clean Label", desc: "100% Vegan & Non-GMO", span: "col-span-1 md:col-span-3 text-center", bg: "bg-[#1B4332]", text: "text-white" },
  ];

  return (
    <section className="bg-[#F9F0EC] py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-[#1A1A1A] mb-6"
          >
            THE GUAVA GLOW RITUAL
          </motion.h2>
          <p className="text-[#7B2D8B] font-semibold uppercase tracking-widest">Clinically Proven Botanicals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, ease: 'easeOut' }}
              className={`${feat.bg} ${feat.text} ${feat.span} rounded-3xl p-10 flex flex-col justify-end min-h-[220px] shadow-sm hover:shadow-xl transition-shadow duration-500 border border-black/5`}
            >
              <h3 className="font-serif text-3xl font-bold mb-2">{feat.title}</h3>
              <p className="opacity-80 font-medium text-sm tracking-wide">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
