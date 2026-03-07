import BentoCard from './BentoCard';
import ScrollFadeIn from './ScrollFadeIn';

interface HighlightCardProps {
  title: string;
  subtitle: string;
  emphasis: string;
  index: number;
}

export default function HighlightCard({ title, subtitle, emphasis, index }: HighlightCardProps) {
  return (
    <ScrollFadeIn delay={index * 80}>
      <BentoCard className="flex flex-col justify-center h-full">
        <h3
          style={{
            fontSize: '17px',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            marginBottom: '6px',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: '13px',
            lineHeight: 1.5,
            color: 'var(--color-text-secondary)',
            marginBottom: '8px',
          }}
        >
          {subtitle}
        </p>
        <span
          className="accent-gradient"
          style={{
            fontSize: '13px',
            fontWeight: 600,
          }}
        >
          {emphasis}
        </span>
      </BentoCard>
    </ScrollFadeIn>
  );
}
