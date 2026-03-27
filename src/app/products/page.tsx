'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import ProductFilters from '@/components/ProductFilters';
import { PRODUCTS, CATEGORIES, Category } from '@/lib/products';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function ProductsPage() {
  const [active, setActive] = useState<Category>('All');

  const filtered = active === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === active);

  return (
    <div className="min-h-screen bg-[var(--plix-sage)]">

      {/* Hero Banner */}
      <section className="bg-[var(--plix-green)] py-16 px-6 text-center">
        <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            The Plant Fix.<br />For Every Skin.
          </h1>
          <p className="text-white/60 text-lg mb-8">
            Clean-label. Vegan. Non-GMO. Dermatologically tested.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['✓ 10,000+ Reviews', '✓ Clean Label Certified', '✓ Cruelty-Free'].map(b => (
              <span key={b} className="bg-[var(--plix-pink)] text-white text-xs font-bold tracking-wide px-4 py-1.5 rounded-full">
                {b}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Filters */}
      <ProductFilters active={active} onChange={setActive} />

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <motion.p
          key={active}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-sm text-[var(--plix-muted)] mb-6 font-medium"
        >
          Showing {filtered.length} product{filtered.length !== 1 ? 's' : ''}
          {active !== 'All' ? ` in ${active}` : ''}
        </motion.p>

        <AnimatePresence mode="sync">
          <motion.div
            key={active}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
