'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CATEGORIES, Category } from '@/lib/products';

interface Props {
  active: Category;
  onChange: (cat: Category) => void;
}

export default function ProductFilters({ active, onChange }: Props) {
  return (
    <div className="sticky top-16 z-40 bg-white border-b border-pink-50 py-3 px-4 md:px-12">
      <div className="flex gap-2 overflow-x-auto no-scrollbar max-w-7xl mx-auto">
        {CATEGORIES.map(cat => {
          const isActive = cat === active;
          return (
            <motion.button
              key={cat}
              whileTap={{ scale: 0.95 }}
              onClick={() => onChange(cat)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 border ${
                isActive
                  ? 'bg-[var(--plix-pink)] text-white border-[var(--plix-pink)]'
                  : 'bg-white text-[var(--plix-pink)] border-[var(--plix-pink)] hover:bg-[var(--plix-pink)] hover:text-white'
              }`}
            >
              {cat}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
