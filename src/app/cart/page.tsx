'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import CartItem from '@/components/CartItem';
import { useCart } from '@/context/CartContext';
import { PRODUCTS } from '@/lib/products';

export default function CartPage() {
  const { items, subtotal, savings, totalItems, addItem } = useCart();

  const deliveryFee = subtotal >= 499 ? 0 : 49;
  const total = subtotal + deliveryFee;

  // Upsell picks — 2 products not already in cart
  const cartIds = items.map(i => i.id);
  const upsells = PRODUCTS.filter(p => !cartIds.includes(p.id)).slice(0, 2);

  return (
    <div className="min-h-screen bg-[var(--plix-sage)] py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--plix-ink)] mb-8">Your Cart</h1>

        {items.length === 0 ? (
          /* Empty state */
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-32 text-center">
            <div className="text-7xl mb-6">🌿</div>
            <h2 className="text-2xl font-bold text-[var(--plix-ink)] mb-2">Your cart is empty</h2>
            <p className="text-[var(--plix-muted)] mb-8">Discover your perfect plant fix</p>
            <Link href="/products"
              className="bg-[var(--plix-green)] text-white rounded-full px-8 py-3 font-semibold hover:bg-[var(--plix-pink)] transition-colors duration-300">
              Browse Products
            </Link>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-5 gap-8">

            {/* ── Left: Cart Items ── */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-xl font-bold text-[var(--plix-ink)]">Cart</h2>
                  <span className="bg-[var(--plix-pink)] text-white rounded-full w-6 h-6 text-xs font-bold flex items-center justify-center">
                    {totalItems}
                  </span>
                </div>

                <AnimatePresence>
                  {items.map(item => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* ── Right: Order Summary ── */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-6 shadow-sm sticky top-24">
                <h2 className="text-xl font-bold text-[var(--plix-ink)] mb-6">Order Summary</h2>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[var(--plix-muted)]">Subtotal</span>
                    <span className="font-medium">₹{subtotal}</span>
                  </div>
                  {savings > 0 && (
                    <div className="flex justify-between">
                      <span className="text-[var(--plix-muted)]">You Save</span>
                      <span className="font-semibold text-[var(--plix-green)]">− ₹{savings}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-[var(--plix-muted)]">Delivery</span>
                    <span className="font-semibold text-[var(--plix-green)]">
                      {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                    </span>
                  </div>
                  <div className="border-t border-[var(--plix-sage)] pt-3 flex justify-between">
                    <span className="font-bold text-[var(--plix-ink)] text-base">Total</span>
                    <span className="font-bold text-2xl text-[var(--plix-ink)]">₹{total}</span>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-3 mt-5 text-xs text-[var(--plix-muted)]">
                  <span>🔒 Secure Checkout</span>
                  <span>🚚 Free above ₹499</span>
                  <span>↩ Easy Returns</span>
                </div>

                {/* Checkout CTA */}
                <button
                  className="w-full mt-6 py-4 rounded-full font-semibold text-lg text-white transition-all duration-300"
                  style={{ backgroundColor: 'var(--plix-green)' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--plix-pink)')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--plix-green)')}
                >
                  Proceed to Checkout
                </button>

                <Link href="/products"
                  className="block text-center mt-3 text-sm text-[var(--plix-pink)] hover:underline">
                  Continue Shopping
                </Link>

                {/* Upsell */}
                {upsells.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-[var(--plix-sage)]">
                    <p className="text-xs font-semibold text-[var(--plix-muted)] uppercase tracking-widest mb-4">Complete the Routine</p>
                    <div className="flex flex-col gap-3">
                      {upsells.map(p => (
                        <div key={p.id} className="flex items-center gap-3">
                          <div className="w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center text-2xl"
                            style={{ backgroundColor: p.accentColor + '20' }}>
                            {p.category === 'Serums' ? '💧' : p.category === 'Moisturizers' ? '🌿' : '✨'}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold truncate">{p.name}</p>
                            <p className="text-xs text-[var(--plix-muted)]">₹{p.price}</p>
                          </div>
                          <button onClick={() => addItem(p)}
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0"
                            style={{ backgroundColor: 'var(--plix-pink)' }}>
                            +
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
