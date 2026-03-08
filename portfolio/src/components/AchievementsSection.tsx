'use client';

import { useRef, useMemo } from 'react';
import Link from 'next/link';
import { useInView } from '@/hooks/useInView';
import { achievements } from '@/data/achievements';

const ACHIEVEMENT_BADGES = [
  { big: 'TOP 3', subtitle: 'Final Year Project', href: '/projects#fyp' },
  { big: '1ˢᵗ PLACE', subtitle: 'Robotics Competition - Winner', href: '/projects#robotics' },
  { big: '#2/104', subtitle: 'Class Rank', href: '/projects' },
];

export default function AchievementsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const options = useMemo(() => ({ threshold: 0.2 }), []);
  const isInView = useInView(sectionRef, options);

  return (
    <section
      id="achievements"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 section-light"
    >
      <div ref={sectionRef} className="w-full max-w-5xl mx-auto">
        <h2
          className="font-bold tracking-tight mb-16 text-center transition-all duration-700 ease-out"
          style={{
            fontSize: 'clamp(36px, 7vw, 56px)',
            fontFamily: 'var(--font-sans)',
            color: '#0A0A0A',
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          ACADEMIC ACHIEVEMENTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {achievements.map((achievement, index) => (
            <Link
              key={achievement.id}
              href={ACHIEVEMENT_BADGES[index]?.href || '/projects'}
              className="text-center transition-all duration-800 ease-out group cursor-pointer"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${200 + index * 200}ms`,
              }}
            >
              {/* Big badge */}
              <div
                className="font-bold leading-none group-hover:scale-105 transition-transform duration-300"
                style={{
                  fontSize: 'clamp(40px, 8vw, 80px)',
                  fontFamily: 'var(--font-sans)',
                  color: '#FF6B35',
                }}
              >
                {ACHIEVEMENT_BADGES[index]?.big || achievement.label}
              </div>

              {/* Subtitle */}
              <p
                className="text-xs uppercase tracking-widest mt-3"
                style={{ color: '#737373', fontFamily: 'var(--font-mono)' }}
              >
                {ACHIEVEMENT_BADGES[index]?.subtitle || ''}
              </p>

              {/* Title */}
              <h3
                className="text-lg md:text-xl font-bold mt-4"
                style={{ fontFamily: 'var(--font-sans)', color: '#0A0A0A' }}
              >
                {achievement.title}
              </h3>

              {/* Description */}
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: '#737373', fontFamily: 'var(--font-sans)' }}
              >
                {achievement.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
