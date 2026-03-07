import ScrollFadeIn from './ScrollFadeIn';

interface SectionLabelProps {
  label: string;
  index?: number;
}

export default function SectionLabel({ label, index = 0 }: SectionLabelProps) {
  return (
    <ScrollFadeIn delay={index * 60} className="col-span-4">
      <div
        style={{
          padding: '28px 0 12px 0',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
          marginBottom: '2px',
        }}
      >
        <span
          style={{
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--color-text-dim)',
          }}
        >
          {label}
        </span>
      </div>
    </ScrollFadeIn>
  );
}
