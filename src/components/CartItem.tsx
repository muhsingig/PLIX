'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CartItem as CartItemType } from '@/context/CartContext';
import { useCart } from '@/context/CartContext';

export default function CartItem({ item }: { item: CartItemType }) {
  const { removeItem, updateQuantity } = useCart();

  return (
    <motion.div
      layout
      exit={{ x: -30, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-4 py-4 border-b border-[var(--plix-sage)]"
    >
      {/* Image placeholder */}
      <div className="w-20 h-20 rounded-xl flex-shrink-0 flex items-center justify-center text-3xl"
        style={{ backgroundColor: item.accentColor + '30' }}>
        {item.category === 'Serums' ? '💧' :
         item.category === 'Moisturizers' ? '🌿' :
         item.category === 'Cleansers' ? '🫧' :
         item.category === 'Sunscreen' ? '☀️' :
         item.category === 'Hair Care' ? '🌱' : '✨'}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm text-[var(--plix-ink)] leading-snug truncate">{item.name}</p>
        <p className="text-xs text-[var(--plix-muted)] mt-0.5">{item.category}</p>
        <div className="flex gap-1 mt-1 flex-wrap">
          {item.ingredients.map(ing => (
            <span key={ing} className="text-[10px] bg-[var(--plix-sage)] rounded-full px-2 py-0.5">{ing}</span>
          ))}
        </div>
      </div>

      {/* Qty + price + remove */}
      <div className="flex flex-col items-end gap-2">
        <p className="font-bold text-[var(--plix-green)] text-sm">₹{item.price * item.quantity}</p>

        {/* Stepper */}
        <div className="flex items-center border border-gray-200 rounded-full overflow-hidden text-sm">
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="w-8 h-8 flex items-center justify-center hover:bg-[var(--plix-sage)] transition-colors font-bold">
            −
          </button>
          <span className="w-7 text-center font-semibold">{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="w-8 h-8 flex items-center justify-center hover:bg-[var(--plix-sage)] transition-colors font-bold">
            +
          </button>
        </div>

        {/* Remove */}
        <button onClick={() => removeItem(item.id)}
          className="text-[var(--plix-pink)] hover:text-red-500 transition-colors text-xs font-medium">
          Remove
        </button>
      </div>
    </motion.div>
  );
}
