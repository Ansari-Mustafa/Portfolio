import BentoCard from './BentoCard';
import ScrollFadeIn from './ScrollFadeIn';
import type { EducationEntry } from '@/types';

interface EducationCardProps {
  entry: EducationEntry;
  index: number;
}

export default function EducationCard({ entry, index }: EducationCardProps) {
  return (
    <ScrollFadeIn delay={index * 80}>
      <BentoCard className="flex flex-col justify-between h-full">
        <div>
          {/* Badge */}
          <span
            style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 600,
              padding: '3px 10px',
              borderRadius: 'var(--radius-chip)',
              marginBottom: '14px',
              background: entry.isCurrent
                ? 'linear-gradient(135deg, var(--color-accent-start), var(--color-accent-end))'
                : 'rgba(99, 102, 241, 0.08)',
              color: entry.isCurrent ? '#fff' : 'var(--color-accent-start)',
            }}
          >
            {entry.badge}
          </span>

          {/* Degree */}
          <h3
            style={{
              fontSize: '16px',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              marginBottom: '4px',
            }}
          >
            {entry.degree}
          </h3>

          {/* School */}
          <p
            style={{
              fontSize: '13px',
              color: 'var(--color-text-secondary)',
              marginBottom: '6px',
            }}
          >
            {entry.school}
          </p>

          {/* Detail */}
          <p
            style={{
              fontSize: '12px',
              lineHeight: 1.5,
              color: 'var(--color-text-dim)',
            }}
          >
            {entry.detail.split('\n')[0]}
          </p>
        </div>
      </BentoCard>
    </ScrollFadeIn>
  );
}
