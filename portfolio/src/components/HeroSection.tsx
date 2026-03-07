'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
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
          const container = containerRef.current;
          if (!container) {
            ticking = false;
            return;
          }
          const rect = container.getBoundingClientRect();
          const scrollableDistance = container.offsetHeight - window.innerHeight;
          const progress = Math.min(
            1,
            Math.max(0, -rect.top / scrollableDistance)
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

  // Eased progress for smooth animation
  const easedProgress = 1 - Math.pow(1 - scrollProgress, 2);

  // Names split vertically
  const splitAmount = easedProgress * 100;

  // Image reveal: 0% -> 50%
  const clipRadius = easedProgress * 50;

  return (
    <div
      ref={containerRef}
      id="hero"
      style={{ height: '200vh' }}
      className="relative section-dark"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center px-6">
        <div className="relative flex flex-col items-center justify-center w-full max-w-5xl mx-auto">
          {/* MUSTAFA — moves up on scroll */}
          <h1
            className="relative z-10 font-bold tracking-tighter leading-none text-center select-none"
            style={{
              fontSize: 'clamp(48px, 12vw, 120px)',
              fontFamily: 'var(--font-sans)',
              transform: `translateY(${-splitAmount}px)`,
              transition: 'transform 0.1s ease-out, opacity 0.6s ease',
              opacity: isLoaded ? 1 : 0,
            }}
          >
            MUSTAFA
          </h1>

          {/* Headshot — absolutely centered behind names, revealed by clip-path */}
          <div
            className="absolute left-1/2 top-1/2"
            style={{
              width: 'clamp(180px, 30vw, 300px)',
              height: 'clamp(180px, 30vw, 300px)',
              transform: 'translate(-50%, -50%)',
              clipPath: `circle(${clipRadius}% at 50% 50%)`,
              transition: 'clip-path 0.1s ease-out',
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

          {/* ANSARI — moves down on scroll */}
          <h1
            className="relative z-10 font-bold tracking-tighter leading-none text-center select-none"
            style={{
              fontSize: 'clamp(48px, 12vw, 120px)',
              fontFamily: 'var(--font-sans)',
              transform: `translateY(${splitAmount}px)`,
              transition: 'transform 0.1s ease-out, opacity 0.6s ease',
              opacity: isLoaded ? 1 : 0,
            }}
          >
            ANSARI
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl tracking-wide text-center"
            style={{
              fontFamily: 'var(--font-mono)',
              color: '#737373',
              opacity: isLoaded ? 1 : 0,
              transform: `translateY(${splitAmount}px)`,
              transition: 'transform 0.1s ease-out, opacity 0.7s ease 0.4s',
            }}
          >
            AI Engineer &amp; Entrepreneur
          </p>

        </div>

        {/* Scroll indicator — pinned to bottom of sticky viewport */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{
            opacity: isLoaded ? Math.max(0, 1 - scrollProgress * 4) : 0,
            transition: 'opacity 0.15s ease-out',
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
    </div>
  );
}
