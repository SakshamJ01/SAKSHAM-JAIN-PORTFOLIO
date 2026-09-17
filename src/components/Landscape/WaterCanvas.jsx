import React, { useEffect, useRef } from 'react';
import { getAtmosphere, rgbStr } from '../../utils/atmosphere';

/**
 * 60fps canvas engine for continuous, fluid water reflections & harmonic shimmer.
 * Seamlessly blends from alpha 0 at the horizon with zero rectangular boundary edges.
 * Uses persistent requestAnimationFrame without re-instantiating on scroll.
 */
export default function WaterCanvas({ scrollProgress }) {
  const canvasRef = useRef(null);
  const progressRef = useRef(scrollProgress);

  // Keep progressRef updated without restarting canvas loop
  useEffect(() => {
    progressRef.current = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transform before scale
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    const render = () => {
      time += 0.02;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.clearRect(0, 0, width, height);

      // Fetch continuously interpolated atmospheric parameters
      const atmosphere = getAtmosphere(progressRef.current);
      const { water } = atmosphere;
      const sunX = width * 0.5;

      // 1. Water base gradient:
      // ZERO OPACITY at y=0 so it seamlessly feather-blends into the sky without any rectangular edge or seam!
      const baseGrad = ctx.createLinearGradient(0, 0, 0, height);
      baseGrad.addColorStop(0, rgbStr(water.base, 0));
      baseGrad.addColorStop(0.25, rgbStr(water.base, water.opacity * 0.45));
      baseGrad.addColorStop(1.0, rgbStr(water.base, water.opacity));

      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Light reflection pillar on water:
      // Dynamically tracks sun / moon light column
      const reflWidth = width * (0.16 + (1 - Math.abs(progressRef.current - 0.75) * 2) * 0.08);
      const reflGrad = ctx.createRadialGradient(
        sunX, 0, 2,
        sunX, height * 0.7, reflWidth
      );

      reflGrad.addColorStop(0, rgbStr(water.reflection, water.reflOpacity * 0.75));
      reflGrad.addColorStop(0.35, rgbStr(water.reflection, water.reflOpacity * 0.35));
      reflGrad.addColorStop(1.0, rgbStr(water.reflection, 0));

      ctx.fillStyle = reflGrad;
      ctx.fillRect(0, 0, width, height);

      // 3. Harmonic wave ripples (horizontal micro shimmer):
      const numWaves = 11;
      ctx.lineWidth = 1;

      for (let i = 0; i < numWaves; i++) {
        const yNorm = i / numWaves;
        const y = Math.pow(yNorm, 1.35) * height;
        const waveSpeed = 0.7 + i * 0.12;
        const waveAmp = (0.8 + yNorm * 2.5) * (0.6 + Math.sin(time * 0.5 + i) * 0.2);

        ctx.beginPath();
        const alpha = Math.sin(yNorm * Math.PI) * (0.08 + water.reflOpacity * 0.18);
        ctx.strokeStyle = rgbStr(water.reflection, alpha);

        const xStart = Math.max(0, sunX - reflWidth * (1 + yNorm * 2.2));
        const xEnd = Math.min(width, sunX + reflWidth * (1 + yNorm * 2.2));

        for (let x = xStart; x <= xEnd; x += 10) {
          const waveOffset = Math.sin(x * 0.028 + time * waveSpeed + i * 1.4) * waveAmp;
          if (x === xStart) {
            ctx.moveTo(x, y + waveOffset);
          } else {
            ctx.lineTo(x, y + waveOffset);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Run once on mount!

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block pointer-events-none"
      aria-hidden="true"
    />
  );
}
