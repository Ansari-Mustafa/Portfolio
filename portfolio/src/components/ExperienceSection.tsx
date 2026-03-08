'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { experience } from '@/data/experience';

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const container = containerRef.current;
          if (!container) {
            ticking = false;
            return;
          }

          const rect = container.getBoundingClientRect();
          const containerHeight = container.offsetHeight;
          const viewportHeight = window.innerHeight;
          const scrollableDistance = containerHeight - viewportHeight;

          const progress = Math.min(
            1,
            Math.max(0, -rect.top / scrollableDistance)
          );

          // Map progress to which entry to show
          const index = Math.min(
            experience.length - 1,
            Math.floor(progress * experience.length)
          );
          setActiveIndex(index);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // Convert horizontal scroll/trackpad swipe into vertical scroll
  useEffect(() => {
    if (isMobile) return;
    const sticky = stickyRef.current;
    if (!sticky) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;

      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      if (rect.top > 0 || rect.bottom < window.innerHeight) return;

      e.preventDefault();
      window.scrollBy({ top: e.deltaX, behavior: 'instant' });
    };

    sticky.addEventListener('wheel', handleWheel, { passive: false });
    return () => sticky.removeEventListener('wheel', handleWheel);
  }, [isMobile]);

  // Mobile: show all entries stacked
  if (isMobile) {
    return (
      <section id="experience" className="section-dark px-6 py-20">
        <div className="max-w-lg mx-auto">
          <h2
            className="font-bold tracking-tight mb-12"
            style={{
              fontSize: 'clamp(36px, 8vw, 64px)',
              fontFamily: 'var(--font-sans)',
              color: '#FAFAFA',
            }}
          >
            EXPERIENCE
          </h2>
          <div className="flex flex-col gap-10">
            {experience.map((entry) => (
              <ExperienceCard key={entry.id} entry={entry} isActive />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop: sticky swapping entries
  const activeEntry = experience[activeIndex];

  return (
    <div
      ref={containerRef}
      id="experience"
      style={{ height: '350vh' }}
      className="relative section-dark"
    >
      <div ref={stickyRef} className="sticky top-0 h-screen overflow-hidden flex items-center justify-center px-6">
        <div className="w-full max-w-5xl mx-auto relative">
          {/* Background watermark */}
          <div
            className="absolute -top-12 -left-4 select-none pointer-events-none transition-opacity duration-500"
            style={{
              fontSize: 'clamp(120px, 20vw, 240px)',
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              color: 'rgba(250, 250, 250, 0.03)',
              lineHeight: 1,
            }}
          >
            {activeEntry.period.split(' ')[0]}
          </div>

          {/* Section title */}
          <h2
            className="font-bold tracking-tight mb-10"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontFamily: 'var(--font-sans)',
              color: '#FAFAFA',
            }}
          >
            EXPERIENCE
          </h2>

          {/* Progress dots */}
          <div className="flex gap-3 mb-8">
            {experience.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show ${experience[index].role} at ${experience[index].company}`}
                className="h-1 rounded-full transition-all duration-500 cursor-pointer"
                onClick={() => {
                  const container = containerRef.current;
                  if (!container) return;
                  const scrollableDistance = container.offsetHeight - window.innerHeight;
                  const targetScroll = container.offsetTop + (index / experience.length) * scrollableDistance + 1;
                  window.scrollTo({ top: targetScroll, behavior: 'smooth' });
                }}
                style={{
                  width: activeIndex === index ? '48px' : '24px',
                  backgroundColor:
                    activeIndex === index
                      ? '#FF6B35'
                      : 'rgba(250, 250, 250, 0.15)',
                  border: 'none',
                  padding: 0,
                }}
              />
            ))}
          </div>

          {/* Active entry */}
          <div className="relative">
            {experience.map((entry, index) => (
              <div
                key={entry.id}
                className="transition-all duration-600 ease-out"
                style={{
                  position: index === activeIndex ? 'relative' : 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  opacity: index === activeIndex ? 1 : 0,
                  transform:
                    index === activeIndex
                      ? 'translateY(0)'
                      : 'translateY(20px)',
                  pointerEvents: index === activeIndex ? 'auto' : 'none',
                }}
              >
                <ExperienceCard entry={entry} isActive={index === activeIndex} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({
  entry,
  isActive,
}: {
  entry: (typeof experience)[0];
  isActive: boolean;
}) {
  return (
    <div
      className="transition-all duration-500"
      style={{ opacity: isActive ? 1 : 0.5 }}
    >
      {/* Period */}
      <span
        className="text-sm uppercase tracking-widest"
        style={{ color: '#FF6B35', fontFamily: 'var(--font-mono)' }}
      >
        {entry.period}
      </span>

      {/* Role & Company with Logo */}
      <div className="flex items-center gap-4 mt-2">
        {entry.logoPath && (
          <div className="relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-white/10">
            <Image
              src={entry.logoPath}
              alt={`${entry.company} logo`}
              fill
              className="object-contain p-1"
            />
          </div>
        )}
        <div>
          <h3
            className="text-2xl md:text-3xl font-bold leading-tight"
            style={{ fontFamily: 'var(--font-sans)', color: '#FAFAFA' }}
          >
            {entry.role}
          </h3>
          <p
            className="text-lg"
            style={{ fontFamily: 'var(--font-sans)', color: '#737373' }}
          >
            {entry.company}
          </p>
        </div>
      </div>

      {/* Description */}
      <p
        className="mt-4 text-base leading-relaxed max-w-2xl"
        style={{
          fontFamily: 'var(--font-sans)',
          color: 'rgba(250, 250, 250, 0.7)',
        }}
      >
        {entry.fullDescription || entry.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-5">
        {entry.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs uppercase tracking-wider rounded-full"
            style={{
              fontFamily: 'var(--font-mono)',
              backgroundColor: 'rgba(255, 107, 53, 0.12)',
              color: '#FF6B35',
              border: '1px solid rgba(255, 107, 53, 0.2)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
