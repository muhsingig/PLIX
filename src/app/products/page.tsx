'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS, CATEGORIES, Category, CONCERNS, Concern } from '@/lib/products';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [activeConcern, setActiveConcern]   = useState<Concern>('All');
  const [priceRange, setPriceRange]           = useState(1000);

  const filtered = PRODUCTS.filter(p => {
    const catMatch    = activeCategory === 'All' || p.category === activeCategory;
    const concernMatch = activeConcern === 'All'  || p.concern  === activeConcern;
    const priceMatch   = p.price <= priceRange;
    return catMatch && concernMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-[var(--smoke)] flex flex-col">
      
      {/* ── Hero Band ──────────────────────────────────────────────── */}
      <section className="h-[280px] md:h-[320px] bg-[var(--g-900)] relative overflow-hidden flex items-center mt-[-64px] pt-[64px]">
        {/* Abstract Organic Blob */}
        <div 
          className="absolute top-[-10%] right-[-5%] w-[50%] h-[120%] bg-[var(--g-700)] opacity-60"
          style={{ clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%, 15% 50%)' }}
        />
        
        <div className="max-w-[1280px] mx-auto w-full px-[var(--s4)] md:px-[var(--s6)] relative z-10 flex items-center justify-between">
          <div className="max-w-2xl">
            <p className="label text-[var(--g-300)] mb-[var(--s2)]">The Plant Fix</p>
            <h1 className="display text-white mb-[var(--s3)]">Skin. Hair.<br/>Wellness.</h1>
            <p className="body-lg text-white/50">Every formula starts with a real plant. Science does the rest.</p>
          </div>
          
          {/* Decorative SVG Icons floating in the blob (hidden on mobile) */}
          <div className="hidden lg:block w-48 h-48 relative">
             <div className="absolute top-0 right-0 w-24 h-24 border-2 border-white/10 rounded-[var(--r-xl)] rotate-12" />
             <div className="absolute bottom-4 left-4 w-32 h-32 border-2 border-white/5 rounded-full" />
          </div>
        </div>
      </section>

      {/* ── Filter + Product Layout ─────────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:grid lg:grid-template-columns-[240px_1fr]">
        
        {/* ── Sidebar Filters ────────────────────────────────────────── */}
        <aside className="lg:sticky lg:top-[88px] h-fit lg:h-[calc(100vh-88px)] lg:overflow-y-auto p-[var(--s4)] lg:p-[var(--s6)] bg-[var(--smoke)] lg:bg-transparent lg:border-r border-black/5">
          <h3 className="h3 mb-[var(--s5)]">Filters</h3>
          
          {/* Category Group */}
          <div className="mb-[var(--s6)]">
            <p className="label text-black/40 mb-[var(--s3)]">Category</p>
            <div className="flex flex-wrap lg:flex-col gap-[var(--s2)]">
              {CATEGORIES.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    text-left px-3 lg:px-0 py-1 rounded-full lg:rounded-none text-[var(--body)] transition-all duration-300
                    ${activeCategory === cat 
                      ? 'text-[var(--g-700)] font-bold lg:border-l-[3px] lg:border-[var(--p-300)] lg:pl-3 bg-[var(--g-100)] lg:bg-transparent' 
                      : 'text-black/50 hover:text-[var(--g-700)]'
                    }
                  `}
                >
                  {cat === 'All' ? 'All Products' : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="h-px bg-black/5 mb-[var(--s6)]" />

          {/* Concern Group */}
          <div className="mb-[var(--s6)]">
            <p className="label text-black/40 mb-[var(--s3)]">Concern</p>
            <div className="flex flex-wrap lg:flex-col gap-[var(--s2)]">
              {CONCERNS.map(con => (
                <button 
                  key={con}
                  onClick={() => setActiveConcern(con)}
                  className={`
                    text-left px-3 lg:px-0 py-1 rounded-full lg:rounded-none text-[var(--body)] transition-all duration-300
                    ${activeConcern === con 
                      ? 'text-[var(--g-700)] font-bold lg:border-l-[3px] lg:border-[var(--p-300)] lg:pl-3 bg-[var(--g-100)] lg:bg-transparent' 
                      : 'text-black/50 hover:text-[var(--g-700)]'
                    }
                  `}
                >
                  {con === 'All' ? 'Every Concern' : con}
                </button>
              ))}
            </div>
          </div>

          <div className="h-px bg-black/5 mb-[var(--s6)]" />

          {/* Price Range */}
          <div>
            <div className="flex justify-between items-center mb-[var(--s3)]">
              <p className="label text-black/40">Price</p>
              <p className="micro font-bold text-[var(--g-700)]">Up to ₹{priceRange}</p>
            </div>
            <input 
              type="range" min="0" max="1000" step="50"
              value={priceRange} onChange={(e) => setPriceRange(parseInt(e.target.value))}
              className="w-full h-1 bg-[var(--g-300)] rounded-full appearance-none cursor-pointer accent-[var(--p-300)]"
            />
            <div className="flex justify-between mt-[var(--s1)]">
              <span className="micro text-black/30">₹0</span>
              <span className="micro text-black/30">₹1000</span>
            </div>
          </div>
        </aside>

        {/* ── Main Product Grid ──────────────────────────────────────── */}
        <main className="p-[var(--s4)] md:p-[var(--s6)] lg:p-[var(--s8)]">
          <div className="flex justify-between items-end mb-[var(--s5)]">
            <div>
               <p className="micro text-black/40 font-bold uppercase tracking-wider">Results</p>
               <h2 className="h2">{filtered.length} Botanical Fixes</h2>
            </div>
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[var(--s4)]"
            >
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filtered.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="py-[var(--s8)] text-center flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-[var(--g-100)] rounded-full flex items-center justify-center mb-[var(--s4)]">
                <span className="text-3xl">🌿</span>
              </div>
              <p className="h3">No matches found</p>
              <p className="body text-black/40 mt-[var(--s2)] max-w-xs">Try adjusting your filters to find your perfect plant fix.</p>
              <button 
                onClick={() => { setActiveCategory('All'); setActiveConcern('All'); setPriceRange(1000); }}
                className="mt-[var(--s4)] text-[var(--p-500)] font-bold underline underline-offset-4"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}
