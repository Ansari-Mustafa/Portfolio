'use client';

import { motion } from 'framer-motion';
import { ExperienceEntry } from '@/types';
import { fadeUp } from '@/components/animations/variants';

export function TimelineItem({
  entry,
  variant = 'compact',
}: {
  entry: ExperienceEntry;
  variant?: 'compact' | 'detailed';
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="relative border-l-2 border-border pl-8 pb-10 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-accent" />

      <div className="font-mono text-xs font-medium uppercase tracking-wider text-accent mb-2">
        {entry.period}
      </div>
      <h3 className="font-serif text-lg text-text-primary">{entry.role}</h3>
      <div className="text-sm text-text-dim mb-3">{entry.company}</div>
      <p className="text-sm text-text-muted leading-relaxed whitespace-pre-line">
        {variant === 'detailed' && entry.fullDescription
          ? entry.fullDescription
          : entry.description}
      </p>
      {entry.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] text-text-dim"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
