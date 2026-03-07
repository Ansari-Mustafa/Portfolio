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
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id, index) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(index);
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return { activeSection, sectionIds: SECTION_IDS };
}
