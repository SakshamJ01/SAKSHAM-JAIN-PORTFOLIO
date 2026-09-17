import React, { useState } from 'react';
import { CHAPTERS } from '../../data/portfolioData';

export default function Header({ activeChapterIndex, scrollToChapter, scrollProgress }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeChapter = CHAPTERS[activeChapterIndex] || CHAPTERS[0];
  const isNight = scrollProgress > 0.82;
  const isSunset = scrollProgress > 0.62 && scrollProgress <= 0.82;

  // Atmosphere-aware background tint to ensure content beneath never clashes
  const headerBgClass = isNight
    ? 'bg-[#050A12]/85 border-white/10'
    : isSunset
    ? 'bg-[#E8C6B7]/85 border-[#1C1A24]/10'
    : 'bg-[#FAF8F5]/85 border-[#142132]/10';

  // Atmosphere-aware text colors
  const textColorClass = isNight
    ? 'text-[#D9E3EA]'
    : isSunset
    ? 'text-[#1C1A24]'
    : 'text-[#142132]';

  const mutedTextClass = isNight
    ? 'text-[#8F9CA7]'
    : isSunset
    ? 'text-[#433D4D]'
    : 'text-[#142132]/60';

  const navLinks = [
    { label: 'ABOUT', id: 'about', chapterIndex: 1 },
    { label: 'SKILLS', id: 'skills', chapterIndex: 2 },
    { label: 'PROJECTS', id: 'projects', chapterIndex: 3 },
    { label: 'CONTACT', id: 'contact', chapterIndex: 5 },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-500 backdrop-blur-md border-b ${headerBgClass}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-5 sm:py-6 flex items-center justify-between">
        {/* Brand & Monogram */}
        <button
          onClick={() => scrollToChapter('dawn')}
          className="group flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1 text-left"
          aria-label="Saksham Jain Home"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-current/20 bg-white/40 backdrop-blur-md flex items-center justify-center p-1.5 shadow-xs group-hover:scale-105 transition-all duration-300 overflow-hidden">
            <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
              <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 3" opacity="0.4" />
              <path d="M12 18C12 14.6863 14.6863 12 18 12C21.3137 12 24 14.6863 24 18" stroke="#E8C58D" strokeWidth="2" strokeLinecap="round" />
              <circle cx="18" cy="18" r="3.5" fill="#E8C58D" />
              <path d="M10 24L18 20L26 24" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className={`font-serif tracking-[0.25em] text-xs sm:text-sm font-semibold uppercase ${textColorClass} transition-colors`}>
              Saksham Jain
            </span>
            <span className={`text-[9px] tracking-[0.32em] uppercase font-sans ${mutedTextClass} transition-colors`}>
              Portfolio
            </span>
          </div>
        </button>

        {/* Minimalist Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-9 lg:gap-11" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const isActive = activeChapterIndex === link.chapterIndex;
            return (
              <button
                key={link.id}
                onClick={() => scrollToChapter(link.id)}
                className={`text-xs uppercase tracking-[0.22em] font-sans font-medium transition-all duration-200 relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm ${
                  isActive ? textColorClass : `${mutedTextClass} hover:${textColorClass}`
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] rounded-full transition-all duration-300"
                    style={{ backgroundColor: activeChapter.accentColor }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Chapter Status Indicator & Mobile Menu Trigger */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:inline-flex items-center gap-2.5 text-[11px] font-sans tracking-[0.18em] uppercase transition-colors">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{
                backgroundColor: activeChapter.accentColor,
                boxShadow: `0 0 8px ${activeChapter.accentColor}`
              }}
            />
            <span className={`font-mono ${mutedTextClass}`}>
              CHAPTER {activeChapter.number} · {activeChapter.time}
            </span>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden w-9 h-9 rounded-full border border-current/20 bg-white/20 backdrop-blur-md flex flex-col items-center justify-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500`}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className={`w-4 h-[1.5px] ${isNight ? 'bg-white' : 'bg-navy-800'} transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`w-3 h-[1.5px] ${isNight ? 'bg-white/80' : 'bg-navy-800/70'} self-end mr-2.5 transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-4 h-[1.5px] ${isNight ? 'bg-white' : 'bg-navy-800'} transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={`md:hidden px-6 py-6 border-b ${isNight ? 'bg-[#050A12]/95 text-white border-white/10' : 'bg-[#FAF8F5]/95 text-navy-800 border-navy-800/10'} backdrop-blur-xl animate-fade-in`}>
          <div className="flex flex-col space-y-4">
            {CHAPTERS.map((ch, idx) => (
              <button
                key={ch.id}
                onClick={() => {
                  scrollToChapter(ch.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between py-2 text-left text-xs uppercase tracking-widest font-sans border-b border-current/10 ${
                  activeChapterIndex === idx ? 'font-semibold text-amber-500' : 'opacity-80'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono opacity-50">{ch.number}</span>
                  <span>{ch.label}</span>
                </div>
                <span className="text-[10px] font-mono opacity-60">{ch.time}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
