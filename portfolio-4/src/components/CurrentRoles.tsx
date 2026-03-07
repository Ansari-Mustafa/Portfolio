import { roles } from '@/data/roles';
import SectionLabel from './SectionLabel';

export default function CurrentRoles() {
  return (
    <section>
      <SectionLabel text="CURRENT POSITIONS" />

      <div
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        style={{ columnGap: '2rem' }}
      >
        {roles.map((role) => (
          <article key={role.id} className="mb-2">
            {/* Role title */}
            <h3
              className="text-xl font-bold"
              style={{
                fontFamily: 'var(--font-playfair), Playfair Display, Georgia, serif',
                color: 'var(--color-headline)',
              }}
            >
              {role.title}
            </h3>

            {/* Company */}
            <p
              className="mt-1 text-base italic"
              style={{
                fontFamily: 'var(--font-source-serif), Source Serif 4, Georgia, serif',
                color: 'var(--color-text)',
              }}
            >
              {role.company}
            </p>

            {/* Tag */}
            <p className="caption-label mt-2" style={{ color: 'var(--color-accent)' }}>
              {role.tag}
            </p>

            {/* Description */}
            <p
              className="mt-3 text-[0.9375rem] leading-relaxed"
              style={{
                fontFamily: 'var(--font-source-serif), Source Serif 4, Georgia, serif',
                color: 'var(--color-text)',
              }}
            >
              {role.description}
            </p>

            {role.highlight && (
              <p
                className="caption-label mt-3"
                style={{ color: 'var(--color-accent-secondary)' }}
              >
                {role.highlight}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
