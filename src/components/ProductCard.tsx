'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/lib/products';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
    >
      {/* Image area */}
      <div className="relative aspect-square rounded-xl m-3 mb-0 flex items-center justify-center"
        style={{ backgroundColor: product.accentColor + '18' }}>
        {product.badge && (
          <span className="absolute top-3 left-3 text-xs font-bold tracking-wide px-3 py-1 rounded-full text-white z-10"
            style={{ backgroundColor: product.badgeColor || product.accentColor }}>
            {product.badge}
          </span>
        )}
        {/* Placeholder icon */}
        <div className="text-6xl select-none opacity-30" style={{ color: product.accentColor }}>
          {product.category === 'Serums' ? '💧' :
           product.category === 'Moisturizers' ? '🌿' :
           product.category === 'Cleansers' ? '🫧' :
           product.category === 'Sunscreen' ? '☀️' :
           product.category === 'Hair Care' ? '🌱' : '✨'}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-[10px] font-medium tracking-widest uppercase text-[var(--plix-muted)] mb-1">
          {product.concern}
        </p>
        <h3 className="font-semibold text-[var(--plix-ink)] text-sm leading-snug mb-2">
          {product.name}
        </h3>

        {/* Ingredient pills */}
        <div className="flex flex-wrap gap-1 mb-3">
          {product.ingredients.slice(0, 3).map(ing => (
            <span key={ing} className="text-[10px] bg-[var(--plix-sage)] text-[var(--plix-ink)] rounded-full px-2 py-0.5">
              {ing}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mt-auto mb-3">
          <span className="text-lg font-bold text-[var(--plix-ink)]">₹{product.price}</span>
          <span className="text-sm text-[var(--plix-muted)] line-through">₹{product.originalPrice}</span>
          <span className="text-xs font-semibold text-[var(--plix-green)]">
            {Math.round((1 - product.price / product.originalPrice) * 100)}% off
          </span>
        </div>

        {/* CTA */}
        <button
          onClick={() => addItem(product)}
          className="w-full py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300"
          style={{ backgroundColor: 'var(--plix-green)' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--plix-pink)')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--plix-green)')}
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
