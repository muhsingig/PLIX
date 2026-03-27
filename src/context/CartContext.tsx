'use client';
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Product } from '@/lib/products';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  quantity: number;
  category: string;
  accentColor: string;
  ingredients: string[];
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  savings: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('plix-cart');
      if (stored) setItems(JSON.parse(stored));
    } catch {}
  }, []);

  // Persist changes
  useEffect(() => {
    localStorage.setItem('plix-cart', JSON.stringify(items));
  }, [items]);

  const addItem = (product: Product) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, {
        id:            product.id,
        name:          product.name,
        price:         product.price,
        originalPrice: product.originalPrice,
        quantity:      1,
        category:      product.category,
        accentColor:   product.accentColor,
        ingredients:   product.ingredients.slice(0, 2),
      }];
    });
  };

  const removeItem = (id: string) => setItems(prev => prev.filter(i => i.id !== id));

  const updateQuantity = (id: string, qty: number) => {
    if (qty < 1) { removeItem(id); return; }
    setItems(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((s, i) => s + i.quantity, 0);
  const subtotal   = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const savings    = items.reduce((s, i) => s + (i.originalPrice - i.price) * i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, subtotal, savings }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
}
