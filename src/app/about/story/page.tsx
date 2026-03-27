import React from 'react';

export default function AboutStoryPage() {
  return (
    <main className="min-h-screen bg-[#F9F0EC] pt-40 flex flex-col items-center flex-1 px-6 text-center">
      <h1 className="font-serif text-[9vw] leading-none font-bold tracking-tight text-[#1A1A1A] mb-8 max-w-4xl">
        OUR STORY
      </h1>
      <p className="text-xl md:text-2xl text-[#7B2D8B] tracking-widest font-medium uppercase mt-4 mb-20">
        Rooted in Plant Performance
      </p>
      <div className="max-w-3xl text-left bg-white p-12 md:p-20 rounded-3xl border border-black/5">
        <p className="text-lg md:text-2xl text-gray-700 leading-relaxed font-serif mb-8">
           "We started with a vision to change the way the world consumes plant-based formulas."
        </p>
        <p className="text-base text-gray-500 leading-relaxed">
          Plix Guava Glow represents the pinnacle of our clean-label journey. By extracting pure Vitamin C and
          Alpha Lipoic Acid right from the source, we bypass synthetic fillers.
        </p>
      </div>
    </main>
  );
}
