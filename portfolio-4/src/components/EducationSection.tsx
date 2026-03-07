import { education } from '@/data/education';
import SectionLabel from './SectionLabel';

export default function EducationSection() {
  return (
    <section>
      <SectionLabel text="EDUCATION" />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {education.map((entry) => (
          <article key={entry.id}>
            {/* Degree */}
            <h3
              className="text-xl font-bold"
              style={{
                fontFamily: 'var(--font-playfair), Playfair Display, Georgia, serif',
                color: 'var(--color-headline)',
              }}
            >
              {entry.degree}
            </h3>

            {/* Institution */}
            <p
              className="mt-1 text-base italic"
              style={{
                fontFamily: 'var(--font-source-serif), Source Serif 4, Georgia, serif',
                color: 'var(--color-text)',
              }}
            >
              {entry.school}
            </p>

            {/* Details */}
            <div
              className="mt-3 text-[0.9375rem] leading-relaxed"
              style={{
                fontFamily: 'var(--font-source-serif), Source Serif 4, Georgia, serif',
                color: 'var(--color-text)',
              }}
            >
              {entry.detail.split('\n').map((line, i) => (
                <p key={i} className={i > 0 ? 'mt-1' : ''}>
                  {line}
                </p>
              ))}
            </div>

            {/* Badge */}
            <p
              className="caption-label mt-3"
              style={{
                color: entry.isCurrent
                  ? 'var(--color-accent)'
                  : 'var(--color-accent-secondary)',
              }}
            >
              {entry.badge}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
