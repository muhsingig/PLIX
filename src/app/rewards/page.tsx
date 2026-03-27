import React from 'react';

export default function RewardsPage() {
  return (
    <main className="min-h-screen bg-[#F9F0EC] pt-40 flex flex-col items-center flex-1 px-6 text-center">
      <h1 className="font-serif text-[10vw] leading-none font-bold tracking-tight text-[#1A1A1A] mb-8">
        REWARDS
      </h1>
      <p className="text-xl md:text-2xl text-[#1A1A1A] tracking-widest font-medium uppercase mt-4 opacity-80 mb-20">
        Unlock The Glow Club
      </p>
      <button className="bg-[#1B4332] text-white tracking-widest uppercase font-bold px-12 py-5 rounded-full hover:bg-black transition-all shadow-xl">
        Join Now
      </button>
    </main>
  );
}
