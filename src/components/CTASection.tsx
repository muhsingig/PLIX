'use client';
import React from 'react';

export default function CTASection() {
  return (
    <section className="bg-[#1B4332] py-40 md:py-56 px-6 text-center">
      <div className="container mx-auto max-w-4xl flex flex-col items-center">
        
        <p className="text-[#F4A0A8] text-sm md:text-base tracking-[0.4em] font-semibold uppercase mb-8">
          The Ritual Shared
        </p>
        
        <h2 className="font-serif text-6xl md:text-9xl font-bold tracking-tight text-white mb-8 leading-none">
          EXPERIENCE<br/>THE GLOW
        </h2>
        
        <p className="text-xl md:text-2xl text-white/70 mb-16 max-w-2xl font-medium leading-relaxed tracking-wide">
          Clinically proven actives. Zero fillers. Daily performance perfected.
        </p>

        <button className="bg-transparent border border-[#F4A0A8] text-[#F4A0A8] hover:bg-[#F4A0A8] hover:text-[#1A1A1A] font-bold text-lg md:text-xl px-14 py-5 rounded-full transition-all duration-500 tracking-widest uppercase shadow-xl mb-6">
          Shop Guava Glow
        </button>

      </div>
    </section>
  );
}
