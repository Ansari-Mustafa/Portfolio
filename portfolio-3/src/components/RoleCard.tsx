import BentoCard from './BentoCard';
import ScrollFadeIn from './ScrollFadeIn';
import type { Role } from '@/types';

interface RoleCardProps {
  role: Role;
  index: number;
}

export default function RoleCard({ role, index }: RoleCardProps) {
  return (
    <ScrollFadeIn delay={index * 80}>
      <BentoCard className="h-full relative overflow-hidden">
        {/* Accent left border */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            bottom: '16px',
            left: 0,
            width: '3px',
            borderRadius: '0 3px 3px 0',
            background: 'linear-gradient(180deg, var(--color-accent-start), var(--color-accent-end))',
          }}
        />
        <div style={{ paddingLeft: '8px' }}>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--color-text-dim)',
              display: 'block',
              marginBottom: '6px',
            }}
          >
            {role.tag}
          </span>
          <h3
            style={{
              fontSize: '16px',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              marginBottom: '4px',
            }}
          >
            {role.title}
          </h3>
          <p
            style={{
              fontSize: '12px',
              color: 'var(--color-text-dim)',
              marginBottom: '8px',
            }}
          >
            {role.company}
          </p>
          <p
            style={{
              fontSize: '13px',
              lineHeight: 1.6,
              color: 'var(--color-text-secondary)',
            }}
          >
            {role.description.length > 120
              ? role.description.slice(0, 120) + '...'
              : role.description}
          </p>
        </div>
      </BentoCard>
    </ScrollFadeIn>
  );
}
