import BentoCard from './BentoCard';
import ScrollFadeIn from './ScrollFadeIn';
import { siteConfig } from '@/data/site';

export default function BioCard() {
  const bio = siteConfig.heroBio;
  const firstSentenceEnd = bio.indexOf('.') + 1;
  const firstSentence = bio.slice(0, firstSentenceEnd);
  const rest = bio.slice(firstSentenceEnd);

  return (
    <ScrollFadeIn delay={0} className="col-span-2">
      <BentoCard colSpan={1} className="h-full">
        <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
          <span style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>
            {firstSentence}
          </span>
          {rest}
        </p>
      </BentoCard>
    </ScrollFadeIn>
  );
}
