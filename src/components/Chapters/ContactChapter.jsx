import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';

function ContactChapter({ scrollToChapter }) {
  return (
    <section
      id="contact"
      className="relative min-h-[90vh] flex flex-col justify-between items-center text-center px-6 md:px-12 py-16 sm:py-24 max-w-5xl mx-auto w-full text-moonlight select-none"
      aria-label="Chapter 06: Contact Moonlight"
    >
      {/* Chapter Sub-badge with Hairlines */}
      <div className="flex items-center justify-center gap-3.5 mb-7 w-full">
        <span aria-hidden="true" className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent via-white/25 to-white/10" />
        <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#9EACB8] font-medium">
          06 / NIGHT — CONTACT
        </p>
        <span aria-hidden="true" className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent via-white/25 to-white/10" />
      </div>

      {/* Main Headline & Supporting Text */}
      <div className="my-auto py-8 max-w-3xl flex flex-col items-center">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] text-[#FBF9FA] font-normal leading-[1.12] tracking-tight mb-5">
          Let’s keep <span className="italic font-light text-moonlight">building.</span>
        </h2>

        <p className="text-sm md:text-base text-[#B3C0CB] font-light max-w-[560px] leading-relaxed tracking-wide mb-10">
          I’m always interested in learning, experimenting, and turning interesting ideas into working software.
        </p>

        {/* Primary Action Buttons Suite */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto justify-center">
          {/* Primary Action: Get in touch */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs font-medium uppercase tracking-widest bg-moonlight text-navy-950 rounded-full hover:bg-white transition-all duration-300 shadow-[0_4px_24px_rgba(217,227,234,0.18)] hover:shadow-[0_6px_30px_rgba(255,255,255,0.28)] transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-moonlight/60"
          >
            Get in touch
          </a>

          {/* Secondary Action: GitHub */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-medium uppercase tracking-widest text-moonlight border border-white/20 hover:border-white/40 hover:text-white rounded-full transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-moonlight/60"
          >
            <span>View GitHub</span>
            <svg aria-hidden="true" className="w-3.5 h-3.5 opacity-80" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" fillRule="evenodd" />
            </svg>
          </a>
        </div>

        {/* Restrained Direct Contact Channels */}
        <div className="pt-8 border-t border-white/10 w-full max-w-xl flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] tracking-widest text-[#93A2B0]">
          {/* Email */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-white transition-colors duration-200 flex items-center gap-1.5 group focus:outline-none focus-visible:ring-1 focus-visible:ring-moonlight/60 rounded-xs"
          >
            <span className="text-[#E5A962] text-xs group-hover:translate-x-0.5 transition-transform duration-200">@</span>
            <span className="font-normal text-[#C4D0DB] group-hover:text-white">{PERSONAL_INFO.email}</span>
          </a>

          <span className="hidden sm:inline text-white/20 font-thin">|</span>

          {/* GitHub Profile */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200 flex items-center gap-1 group focus:outline-none focus-visible:ring-1 focus-visible:ring-moonlight/60 rounded-xs"
          >
            <span>github.com/SakshamJ01</span>
            <span className="text-[9px] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
          </a>

          {PERSONAL_INFO.linkedin && PERSONAL_INFO.linkedin !== '#' && (
            <>
              <span className="hidden sm:inline text-white/20 font-thin">|</span>

              {/* LinkedIn Profile */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200 flex items-center gap-1 group focus:outline-none focus-visible:ring-1 focus-visible:ring-moonlight/60 rounded-xs"
              >
                <span>LinkedIn</span>
                <span className="text-[9px] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
              </a>
            </>
          )}

          <span className="hidden sm:inline text-white/20 font-thin">|</span>

          {/* Location */}
          <div className="w-full text-center mt-2">
            <p className="text-[10px] uppercase tracking-widest text-[#788896]">
              Based in {PERSONAL_INFO.location} <span className="text-white/30 mx-1">·</span> {PERSONAL_INFO.timezone}
            </p>
          </div>
        </div>
      </div>

      {/* Horizon Line Footer */}
      <footer className="w-full border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-ultra text-[#7A8A99]">
        {/* Place & Philosophy */}
        <div className="flex items-center gap-2">
          <span className="text-white/60">Jaipur, India</span>
          <span className="text-white/20">·</span>
          <span className="text-[#8999A8]">Crafted with purpose &amp; restraint</span>
        </div>

        {/* Center: Return to Dawn */}
        <button
          onClick={() => scrollToChapter('dawn')}
          className="group flex items-center gap-1 text-starlight hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-moonlight/60 rounded-xs py-1 px-2"
          aria-label="Return to top of page — Dawn"
        >
          <span>Journey Concluded · Dawn to Moonlight</span>
          <span className="group-hover:-translate-y-0.5 transition-transform duration-200 text-[#E5A962]">↑</span>
        </button>

        {/* Horizon Indicator */}
        <div className="flex items-center gap-2 font-mono text-[9px] tracking-wider text-[#6B7C8C]">
          <span>HORIZON: CALM</span>
          <span className="text-white/20">/</span>
          <span>CHAPTER 06 · MOONLIGHT</span>
        </div>
      </footer>
    </section>
  );
}

export default React.memo(ContactChapter);
