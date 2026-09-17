import React from 'react';
import { useScrollProgress } from './hooks/useScrollProgress';
import ContinuousLandscape from './components/Landscape/ContinuousLandscape';
import Header from './components/Navigation/Header';
import HeroChapter from './components/Chapters/HeroChapter';
import AboutChapter from './components/Chapters/AboutChapter';
import SkillsChapter from './components/Chapters/SkillsChapter';
import ProjectsChapter from './components/Chapters/ProjectsChapter';
import GoldenHourChapter from './components/Chapters/GoldenHourChapter';
import ContactChapter from './components/Chapters/ContactChapter';

export default function App() {
  const { scrollProgress, activeChapterIndex, activeChapter, scrollToChapter } = useScrollProgress();

  return (
    <div className="relative min-h-screen selection:bg-brand-gold/30 selection:text-brand-navy">
      {/* 1. Persistent Continuous Landscape Layer (Sky, Sun, Moon, Stars, Water, Atmosphere) */}
      <ContinuousLandscape scrollProgress={scrollProgress} />

      {/* 2. Global Editorial Header Navigation */}
      <Header
        activeChapterIndex={activeChapterIndex}
        scrollToChapter={scrollToChapter}
        scrollProgress={scrollProgress}
      />

      {/* 3. Main Chapter Flow (Continuous Scroll Journey) */}
      <main className="relative z-20 w-full flex flex-col space-y-12 sm:space-y-20">
        {/* Chapter 01: Dawn · 06:20 AM */}
        <HeroChapter scrollToChapter={scrollToChapter} />

        {/* Chapter 02: Morning · 07:45 AM */}
        <AboutChapter scrollToChapter={scrollToChapter} />

        {/* Chapter 03: Daylight · 10:15 AM */}
        <SkillsChapter scrollToChapter={scrollToChapter} />

        {/* Chapter 04: Late Afternoon · 04:30 PM */}
        <ProjectsChapter scrollToChapter={scrollToChapter} />

        {/* Chapter 05: Golden Hour / Sunset · 06:15 PM */}
        <GoldenHourChapter scrollToChapter={scrollToChapter} scrollProgress={scrollProgress} />

        {/* Chapter 06: Moonlight · 10:45 PM */}
        <ContactChapter scrollToChapter={scrollToChapter} />
      </main>
    </div>
  );
}
