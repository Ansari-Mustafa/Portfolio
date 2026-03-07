import BentoCard from './BentoCard';
import ScrollFadeIn from './ScrollFadeIn';
import type { Achievement } from '@/types';

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
  wide?: boolean;
}

export default function AchievementCard({ achievement, index, wide = false }: AchievementCardProps) {
  return (
    <ScrollFadeIn delay={index * 80} className={wide ? 'col-span-2' : ''}>
      <BentoCard colSpan={1} className="h-full flex flex-col">
        <span
          style={{
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            color: 'var(--color-text-dim)',
            marginBottom: '8px',
            display: 'block',
          }}
        >
          {achievement.label}
        </span>
        <h3
          style={{
            fontSize: '16px',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            marginBottom: '8px',
          }}
        >
          {achievement.title}
        </h3>
        <p
          style={{
            fontSize: '13px',
            lineHeight: 1.6,
            color: 'var(--color-text-secondary)',
            marginBottom: achievement.features ? '12px' : '0',
            flex: 1,
          }}
        >
          {achievement.description}
        </p>
        {achievement.features && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {achievement.features.map((feature) => (
              <span
                key={feature}
                style={{
                  fontSize: '10px',
                  fontWeight: 500,
                  padding: '3px 8px',
                  borderRadius: '6px',
                  background: 'rgba(99, 102, 241, 0.08)',
                  color: 'var(--color-accent-start)',
                }}
              >
                {feature}
              </span>
            ))}
          </div>
        )}
      </BentoCard>
    </ScrollFadeIn>
  );
}
