'use client';

import { useRef, useMemo } from 'react';
import { useInView } from '@/hooks/useInView';
import { roles } from '@/data/roles';

export default function RolesSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const titleOptions = useMemo(() => ({ threshold: 0.3 }), []);
  const cardsOptions = useMemo(() => ({ threshold: 0.15 }), []);

  const titleInView = useInView(titleRef, titleOptions);
  const cardsInView = useInView(cardsRef, cardsOptions);

  // Show first 3 roles
  const displayRoles = roles.slice(0, 3);

  return (
    <section
      id="roles"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 section-dark"
    >
      <div className="w-full max-w-5xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className="mb-12 md:mb-16 transition-all duration-800 ease-out"
          style={{
            opacity: titleInView ? 1 : 0,
            transform: titleInView ? 'translateX(0)' : 'translateX(-80px)',
          }}
        >
          <h2
            className="font-bold tracking-tight"
            style={{
              fontSize: 'clamp(36px, 7vw, 64px)',
              fontFamily: 'var(--font-sans)',
              color: '#FAFAFA',
            }}
          >
            CURRENT ROLES
          </h2>
        </div>

        {/* Role cards */}
        <div ref={cardsRef} className="flex flex-col gap-6">
          {displayRoles.map((role, index) => (
            <div
              key={role.id}
              className="relative pl-6 py-6 pr-6 rounded-lg transition-all duration-700 ease-out"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderLeft: '4px solid #FF6B35',
                opacity: cardsInView ? 1 : 0,
                transform: cardsInView
                  ? 'translateX(0)'
                  : 'translateX(80px)',
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Tag */}
              <span
                className="text-xs uppercase tracking-widest"
                style={{ color: '#FF6B35', fontFamily: 'var(--font-mono)' }}
              >
                {role.tag}
              </span>

              {/* Title & Company */}
              <h3
                className="text-xl md:text-2xl font-bold mt-2"
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: '#FAFAFA',
                }}
              >
                {role.isStealth ? 'Stealth Startup' : role.title}
              </h3>
              <p
                className="text-base md:text-lg mt-1"
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: '#737373',
                }}
              >
                {role.company}
              </p>

              {/* Description */}
              <p
                className="mt-3 text-sm md:text-base leading-relaxed"
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: 'rgba(250, 250, 250, 0.7)',
                }}
              >
                {role.description}
              </p>

              {/* Highlight */}
              {role.highlight && (
                <p
                  className="mt-2 text-sm font-semibold"
                  style={{ color: '#FFD23F', fontFamily: 'var(--font-mono)' }}
                >
                  {role.highlight}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
