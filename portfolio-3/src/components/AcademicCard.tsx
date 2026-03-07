import BentoCard from './BentoCard';
import ScrollFadeIn from './ScrollFadeIn';

export default function AcademicCard({ index = 0 }: { index?: number }) {
  return (
    <ScrollFadeIn delay={index * 80}>
      <BentoCard className="flex flex-col justify-center items-center text-center h-full">
        <span
          style={{
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--color-text-dim)',
            marginBottom: '8px',
          }}
        >
          Academic Distinction
        </span>
        <span
          className="font-mono-nums accent-gradient"
          style={{
            fontSize: '42px',
            fontWeight: 800,
            lineHeight: 1,
            marginBottom: '6px',
            display: 'block',
          }}
        >
          #2/104
        </span>
        <span
          style={{
            fontSize: '13px',
            color: 'var(--color-text-secondary)',
          }}
        >
          B.Sc. EE — GIK Institute
        </span>
      </BentoCard>
    </ScrollFadeIn>
  );
}
