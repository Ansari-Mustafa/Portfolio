import { experience } from '@/data/experience';
import SectionLabel from './SectionLabel';

export default function ExperienceSection() {
  return (
    <section>
      <SectionLabel text="CAREER" />

      <div className="space-y-12">
        {experience.map((entry) => (
          <article
            key={entry.id}
            className="grid grid-cols-1 gap-x-8 md:grid-cols-[180px_1fr]"
          >
            {/* Period as margin note (desktop) / label (mobile) */}
            <div
              className="caption-label mb-2 md:mb-0 md:pt-1 md:text-right"
              style={{ color: 'var(--color-secondary)' }}
            >
              {entry.period}
            </div>

            {/* Content */}
            <div>
              {/* Role + Company */}
              <h3
                className="text-xl font-bold"
                style={{
                  fontFamily: 'var(--font-playfair), Playfair Display, Georgia, serif',
                  color: 'var(--color-headline)',
                }}
              >
                {entry.role}
              </h3>
              <p
                className="mt-1 text-base italic"
                style={{
                  fontFamily: 'var(--font-source-serif), Source Serif 4, Georgia, serif',
                  color: 'var(--color-text)',
                }}
              >
                {entry.company}
              </p>

              {/* Description as flowing prose */}
              <div
                className="mt-3"
                style={{
                  fontFamily: 'var(--font-source-serif), Source Serif 4, Georgia, serif',
                  fontSize: '1.0625rem',
                  lineHeight: 1.75,
                  color: 'var(--color-text)',
                }}
              >
                {(entry.fullDescription || entry.description)
                  .split('\n\n')
                  .map((para, i) => (
                    <p key={i} className={i > 0 ? 'mt-4' : ''}>
                      {para}
                    </p>
                  ))}
              </div>

              {/* Tags */}
              <p
                className="caption-label mt-4"
                style={{ color: 'var(--color-secondary)' }}
              >
                {entry.tags.join(' · ')}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
