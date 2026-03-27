'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CartItem as ICartItem, useCart } from '@/context/CartContext';

export default function CartItem({ item }: { item: ICartItem }) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16, height: 0, marginTop: 0, marginBottom: 0, padding: 0 }}
      className="bg-[var(--cloud)] mb-0.5 border-b border-black/5 flex items-center gap-[var(--s3)] py-[var(--s4)]"
    >
      {/* Thumbnail */}
      <div 
        className="w-20 h-20 md:w-24 md:h-24 rounded-[var(--r-md)] flex items-center justify-center shrink-0 p-2"
        style={{ backgroundColor: `${item.accentColor}1A` }}
      >
        <span className="text-4xl select-none">{item.category.includes('Serum') ? '💧' : '🌱'}</span>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
         <h4 className="text-[var(--body)] font-bold text-[var(--ink)] truncate">{item.name}</h4>
         <p className="micro text-[var(--g-700)] font-bold uppercase tracking-wider mt-0.5">{item.category}</p>
         
         {/* Stepper */}
         <div className="flex items-center gap-[var(--s2)] mt-[var(--s2)] bg-[var(--smoke)] w-fit rounded-full p-1 border border-black/5">
            <button 
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-[var(--ink)] border border-black/10 hover:bg-red-50 hover:text-red-500 transition-colors font-bold"
            >
              −
            </button>
            <span className="text-sm font-black min-w-[20px] text-center">{item.quantity}</span>
            <button 
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="w-7 h-7 flex items-center justify-center rounded-full bg-[var(--g-700)] text-white hover:bg-[var(--g-500)] transition-colors font-bold"
            >
              +
            </button>
         </div>
      </div>

      {/* Price + Remove */}
      <div className="text-right">
         <p className="h3 text-[var(--ink)] mb-1">₹{item.price * item.quantity}</p>
         <button 
           onClick={() => removeItem(item.id)}
           className="micro font-bold text-black/30 hover:text-[var(--p-500)] transition-colors"
         >
           Remove ×
         </button>
      </div>
    </motion.div>
  );
}
