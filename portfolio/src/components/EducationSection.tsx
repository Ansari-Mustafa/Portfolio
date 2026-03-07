'use client';

import { useRef, useMemo } from 'react';
import { useInView } from '@/hooks/useInView';
import { education } from '@/data/education';

export default function EducationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const options = useMemo(() => ({ threshold: 0.2 }), []);
  const isInView = useInView(sectionRef, options);

  return (
    <section
      id="education"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 section-dark"
    >
      <div ref={sectionRef} className="w-full max-w-5xl mx-auto">
        <h2
          className="font-bold tracking-tight mb-12 md:mb-16 transition-all duration-700 ease-out"
          style={{
            fontSize: 'clamp(36px, 7vw, 56px)',
            fontFamily: 'var(--font-sans)',
            color: '#FAFAFA',
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          EDUCATION
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {education.map((entry, index) => (
            <div
              key={entry.id}
              className="relative p-8 rounded-lg transition-all duration-800 ease-out"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${200 + index * 200}ms`,
              }}
            >
              {/* Badge */}
              <span
                className="inline-block px-3 py-1 text-xs uppercase tracking-widest rounded-full mb-4"
                style={{
                  fontFamily: 'var(--font-mono)',
                  backgroundColor: entry.isCurrent
                    ? 'rgba(255, 107, 53, 0.15)'
                    : 'rgba(255, 210, 63, 0.15)',
                  color: entry.isCurrent ? '#FF6B35' : '#FFD23F',
                  border: `1px solid ${entry.isCurrent ? 'rgba(255, 107, 53, 0.3)' : 'rgba(255, 210, 63, 0.3)'}`,
                }}
              >
                {entry.badge}
              </span>

              {/* Institution */}
              <h3
                className="text-2xl md:text-3xl font-bold"
                style={{ fontFamily: 'var(--font-sans)', color: '#FAFAFA' }}
              >
                {entry.school}
              </h3>

              {/* Degree */}
              <p
                className="text-lg md:text-xl mt-2"
                style={{ fontFamily: 'var(--font-sans)', color: '#FF6B35' }}
              >
                {entry.degree}
              </p>

              {/* Details */}
              <p
                className="mt-3 text-sm leading-relaxed whitespace-pre-line"
                style={{ color: '#737373', fontFamily: 'var(--font-sans)' }}
              >
                {entry.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
