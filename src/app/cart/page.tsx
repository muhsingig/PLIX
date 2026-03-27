'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function CartPage() {
  const [quantities, setQuantities] = useState({ guava: 1, dewy: 1 });

  const updateQuantity = (item: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [item]: Math.max(1, prev[item as keyof typeof prev] + delta)
    }));
  };

  return (
    <div className="bg-[var(--smoke)] min-h-screen pt-32 pb-20 font-sans text-[var(--ink)]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* ── [BASKET - LEFT COLUMN] ──────────────────────────────────── */}
        <div className="col-span-1 lg:col-span-7 xl:col-span-8">
          <div className="flex justify-between items-end border-b border-black/10 pb-6 mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[var(--ink)]">Your Basket</h1>
            <span className="text-sm font-bold text-black/50 uppercase tracking-widest">2 Items</span>
          </div>

          <div className="flex flex-col gap-6 mb-12">
            
            {/* Product Card 1 */}
            <div className="bg-[var(--cloud)] rounded-[24px] p-4 flex flex-col sm:flex-row gap-6 shadow-sm border border-black/5 items-center sm:items-stretch">
              {/* Thumbnail */}
              <div 
                className="w-32 h-32 rounded-2xl bg-cover bg-center flex-shrink-0"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80")' }}
              />
              
              {/* Info & Actions */}
              <div className="flex-1 flex flex-col justify-between py-2 w-full">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold">Guava Glow Serum</h3>
                    <p className="text-sm text-black/50">Brightening & Radiant Hydration</p>
                  </div>
                  <div className="text-xl font-bold text-[var(--p-700)]">$34.00</div>
                </div>

                <div className="flex justify-between items-center mt-4 sm:mt-0">
                  {/* Quantity Pill */}
                  <div className="flex items-center bg-[var(--smoke)] rounded-full px-2 py-1 border border-black/5">
                    <button 
                      onClick={() => updateQuantity('guava', -1)}
                      className="w-8 h-8 rounded-full flex justify-center items-center hover:bg-white text-black/50 transition-colors"
                    >
                      –
                    </button>
                    <span className="w-8 text-center text-sm font-bold">{quantities.guava}</span>
                    <button 
                      onClick={() => updateQuantity('guava', 1)}
                      className="w-8 h-8 rounded-full flex justify-center items-center hover:bg-white transition-colors"
                    >
                      +
                    </button>
                  </div>
                  
                  {/* Remove */}
                  <button className="text-xs font-bold text-[var(--p-700)] hover:text-[var(--p-500)] underline uppercase tracking-widest flex items-center gap-1 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    Remove
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-[var(--cloud)] rounded-[24px] p-4 flex flex-col sm:flex-row gap-6 shadow-sm border border-black/5 items-center sm:items-stretch">
              <div 
                className="w-32 h-32 rounded-2xl bg-cover bg-center flex-shrink-0"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80")' }}
              />
              <div className="flex-1 flex flex-col justify-between py-2 w-full">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold">Dewy Moisturizer</h3>
                    <p className="text-sm text-black/50">Plumping Hyaluronic Complex</p>
                  </div>
                  <div className="text-xl font-bold text-[var(--p-700)]">$28.00</div>
                </div>

                <div className="flex justify-between items-center mt-4 sm:mt-0">
                  <div className="flex items-center bg-[var(--smoke)] rounded-full px-2 py-1 border border-black/5">
                    <button 
                      onClick={() => updateQuantity('dewy', -1)}
                      className="w-8 h-8 rounded-full flex justify-center items-center hover:bg-white text-black/50 transition-colors"
                    >
                      –
                    </button>
                    <span className="w-8 text-center text-sm font-bold">{quantities.dewy}</span>
                    <button 
                      onClick={() => updateQuantity('dewy', 1)}
                      className="w-8 h-8 rounded-full flex justify-center items-center hover:bg-white transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <button className="text-xs font-bold text-[var(--p-700)] hover:text-[var(--p-500)] underline uppercase tracking-widest flex items-center gap-1 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    Remove
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* ── [UPSELL + SHIPPING ROW] ──────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card A: Upsell */}
            <div className="bg-[var(--g-500)] rounded-[24px] p-6 text-white shadow-lg relative overflow-hidden flex flex-col justify-between items-start min-h-[160px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-12 translate-x-12" />
              <div className="z-10 bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
                Special Offer
              </div>
              <div className="z-10">
                <h4 className="font-serif text-2xl font-bold mb-4">Add a Jade Roller for 50% off?</h4>
                <button className="bg-[var(--g-900)] text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[var(--ink)] transition-colors shadow-sm">
                  Add for $12
                </button>
              </div>
            </div>

            {/* Card B: Shipping Progress */}
            <div className="bg-[var(--cloud)] rounded-[24px] p-6 shadow-sm border-2 border-dashed border-[var(--g-300)] flex flex-col justify-center min-h-[160px]">
              <h4 className="text-[var(--g-500)] font-bold text-lg mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                Free Shipping Progress
              </h4>
              <div className="w-full bg-[var(--smoke)] h-3 rounded-full mb-3 overflow-hidden">
                <div className="bg-gradient-to-r from-[var(--p-300)] to-[var(--g-500)] h-full w-[65%] rounded-full" />
              </div>
              <p className="text-sm font-medium text-black/60">
                Only <strong className="text-[var(--ink)]">$18.00</strong> more to unlock free delivery!
              </p>
            </div>
          </div>
        </div>

        {/* ── [ORDER SUMMARY - RIGHT SIDEBAR] ────────────────────────── */}
        <div className="col-span-1 lg:col-span-5 xl:col-span-4">
          <div className="bg-[#FDE8E8] rounded-[32px] p-8 shadow-sm lg:sticky lg:top-32 border border-[#F4A0A8]/20">
            <h2 className="text-2xl font-serif font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 text-sm font-medium">
              <div className="flex justify-between text-black/70">
                <span>Subtotal</span>
                <span>$62.00</span>
              </div>
              <div className="flex justify-between text-black/70">
                <span>Estimated Shipping</span>
                <span>$5.99</span>
              </div>
              <div className="flex justify-between text-black/70">
                <span>Estimated Tax</span>
                <span>$0.00</span>
              </div>
            </div>
            
            <div className="border-t border-black/10 my-6" />

            <div className="mb-6">
              <label className="flex items-center gap-2 text-xs font-bold text-black/50 uppercase tracking-widest mb-3">
                <svg className="w-4 h-4 text-[var(--g-500)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
                Promo Code
              </label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  defaultValue="GLOW20" 
                  className="w-full bg-white rounded-full px-4 text-sm font-bold text-black/70 border border-[#F4A0A8]/40 focus:outline-none focus:ring-2 focus:ring-[var(--p-300)]"
                />
                <button className="bg-[var(--p-700)] text-white px-6 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[var(--p-500)] transition-colors">
                  Apply
                </button>
              </div>
            </div>

            <div className="border-t border-black/10 my-6" />

            <div className="flex justify-between items-end mb-2">
              <span className="font-bold">Total</span>
              <span className="text-4xl font-serif font-bold text-[var(--ink)]">$67.99</span>
            </div>
            <p className="text-[10px] font-bold text-black/40 text-right mb-8">
              OR 4 INTEREST-FREE PAYMENTS OF $17.00
            </p>

            <button className="w-full h-14 bg-[var(--p-700)] text-white rounded-[20px] font-bold text-lg hover:bg-[#5C1B34] hover:-translate-y-1 transition-all shadow-[var(--shadow-card)] flex items-center justify-center gap-2 mb-6">
              Proceed to Checkout <span>→</span>
            </button>

            {/* Payment Icons */}
            <div className="flex justify-center gap-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-12 h-8 bg-white rounded-md flex items-center justify-center border border-black/5 shadow-sm">
                  <span className="text-black/20 text-xs">◆</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ── [FOOTER] ─────────────────────────────────────────────────── */}
      <footer className="max-w-7xl mx-auto px-6 mt-32 border-t border-black/10 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
            <h2 className="text-2xl font-black text-[var(--p-700)] tracking-tighter mb-2">PLIX</h2>
            <p className="text-xs text-black/50 uppercase tracking-widest font-bold">Radiant Botanical Wellness</p>
          </div>
          <div>
            <h4 className="font-bold text-[var(--ink)] uppercase text-xs tracking-widest mb-4">Explore</h4>
            <ul className="space-y-3 text-sm text-black/60 font-medium">
              <li><Link href="/shop" className="hover:text-[var(--p-700)]">Shop All</Link></li>
              <li><Link href="/ingredients" className="hover:text-[var(--p-700)]">Ingredients</Link></li>
              <li><Link href="/about" className="hover:text-[var(--p-700)]">Our Story</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[var(--ink)] uppercase text-xs tracking-widest mb-4">Support</h4>
            <ul className="space-y-3 text-sm text-black/60 font-medium">
              <li><Link href="#" className="hover:text-[var(--p-700)]">Shipping</Link></li>
              <li><Link href="#" className="hover:text-[var(--p-700)]">Returns</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[var(--ink)] uppercase text-xs tracking-widest mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-black/60 font-medium">
              <li><Link href="#" className="hover:text-[var(--p-700)]">Privacy</Link></li>
              <li><Link href="#" className="hover:text-[var(--p-700)]">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs font-bold text-black/30 uppercase tracking-widest pb-8">
          © {new Date().getFullYear()} Plix Life. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
