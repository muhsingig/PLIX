'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import CartItem from '@/components/CartItem';
import { PRODUCTS } from '@/lib/products';

export default function CartPage() {
  const { items, totalItems, subtotal, savings, clearCart } = useCart();
  const delivery = subtotal > 499 ? 0 : 49;
  const total = subtotal + delivery;

  // Upsell suggestions (random 2 not in cart)
  const cartIds = items.map(i => i.id);
  const upsells = PRODUCTS.filter(p => !cartIds.includes(p.id)).slice(0, 2);

  if (items.length === 0) {
    return (
      <div className="min-h-screen grid place-items-center bg-[var(--smoke)] pt-32 px-4 pb-20">
        <div className="text-center max-w-md">
           <div className="relative mb-[var(--s5)] inline-block">
              <div className="w-32 h-32 bg-[var(--g-100)] rounded-full animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center text-5xl">🌿</div>
           </div>
           <h1 className="h2 mb-[var(--s2)]">Your cart is empty</h1>
           <p className="body text-black/40 mb-[var(--s5)]">Find the botanical fix that’s right for your skin.</p>
           <Link 
             href="/products"
             className="inline-flex items-center h-14 px-[var(--s6)] bg-[var(--g-700)] text-white rounded-[var(--r-md)] font-bold hover:bg-[var(--g-500)] transition-all"
           >
             Browse Products →
           </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--smoke)] pt-32 pb-20 px-4">
      <div className="max-w-[900px] mx-auto">
        
        {/* ── Header ────────────────────────────────────────────────── */}
        <header className="flex justify-between items-baseline mb-[var(--s5)]">
           <div className="flex items-baseline gap-3">
              <h1 className="text-[40px] md:text-[64px] font-black tracking-[-0.04em]">Cart</h1>
              <span className="body-lg text-black/30 font-medium">({totalItems})</span>
           </div>
           <button 
             onClick={clearCart}
             className="micro text-[var(--p-500)] font-bold hover:underline transition-all"
           >
             Clear all
           </button>
        </header>

        {/* ── Items List ────────────────────────────────────────────── */}
        <div className="space-y-px">
           <AnimatePresence mode="popLayout">
              {items.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
           </AnimatePresence>
        </div>

        {/* ── Order Summary Block ────────────────────────────────────── */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
           className="mt-[var(--s6)] bg-[var(--cloud)] rounded-[var(--r-lg)] shadow-[var(--shadow-card)] p-[var(--s5)] md:p-[var(--s6)]"
        >
           <h3 className="h3 mb-[var(--s4)]">Summary</h3>
           
           <div className="space-y-[var(--s3)]">
              <div className="flex justify-between items-center text-[var(--body)] border-b border-black/5 pb-[var(--s2)]">
                 <span className="text-black/50">Subtotal</span>
                 <span className="font-semibold">₹{subtotal}</span>
              </div>
              <div className="flex justify-between items-center text-[var(--body)] border-b border-black/5 pb-[var(--s2)]">
                 <span className="text-black/50">You save</span>
                 <span className="font-bold text-[var(--g-700)]">−₹{savings}</span>
              </div>
              <div className="flex justify-between items-center text-[var(--body)] border-b border-black/5 pb-[var(--s2)]">
                 <span className="text-black/50">Delivery</span>
                 <span className="font-bold text-[var(--g-700)] uppercase tracking-wider micro">
                   {delivery === 0 ? 'Free' : `₹${delivery}`}
                 </span>
              </div>

              <div className="py-[var(--s3)] flex justify-between items-end">
                 <div>
                    <p className="label text-black/40">Total Amount</p>
                    <p className="h2 text-[var(--g-700)]">₹{total}</p>
                 </div>
                 <div className="flex gap-4 micro text-black/30 font-bold uppercase tracking-widest hidden md:flex">
                    <span>🔒 Secure</span>
                    <span>↩ Returns</span>
                 </div>
              </div>

              <button className="w-full h-16 bg-[var(--g-700)] text-white rounded-[var(--r-md)] text-lg font-bold hover:bg-[var(--g-500)] transition-all shadow-[var(--shadow-hover)] hover:translate-y-[-2px]">
                Proceed to Checkout →
              </button>
              
              <Link href="/products" className="block text-center text-[var(--body)] text-[var(--p-500)] font-medium hover:underline mt-[var(--s2)]">
                Continue shopping
              </Link>
           </div>
        </motion.div>

        {/* ── Upsell Strip ───────────────────────────────────────────── */}
        <div className="mt-[var(--s7)]">
           <p className="label text-black/40 mb-[var(--s3)]">You might also like</p>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--s3)]">
              {upsells.map(p => (
                <div key={p.id} className="bg-[var(--cloud)] rounded-[var(--r-md)] overflow-hidden shadow-sm flex items-center p-3 gap-4 border border-black/5 hover:border-[var(--p-300)] transition-colors">
                   <div 
                     className="w-16 h-16 rounded-[var(--r-sm)] flex items-center justify-center shrink-0"
                     style={{ backgroundColor: `${p.accentColor}1A` }}
                   >
                     {/* Placeholder icon */}
                     <span className="text-2xl">{p.category.includes('Serum') ? '💧' : '🌱'}</span>
                   </div>
                   <div className="flex-1 min-w-0">
                      <p className="micro font-bold text-[var(--ink)] truncate">{p.name}</p>
                      <p className="micro font-bold text-[var(--g-700)]">₹{p.price}</p>
                   </div>
                   <button 
                     onClick={() => useCart().addItem(p)}
                     className="w-8 h-8 rounded-full bg-[var(--p-300)] text-white flex items-center justify-center hover:bg-[var(--p-500)] transition-colors"
                   >
                     +
                   </button>
                </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
}
