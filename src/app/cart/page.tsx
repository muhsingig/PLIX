'use client';
import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  const shipping = subtotal > 500 ? 0 : 50; // Free shipping over ₹500
  const total = subtotal + shipping;

  return (
    <div className="bg-background min-h-screen font-body text-on-background pt-32 pb-24">
      <div className="max-w-[1100px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-8">
          <h1 className="display-lg text-primary tracking-tighter">Your Basket</h1>
          <span className="label-md text-on-background/40 mb-2">{totalItems} {totalItems === 1 ? 'Item' : 'Items'}</span>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-20 bg-surface-container-lowest rounded-xl shadow-ambient">
            <h2 className="headline-lg text-primary mb-4">Your basket is empty.</h2>
            <p className="text-on-background/60 mb-8 font-medium">Looks like you haven't added anything yet.</p>
            <Link href="/shop" className="px-8 py-3 bg-primary text-on-primary rounded-full hover:bg-primary-container transition-organic font-bold">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column (Items & Promos) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {items.map(item => (
                <div key={item.id} className="bg-surface-container-lowest rounded-xl p-6 pr-10 flex flex-col sm:flex-row gap-8 items-center sm:items-start shadow-ambient relative transition-organic hover:scale-[1.01]">
                  {/* Product Visual */}
                  <div 
                    className="w-[120px] h-[120px] rounded-md flex-shrink-0 flex items-center justify-center relative shadow-inner overflow-hidden"
                    style={{ backgroundColor: `${item.accentColor}33` }}
                  >
                     <div 
                        className="text-5xl opacity-40 select-none"
                        style={{ color: item.accentColor }}
                     >
                       {item.category.includes('Serum') ? '💧' : 
                        item.category.includes('Moist') ? '🍃' : 
                        item.category.includes('Clean') ? '🫧' : '✨'}
                     </div>
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1 mt-2">
                    <h3 className="headline-lg text-on-background mb-1">{item.name}</h3>
                    <p className="text-[13px] text-on-background/50 font-medium mb-5">{item.category} • {item.ingredients.join(', ')}</p>
                    
                    <div className="flex items-center gap-6">
                      {/* Quantity Pill */}
                      <div className="flex items-center bg-surface-container-high rounded-full px-4 py-1.5 ghost-border">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center text-on-background/40 hover:text-on-background transition-organic font-medium"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-[13px] font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center text-on-background/40 hover:text-on-background transition-organic font-medium"
                        >
                          +
                        </button>
                      </div>
                      {/* Remove */}
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-error text-[12px] font-bold flex items-center gap-1.5 hover:opacity-70 transition-organic"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="absolute top-8 right-10 sm:static sm:mt-2">
                    <span className="text-[24px] font-sans font-bold text-primary">₹{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              ))}

              {/* Bottom Grid (Upsell & Progress) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                
                {/* Special Offer Card */}
                <div className="bg-secondary-container rounded-xl p-8 shadow-ambient relative overflow-hidden flex flex-col justify-between min-h-[220px]">
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 opacity-30 text-secondary">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.05V13h8.05c-.09 4.39-3.66 8.02-8.05 8.05z"/><path d="M11 13V2.95c-4.39.09-8.02 3.66-8.05 8.05h8.05z"/><path d="M13 11V2.95c4.39.09 8.02 3.66 8.05 8.05H13z"/></svg>
                  </div>
                  
                  <div className="relative z-10 w-fit px-3 py-1 bg-secondary text-on-primary rounded-full label-md mb-4 shadow-sm">
                    Special Offer
                  </div>
                  <h3 className="relative z-10 text-[24px] font-sans font-bold text-on-secondary-container leading-tight mb-6 tracking-tight">
                    Add a Jade Roller for 50% off!
                  </h3>
                  <button className="relative z-10 w-fit px-6 py-2.5 bg-secondary text-on-primary font-bold rounded-full text-[13px] hover:bg-secondary-fixed-dim transition-organic shadow-float">
                    Add for ₹1200
                  </button>
                </div>

                {/* Free Shipping Progress */}
                <div className="bg-surface-container-low ghost-border rounded-xl p-10 flex flex-col justify-center">
                  <h3 className="text-[20px] font-sans font-bold text-primary mb-5 tracking-tight">Free Shipping Progress</h3>
                  <div className="w-full h-3.5 bg-surface-container-highest rounded-full overflow-hidden shadow-inner mb-3">
                    <div className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full transition-all duration-700" style={{ width: `${Math.min((subtotal / 500) * 100, 100)}%` }} />
                  </div>
                  <p className="text-[13px] text-on-background/50 font-medium">
                    {subtotal >= 500 
                      ? "You've unlocked free delivery!" 
                      : `Only ₹${(500 - subtotal).toFixed(2)} more to unlock free delivery!`}
                  </p>
                </div>

              </div>
            </div>

            {/* Right Column (Order Summary) */}
            <div className="lg:col-span-5 relative">
              <div className="bg-surface-container-high rounded-xl p-10 shadow-ambient-lg sticky top-32 ghost-border">
                
                <h2 className="headline-lg text-primary mb-10 tracking-tight">Order Summary</h2>
                
                <div className="space-y-4 text-[15px] text-on-background font-medium mb-8">
                  <div className="flex justify-between">
                    <span className="opacity-80">Subtotal</span>
                    <span className="font-bold">₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-80">Estimated Shipping</span>
                    <span className="font-bold">{shipping === 0 ? 'FREE' : `₹${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-80">Estimated Tax</span>
                    <span className="font-bold">₹0.00</span>
                  </div>
                </div>

                {/* Promo Code Input Block */}
                <div className="bg-surface-container-lowest ghost-border rounded-md p-5 mb-8 shadow-ambient">
                  <div className="flex items-center gap-2 mb-3 text-[12px] font-bold text-on-background/60 uppercase tracking-[0.15em]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.86L12 5.84zM7.5 14c-1.93 0-3.5 1.57-3.5 3.5S5.57 21 7.5 21 11 19.43 11 17.5 9.43 14 7.5 14zm0 5c-.83 0-1.5-.67-1.5-1.5S6.67 16 7.5 16s1.5.67 1.5 1.5S8.33 19 7.5 19zm9-5H13v7h3.5v-7zM21 21h-3v-7h3v7z"/></svg>
                    Promo Code
                  </div>
                  <div className="flex items-center gap-3">
                    <input 
                      type="text" 
                      placeholder="GLOW20" 
                      className="flex-1 bg-surface-container-high h-[44px] rounded-full px-5 text-[14px] outline-none shadow-inner ghost-border placeholder:text-on-background/30 text-on-background font-medium transition-organic focus:border-outline-variant"
                    />
                    <button className="h-[44px] px-6 bg-primary text-on-primary text-[13px] font-bold rounded-full hover:bg-primary-container hover:text-on-surface transition-organic shadow-md">
                      Apply
                    </button>
                  </div>
                </div>

                {/* Ghost Divider */}
                <div className="h-px w-full bg-outline-variant/20 mb-8" />

                {/* Total Block */}
                <div className="mb-10">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-[20px] font-bold text-on-background">Total</span>
                    <span className="display-lg text-primary leading-none">₹{total.toFixed(2)}</span>
                  </div>
                  <p className="text-right label-md text-on-background/40">
                    OR 4 INTEREST-FREE PAYMENTS OF ₹{(total/4).toFixed(2)}
                  </p>
                </div>

                <button className="w-full h-[60px] bg-primary text-on-primary rounded-full flex items-center justify-center gap-3 text-[16px] font-bold hover:bg-primary-container hover:text-on-surface transition-organic shadow-ambient">
                  Proceed to Checkout
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>

                <div className="flex justify-center gap-4 mt-8 opacity-40">
                  <div className="w-10 h-6 border border-on-background flex items-center justify-center rounded text-[10px] font-black">VISA</div>
                  <div className="w-10 h-6 border border-on-background flex items-center justify-center rounded text-[10px] font-black">MC</div>
                  <div className="w-10 h-6 border border-on-background flex items-center justify-center rounded text-[10px] font-black">AMEX</div>
                </div>

              </div>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
}
