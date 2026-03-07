'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { EducationEntry } from '@/types';
import { fadeUp, cardHover } from '@/components/animations/variants';
import { cn } from '@/lib/utils';

export function EducationCard({ entry }: { entry: EducationEntry }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={cardHover}
      className="rounded-xl border border-border bg-bg-card p-6 transition-colors hover:bg-bg-card-hover"
    >
      <div className="flex items-start gap-4">
        {entry.logoPath && (
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-bg-card-hover flex items-center justify-center">
            <Image
              src={entry.logoPath}
              alt={`${entry.school} logo`}
              width={40}
              height={40}
              className="object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-serif text-lg text-text-primary">{entry.degree}</h3>
          <div className="text-sm text-text-dim mt-1">{entry.school}</div>
          <p className="text-sm text-text-muted mt-2 whitespace-pre-line leading-relaxed">
            {entry.detail}
          </p>
          <span
            className={cn(
              'mt-3 inline-block rounded-full px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider',
              entry.isCurrent
                ? 'bg-accent/10 text-accent'
                : 'bg-bg-card-hover text-text-dim'
            )}
          >
            {entry.badge}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
