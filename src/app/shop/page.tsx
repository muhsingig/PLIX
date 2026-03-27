'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: 'Guava Glow Serum',
      price: '$34.00',
      rating: '4.9',
      reviews: '214 reviews',
      badge: 'BESTSELLER',
      desc: 'Brightening daily hydration with 10% Vitamin C.',
      bg: '#FDF7E6', // soft yellow/cream
      img: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'Juicy Cleanser',
      price: '$28.00',
      rating: '4.8',
      reviews: '128 reviews',
      badge: null,
      desc: 'Gentle exfoliating wash with fruit enzymes.',
      bg: '#2C1A1A', // Dark background
      img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      name: 'Daily Glow Effervescent',
      price: '$42.00',
      rating: '5.0',
      reviews: '89 reviews',
      badge: 'WELLNESS',
      desc: 'Drop in water for an instant beauty boost.',
      bg: '#FFFFFF', // Light card
      img: 'https://images.unsplash.com/photo-1542614945-812e96ebcc7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      name: 'Botanical Night Oil',
      price: '$39.00',
      rating: '4.7',
      reviews: '156 reviews',
      badge: null,
      desc: 'Deep barrier repair while you sleep.',
      bg: '#1B4332', // Dark teal/green
      img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div className="bg-[var(--smoke)] min-h-screen font-sans text-[var(--ink)] pt-20">
      
      {/* ── [HERO - SPLIT LAYOUT] ────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-[var(--p-100)] rounded-[40px] flex flex-col lg:flex-row overflow-hidden min-h-[600px] shadow-sm">
          
          {/* Left Half (Text) */}
          <div className="flex-1 p-12 lg:p-20 flex flex-col justify-center">
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-[var(--g-500)] text-white text-xs font-bold tracking-widest uppercase shadow-sm w-max">
              NEW VITALITY COLLECTION
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif font-bold leading-none tracking-tight mb-8">
              <span className="text-[var(--p-700)] block">JUICY</span>
              <span className="text-[var(--g-500)] italic block">RADIANCE.</span>
            </h1>
            
            <p className="text-lg text-black/60 font-medium mb-10 max-w-md leading-relaxed">
              Transform your skin with botanical power. Our Guava-infused formula delivers a high-energy glow that lasts all day. No fillers, just pure vitality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#products" className="px-8 py-4 bg-[var(--p-700)] text-white font-bold rounded-full text-center hover:bg-[#5C1B34] transition-colors shadow-lg uppercase tracking-widest text-sm">
                Shop Collection
              </Link>
              <Link href="/science" className="px-8 py-4 border-2 border-[var(--g-500)] text-[var(--g-500)] font-bold rounded-full text-center hover:bg-[var(--g-500)] hover:text-white transition-colors uppercase tracking-widest text-sm">
                The Science
              </Link>
            </div>
          </div>

          {/* Right Half (Image) */}
          <div className="flex-1 relative min-h-[400px] lg:min-h-full">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")' }}
            />
            {/* Floating Review Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-12 left-12 bg-white/95 backdrop-blur-md rounded-[20px] p-6 shadow-xl max-w-xs"
            >
              <div className="flex gap-1 mb-2">
                {[1,2,3,4,5].map(star => <span key={star} className="text-[var(--g-500)] text-lg">★</span>)}
              </div>
              <p className="font-serif font-bold text-[var(--ink)] text-lg mb-2">"Best serum I've ever used."</p>
              <p className="text-xs text-black/50 font-bold uppercase tracking-widest">— Sarah J.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── [DAILY ESSENTIALS PRODUCT GRID] ──────────────────────────── */}
      <section id="products" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--ink)] mb-4">Our Daily Essentials</h2>
            <p className="text-lg text-black/50 font-medium">Clean, effective, and bursting with flavor.</p>
          </div>
          <div className="hidden md:flex gap-4">
            <button className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-white transition-colors">←</button>
            <button className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-white transition-colors">→</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => {
            const isDark = product.bg === '#2C1A1A' || product.bg === '#1B4332';
            const textColor = isDark ? 'text-white' : 'text-[var(--ink)]';
            const subTextColor = isDark ? 'text-white/60' : 'text-black/50';

            return (
              <div 
                key={product.id} 
                className={`rounded-[32px] p-6 flex flex-col justify-between shadow-sm relative group`}
                style={{ backgroundColor: product.bg }}
              >
                {product.badge && (
                  <div className="absolute top-6 left-6 z-10 bg-white text-[var(--ink)] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                    {product.badge}
                  </div>
                )}
                
                <div 
                  className="w-full h-48 bg-cover bg-center rounded-2xl mb-6 shadow-sm group-hover:scale-[1.02] transition-transform duration-500"
                  style={{ backgroundImage: `url("${product.img}")` }}
                />
                
                <div>
                  <div className={`flex gap-1 mb-2 ${isDark ? 'text-[var(--g-500)]' : 'text-[var(--p-700)]'}`}>
                    <span>★</span>
                    <span className="text-sm font-bold ml-1">{product.rating}</span>
                    <span className={`text-xs ml-2 ${subTextColor}`}>({product.reviews})</span>
                  </div>
                  <h3 className={`text-2xl font-serif font-bold mb-2 ${textColor}`}>{product.name}</h3>
                  <p className={`text-sm mb-6 ${subTextColor}`}>{product.desc}</p>
                </div>

                <div className="flex justify-between items-center mt-auto">
                  <span className={`text-xl font-bold ${textColor}`}>{product.price}</span>
                  <button className="w-12 h-12 bg-[var(--p-700)] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── [PINK GUAVA FEATURE SECTION] ─────────────────────────────── */}
      <section className="py-24">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          
          {/* Left Half */}
          <div className="flex-1 bg-[var(--p-100)] p-12 lg:p-24 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--g-700)] tracking-tighter mb-2">
              THE POWER OF
            </h2>
            <h2 className="text-6xl md:text-7xl font-serif italic text-[var(--g-500)] mb-12">
              PINK GUAVA.
            </h2>

            <ul className="space-y-8">
              {[
                { title: 'Antioxidant Rich', desc: 'Guava contains 4x more Vitamin C than oranges, shielding skin from environmental stress.' },
                { title: 'Instant Hydration', desc: 'Naturally occurring minerals lock in moisture for a plump, juicy finish.' },
                { title: 'Pore Refining', desc: 'Gentle tannins in the fruit help tighten pores and smooth skin texture.' }
              ].map(item => (
                <li key={item.title} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--g-500)] flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-sm">
                    🌿
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[var(--ink)] mb-1">{item.title}</h4>
                    <p className="text-black/60 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Half */}
          <div className="flex-1 relative min-h-[400px]">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")' }}
            />
          </div>

        </div>
      </section>

      {/* ── [EMAIL SIGNUP BANNER] ────────────────────────────────────── */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="bg-[var(--p-700)] rounded-[40px] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Join the Glow Squad</h2>
            <p className="text-white/80 text-lg mb-10 max-w-lg mx-auto">
              Get exclusive early access to product drops and 15% off your first order.
            </p>

            <form className="flex flex-col md:flex-row gap-4 justify-center items-center" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full md:w-96 h-14 bg-[var(--p-100)] rounded-full px-6 text-[var(--ink)] font-bold placeholder:text-[var(--p-700)]/40 focus:outline-none focus:ring-4 focus:ring-white/20 transition-shadow"
              />
              <button className="w-full md:w-auto h-14 px-10 bg-white text-[var(--p-700)] rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[var(--smoke)] transition-colors shadow-sm">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── [FOOTER] ─────────────────────────────────────────────────── */}
      <footer className="bg-white pt-24 pb-12 px-6 border-t border-black/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-black text-[var(--p-700)] tracking-tighter mb-6">PLIX</h2>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--smoke)] flex items-center justify-center text-[var(--p-700)] hover:bg-[var(--p-100)] transition-colors cursor-pointer">IG</div>
              <div className="w-10 h-10 rounded-full bg-[var(--smoke)] flex items-center justify-center text-[var(--p-700)] hover:bg-[var(--p-100)] transition-colors cursor-pointer">TT</div>
              <div className="w-10 h-10 rounded-full bg-[var(--smoke)] flex items-center justify-center text-[var(--p-700)] hover:bg-[var(--p-100)] transition-colors cursor-pointer">FB</div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-[var(--ink)] uppercase text-xs tracking-widest mb-6 border-b border-black/5 pb-4">Shop</h4>
            <ul className="space-y-4 text-sm text-[var(--ink)]/60 font-medium">
              <li><Link href="#" className="hover:text-[var(--p-700)]">Skincare</Link></li>
              <li><Link href="#" className="hover:text-[var(--p-700)]">Nutrition</Link></li>
              <li><Link href="#" className="hover:text-[var(--p-700)]">Bundles</Link></li>
              <li><Link href="#" className="hover:text-[var(--p-700)]">New Arrivals</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[var(--ink)] uppercase text-xs tracking-widest mb-6 border-b border-black/5 pb-4">Support</h4>
            <ul className="space-y-4 text-sm text-[var(--ink)]/60 font-medium">
              <li><Link href="#" className="hover:text-[var(--p-700)]">Shipping Info</Link></li>
              <li><Link href="#" className="hover:text-[var(--p-700)]">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-[var(--p-700)]">Wholesale</Link></li>
              <li><Link href="#" className="hover:text-[var(--p-700)]">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[var(--ink)] uppercase text-xs tracking-widest mb-6 border-b border-black/5 pb-4">Legal</h4>
            <ul className="space-y-4 text-sm text-[var(--ink)]/60 font-medium">
              <li><Link href="#" className="hover:text-[var(--p-700)]">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[var(--p-700)]">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center md:text-left border-t border-black/5 pt-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs font-bold text-black/40 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Plix Life.</p>
        </div>
      </footer>

    </div>
  );
}
