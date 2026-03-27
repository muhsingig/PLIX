import React from 'react';

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#F9F0EC] pt-40 px-6">
      <div className="container mx-auto max-w-5xl text-center">
        <h1 className="font-serif text-[10vw] leading-none font-bold tracking-tight text-[#1A1A1A] mb-8">
          SHOP
        </h1>
        <p className="text-xl md:text-2xl text-[#4A4A4A] tracking-widest font-medium uppercase mt-4 mb-20 opacity-80">
          The Guava Glow Collection
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {[1,2,3,4].map(idx => (
           <div key={idx} className="bg-white p-8 rounded-3xl border border-black/5 hover:shadow-2xl transition-all duration-500 cursor-pointer">
             <div className="w-full aspect-square bg-gray-50 rounded-2xl mb-6"></div>
             <h3 className="font-serif text-3xl font-bold mb-2">Guava Vitamin C Serum</h3>
             <p className="text-gray-500 mb-6 font-medium tracking-wide">Daily glow multiplier</p>
             <p className="text-2xl font-bold text-[#7B2D8B]">₹499</p>
           </div>
          ))}
        </div>
      </div>
    </main>
  );
}
