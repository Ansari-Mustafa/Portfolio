'use client';

import { ScrollReveal } from '@/components/animations/ScrollReveal';

export function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <ScrollReveal>
      <div className="mb-12">
        <div className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent mb-3">
          {label}
        </div>
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-text-primary">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-text-muted text-base">
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
