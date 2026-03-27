'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useSpring, useTransform, motion } from 'framer-motion';

const FRAME_COUNT = 192;

export default function PlixScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);

  // Framer Motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Convert smooth scroll progress (0-1) to frame index
  const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Preload Images
  useEffect(() => {
    let loaded = 0;
    const imgArray: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      // Format matches: frame_000_delay-0.041s.jpg
      const paddedIndex = i.toString().padStart(3, '0');
      img.src = `/sequence/frame_${paddedIndex}_delay-0.041s.jpg`;
      
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
      };
      // Fallback for missing images to avoid crash during testing
      img.onerror = () => {
        loaded++;
        setLoadedCount(loaded);
      };
      imgArray.push(img);
    }
    setImages(imgArray);
  }, []);

  // Update Canvas on frameIndex change
  useEffect(() => {
    if (loadedCount < FRAME_COUNT || !canvasRef.current) return;
    
    return frameIndex.on('change', (latestIndex) => {
      const idx = Math.round(latestIndex);
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      const img = images[idx];
      
      if (canvas && ctx && img && img.complete && img.naturalHeight !== 0) {
        // Handle responsive contain logic
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.min(hRatio, vRatio);
        const centerShiftX = (canvas.width - img.width * ratio) / 2;
        const centerShiftY = (canvas.height - img.height * ratio) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          img, 
          0, 0, img.width, img.height,
          centerShiftX, centerShiftY, img.width * ratio, img.height * ratio
        );
      }
    });
  }, [loadedCount, images, frameIndex]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isLoading = loadedCount < FRAME_COUNT;

  // -- Text Overlay Beats Logic --
  // Beat A: 0-20%
  const opacityA = useTransform(smoothProgress, [0, 0.1, 0.15, 0.2], [0, 1, 1, 0]);
  const yA = useTransform(smoothProgress, [0, 0.1, 0.15, 0.2], [20, 0, 0, -20]);

  // Beat B: 25-45%
  const opacityB = useTransform(smoothProgress, [0.25, 0.35, 0.4, 0.45], [0, 1, 1, 0]);
  const yB = useTransform(smoothProgress, [0.25, 0.35, 0.4, 0.45], [20, 0, 0, -20]);

  // Beat C: 50-70%
  const opacityC = useTransform(smoothProgress, [0.5, 0.6, 0.65, 0.7], [0, 1, 1, 0]);
  const yC = useTransform(smoothProgress, [0.5, 0.6, 0.65, 0.7], [20, 0, 0, -20]);

  // Beat D: 75-95%
  const opacityD = useTransform(smoothProgress, [0.75, 0.85, 0.9, 0.95], [0, 1, 1, 0]);
  const yD = useTransform(smoothProgress, [0.75, 0.85, 0.9, 0.95], [20, 0, 0, -20]);

  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: '400vh' }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#f9fbf9]">
        
        {/* Loader */}
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-[#f9fbf9] text-gray-900">
            <div className="h-1 w-64 bg-black/5 rounded-full overflow-hidden mb-4">
              <div 
                className="h-full bg-[#1e6931] transition-all duration-300 ease-out"
                style={{ width: `${(loadedCount / FRAME_COUNT) * 100}%` }}
              />
            </div>
            <p className="text-sm font-medium tracking-widest text-gray-500 animate-pulse">
              LOADING PLIX EXPERIENCE
            </p>
          </div>
        )}

        <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full object-contain" />
        
        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: scrollIndicatorOpacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="text-gray-400 text-xs tracking-[0.2em] font-medium">SCROLL TO EXPLORE</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-300 to-transparent" />
        </motion.div>

        {/* --- Text Overlays --- */}
        
        {/* Beat A */}
        <motion.div 
          style={{ opacity: opacityA, y: yA }} 
          className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none text-center px-6"
        >
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-[#1e6931] mb-6 drop-shadow-sm">
            PURE. PLANT. PLIX.
          </h1>
          <p className="text-xl md:text-3xl text-gray-700 tracking-tight font-medium drop-shadow-sm">
            Clean-label wellness, powered by nature.
          </p>
        </motion.div>

        {/* Beat B */}
        <motion.div 
          style={{ opacity: opacityB, y: yB }} 
          className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-24 z-10 pointer-events-none"
        >
          <div className="max-w-2xl text-left bg-white/70 backdrop-blur-md p-8 rounded-3xl border border-black/5 shadow-2xl">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-4">
              750mg ACV. <br/>Zero Compromise.
            </h2>
            <p className="text-lg md:text-2xl text-gray-600 leading-relaxed">
              With the mother culture. Non-GMO. Vegan. Toxin-free.
            </p>
          </div>
        </motion.div>

        {/* Beat C */}
        <motion.div 
          style={{ opacity: opacityC, y: yC }} 
          className="absolute inset-0 flex flex-col justify-center items-end px-8 md:px-24 z-10 pointer-events-none"
        >
          <div className="max-w-2xl text-right bg-white/70 backdrop-blur-md p-8 rounded-3xl border border-black/5 shadow-2xl">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-4">
              Every Ingredient. <br/>Intentional.
            </h2>
            <p className="text-lg md:text-2xl text-gray-600 leading-relaxed">
              Clean Label Project Certified. India's most trusted wellness brand.
            </p>
          </div>
        </motion.div>

        {/* Beat D */}
        <motion.div 
          style={{ opacity: opacityD, y: yD }} 
          className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-6"
        >
          <div className="bg-white/80 backdrop-blur-md p-12 rounded-[3rem] border border-black/5 shadow-2xl flex flex-col items-center">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-[#1e6931] mb-6">
              Start Your Plant Fix Today.
            </h2>
            <p className="text-xl md:text-3xl text-gray-600 mb-10">
              Shop Plix &mdash; Free diet plans with every order.
            </p>
            <button className="bg-[#f69420] text-white hover:bg-[#e68310] transition-all duration-300 font-medium text-lg px-10 py-5 rounded-full tracking-wide shadow-xl hover:scale-105 active:scale-95">
              Explore Products
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
