'use client';

import { useRef, useMemo, useState, useEffect, useCallback } from 'react';
import { useInView } from '@/hooks/useInView';
import { siteConfig } from '@/data/site';

export default function BioSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const quoteOptions = useMemo(() => ({ threshold: 0.3 }), []);
  const bioOptions = useMemo(() => ({ threshold: 0.2 }), []);
  const statsOptions = useMemo(() => ({ threshold: 0.3 }), []);

  const quoteInView = useInView(quoteRef, quoteOptions);
  const bioInView = useInView(bioRef, bioOptions);
  const statsInView = useInView(statsRef, statsOptions);

  return (
    <section
      id="bio"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 section-light"
    >
      <div className="max-w-[700px] w-full mx-auto flex flex-col items-center gap-10">
        {/* Quote */}
        <div
          ref={quoteRef}
          className="transition-all duration-1000 ease-out"
          style={{
            opacity: quoteInView ? 1 : 0.3,
            transform: quoteInView ? 'scale(1)' : 'scale(0.9)',
          }}
        >
          <blockquote
            className="text-center font-bold leading-tight"
            style={{
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontFamily: 'var(--font-sans)',
              color: '#0A0A0A',
            }}
          >
            &ldquo;I build AI systems that actually ship.&rdquo;
          </blockquote>
        </div>

        {/* Bio paragraph */}
        <div
          ref={bioRef}
          className="transition-all duration-800 ease-out"
          style={{
            opacity: bioInView ? 1 : 0,
            transform: bioInView ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '200ms',
          }}
        >
          <p
            className="text-center leading-relaxed"
            style={{
              fontSize: '18px',
              fontFamily: 'var(--font-sans)',
              color: '#737373',
            }}
          >
            {siteConfig.heroBio}
          </p>
        </div>

        {/* Stats row */}
        <div
          ref={statsRef}
          className="flex flex-wrap justify-center gap-8 md:gap-12 mt-4"
        >
          {siteConfig.stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center transition-all duration-700 ease-out"
              style={{
                opacity: statsInView ? 1 : 0,
                transform: statsInView ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${300 + index * 100}ms`,
              }}
            >
              <div
                className="text-3xl md:text-4xl font-bold"
                style={{ color: '#FF6B35', fontFamily: 'var(--font-sans)' }}
              >
                {stat.countTo ? (
                  <AnimatedCounter
                    target={stat.countTo}
                    suffix="+"
                    active={statsInView}
                  />
                ) : (
                  stat.value
                )}
              </div>
              <div
                className="text-xs uppercase tracking-wider mt-1"
                style={{ color: '#737373', fontFamily: 'var(--font-mono)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({
  target,
  suffix,
  active,
}: {
  target: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  const animate = useCallback(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const duration = 1200;
    const stepTime = Math.max(Math.floor(duration / target), 60);
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= target) clearInterval(timer);
    }, stepTime);
  }, [target]);

  useEffect(() => {
    if (active) animate();
  }, [active, animate]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}
