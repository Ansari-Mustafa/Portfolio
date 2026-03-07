interface PullQuoteProps {
  quote: string;
  attribution?: string;
}

export default function PullQuote({ quote, attribution }: PullQuoteProps) {
  return (
    <blockquote className="mx-auto max-w-[600px] py-12 text-center">
      {/* Short thick rule centered */}
      <div className="mx-auto mb-6 h-[2px] w-10 bg-[var(--color-rule-heavy)]" />

      <p
        className="font-[var(--font-headline)] text-[1.75rem] leading-[2.25rem] italic"
        style={{
          fontFamily: 'var(--font-playfair), Playfair Display, Georgia, serif',
          color: 'var(--color-accent-secondary)',
        }}
      >
        &ldquo;{quote}&rdquo;
      </p>

      {attribution && (
        <p className="caption-label mt-4">{attribution}</p>
      )}
    </blockquote>
  );
}
