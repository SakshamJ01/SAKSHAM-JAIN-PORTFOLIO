import React from 'react';
import { SKILL_GROUPS } from '../../data/portfolioData';

function SkillsChapter({ scrollToChapter }) {
  return (
    <section
      id="skills"
      className="relative min-h-[90vh] flex flex-col justify-between px-6 sm:px-12 lg:px-20 py-16 sm:py-24 max-w-7xl mx-auto w-full"
      aria-label="Chapter 03: Skills Daylight"
    >
      {/* Chapter Pre-Title & Headline Hero Area */}
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-10 lg:mb-14">
          <div className="lg:col-span-6 lg:pr-4">
            {/* Chapter Indicator Tag */}
            <div className="mb-6 sm:mb-8 flex items-center space-x-3">
              <span className="w-6 h-[1px] bg-brand-navy/20" />
              <span className="text-xs tracking-[0.25em] font-medium text-brand-navy/55 uppercase font-sans">
                03 / CHAPTER — SKILLS
              </span>
              <span className="w-6 h-[1px] bg-brand-navy/20" />
            </div>

            {/* Main Serif Editorial Display Statement */}
            <h2 className="font-serif font-editorial-serif text-5xl sm:text-6xl lg:text-7xl font-light text-brand-navy tracking-tight leading-[1.05] text-balance">
              What I work with.
            </h2>
          </div>

          {/* Subtle Supporting Statement & Quote */}
          <div className="lg:col-span-6 lg:pt-6 flex flex-col justify-end">
            <p className="font-serif italic text-xl sm:text-2xl text-brand-navy/90 font-light leading-relaxed max-w-lg">
              “Tools change. The habit of learning stays.”
            </p>
            <p className="mt-3 text-xs sm:text-sm text-brand-slate font-light leading-relaxed max-w-md">
              Architectural deliberate detail, clean systems, and disciplined craftsmanship applied from core fundamentals to full execution.
            </p>
          </div>
        </div>

        {/* Hairline Horizon Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-brand-navy/15 via-brand-amber/30 to-brand-navy/10 mb-12" />

        {/* Skills Typographic Architecture Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 lg:gap-x-14">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.number}
              className={`flex flex-col space-y-6 ${group.offset || ''}`}
            >
              <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-amber font-medium">
                <span>{group.number}</span>
                <span className="w-2 h-[1px] bg-brand-amber/60" />
                <h3 className="tracking-[0.25em] text-brand-navy/55 uppercase font-sans font-semibold text-xs">
                  {group.name}
                </h3>
              </div>

              <div className="space-y-4">
                {/* Primary Visual Anchors */}
                <div className="space-y-1.5">
                  {group.primary.map((tech) => (
                    <div
                      key={tech}
                      className="font-serif text-2xl lg:text-3xl text-brand-navy font-medium tracking-tight hover:text-brand-amber transition-colors duration-200 cursor-default"
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                {/* Secondary Technologies */}
                <div className="pt-3 border-t border-brand-navy/15 space-y-1.5">
                  {group.secondary.map((tech) => (
                    <p
                      key={tech}
                      className="text-sm font-sans text-brand-slate font-normal tracking-wide"
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Horizon Footer Surface */}
      <footer className="w-full pt-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-brand-navy/10 pt-6">
          <div className="flex items-center space-x-3 text-xs sm:text-sm font-serif italic text-brand-navy/75 tracking-wider">
            <span className="text-brand-amber font-mono not-italic text-xs">✦</span>
            <span className="tracking-wide">“Crafted through practice and curiosity”</span>
          </div>

          <button
            onClick={() => scrollToChapter('projects')}
            className="group inline-flex items-center space-x-2.5 text-[11px] tracking-[0.24em] font-medium text-brand-navy/70 hover:text-brand-navy transition-all duration-300 uppercase py-1 px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
          >
            <span>CONTINUE TO PROJECTS</span>
            <span className="transform transition-transform duration-300 group-hover:translate-y-1 text-xs">↓</span>
          </button>
        </div>
      </footer>
    </section>
  );
}

export default React.memo(SkillsChapter);
