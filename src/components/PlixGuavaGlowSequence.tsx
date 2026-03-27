'use client';
import React, { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 192;

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

function mapRange(val: number, inMin: number, inMax: number, outMin: number, outMax: number) {
  return outMin + clamp((val - inMin) / (inMax - inMin), 0, 1) * (outMax - outMin);
}

// Each beat: which frames it spans
const BEATS = [
  { in: [0, 10],    out: [38, 48]  },
  { in: [48, 58],   out: [88, 98]  },
  { in: [98, 108],  out: [140, 150]},
  { in: [150, 160], out: [182, 191]},
];

const opacity = (f: number, b: typeof BEATS[0]) =>
  f < b.in[0]   ? 0 :
  f < b.in[1]   ? mapRange(f, b.in[0], b.in[1], 0, 1) :
  f < b.out[0]  ? 1 :
  f <= b.out[1] ? mapRange(f, b.out[0], b.out[1], 1, 0) : 0;

const translateY = (f: number, b: typeof BEATS[0]) =>
  f < b.in[0]   ? 28 :
  f < b.in[1]   ? mapRange(f, b.in[0], b.in[1], 28, 0) :
  f < b.out[0]  ? 0 :
  f <= b.out[1] ? mapRange(f, b.out[0], b.out[1], 0, -28) : -28;

const TEXTS = [
  { h: 'ROOTED IN RITUAL',    s: 'Sourced from the heart of botanicals' },
  { h: 'CLINICALLY PROVEN',   s: 'Formulated to unlock hidden radiance' },
  { h: 'INSTANT GLOW',        s: 'The perfect extraction, every morning' },
  { h: 'PLIX GUAVA GLOW',     s: 'Your daily performance perfected' },
];

export default function PlixGuavaGlowSequence() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const images     = useRef<HTMLImageElement[]>([]);
  const beatRefs   = useRef<(HTMLDivElement | null)[]>([]);
  const hintRef    = useRef<HTMLDivElement | null>(null);

  const [loadedCount, setLoadedCount] = useState(0);
  const isLoading = loadedCount < FRAME_COUNT;

  const targetFrame  = useRef(0);
  const currentFrame = useRef(0);

  // Cache draw dimensions — only recalculate on resize
  const drawCache = useRef({ scale: 1, x: 0, y: 0, iw: 0, ih: 0, cw: 0, ch: 0 });

  // ── Preload ───────────────────────────────────────────────────────
  useEffect(() => {
    let n = 0;
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/sequence/frame_${i.toString().padStart(3, '0')}_delay-0.041s.jpg`;
      img.onload = () => { n++; setLoadedCount(n); };
      images.current[i] = img;
    }
  }, []);

  // ── RAF loop ──────────────────────────────────────────────────────
  useEffect(() => {
    if (isLoading) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Init canvas size once
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      // Pre-compute draw rect using first loaded image dimensions
      const img = images.current.find(i => i.complete && i.naturalWidth > 0);
      if (img) {
        const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        drawCache.current = {
          scale,
          x: (canvas.width  - img.width  * scale) / 2,
          y: (canvas.height - img.height * scale) / 2,
          iw: img.width,
          ih: img.height,
          cw: canvas.width,
          ch: canvas.height,
        };
      }
    };
    resize();
    window.addEventListener('resize', resize);

    let raf: number;
    const loop = () => {
      // Lerp toward target
      currentFrame.current = lerp(currentFrame.current, targetFrame.current, 0.1);

      const idx = Math.round(clamp(currentFrame.current, 0, FRAME_COUNT - 1));
      const img = images.current[idx];
      const dc  = drawCache.current;

      // ── Draw frame (no canvas resize — dimensions cached) ──
      if (img?.complete && img.naturalWidth > 0 && dc.cw > 0) {
        ctx.clearRect(0, 0, dc.cw, dc.ch);
        ctx.drawImage(img, 0, 0, dc.iw, dc.ih, dc.x, dc.y, dc.iw * dc.scale, dc.ih * dc.scale);
      }

      // ── Update text DOM directly ──
      const f = currentFrame.current;
      BEATS.forEach((beat, i) => {
        const el = beatRefs.current[i];
        if (!el) return;
        const op = opacity(f, beat);
        const ty = translateY(f, beat);
        el.style.opacity    = op.toFixed(3);
        el.style.transform  = `translateX(-50%) translateY(calc(-50% + ${ty}px))`;
        el.style.visibility = op < 0.005 ? 'hidden' : 'visible';
      });

      // Scroll hint
      if (hintRef.current) {
        hintRef.current.style.opacity = mapRange(f, 0, 8, 1, 0).toFixed(3);
      }

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [isLoading]);

  // ── Wheel hijack ──────────────────────────────────────────────────
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect || rect.top > 0 || rect.bottom <= 0) return;

      const next = targetFrame.current + e.deltaY * 0.28;
      if (next >= FRAME_COUNT - 1 && e.deltaY > 0) { targetFrame.current = FRAME_COUNT - 1; return; }
      if (next <= 0 && e.deltaY < 0) return;

      e.preventDefault();
      targetFrame.current = clamp(next, 0, FRAME_COUNT - 1);
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div ref={sectionRef} style={{ height: '600vh' }} className="relative w-full">
      <div className="sticky top-16 w-full overflow-hidden bg-[#F9F0EC]" style={{ height: 'calc(100vh - 4rem)' }}>

        {/* Loader */}
        {isLoading && (
          <div className="absolute inset-0 z-50 bg-[#F9F0EC] flex flex-col items-center justify-center gap-4">
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#7B2D8B] animate-pulse">
              Extracting Botanicals
            </p>
            <div className="w-56 h-[2px] bg-[#7B2D8B]/20 rounded-full overflow-hidden">
              <div className="h-full bg-[#7B2D8B] transition-all duration-200"
                style={{ width: `${(loadedCount / FRAME_COUNT) * 100}%` }} />
            </div>
          </div>
        )}

        {/* Canvas — positioned to fill screen, blend over #F9F0EC background */}
        <canvas ref={canvasRef}
          className="absolute inset-0 w-full h-full mix-blend-multiply pointer-events-none" />

        {/* Scroll hint */}
        <div ref={hintRef}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none">
          <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-[#7B2D8B]">Scroll to Explore</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#7B2D8B] to-transparent" />
        </div>

        {/* 
          Text beats — each is absolute, center-anchored via top-1/2 left-1/2
          transform is managed by the RAF loop to include translateY offset
        */}
        {TEXTS.map((t, i) => (
          <div
            key={i}
            ref={el => { beatRefs.current[i] = el; }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translateX(-50%) translateY(-50%)',
              opacity: 0,
              visibility: 'hidden',
              willChange: 'opacity, transform',
              textAlign: 'center',
              width: '90%',
              maxWidth: '800px',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          >
            <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, lineHeight: 1.1, color: '#1A1A1A' }}
              className={`${i === 3 ? 'text-4xl md:text-6xl' : 'text-5xl md:text-7xl'}`}>
              {i === 0 && <>ROOTED<br/>IN RITUAL</>}
              {i === 1 && <>CLINICALLY<br/>PROVEN</>}
              {i === 2 && <>INSTANT<br/>GLOW</>}
              {i === 3 && <>PLIX GUAVA GLOW</>}
            </h2>
            <p className="mt-5 text-[10px] md:text-xs tracking-[0.35em] font-bold uppercase text-[#7B2D8B]">
              {t.s}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}
