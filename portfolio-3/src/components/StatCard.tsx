import BentoCard from './BentoCard';
import ScrollFadeIn from './ScrollFadeIn';

interface StatCardProps {
  value: string;
  label: string;
  index: number;
}

export default function StatCard({ value, label, index }: StatCardProps) {
  return (
    <ScrollFadeIn delay={index * 80}>
      <BentoCard className="flex flex-col justify-center items-center text-center h-full">
        <span
          className="font-mono-nums accent-gradient"
          style={{
            fontSize: '48px',
            fontWeight: 800,
            lineHeight: 1,
            marginBottom: '8px',
            display: 'block',
          }}
        >
          {value}
        </span>
        <span
          style={{
            fontSize: '13px',
            fontWeight: 500,
            color: 'var(--color-text-secondary)',
            letterSpacing: '0.02em',
          }}
        >
          {label}
        </span>
      </BentoCard>
    </ScrollFadeIn>
  );
}
