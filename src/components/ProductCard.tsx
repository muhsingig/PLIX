'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/lib/products';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const badgeColors: Record<string, string> = {
    'BESTSELLER': 'bg-[var(--g-700)] text-white',
    'TOP RATED':  'bg-[var(--p-300)] text-[var(--p-700)]',
    'NEW':        'bg-[var(--g-300)] text-[var(--g-900)]',
    'VIRAL':      'bg-[var(--p-500)] text-white',
    '40% OFF':    'bg-[var(--ink)] text-white',
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
      className="bg-[var(--cloud)] rounded-[var(--r-lg)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-[var(--ms-std)] ease-[var(--ease)] overflow-hidden group flex flex-col h-full"
    >
      {/* ── Image Area ──────────────────────────────────────────────── */}
      <div 
        className="relative h-[220px] transition-std flex items-center justify-center p-[var(--s4)]"
        style={{ backgroundColor: `${product.accentColor}1A` }} // 10% opacity hex
      >
        {product.badge && (
          <span className={`absolute top-[var(--s2)] left-[var(--s2)] rounded-full px-3 py-1 label ${badgeColors[product.badge] || 'bg-[var(--g-300)]'}`}>
            {product.badge}
          </span>
        )}
        
        {/* Placeholder Glyph */}
        <div 
          className="text-7xl opacity-40 group-hover:scale-110 transition-std select-none"
          style={{ color: product.accentColor }}
        >
          {product.category.includes('Serum') ? '💧' : 
           product.category.includes('Moist') ? '🍃' : 
           product.category.includes('Clean') ? '🫧' : '✨'}
        </div>
      </div>

      {/* ── Content Area ────────────────────────────────────────────── */}
      <div className="p-[var(--s3)] flex flex-col flex-grow">
        <h3 className="h3 min-h-[56px] line-clamp-2">{product.name}</h3>
        <p className="micro text-[var(--g-700)] font-bold uppercase tracking-wider mt-[var(--s1)]">{product.concern}</p>
        
        {/* Ingredient Pills */}
        <div className="flex flex-wrap gap-1.5 mt-[var(--s3)]">
          {product.ingredients.slice(0, 3).map(ing => (
            <span key={ing} className="micro px-2.5 py-1 border border-[var(--g-700)]/20 rounded-full text-[var(--g-700)] bg-[var(--smoke)]/50">
              {ing}
            </span>
          ))}
        </div>

        {/* Price Row */}
        <div className="mt-auto pt-[var(--s4)] flex items-baseline gap-[var(--s2)]">
          <span className="h3 font-black">₹{product.price}</span>
          <span className="text-black/30 line-through text-[var(--body)]">₹{product.originalPrice}</span>
          <span className="micro font-bold px-2 py-0.5 bg-[var(--g-100)] text-[var(--g-700)] rounded-full">
            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
          </span>
        </div>

        {/* Action Button */}
        <button 
          onClick={handleAdd}
          disabled={isAdded}
          className={`
            w-full h-12 mt-[var(--s3)] rounded-[var(--r-md)] text-[var(--body)] font-bold transition-all duration-[var(--ms-std)]
            ${isAdded 
              ? 'bg-[var(--p-300)] text-[var(--p-700)]' 
              : 'bg-[var(--g-700)] text-white hover:bg-[var(--g-500)] hover:translate-y-[-1px]'
            }
          `}
        >
          {isAdded ? '✓ Added' : 'Add to Cart'}
        </button>
      </div>
    </motion.div>
  );
}
