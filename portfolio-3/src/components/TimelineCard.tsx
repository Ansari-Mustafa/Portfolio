import BentoCard from './BentoCard';
import ScrollFadeIn from './ScrollFadeIn';
import { experience } from '@/data/experience';

export default function TimelineCard() {
  return (
    <ScrollFadeIn delay={0} className="col-span-2 row-span-2">
      <BentoCard colSpan={1} rowSpan={1} className="h-full">
        <h3
          style={{
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--color-text-dim)',
            marginBottom: '20px',
          }}
        >
          Career Timeline
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {experience.map((entry, i) => (
            <div
              key={entry.id}
              style={{
                display: 'flex',
                gap: '16px',
                position: 'relative',
              }}
            >
              {/* Timeline line and dot */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '16px',
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background:
                      i === 0
                        ? 'linear-gradient(135deg, var(--color-accent-start), var(--color-accent-end))'
                        : 'var(--color-text-dim)',
                    flexShrink: 0,
                    marginTop: '4px',
                  }}
                />
                {i < experience.length - 1 && (
                  <div
                    style={{
                      width: '2px',
                      flex: 1,
                      background: 'rgba(0,0,0,0.06)',
                      margin: '4px 0',
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div style={{ paddingBottom: i < experience.length - 1 ? '20px' : '0', flex: 1 }}>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 500,
                    color: 'var(--color-text-dim)',
                    display: 'block',
                    marginBottom: '2px',
                  }}
                >
                  {entry.period}
                </span>
                <h4
                  style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    marginBottom: '2px',
                  }}
                >
                  {entry.role}
                </h4>
                <p
                  style={{
                    fontSize: '12px',
                    color: 'var(--color-text-secondary)',
                    marginBottom: '8px',
                  }}
                >
                  {entry.company}
                </p>
                <p
                  style={{
                    fontSize: '13px',
                    lineHeight: 1.5,
                    color: 'var(--color-text-secondary)',
                    marginBottom: '10px',
                  }}
                >
                  {entry.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                  {entry.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '10px',
                        fontWeight: 500,
                        padding: '2px 8px',
                        borderRadius: '6px',
                        background: 'rgba(99, 102, 241, 0.08)',
                        color: 'var(--color-accent-start)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </BentoCard>
    </ScrollFadeIn>
  );
}
