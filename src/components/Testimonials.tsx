'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      text: "For years, I've battled dry, dull skin — this moisturizer has truly been a lifesaver. My skin absorbs it right away, no oily residue, and it looks radiant. It's like a ray of sunlight for my skin!",
      author: "Verified Amazon Buyer",
      stars: 5
    },
    {
      text: "Being a working mom, I constantly battle tired-looking skin. Plix ka yeh Guava moisturizer is a game changer — its skin-brightening properties made a visible difference within days. Lightweight, non-sticky, quickly absorbed.",
      author: "Shweta, Verified Plix Buyer",
      stars: 5
    },
    {
      text: "Vitamin C and ALA together — what a duo. My skin feels nourished, even-toned, and looks genuinely radiant. A fantastic addition to my skincare routine. Instant glow from Day 1.",
      author: "Verified Nykaa Buyer",
      stars: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="bg-[#FDF6F3] py-32 md:py-48 px-6 overflow-hidden">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-[#1A1A1A] mb-4">
          Real Skin. Real Glow. Real Reviews.
        </h2>
        <p className="text-xl md:text-2xl text-[#4A4A4A] mb-20 font-medium">
          Over 10,000 verified customers. Here's what they're saying.
        </p>

        <div className="relative h-[250px] md:h-[200px] w-full max-w-3xl mx-auto cursor-grab active:cursor-grabbing">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-white p-8 md:p-12 rounded-[2rem] border border-[#F4A0A8]/30 shadow-xl flex flex-col items-center justify-center text-center"
            >
              <div className="flex gap-1 mb-6 text-[#7B2D8B]">
                {[...Array( testimonials[currentIndex].stars )].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg md:text-xl italic text-[#1A1A1A] mb-6 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
              <p className="text-sm font-bold text-[#4A4A4A] tracking-wider uppercase">
                — {testimonials[currentIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-[#7B2D8B] scale-125' : 'bg-[#7B2D8B]/20'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
