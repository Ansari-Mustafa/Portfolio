import BentoCard from './BentoCard';
import ScrollFadeIn from './ScrollFadeIn';

export default function RoboticsCard({ index = 0 }: { index?: number }) {
  return (
    <ScrollFadeIn delay={index * 80}>
      <BentoCard className="flex flex-col justify-center h-full">
        {/* Trophy icon */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#trophyGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ marginBottom: '12px' }}
        >
          <defs>
            <linearGradient id="trophyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-accent-start)" />
              <stop offset="100%" stopColor="var(--color-accent-end)" />
            </linearGradient>
          </defs>
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
        <h3
          style={{
            fontSize: '16px',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            marginBottom: '4px',
          }}
        >
          Robotics Competition
        </h3>
        <p
          style={{
            fontSize: '13px',
            lineHeight: 1.5,
            color: 'var(--color-text-secondary)',
          }}
        >
          Winner — autonomous maze mapping & solving robots
        </p>
      </BentoCard>
    </ScrollFadeIn>
  );
}
