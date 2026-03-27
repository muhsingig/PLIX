'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: 'Guava Glow Serum',
      price: '$34',
      rating: '4.9',
      reviews: '2.1k reviews',
      badge: 'BESTSELLER',
      badgeColor: 'bg-primary-container text-on-surface',
      desc: 'Niacinamide-rich formula for instant brightening and deep hydration.',
      bg: '#F3E5A6', // Using inline styles for specific product background vibrancy since it's dynamic imagery
      img: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'Juicy Cleanser',
      price: '$28',
      rating: '4.8',
      reviews: '1.4k reviews',
      badge: null,
      desc: 'Gentle citrus foam that dissolves impurities without stripping moisture barrier.',
      bg: '#0F2C41',
      img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      name: 'Daily Glow',
      price: '$42',
      rating: '5.0',
      reviews: '890 reviews',
      badge: 'WELLNESS',
      badgeColor: 'bg-secondary text-on-primary',
      desc: 'Vitamin C & Hyaluronic Acid drink for inner health and outer glow.',
      bg: '#F9FBF9',
      img: 'https://images.unsplash.com/photo-1542614945-812e96ebcc7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      name: 'Botanical Night Oil',
      price: '$39',
      rating: '4.7',
      reviews: '1.1k reviews',
      badge: null,
      desc: 'Overnight recovery oil infused with rare cold-pressed botanicals.',
      bg: '#3A6C58',
      img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div className="bg-background min-h-screen font-body text-on-background pt-20">
      
      {/* ── [HERO - SPLIT LAYOUT] ───── */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-surface-container-low rounded-xl flex flex-col lg:flex-row overflow-hidden min-h-[600px] shadow-ambient">
          
          {/* Left Half (Text) */}
          <div className="flex-1 p-12 lg:p-20 flex flex-col justify-center">
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-secondary-container text-on-secondary-container label-md shadow-sm w-max">
              NEW VITALITY COLLECTION
            </div>
            
            <h1 className="display-lg leading-[0.9] tracking-tighter mb-8 text-primary">
              <span className="block mb-2 font-sans font-black">JUICY</span>
              <span className="text-secondary font-serif italic block font-normal text-[1.1em]">RADIANCE.</span>
            </h1>
            
            <p className="text-[15px] text-on-background/60 font-medium mb-10 max-w-sm leading-relaxed">
              Transform your skin with botanical power. Our Guava-infused formula delivers a high-energy glow that lasts all day. No fillers, just pure vitality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#products" className="px-8 py-4 bg-primary text-on-primary font-bold rounded-full text-center hover:bg-primary-container hover:text-on-surface transition-organic shadow-ambient text-[13px] tracking-wide">
                Shop Collection
              </Link>
              <Link href="/science" className="px-8 py-4 bg-secondary-container text-on-secondary-container font-bold rounded-full text-center hover:bg-secondary-fixed-dim transition-organic shadow-float text-[13px] tracking-wide">
                The Science
              </Link>
            </div>
          </div>

          {/* Right Half (Image) */}
          <div className="flex-1 relative min-h-[400px] lg:min-h-full overflow-hidden group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-organic group-hover:scale-105"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")' }}
            />
            {/* Floating Review Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-10 left-10 bg-surface-container-lowest rounded-md p-6 shadow-ambient max-w-[240px]"
            >
              <div className="flex gap-1 mb-3">
                {[1,2,3,4,5].map(star => <span key={star} className="text-secondary text-[12px]">★</span>)}
              </div>
              <p className="font-sans font-bold text-on-background text-[14px] leading-tight mb-3">"Best serum I've ever used."</p>
              <p className="label-md text-on-background/50">— Sarah J.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── [DAILY ESSENTIALS PRODUCT GRID] ──────────────────────────── */}
      <section id="products" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="headline-lg text-primary mb-2 tracking-tight">Our Daily Essentials</h2>
            <p className="text-[14px] text-on-background/60 font-medium">Clean, effective, and bursting with flavor.</p>
          </div>
          <div className="hidden md:flex gap-3">
            <button className="w-10 h-10 rounded-full ghost-border flex items-center justify-center hover:bg-surface-container-high transition-organic">
              <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button className="w-10 h-10 rounded-full ghost-border flex items-center justify-center hover:bg-surface-container-high transition-organic">
              <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div 
              key={product.id} 
              className="bg-surface-container-lowest rounded-xl p-5 shadow-float flex flex-col group overflow-hidden ghost-border"
            >
              {/* Image Container with Custom BG */}
              <div 
                className="w-full h-[240px] rounded-md relative overflow-hidden mb-6 flex items-center justify-center shadow-inner group-hover:scale-[1.03] transition-organic"
                style={{ backgroundColor: product.bg }}
              >
                {product.badge && (
                  <div className={`absolute top-4 left-4 z-10 ${product.badgeColor} label-md px-3 py-1.5 rounded-full shadow-md`}>
                    {product.badge}
                  </div>
                )}
                <div 
                  className="w-[80%] h-[80%] bg-contain bg-no-repeat bg-center"
                  style={{ backgroundImage: `url("${product.img}")` }}
                />
              </div>
              
              <div className="px-2 flex-grow flex flex-col relative">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-[17px] font-sans font-bold text-on-background tracking-tight leading-tight pr-4">{product.name}</h3>
                  <span className="text-[15px] font-bold text-on-background/50 mt-0.5">{product.price}</span>
                </div>
                
                <div className="flex items-center gap-1 mb-4 text-secondary">
                  <span className="text-[12px]">★</span>
                  <span className="text-[11px] font-bold">{product.rating}</span>
                  <span className="text-[11px] text-on-background/40 font-bold ml-1">({product.reviews})</span>
                </div>
                
                <p className="text-[12px] text-on-background/60 font-medium leading-relaxed mb-8">{product.desc}</p>

                <div className="mt-auto">
                  <button className="w-full h-[48px] bg-surface-container-high text-primary rounded-full flex items-center justify-center gap-2 text-[13px] font-bold hover:bg-primary z-10 hover:text-on-primary transition-organic shadow-sm relative overflow-hidden group/btn">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                      Add to Cart
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── [PINK GUAVA FEATURE SECTION] ─────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row min-h-[500px] rounded-xl overflow-hidden shadow-ambient-lg">
          
          {/* Left Half */}
          <div className="flex-1 bg-surface-container-low p-16 lg:p-24 flex flex-col justify-center">
            <h2 className="headline-lg text-primary tracking-tight mb-2">
              THE POWER OF
            </h2>
            <h2 className="text-[56px] md:text-[64px] font-serif italic text-secondary leading-none mb-12">
              PINK GUAVA.
            </h2>

            <ul className="space-y-8">
              {[
                { title: 'Antioxidant Rich', desc: 'Guava contains 4x more Vitamin C than oranges, shielding skin from environmental stress.' },
                { title: 'Instant Hydration', desc: 'Naturally occurring minerals lock in moisture for a plump, juicy finish.' },
                { title: 'Pore Refining', desc: 'Gentle tannins in the fruit help tighten pores and smooth skin texture.' }
              ].map(item => (
                <li key={item.title} className="flex gap-5">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-on-primary flex-shrink-0 shadow-md">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-primary tracking-tight mb-1.5">{item.title}</h4>
                    <p className="text-[14px] text-on-background/70 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Half */}
          <div className="flex-1 relative min-h-[400px] overflow-hidden group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-organic group-hover:scale-105"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")' }}
            />
          </div>

        </div>
      </section>

      {/* ── [JOIN THE GLOW SQUAD BANNER] ─────────────────────────────── */}
      <section className="py-24 px-6 max-w-6xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-primary to-primary-container rounded-xl p-16 md:p-24 text-center shadow-ambient-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-surface-container-lowest/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          
          <div className="relative z-10 max-w-lg mx-auto">
            <h2 className="headline-lg text-on-primary mb-6 tracking-tight">Join the Glow Squad</h2>
            <p className="text-on-primary/80 text-[14px] mb-12 mx-auto font-medium">
              Get exclusive early access to product drops and 15% off your first order.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 justify-center items-center" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full sm:flex-1 h-[56px] bg-inverse-surface/10 border border-outline-variant/30 rounded-full px-8 text-on-primary text-[14px] font-bold placeholder:text-on-primary/40 focus:outline-none focus:bg-inverse-surface/20 focus:border-outline-variant/50 transition-organic shadow-inner"
              />
              <button className="w-full sm:w-auto h-[56px] px-10 bg-surface-container-lowest text-primary rounded-full font-bold text-[13px] hover:scale-105 transition-organic shadow-ambient">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── [FOOTER] ─────────────────────────────────────────────────── */}
      <footer className="bg-surface pt-12 pb-12 px-6">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div>
            <img src="/logo.png" alt="Plix Logo" className="h-8 w-auto mb-6 object-contain" />
            <p className="text-[13px] text-on-background/50 leading-relaxed max-w-[200px] mb-8 font-medium">Empowering your wellness journey through juicy, high-impact botanical science.</p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-surface-container-high ghost-border flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-organic cursor-pointer shadow-sm text-xs font-bold">IG</div>
              <div className="w-8 h-8 rounded-full bg-surface-container-high ghost-border flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-organic cursor-pointer shadow-sm text-xs font-bold">TT</div>
              <div className="w-8 h-8 rounded-full bg-surface-container-high ghost-border flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-organic cursor-pointer shadow-sm text-xs font-bold">FB</div>
            </div>
          </div>
          <div>
            <h4 className="label-md text-primary mb-6 border-b border-outline-variant/20 pb-4">Shop</h4>
            <ul className="space-y-4 text-[13px] text-on-background/60 font-medium">
              <li><Link href="#" className="hover:text-primary transition-organic">Skincare</Link></li>
              <li><Link href="#" className="hover:text-primary transition-organic">Nutrition</Link></li>
              <li><Link href="#" className="hover:text-primary transition-organic">Bundles</Link></li>
              <li><Link href="#" className="hover:text-primary transition-organic">New Arrivals</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="label-md text-primary mb-6 border-b border-outline-variant/20 pb-4">Support</h4>
            <ul className="space-y-4 text-[13px] text-on-background/60 font-medium">
              <li><Link href="#" className="hover:text-primary transition-organic">Shipping Info</Link></li>
              <li><Link href="#" className="hover:text-primary transition-organic">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-organic">Wholesale</Link></li>
              <li><Link href="#" className="hover:text-primary transition-organic">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="label-md text-primary mb-6 border-b border-outline-variant/20 pb-4">Legal</h4>
            <ul className="space-y-4 text-[13px] text-on-background/60 font-medium">
              <li><Link href="#" className="hover:text-primary transition-organic">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-organic">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center md:text-left pt-8 max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-center text-[11px] font-bold text-on-background/30 md:border-t md:border-outline-variant/20">
          <p>© {new Date().getFullYear()} Plix Life.</p>
        </div>
      </footer>

    </div>
  );
}
