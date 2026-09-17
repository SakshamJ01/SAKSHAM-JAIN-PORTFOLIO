/**
 * Atmospheric progression and continuous color interpolation engine.
 * Maps normalized scroll progress (0.0 to 1.0) into smoothly interpolated
 * sky colors, sun coordinates, moon phase, starfield visibility, and water tones.
 */

const KEYFRAMES = [
  {
    p: 0.00, // Chapter 01: Dawn · 06:20 AM
    skyTop: [250, 248, 245], // #FAF8F5 Ivory
    skyMid: [232, 239, 241], // #E8EFF1 Mist
    skyBot: [220, 236, 243], // #DCECF3 Morning Sky
    sun: { bottom: 34, opacity: 0.95, scale: 1.0, color: [255, 247, 237], aura: [232, 197, 141], auraOpacity: 0.35 },
    moon: { bottom: 35, opacity: 0 },
    stars: 0,
    water: { base: [175, 203, 211], reflection: [246, 228, 196], opacity: 0.45, reflOpacity: 0.55 },
    ambientGlow: { opacity: 0.45, color: [246, 228, 196] },
    goldenGlow: 0,
    nightVignette: 0
  },
  {
    p: 0.20, // Chapter 02: Morning · 07:45 AM
    skyTop: [250, 248, 245],
    skyMid: [226, 238, 244],
    skyBot: [205, 227, 236],
    sun: { bottom: 42, opacity: 0.95, scale: 1.0, color: [255, 250, 242], aura: [241, 207, 152], auraOpacity: 0.30 },
    moon: { bottom: 38, opacity: 0 },
    stars: 0,
    water: { base: [165, 198, 209], reflection: [246, 228, 196], opacity: 0.40, reflOpacity: 0.50 },
    ambientGlow: { opacity: 0.30, color: [246, 228, 196] },
    goldenGlow: 0,
    nightVignette: 0
  },
  {
    p: 0.42, // Chapter 03: Daylight · 10:15 AM
    skyTop: [246, 248, 247], // #F6F8F7 Cloud
    skyMid: [215, 234, 241], // #D7EAF1 Clear Sky
    skyBot: [185, 218, 230], // #B9DAE6 Water horizon
    sun: { bottom: 48, opacity: 0.90, scale: 1.0, color: [255, 255, 250], aura: [243, 215, 173], auraOpacity: 0.22 },
    moon: { bottom: 40, opacity: 0 },
    stars: 0,
    water: { base: [155, 195, 207], reflection: [243, 215, 173], opacity: 0.38, reflOpacity: 0.45 },
    ambientGlow: { opacity: 0.15, color: [243, 215, 173] },
    goldenGlow: 0,
    nightVignette: 0
  },
  {
    p: 0.62, // Chapter 04: Late Afternoon · 04:30 PM
    skyTop: [243, 237, 226], // #F3EDE2 Warm Sand
    skyMid: [231, 196, 157], // #E7C49D Golden Tint
    skyBot: [210, 170, 155], // Soft Peach Horizon
    sun: { bottom: 36, opacity: 0.95, scale: 1.10, color: [255, 235, 200], aura: [235, 160, 110], auraOpacity: 0.40 },
    moon: { bottom: 40, opacity: 0 },
    stars: 0,
    water: { base: [180, 165, 165], reflection: [241, 195, 130], opacity: 0.45, reflOpacity: 0.60 },
    ambientGlow: { opacity: 0.05, color: [243, 215, 173] },
    goldenGlow: 0.25,
    nightVignette: 0
  },
  {
    p: 0.78, // Chapter 05: Golden Hour / Sunset · 06:15 PM
    skyTop: [220, 180, 170], // #DCB4AA Warm Terracotta
    skyMid: [201, 141, 141], // #C98D8D Dusty Rose
    skyBot: [135, 98, 122], // Deep Rose Horizon
    sun: { bottom: 25, opacity: 0.90, scale: 1.25, color: [255, 180, 110], aura: [223, 106, 68], auraOpacity: 0.65 },
    moon: { bottom: 42, opacity: 0.10 },
    stars: 0.10,
    water: { base: [120, 88, 105], reflection: [223, 106, 68], opacity: 0.55, reflOpacity: 0.70 },
    ambientGlow: { opacity: 0, color: [223, 106, 68] },
    goldenGlow: 0.65,
    nightVignette: 0.08
  },
  {
    p: 0.88, // Dusk
    skyTop: [70, 60, 85], // #463C55 Dusk Twilight
    skyMid: [40, 50, 71], // #283247 Deep Blue
    skyBot: [24, 37, 54], // #182536 Dark Water Horizon
    sun: { bottom: 12, opacity: 0.15, scale: 1.15, color: [210, 80, 50], aura: [180, 60, 40], auraOpacity: 0.20 },
    moon: { bottom: 48, opacity: 0.65 },
    stars: 0.65,
    water: { base: [22, 32, 48], reflection: [217, 227, 234], opacity: 0.75, reflOpacity: 0.50 },
    ambientGlow: { opacity: 0, color: [217, 227, 234] },
    goldenGlow: 0.10,
    nightVignette: 0.55
  },
  {
    p: 1.00, // Chapter 06: Moonlight · 10:45 PM
    skyTop: [5, 10, 18], // #050A12 Night Ink
    skyMid: [14, 23, 38], // #0E1726 Deep Night
    skyBot: [8, 13, 20], // #080D14 Dark Horizon
    sun: { bottom: 0, opacity: 0, scale: 1.0, color: [0, 0, 0], aura: [0, 0, 0], auraOpacity: 0 },
    moon: { bottom: 55, opacity: 1.0 },
    stars: 1.0,
    water: { base: [6, 12, 22], reflection: [217, 227, 234], opacity: 0.88, reflOpacity: 0.60 },
    ambientGlow: { opacity: 0, color: [217, 227, 234] },
    goldenGlow: 0,
    nightVignette: 0.85
  }
];

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function lerpColor(c1, c2, t) {
  return [
    Math.round(lerp(c1[0], c2[0], t)),
    Math.round(lerp(c1[1], c2[1], t)),
    Math.round(lerp(c1[2], c2[2], t))
  ];
}

export function rgbStr(rgb, alpha = 1) {
  if (alpha >= 1) return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha.toFixed(3)})`;
}

/**
 * Returns smoothly interpolated atmosphere parameters for any scroll progress [0, 1].
 */
export function getAtmosphere(progress) {
  const p = Math.max(0, Math.min(1, progress));

  // Find bounding keyframes
  let k1 = KEYFRAMES[0];
  let k2 = KEYFRAMES[KEYFRAMES.length - 1];

  for (let i = 0; i < KEYFRAMES.length - 1; i++) {
    if (p >= KEYFRAMES[i].p && p <= KEYFRAMES[i + 1].p) {
      k1 = KEYFRAMES[i];
      k2 = KEYFRAMES[i + 1];
      break;
    }
  }

  const range = k2.p - k1.p;
  const t = range === 0 ? 0 : (p - k1.p) / range;

  // Continuous color interpolations
  const skyTop = lerpColor(k1.skyTop, k2.skyTop, t);
  const skyMid = lerpColor(k1.skyMid, k2.skyMid, t);
  const skyBot = lerpColor(k1.skyBot, k2.skyBot, t);

  const sunBottom = lerp(k1.sun.bottom, k2.sun.bottom, t);
  const sunOpacity = lerp(k1.sun.opacity, k2.sun.opacity, t);
  const sunScale = lerp(k1.sun.scale, k2.sun.scale, t);
  const sunColor = lerpColor(k1.sun.color, k2.sun.color, t);
  const sunAura = lerpColor(k1.sun.aura, k2.sun.aura, t);
  const sunAuraOpacity = lerp(k1.sun.auraOpacity, k2.sun.auraOpacity, t);

  const moonBottom = lerp(k1.moon.bottom, k2.moon.bottom, t);
  const moonOpacity = lerp(k1.moon.opacity, k2.moon.opacity, t);

  const starsOpacity = lerp(k1.stars, k2.stars, t);

  const waterBase = lerpColor(k1.water.base, k2.water.base, t);
  const waterReflection = lerpColor(k1.water.reflection, k2.water.reflection, t);
  const waterOpacity = lerp(k1.water.opacity, k2.water.opacity, t);
  const waterReflOpacity = lerp(k1.water.reflOpacity, k2.water.reflOpacity, t);

  const ambientGlowOpacity = lerp(k1.ambientGlow.opacity, k2.ambientGlow.opacity, t);
  const ambientGlowColor = lerpColor(k1.ambientGlow.color, k2.ambientGlow.color, t);

  const goldenGlow = lerp(k1.goldenGlow, k2.goldenGlow, t);
  const nightVignette = lerp(k1.nightVignette, k2.nightVignette, t);

  return {
    skyTop,
    skyMid,
    skyBot,
    sun: {
      bottom: sunBottom,
      opacity: sunOpacity,
      scale: sunScale,
      color: sunColor,
      aura: sunAura,
      auraOpacity: sunAuraOpacity
    },
    moon: {
      bottom: moonBottom,
      opacity: moonOpacity
    },
    starsOpacity,
    water: {
      base: waterBase,
      reflection: waterReflection,
      opacity: waterOpacity,
      reflOpacity: waterReflOpacity
    },
    ambientGlowOpacity,
    ambientGlowColor,
    goldenGlow,
    nightVignette
  };
}
