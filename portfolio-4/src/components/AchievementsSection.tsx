import { achievements } from '@/data/achievements';
import SectionLabel from './SectionLabel';

export default function AchievementsSection() {
  return (
    <section>
      <SectionLabel text="DISTINCTIONS" />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {achievements.map((ach) => (
          <article key={ach.id}>
            {/* Label */}
            <p
              className="caption-label"
              style={{ color: 'var(--color-accent)' }}
            >
              {ach.label}
            </p>

            {/* Title */}
            <h3
              className="mt-2 text-xl font-bold"
              style={{
                fontFamily: 'var(--font-playfair), Playfair Display, Georgia, serif',
                color: 'var(--color-headline)',
              }}
            >
              {ach.title}
            </h3>

            {/* Description */}
            <p
              className="mt-3 text-[0.9375rem] leading-relaxed"
              style={{
                fontFamily: 'var(--font-source-serif), Source Serif 4, Georgia, serif',
                color: 'var(--color-text)',
              }}
            >
              {ach.description}
            </p>

            {/* Features (FYP extra detail) */}
            {ach.features && ach.features.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1">
                {ach.features.map((feature) => (
                  <span
                    key={feature}
                    className="caption-label"
                    style={{
                      color: 'var(--color-secondary)',
                      fontSize: '0.625rem',
                    }}
                  >
                    {feature}
                    {ach.features &&
                      ach.features.indexOf(feature) < ach.features.length - 1 &&
                      ' ·'}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
