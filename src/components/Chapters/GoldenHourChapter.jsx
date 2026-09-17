import React from 'react';

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

export default function GoldenHourChapter({ scrollToChapter, scrollProgress = 0.78 }) {
  // Continuous smooth color interpolation as the sky transitions from Golden Hour to Night
  // Range: 0.70 (warm sunset) -> 0.88 (dusk/night)
  const t = Math.min(Math.max((scrollProgress - 0.70) / 0.18, 0), 1);

  // Smooth color transitions
  const cHeading = lerpColor([28, 26, 36], [253, 251, 247], t);
  const cParagraph = lerpColor([67, 61, 77], [226, 218, 213], t);
  const cTag = lerpColor([201, 116, 83], [229, 184, 153], t);
  const cHairline = lerpColor([201, 116, 83], [212, 163, 115], t);
  const cSubtext = lerpColor([90, 78, 70], [184, 168, 160], t);
  const cAction = lerpColor([28, 26, 36], [250, 240, 230], t);

  const headingColor = `rgb(${cHeading[0]}, ${cHeading[1]}, ${cHeading[2]})`;
  const paragraphColor = `rgb(${cParagraph[0]}, ${cParagraph[1]}, ${cParagraph[2]})`;
  const tagColor = `rgb(${cTag[0]}, ${cTag[1]}, ${cTag[2]})`;
  const hairlineColor = `rgba(${cHairline[0]}, ${cHairline[1]}, ${cHairline[2]}, ${lerp(0.6, 0.35, t)})`;
  const subtextColor = `rgb(${cSubtext[0]}, ${cSubtext[1]}, ${cSubtext[2]})`;
  const actionColor = `rgb(${cAction[0]}, ${cAction[1]}, ${cAction[2]})`;
  const borderColor = `rgba(${lerp(28, 255, t)}, ${lerp(26, 255, t)}, ${lerp(36, 255, t)}, 0.12)`;

  return (
    <section
      id="golden-hour"
      className="relative min-h-[85vh] flex flex-col justify-between items-center text-center px-6 sm:px-12 py-16 sm:py-24 max-w-5xl mx-auto w-full select-none"
      aria-label="Chapter 05: Golden Hour Sunset"
    >
      {/* Chapter Pre-Title Tag */}
      <div className="flex items-center gap-3.5 mb-7 md:mb-9">
        <span
          className="h-[1px] w-6 md:w-8 inline-block"
          style={{ backgroundColor: hairlineColor }}
        />
        <span
          className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-sans font-medium"
          style={{ color: tagColor }}
        >
          05 / GOLDEN HOUR — SUNSET
        </span>
        <span
          className="h-[1px] w-6 md:w-8 inline-block"
          style={{ backgroundColor: hairlineColor }}
        />
      </div>

      {/* Primary Statement */}
      <div className="my-auto py-8 max-w-4xl">
        <h2
          className="font-serif font-normal text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] tracking-tight leading-[1.12] drop-shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
          style={{ color: headingColor }}
        >
          Somewhere between ideas <span className="italic font-light opacity-95">and execution.</span>
        </h2>
        <p
          className="mt-5 md:mt-7 font-serif italic text-lg sm:text-xl md:text-2xl tracking-wide font-normal drop-shadow-[0_1px_8px_rgba(0,0,0,0.12)]"
          style={{ color: paragraphColor }}
        >
          Keep building.
        </p>
      </div>

      {/* Environmental Footer & Transition */}
      <footer
        className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t"
        style={{ borderColor }}
      >
        <div className="text-left order-2 sm:order-1">
          <p
            className="text-[10px] tracking-[0.24em] uppercase font-sans font-light"
            style={{ color: subtextColor }}
          >
            Jaipur, India · Dusk approaching
          </p>
          <p
            className="text-[9px] tracking-[0.2em] font-sans mt-0.5 hidden sm:block opacity-75"
            style={{ color: subtextColor }}
          >
            Light fades, craft remains.
          </p>
        </div>

        <button
          onClick={() => scrollToChapter('contact')}
          className="order-1 sm:order-2 group flex items-center gap-2.5 text-[10px] md:text-[11px] tracking-[0.26em] uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm py-1 px-2"
          style={{ color: actionColor }}
          aria-label="Proceed to Moonlight Chapter: Contact"
        >
          <span className="border-b border-transparent group-hover:border-current transition-colors pb-0.5 font-medium">
            Transitioning to Moonlight · Chapter 06
          </span>
          <span className="text-[12px] transition-transform group-hover:translate-y-1 inline-block">
            ↓
          </span>
        </button>

        <div className="text-right hidden lg:block order-3">
          <p
            className="text-[9px] tracking-[0.26em] uppercase font-mono"
            style={{ color: subtextColor }}
          >
            Horizon: 0.0° · Zenith: Dimming
          </p>
        </div>
      </footer>
    </section>
  );
}
