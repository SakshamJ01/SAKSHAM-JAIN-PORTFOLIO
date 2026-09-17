import React from 'react';
import { PROJECTS } from '../../data/portfolioData';

function ProjectsChapter({ scrollToChapter }) {
  const p1 = PROJECTS[0] || {};
  const p2 = PROJECTS[1] || {};
  const p3 = PROJECTS[2] || {};

  return (
    <section
      id="projects"
      className="relative min-h-[90vh] px-6 md:px-12 lg:px-20 py-16 sm:py-24 max-w-7xl mx-auto w-full space-y-24"
      aria-label="Chapter 04: Projects Late Afternoon"
    >
      {/* Chapter Introduction Header */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="w-8 h-[1px] bg-amber-sun/60" />
          <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-ink-muted">
            04 / CHAPTER — PROJECTS
          </span>
          <span className="w-8 h-[1px] bg-amber-sun/60" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-editorial-serif font-normal text-ink leading-[1.08] tracking-tight">
              Things I’ve <span className="italic font-light text-ink-deep">built.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 pb-2">
            <p className="font-editorial-serif italic text-lg md:text-xl text-ink-muted/90 font-light leading-relaxed border-l border-amber-gold/40 pl-5">
              “Software crafted through curiosity, technical rigor, and deliberate restraint.”
            </p>
          </div>
        </div>
      </div>

      {/* Projects Landmark Showcase */}
      <div className="space-y-24 md:space-y-32">

        {/* ======================================================== */}
        {/* LANDMARK 01: ASSETARRAY (Dominant Primary Anchor Landmark) */}
        {/* ======================================================== */}
        <article className="relative rounded-2xl border border-ink/10 backdrop-blur-md p-8 md:p-12 lg:p-14 transition-all duration-700 hover:shadow-2xl hover:shadow-amber-gold/10 overflow-hidden bg-white/50">
          <div aria-hidden="true" className="absolute -right-20 -top-20 w-96 h-96 bg-amber-sun/20 rounded-full blur-3xl pointer-events-none" />
          <div aria-hidden="true" className="absolute -left-20 -bottom-20 w-80 h-80 bg-water-pale/25 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            {/* Primary Editorial Profile */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="text-[10px] font-semibold tracking-[0.28em] uppercase text-ink-muted">
                  01 / PRIMARY LANDMARK
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-accent" />
                <span className="text-[11px] tracking-widest text-ink-light uppercase">
                  {p1.category}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-editorial-serif text-ink tracking-tight font-normal">
                  {p1.name}
                </h3>
                <p className="text-ink-muted text-base leading-relaxed font-normal">
                  {p1.description}
                </p>
              </div>

              {/* Architectural Stack */}
              <div className="pt-2">
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-ink-light block mb-2">
                  Architectural Stack
                </span>
                <p className="text-xs sm:text-[13px] tracking-wide text-ink-deep/80 font-mono leading-relaxed bg-white/60 p-3 rounded-lg border border-ink/5">
                  {Array.isArray(p1.technologies) ? p1.technologies.join(' · ') : p1.technologies}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={p1.liveUrl || p1.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-ink text-ivory text-xs font-medium tracking-wider uppercase transition-all duration-300 hover:bg-ink-deep hover:shadow-lg hover:shadow-ink/20 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <span>View Project</span>
                  <span className="text-amber-sun">→</span>
                </a>
                <a
                  href={p1.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ink/20 text-xs font-medium tracking-wider uppercase text-ink hover:border-[#B88746] hover:text-[#B88746] transition-all bg-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <span>GitHub</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>
            </div>

            {/* Visual Artifact: Real image if available, otherwise illustrative preview */}
            <div className="lg:col-span-6">
              {p1.image ? (
                <div className="rounded-xl border border-ink/10 overflow-hidden shadow-md bg-white/80">
                  <img
                    src={p1.image}
                    alt="AssetArray — Wealth Management &amp; Portfolio Analytics Dashboard interface"
                    className="w-full h-auto block rounded-xl"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ) : (
                <div className="rounded-xl border border-ink/10 bg-white/80 p-6 md:p-8 backdrop-blur-md shadow-inner space-y-6">
                  {/* Header Metadata */}
                  <div className="flex items-center justify-between border-b border-ink/10 pb-4">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-ink/20" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-sun/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-water-mist/60" />
                    </div>
                    <div className="text-[10px] font-mono tracking-widest text-ink-muted uppercase">
                      {p1.previewLabel || 'ASSETARRAY / PORTFOLIO ANALYTICS PREVIEW'}
                    </div>
                  </div>

                  {/* Illustrative Architecture Representation */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-baseline flex-wrap gap-2">
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-ink-light">
                          Portfolio Analytics Engine
                        </span>
                        <div className="text-xl sm:text-2xl font-serif text-ink tracking-tight mt-0.5 font-medium">
                          Asset Allocation &amp; Risk Metrics
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex items-center text-xs font-mono font-medium text-amber-900 bg-amber-50/80 px-2.5 py-1 rounded border border-amber-200/60 shadow-xs">
                          Illustrative Visualizer
                        </span>
                      </div>
                    </div>

                    {/* SVG Wave/Risk Visualization */}
                    <div className="pt-2">
                      <svg className="w-full h-24 overflow-visible" fill="none" viewBox="0 0 400 110" aria-label="Illustrative portfolio trend graph">
                        <defs>
                          <linearGradient id="waveGradientClean" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#E7C49D" stopOpacity="0.45" />
                            <stop offset="100%" stopColor="#E7C49D" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <path d="M0 80 Q 70 30, 140 55 T 280 40 T 400 20 L 400 110 L 0 110 Z" fill="url(#waveGradientClean)" />
                        <line stroke="#14202D" strokeDasharray="3 3" strokeOpacity="0.1" x1="0" x2="400" y1="95" y2="95" />
                        <line stroke="#14202D" strokeDasharray="3 3" strokeOpacity="0.1" x1="0" x2="400" y1="55" y2="55" />
                        <path d="M0 80 Q 70 30, 140 55 T 280 40 T 400 20" stroke="#172433" strokeLinecap="round" strokeWidth="2" />
                        <circle cx="280" cy="40" fill="#D4AF37" r="4.5" stroke="#FFFFFF" strokeWidth="2" />
                      </svg>
                    </div>

                    {/* Architecture Capability Badges */}
                    <div className="grid grid-cols-2 gap-3 pt-2 border-t border-ink/5 text-center">
                      <div className="p-2.5 bg-white/60 rounded-lg border border-ink/5 shadow-xs">
                        <div className="text-[9px] font-mono text-ink-light uppercase">Risk Intelligence</div>
                        <div className="text-xs font-mono font-medium text-ink mt-0.5">Interactive Charts</div>
                      </div>
                      <div className="p-2.5 bg-white/60 rounded-lg border border-ink/5 shadow-xs">
                        <div className="text-[9px] font-mono text-ink-light uppercase">Security Layer</div>
                        <div className="text-xs font-mono font-medium text-ink mt-0.5">Client-Side AES-256</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>

        {/* ======================================================== */}
        {/* LANDMARK 02: SIMULATION-ALCHEMIST (Staggered Center-Left) */}
        {/* ======================================================== */}
        <article className="w-full lg:w-11/12 mr-auto relative rounded-2xl border border-ink/10 backdrop-blur-md p-8 md:p-10 transition-all duration-500 hover:shadow-xl hover:shadow-water-mist/10 overflow-hidden bg-white/45">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-ink-muted">
                  02 / SECONDARY LANDMARK
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-water-mist" />
                <span className="text-[11px] tracking-widest text-ink-light uppercase">
                  {p2.category}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-3xl sm:text-4xl font-editorial-serif text-ink tracking-tight font-normal">
                  {p2.name}
                </h3>
                <p className="text-ink-muted text-sm sm:text-base leading-relaxed">
                  {p2.description}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-ink-light block mb-1.5">
                  Stack Components
                </span>
                <p className="text-xs font-mono text-ink-deep/80 bg-white/60 p-2.5 rounded-md border border-ink/5">
                  {Array.isArray(p2.technologies) ? p2.technologies.join(' · ') : p2.technologies}
                </p>
              </div>

              <div className="pt-3 flex items-center gap-4">
                <a
                  href={p2.liveUrl || p2.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-ink text-ivory text-xs font-medium tracking-wider uppercase transition-all duration-300 hover:bg-ink-deep hover:shadow-lg hover:shadow-ink/20 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <span>View Project</span>
                  <span className="text-amber-sun">→</span>
                </a>
                <a
                  href={p2.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-ink/20 text-xs font-medium tracking-wider uppercase text-ink hover:border-[#B88746] hover:text-[#B88746] transition-all bg-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <span>GitHub</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>
            </div>

            {/* Scientific Visualizer Artifact: Real image if available, otherwise illustrative preview */}
            <div className="lg:col-span-6">
              {p2.image ? (
                <div className="rounded-xl border border-ink/10 overflow-hidden shadow-md bg-white/80">
                  <img
                    src={p2.image}
                    alt={p2.name}
                    className="w-full h-auto object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="rounded-xl border border-ink/10 bg-[#14202D] p-6 text-ivory relative overflow-hidden shadow-xl">
                  <div className="flex justify-between items-center text-[10px] font-mono text-ivory/60 pb-3 border-b border-ivory/10">
                    <span>{p2.previewLabel || 'SIMULATION-ALCHEMIST / SIMULATION VISUALIZATION'}</span>
                    <span className="text-amber-sun font-semibold">py-pde + Pymunk</span>
                  </div>

                  <div className="py-6 flex items-center justify-center relative">
                    <svg className="w-full h-28 overflow-visible" viewBox="0 0 280 100" aria-label="Illustrative coupled simulation field">
                      <ellipse cx="140" cy="50" rx="95" ry="38" stroke="#9FC3CF" strokeDasharray="2 4" strokeOpacity="0.6" strokeWidth="0.8" />
                      <ellipse cx="140" cy="50" rx="68" ry="28" stroke="#E7C49D" strokeOpacity="0.75" strokeWidth="1.2" />
                      <ellipse cx="140" cy="50" rx="42" ry="18" stroke="#F1CF98" strokeOpacity="0.9" strokeWidth="1.5" />
                      <path d="M40 70 Q 100 10, 140 50 T 240 30" fill="none" stroke="#FFFFFF" strokeDasharray="4 4" strokeOpacity="0.4" strokeWidth="1" />
                      <path d="M60 30 Q 120 90, 160 50 T 220 70" fill="none" stroke="#E7C49D" strokeOpacity="0.5" strokeWidth="0.8" />
                      <circle cx="95" cy="45" fill="#E7C49D" r="3" />
                      <circle cx="140" cy="50" fill="#FFFFFF" r="4" />
                      <circle cx="185" cy="55" fill="#9FC3CF" r="3" />
                      <circle cx="210" cy="38" fill="#E7C49D" r="2.5" />
                    </svg>
                  </div>

                  <div className="text-[10px] font-mono text-ivory/70 flex justify-between pt-2 border-t border-ivory/10">
                    <span>Coupled PDE Integrator</span>
                    <span className="text-water-pale">Multi-Agent Emergence</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>

        {/* ======================================================== */}
        {/* LANDMARK 03: THE SIX YARDS (Staggered Offset to Right) */}
        {/* ======================================================== */}
        <article className="w-full lg:w-11/12 ml-auto relative rounded-2xl border border-ink/10 backdrop-blur-md p-8 md:p-10 transition-all duration-500 hover:shadow-xl hover:shadow-amber-gold/10 overflow-hidden bg-white/45">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5 lg:order-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-ink-muted">
                  03 / SECONDARY LANDMARK
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-sun" />
                <span className="text-[11px] tracking-widest text-ink-light uppercase">
                  {p3.category}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-3xl sm:text-4xl font-editorial-serif text-ink tracking-tight font-normal">
                  {p3.name}
                </h3>
                <p className="text-ink-muted text-sm sm:text-base leading-relaxed">
                  {p3.description}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-ink-light block mb-1.5">
                  Frontend Architecture
                </span>
                <p className="text-xs font-mono text-ink-deep/80 bg-white/60 p-2.5 rounded-md border border-ink/5">
                  {Array.isArray(p3.technologies) ? p3.technologies.join(' · ') : p3.technologies}
                </p>
              </div>

              <div className="pt-3 flex items-center gap-4">
                <a
                  href={p3.liveUrl || p3.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-ink text-ivory text-xs font-medium tracking-wider uppercase transition-all duration-300 hover:bg-ink-deep hover:shadow-lg hover:shadow-ink/20 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <span>View Live</span>
                  <span className="text-amber-sun">→</span>
                </a>
                <a
                  href={p3.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-ink/20 text-xs font-medium tracking-wider uppercase text-ink hover:border-[#B88746] hover:text-[#B88746] transition-all bg-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <span>GitHub</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>
            </div>

            {/* Editorial Vignette Display: Real image if available, otherwise illustrative preview */}
            <div className="lg:col-span-6 lg:order-1">
              {p3.image ? (
                <div className="rounded-xl border border-ink/10 overflow-hidden shadow-md bg-white/80">
                  <img
                    src={p3.image}
                    alt="The Six Yards — Contemporary saree collection and e-commerce storefront hero"
                    className="w-full h-auto block rounded-xl"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ) : (
                <div className="rounded-xl border border-ink/10 bg-white/80 p-6 space-y-4 backdrop-blur-md shadow-inner">
                  <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-ink-muted border-b border-ink/10 pb-3">
                    <span className="font-mono">{p3.previewLabel || 'THE SIX YARDS / COMMERCE PREVIEW'}</span>
                    <span className="font-mono">Editorial Collection</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="bg-amber-gold/15 rounded-lg p-3.5 border border-amber-gold/25 flex flex-col justify-between h-32">
                      <span className="text-[9px] uppercase tracking-wider text-ink-light font-medium">Textile Heritage</span>
                      <div>
                        <div className="font-serif text-base text-ink font-medium">Chanderi Silk</div>
                        <div className="text-[10px] text-ink-muted font-mono mt-0.5">Handcrafted Handloom</div>
                      </div>
                    </div>

                    <div className="bg-water-mist/15 rounded-lg p-3.5 border border-water-mist/25 flex flex-col justify-between h-32">
                      <span className="text-[9px] uppercase tracking-wider text-ink-light font-medium">Artisan Weave</span>
                      <div>
                        <div className="font-serif text-base text-ink font-medium">Kanjivaram Gold</div>
                        <div className="text-[10px] text-ink-muted font-mono mt-0.5">Bespoke Collection</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[10px] font-mono text-ink-muted pt-2 border-t border-ink/5">
                    <span>Client State: Cart Context</span>
                    <span className="text-ink-deep font-semibold">React Router Navigation</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>

      </div>

      {/* Atmospheric Horizon Divider */}
      <div aria-hidden="true" className="w-full py-6 flex justify-center">
        <div className="w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-ink/15 to-transparent" />
      </div>

      {/* Chapter Footer */}
      <footer className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] tracking-[0.2em] uppercase text-ink-muted">
        <div className="flex items-center gap-2">
          <span className="text-amber-accent">✦</span>
          <span className="font-light">Built with purpose and precision</span>
        </div>

        <button
          onClick={() => scrollToChapter('golden-hour')}
          className="group flex items-center gap-2 text-ink hover:text-ink-deep transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm py-1 px-2"
        >
          <span className="tracking-[0.22em] font-medium">CONTINUE TO SUNSET · CHAPTER 05</span>
          <span className="inline-block transition-transform duration-300 group-hover:translate-y-0.5 text-amber-accent">↓</span>
        </button>
      </footer>
    </section>
  );
}

export default React.memo(ProjectsChapter);
