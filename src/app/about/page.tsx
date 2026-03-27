import React from 'react';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f9fbf9] pt-32 pb-24 text-gray-900">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#1e6931] mb-8">Our Story</h1>
        
        <section className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#f69420]">Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Why should health, wellness & nutrition be about doctors, tiring diet plans and tasteless supplements? 
            Why should taking care of oneself and having fun while doing it be mutually exclusive? <br/><br/>
            <strong className="text-gray-900">We are on a mission to make wellness a more enjoyable lifestyle for everyone.</strong> So all you have to do is Take Care, Have Fun.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-[#1e6931]">Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We started Plix with a vision to change the way the world consumes plant-based superfoods. 
            We want to make nutrition less intimidating and fuel the habit of incorporating clean, plant-based superfoods as a part of a healthy, active lifestyle in every individual.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Clean, Certified, Plant-Based Nutrition!</h3>
            <p className="text-gray-600">Plix's products are vegan & free of harmful chemicals, heavy metals, pesticides, and they are non-GMO.</p>
          </div>
          
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-3 text-gray-900">The Science and Safety Behind Our Products!</h3>
            <p className="text-gray-600">All our products are carefully formulated to deliver optimal efficacy, real results with no harmful side effects and are RDA compliant as per FSSAI guidelines.</p>
          </div>
          
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Relish the Chef's Flair!</h3>
            <p className="text-gray-600">We have food science experts who pull out all the stops to explore fresh flavors and textures to pamper your taste buds. Our products are indulgently tasty.</p>
          </div>
          
          <div className="bg-[#1e6931] text-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-3">Good For The Planet, Good For You!</h3>
            <p className="text-white/80">With every Plix order you place, we plant more trees. Our packaging is 100% reusable, recyclable, and eco-friendly!</p>
          </div>
        </section>
        
        <div className="text-center">
           <button className="bg-[#f69420] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e68310] transition-colors shadow-lg hover:-translate-y-1">
             Shop The Plant Fix
           </button>
        </div>
      </div>
    </main>
  );
}
