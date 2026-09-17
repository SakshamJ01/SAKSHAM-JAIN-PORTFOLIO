import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';

function HeroChapter({ scrollToChapter }) {
  return (
    <section
      id="dawn"
      className="relative min-h-[90vh] flex flex-col justify-between items-center text-center px-6 sm:px-10 py-10 sm:py-16 max-w-6xl mx-auto w-full"
      aria-label="Chapter 01: Dawn Hero"
    >
      {/* Top Spacer / Chapter Badge */}
      <div className="flex items-center justify-center gap-3 pt-4 sm:pt-8 animate-fade-in">
        <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-navy-800/30" />
        <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-navy-800/60 font-medium">
          01 / CHAPTER — DAWN
        </span>
        <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-navy-800/30" />
      </div>

      {/* Main Typography & Headline */}
      <div className="flex flex-col items-center my-auto py-8">
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-normal tracking-wide uppercase text-navy-900 leading-[1.05] drop-shadow-[0_4px_16px_rgba(20,33,50,0.04)] mb-4 sm:mb-6">
          {PERSONAL_INFO.name}
        </h1>

        {/* Supporting Title */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-3 flex-wrap mb-6 sm:mb-8 text-xs sm:text-sm md:text-base tracking-[0.18em] sm:tracking-widest2 uppercase text-navy-800/80 font-sans font-medium">
          <span>Computer Science &amp; Engineering Student</span>
          <span className="w-1 h-1 rounded-full bg-sun-gold" />
          <span className="text-navy-700">Software Developer</span>
        </div>

        {/* Delicate Division Rule */}
        <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-navy-800/30 to-transparent mb-6 sm:mb-8" />

        {/* Editorial Introduction Statement */}
        <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-navy-800/85 font-normal max-w-2xl leading-relaxed tracking-wide mb-10 sm:mb-12 drop-shadow-sm px-2">
          “{PERSONAL_INFO.tagline}”
        </p>

        {/* CTA Suite */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto justify-center">
          {/* Primary CTA: Explore My Work */}
          <button
            onClick={() => scrollToChapter('projects')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-navy-800 hover:bg-navy-900 text-ivory font-sans text-xs uppercase tracking-widest2 font-medium transition-all duration-300 shadow-[0_8px_24px_rgba(20,33,50,0.18)] hover:shadow-[0_12px_32px_rgba(20,33,50,0.28)] hover:-translate-y-0.5 group focus:outline-none focus:ring-2 focus:ring-sun-gold/50"
          >
            <span>Explore My Work</span>
            <svg
              className="w-3.5 h-3.5 text-sun-gold transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          {/* Secondary CTA: GitHub */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-transparent hover:bg-white/60 text-navy-800 font-sans text-xs uppercase tracking-widest2 font-medium border border-navy-800/20 backdrop-blur-md transition-all duration-300 hover:border-navy-800/35 hover:-translate-y-0.5 shadow-sm group focus:outline-none focus:ring-2 focus:ring-navy-800/20"
          >
            <svg className="w-4 h-4 text-navy-800 opacity-80 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span>GitHub</span>
            <svg className="w-3 h-3 text-navy-800/40 group-hover:text-navy-800 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <footer className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans text-navy-800/60 uppercase tracking-widest2 pt-6">
        <div className="flex items-center gap-2 text-[11px] font-sans tracking-[0.18em]">
          <span className="w-1.5 h-1.5 rounded-full bg-sun-gold" />
          <span>DAWN · 06:20 AM</span>
        </div>

        <button
          onClick={() => scrollToChapter('about')}
          className="flex flex-col items-center gap-2 text-navy-800/60 hover:text-navy-900 transition-colors group cursor-pointer focus:outline-none"
          aria-label="Scroll to explore About chapter"
        >
          <span className="text-[10px] tracking-cinematic font-medium uppercase">Scroll to explore</span>
          <div className="w-[1px] h-6 bg-gradient-to-b from-navy-800/40 via-navy-800/20 to-transparent group-hover:from-navy-800 transition-colors" />
        </button>

        <div className="hidden sm:flex items-center text-[11px] font-sans tracking-[0.18em] text-navy-800/40">
          <span>PORTFOLIO</span>
        </div>
      </footer>
    </section>
  );
}

export default React.memo(HeroChapter);
