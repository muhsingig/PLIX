import React from 'react';

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-[#F9F0EC] pt-40 flex flex-col items-center flex-1 px-6 text-center">
      <h1 className="font-serif text-[8vw] leading-none font-bold tracking-tight text-[#1A1A1A] mb-8 max-w-5xl">
        LEARN THE RITUAL
      </h1>
      <p className="text-xl md:text-2xl text-[#7B2D8B] tracking-widest font-medium uppercase mt-4 mb-20">
        Clinical Efficacy & Application Guides
      </p>
      <div className="w-full max-w-4xl h-[400px] bg-white rounded-3xl border border-black/5 flex items-center justify-center">
          <p className="opacity-40 font-bold tracking-widest uppercase">Video Placeholder</p>
      </div>
    </main>
  );
}
