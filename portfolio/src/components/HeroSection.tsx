'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const section = sectionRef.current;
          if (!section) {
            ticking = false;
            return;
          }
          const rect = section.getBoundingClientRect();
          const sectionHeight = section.offsetHeight;
          // Progress from 0 (section at top) to 1 (section scrolled away)
          const progress = Math.min(
            1,
            Math.max(0, -rect.top / sectionHeight)
          );
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clip-path for headshot reveal: 8% -> 45%
  const clipRadius = 8 + scrollProgress * 37;
  // Text split: MUSTAFA slides left, ANSARI slides right
  const slideAmount = scrollProgress * 60;

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 overflow-hidden section-dark"
    >
      <div className="relative flex flex-col items-center justify-center w-full max-w-5xl mx-auto">
        {/* MUSTAFA */}
        <h1
          className="font-bold tracking-tighter leading-none text-center select-none transition-transform duration-100 ease-out"
          style={{
            fontSize: 'clamp(48px, 12vw, 120px)',
            fontFamily: 'var(--font-sans)',
            transform: `translateX(${-slideAmount}px)`,
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.6s ease, transform 0.1s ease-out',
          }}
        >
          MUSTAFA
        </h1>

        {/* Headshot centered between the names */}
        <div
          className="relative my-4 md:my-6 transition-all duration-200 ease-out"
          style={{
            width: 'clamp(180px, 30vw, 300px)',
            height: 'clamp(180px, 30vw, 300px)',
            clipPath: `circle(${clipRadius}% at 50% 50%)`,
          }}
        >
          <Image
            src="/images/main-img.png"
            alt="Mustafa Ansari"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* ANSARI */}
        <h1
          className="font-bold tracking-tighter leading-none text-center select-none transition-transform duration-100 ease-out"
          style={{
            fontSize: 'clamp(48px, 12vw, 120px)',
            fontFamily: 'var(--font-sans)',
            transform: `translateX(${slideAmount}px)`,
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.6s ease, transform 0.1s ease-out',
          }}
        >
          ANSARI
        </h1>

        {/* Subtitle */}
        <p
          className="mt-8 text-lg md:text-xl tracking-wide text-center transition-opacity duration-700"
          style={{
            fontFamily: 'var(--font-mono)',
            color: '#737373',
            opacity: isLoaded ? 1 : 0,
            transitionDelay: '0.4s',
          }}
        >
          AI Engineer &amp; Entrepreneur
        </p>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-700"
          style={{
            opacity: isLoaded ? 1 : 0,
            transitionDelay: '0.8s',
          }}
        >
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: '#737373', fontFamily: 'var(--font-mono)' }}
          >
            Scroll
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="animate-bounce-down"
          >
            <path
              d="M10 4v12M4 10l6 6 6-6"
              stroke="#737373"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
