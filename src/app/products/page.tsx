import React from 'react';

const PRODUCTS = [
  {
    id: 1,
    title: 'Apple Cider Vinegar',
    subtitle: '750mg ACV with the Mother',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop',
    price: '₹399',
    rating: '4.9',
    reviews: '15.2k'
  },
  {
    id: 2,
    title: 'Glowy Skin Effervescent',
    subtitle: 'Plant-based Glutathione & Vitamin C',
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=600&h=600&fit=crop',
    price: '₹499',
    rating: '4.8',
    reviews: '8.4k'
  },
  {
    id: 3,
    title: 'Rosemary Hair Growth Serum',
    subtitle: 'Advanced Follicle Treatment',
    image: 'https://images.unsplash.com/photo-1599305090598-a178fd8502d9?w=600&h=600&fit=crop',
    price: '₹549',
    rating: '4.7',
    reviews: '6.1k'
  },
  {
    id: 4,
    title: 'Hibiscus Bond Repair Shampoo',
    subtitle: 'Nourish & Restore Damage',
    image: 'https://images.unsplash.com/photo-1616082987588-ac49859f71ee?w=600&h=600&fit=crop',
    price: '₹449',
    rating: '4.6',
    reviews: '4.9k'
  }
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#f9fbf9] pt-32 pb-24 text-gray-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#1e6931] mb-2">Bestsellers</h1>
            <p className="text-gray-600 text-lg font-medium">India's Leading Beauty & Wellness Products</p>
          </div>
          <div className="mt-4 md:mt-0 space-x-2">
            <button className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium hover:border-[#1e6931] hover:text-[#1e6931] transition-colors">Weight</button>
            <button className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium hover:border-[#1e6931] hover:text-[#1e6931] transition-colors">Skin</button>
            <button className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium hover:border-[#1e6931] hover:text-[#1e6931] transition-colors">Hair</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map(product => (
            <div key={product.id} className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative aspect-square overflow-hidden bg-gray-50 p-6 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="object-cover w-full h-full rounded-2xl group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 bg-[#f69420] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Bestseller
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-1 text-sm font-medium text-amber-500 mb-2">
                  <span>★ {product.rating}</span>
                  <span className="text-gray-400">({product.reviews})</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight mb-1">{product.title}</h3>
                <p className="text-gray-500 text-sm mb-6 flex-1">{product.subtitle}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-black text-[#1e6931]">{product.price}</span>
                  <button className="w-10 h-10 rounded-full bg-[#1e6931] text-white flex items-center justify-center text-xl font-bold hover:bg-[#154c23] hover:scale-110 transition-all">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
