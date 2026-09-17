import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';

function AboutChapter({ scrollToChapter }) {
  return (
    <section
      id="about"
      className="relative min-h-[90vh] flex flex-col justify-between px-6 sm:px-12 lg:px-20 py-16 sm:py-24 max-w-7xl mx-auto w-full"
      aria-label="Chapter 02: About Morning"
    >
      {/* Chapter Pre-Title Tag */}
      <div className="mb-8 lg:mb-12 flex items-center space-x-3">
        <span className="text-xs tracking-[0.25em] font-medium text-brand-navy/60 uppercase font-sans">
          02 / CHAPTER
        </span>
        <span className="w-6 h-[1px] bg-brand-navy/20" />
        <span className="text-xs tracking-[0.25em] font-medium text-brand-amber uppercase font-sans">
          ABOUT
        </span>
      </div>

      {/* Main Editorial Statement Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column: Primary Manifesto Serif Statement */}
        <div className="lg:col-span-6 lg:pr-4">
          <h2 className="font-serif font-editorial-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.08] text-brand-navy tracking-tight text-balance">
            I like <span className="italic font-normal text-brand-navy/95">building</span> things.
          </h2>
          <p className="mt-4 font-serif italic text-xl sm:text-2xl text-brand-slate/90 font-light tracking-wide">
            {PERSONAL_INFO.aboutManifesto}
          </p>
        </div>

        {/* Right Column: Narrative Copy with Generous Breathing Space */}
        <div className="lg:col-span-6 lg:pt-2">
          <p className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-brand-navy/80 max-w-xl">
            I’m a Computer Science &amp; Engineering student at{' '}
            <span className="text-brand-navy font-medium border-b border-brand-amber/40 pb-0.5">
              {PERSONAL_INFO.institution}
            </span>{' '}
            who learns by creating. I enjoy turning ideas into working software, experimenting with new technologies, and understanding how systems work beneath the surface.
          </p>
          <p className="mt-4 text-sm sm:text-base font-normal leading-relaxed text-brand-navy/65 max-w-lg">
            {PERSONAL_INFO.aboutParagraph2}
          </p>
        </div>
      </div>

      {/* Structured Understated Information Blocks */}
      <div className="mt-16 sm:mt-20 lg:mt-24 pt-10 border-t border-brand-navy/15">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {/* Block 01: Education */}
          <div className="flex flex-col space-y-2 group">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-amber font-medium">
              <span>01</span>
              <span className="w-2 h-[1px] bg-brand-amber/60" />
              <span className="tracking-[0.25em] text-brand-navy/55 uppercase font-sans font-semibold">
                EDUCATION
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-medium text-brand-navy leading-snug">
              B.Tech — Computer Science &amp; Engineering
            </h3>
            <div className="text-sm text-brand-navy/70 font-normal">
              {PERSONAL_INFO.institution}
            </div>
            <span className="text-xs font-mono text-brand-navy/45 tracking-wider pt-1">
              2025 — 2029 (Expected)
            </span>
          </div>

          {/* Block 02: Focus */}
          <div className="flex flex-col space-y-2 group">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-amber font-medium">
              <span>02</span>
              <span className="w-2 h-[1px] bg-brand-amber/60" />
              <span className="tracking-[0.25em] text-brand-navy/55 uppercase font-sans font-semibold">
                FOCUS
              </span>
            </div>
            <ul className="space-y-1.5 text-base sm:text-lg font-normal text-brand-navy leading-snug">
              <li className="flex items-center space-x-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-slate/40" />
                <span>Software Development</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-slate/40" />
                <span>Full-Stack Development</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-slate/40" />
                <span>AI &amp; Experiments</span>
              </li>
            </ul>
          </div>

          {/* Block 03: Location & Coordinates */}
          <div className="flex flex-col space-y-2 group">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-amber font-medium">
              <span>03</span>
              <span className="w-2 h-[1px] bg-brand-amber/60" />
              <span className="tracking-[0.25em] text-brand-navy/55 uppercase font-sans font-semibold">
                BASED IN
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-medium text-brand-navy leading-snug">
              {PERSONAL_INFO.location}
            </h3>
            <p className="text-sm text-brand-navy/70 leading-relaxed font-normal">
              Available globally for remote collaboration
            </p>
            <span className="text-xs font-mono text-brand-navy/45 tracking-wider pt-1">
              {PERSONAL_INFO.timezone} · {PERSONAL_INFO.coordinates}
            </span>
          </div>
        </div>
      </div>

      {/* Horizon Footer Surface */}
      <footer className="w-full pt-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-brand-navy/10 pt-6">
          <div className="flex items-center space-x-3 text-xs sm:text-sm font-serif italic text-brand-navy/75 tracking-wider">
            <span className="text-brand-amber font-mono not-italic text-xs">✦</span>
            <span className="tracking-wide">“Build → Break → Understand → Build Again”</span>
          </div>

          <button
            onClick={() => scrollToChapter('skills')}
            className="group inline-flex items-center space-x-2.5 text-[11px] tracking-[0.24em] font-medium text-brand-navy/70 hover:text-brand-navy transition-all duration-300 uppercase py-1 px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
          >
            <span>CONTINUE TO SKILLS</span>
            <span className="transform transition-transform duration-300 group-hover:translate-y-1 text-xs">↓</span>
          </button>
        </div>
      </footer>
    </section>
  );
}

export default React.memo(AboutChapter);
