'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function FeatureCards() {
  const cards = [
    {
      title: "From Nature. Straight to Your Skin.",
      body: "Every drop is loaded with real Guava Extract, 10% Vitamin C, and Alpha Lipoic Acid — clean actives that work from the first use. No fillers, no toxins, no compromise.",
      badges: ["✓ Clean Label Certified", "✓ Non-GMO", "✓ Vegan"]
    },
    {
      title: "Visible Glow. From Day One.",
      body: "Vitamin C and ALA together create a brightening powerhouse that evens skin tone, fades dark spots, and delivers a smoother, more radiant complexion — verified by thousands.",
      badges: ["✓ Dermatologically Tested", "✓ 4.7★ Average Rating", "✓ 10,000+ Reviews"]
    },
    {
      title: "Absorbs in Seconds. Stays All Day.",
      body: "Unlike heavy creams that sit on the surface, the Guava Glow Smoothie Moisturizer melts into skin instantly — no white cast, no stickiness, no residue. Perfect under makeup.",
      badges: ["✓ For All Skin Types", "✓ Non-Sticky", "✓ SPF 20 Variant Available"]
    }
  ];

  return (
    <section className="bg-white py-32 md:py-48 px-6">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              className="bg-[#F9F0EC] p-10 md:p-12 rounded-[2rem] shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-6 leading-tight">
                  {card.title}
                </h3>
                <p className="text-lg text-[#4A4A4A] leading-relaxed mb-8">
                  {card.body}
                </p>
              </div>
              
              <div className="space-y-3">
                {card.badges.map((badge, bIdx) => (
                  <div key={bIdx} className="flex items-center text-sm font-semibold text-[#7B2D8B] tracking-wide">
                    {badge}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
