'use client';

import { useEffect, useState } from 'react';

const SECTION_IDS = [
  'hero',
  'bio',
  'roles',
  'products',
  'experience',
  'achievements',
  'education',
  'contact',
];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        let activeIdx = 0;
        const trigger = window.innerHeight * 0.4;

        for (let i = 0; i < SECTION_IDS.length; i++) {
          const el = document.getElementById(SECTION_IDS[i]);
          if (!el) continue;
          // Last section whose top has scrolled past 40% of viewport
          if (el.getBoundingClientRect().top <= trigger) {
            activeIdx = i;
          }
        }

        setActiveSection(activeIdx);
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { activeSection, sectionIds: SECTION_IDS };
}
