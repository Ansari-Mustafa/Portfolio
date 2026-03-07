import BentoCard from './BentoCard';
import ScrollFadeIn from './ScrollFadeIn';

export default function LocationCard({ index = 0 }: { index?: number }) {
  return (
    <ScrollFadeIn delay={index * 80}>
      <BentoCard className="flex flex-col justify-center items-center text-center h-full">
        {/* Map pin icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#locationGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ marginBottom: '12px' }}
        >
          <defs>
            <linearGradient id="locationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-accent-start)" />
              <stop offset="100%" stopColor="var(--color-accent-end)" />
            </linearGradient>
          </defs>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span
          style={{
            fontSize: '16px',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            marginBottom: '4px',
          }}
        >
          Based in Germany
        </span>
        <span
          style={{
            fontSize: '13px',
            color: 'var(--color-text-dim)',
          }}
        >
          Freiburg, DE
        </span>
      </BentoCard>
    </ScrollFadeIn>
  );
}
