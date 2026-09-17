import React, { useMemo } from 'react';
import WaterCanvas from './WaterCanvas';
import { getAtmosphere, rgbStr } from '../../utils/atmosphere';

export default function ContinuousLandscape({ scrollProgress }) {
  // Generate random static stars once
  const stars = useMemo(() => {
    return Array.from({ length: 65 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 65,
      size: Math.random() * 1.8 + 0.8,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2.5,
      baseOpacity: Math.random() * 0.6 + 0.4
    }));
  }, []);

  // Continuous, frame-by-frame mathematical atmospheric parameter calculation
  const atmosphere = getAtmosphere(scrollProgress);
  const {
    skyTop,
    skyMid,
    skyBot,
    sun,
    moon,
    starsOpacity,
    ambientGlowOpacity,
    ambientGlowColor,
    goldenGlow,
    nightVignette
  } = atmosphere;

  const skyBackground = `linear-gradient(180deg, ${rgbStr(skyTop)} 0%, ${rgbStr(skyMid)} 55%, ${rgbStr(skyBot)} 100%)`;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
      style={{ background: skyBackground }}
    >
      {/* 1. Organic Grain / Subtle Atmospheric Texture */}
      <div className="absolute inset-0 organic-haze opacity-40 mix-blend-overlay" />

      {/* 2. Soft Ambient Light Shafts (Dawn / Morning) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: ambientGlowOpacity,
          background: `radial-gradient(ellipse 75% 65% at 50% 68%, ${rgbStr(ambientGlowColor, 0.42)} 0%, ${rgbStr(ambientGlowColor, 0.18)} 35%, transparent 75%)`
        }}
      />

      {/* 3. Golden Hour Ambient Light Aura (Sunset) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: goldenGlow,
          background: 'radial-gradient(ellipse 80% 55% at 50% 70%, rgba(223, 106, 68, 0.35) 0%, rgba(201, 141, 141, 0.2) 40%, transparent 80%)'
        }}
      />

      {/* 4. Night Atmospheric Vignette (Moonlight) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: nightVignette,
          background: 'radial-gradient(ellipse 75% 65% at 50% 48%, rgba(5, 10, 18, 0.2) 0%, rgba(4, 8, 15, 0.65) 75%, rgba(2, 5, 10, 0.9) 100%)'
        }}
      />

      {/* 5. Twinkling Night Starfield */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: starsOpacity }}
      >
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-moonlight animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.baseOpacity,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
              boxShadow: star.size > 1.8 ? '0 0 6px rgba(217, 227, 234, 0.8)' : 'none'
            }}
          />
        ))}
      </div>

      {/* 6. Dynamic Sun Celestial Element */}
      {sun.opacity > 0.01 && (
        <div
          className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none"
          style={{
            bottom: `${sun.bottom}%`,
            opacity: sun.opacity,
            transform: `translateX(-50%) scale(${sun.scale})`
          }}
        >
          {/* Wide diffuse glowing aura */}
          <div
            className="w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-3xl animate-subtle-pulse"
            style={{
              background: `radial-gradient(circle, ${rgbStr(sun.aura, sun.auraOpacity)} 0%, transparent 70%)`
            }}
          />
          {/* Sun Disk */}
          <div
            className="absolute w-20 h-20 sm:w-28 sm:h-28 rounded-full blur-md"
            style={{
              background: `radial-gradient(circle, ${rgbStr(sun.color)} 0%, ${rgbStr(sun.aura, 0.85)} 80%)`,
              boxShadow: `0 0 50px ${rgbStr(sun.aura, 0.6)}`
            }}
          />
        </div>
      )}

      {/* 7. Dynamic Moon Celestial Element */}
      {moon.opacity > 0.01 && (
        <div
          className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none"
          style={{
            bottom: `${moon.bottom}%`,
            opacity: moon.opacity,
            transform: `translateX(-50%)`
          }}
        >
          {/* Moon Silver Aura */}
          <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-moonlight/15 via-blue-200/20 to-transparent blur-3xl" />
          {/* Crisp Moon Disk with Subtle Crater Details */}
          <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#C5D5E2] via-[#E8EFF5] to-[#FFFFFF] shadow-[0_0_35px_rgba(217,227,234,0.65)] overflow-hidden">
            <div className="absolute w-4 h-4 rounded-full bg-[#A8BCCC]/35 top-3 left-4 blur-[1px]" />
            <div className="absolute w-6 h-6 rounded-full bg-[#A8BCCC]/25 bottom-3 right-3 blur-[1px]" />
          </div>
        </div>
      )}

      {/* 8. Calm Water Horizon Surface (Lower 32% Viewport) */}
      {/* Blends seamlessly via alpha=0 at the top edge with zero horizontal seam */}
      <div className="absolute bottom-0 inset-x-0 h-[32%] z-10 overflow-hidden pointer-events-none">
        <WaterCanvas scrollProgress={scrollProgress} />
      </div>
    </div>
  );
}
