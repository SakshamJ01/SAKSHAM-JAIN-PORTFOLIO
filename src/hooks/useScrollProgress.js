import { useState, useEffect, useCallback, useRef } from 'react';
import { CHAPTERS } from '../data/portfolioData';

/**
 * Unified scroll progress and chapter synchronizer.
 * Uses requestAnimationFrame throttling for optimal performance.
 * Single source of truth for navigation, timestamps, and environment progression.
 */
export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const tickingRef = useRef(false);

  const updateScrollState = useCallback(() => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) {
      setScrollProgress(0);
      setActiveChapterIndex(0);
      tickingRef.current = false;
      return;
    }

    const currentScroll = window.scrollY;
    const progress = Math.min(Math.max(currentScroll / totalHeight, 0), 1);
    setScrollProgress(progress);

    // Precise section threshold detection
    const chapterIds = CHAPTERS.map(ch => ch.id);
    const viewportTrigger = currentScroll + window.innerHeight * 0.45;

    let currentIndex = 0;

    // Check if scrolled near the very bottom (Moonlight / Contact)
    if (progress >= 0.92 || (window.innerHeight + currentScroll >= document.documentElement.scrollHeight - 60)) {
      currentIndex = 5; // 06 - MOONLIGHT / CONTACT
    } else {
      for (let i = chapterIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(chapterIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (viewportTrigger >= top) {
            currentIndex = i;
            break;
          }
        }
      }
    }

    setActiveChapterIndex(currentIndex);
    tickingRef.current = false;
  }, []);

  const handleScroll = useCallback(() => {
    if (!tickingRef.current) {
      tickingRef.current = true;
      requestAnimationFrame(updateScrollState);
    }
  }, [updateScrollState]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    updateScrollState();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll, updateScrollState]);

  const scrollToChapter = useCallback((chapterId) => {
    const element = document.getElementById(chapterId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 70,
        behavior: 'smooth'
      });
    }
  }, []);

  const activeChapter = CHAPTERS[activeChapterIndex] || CHAPTERS[0];

  return {
    scrollProgress,
    activeChapterIndex,
    activeChapter,
    scrollToChapter
  };
}
