'use client';

import { motion } from 'framer-motion';
import { Achievement } from '@/types';
import { fadeUp, cardHover } from '@/components/animations/variants';
import { cn } from '@/lib/utils';

export function AchievementCard({ achievement }: { achievement: Achievement }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={cardHover}
      className={cn(
        'rounded-xl border border-border bg-bg-card p-6 transition-colors hover:bg-bg-card-hover',
        achievement.isFeatured && 'md:col-span-2'
      )}
    >
      <div className="font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-accent mb-2">
        {achievement.label}
      </div>
      <h3 className="font-serif text-lg text-text-primary mb-2">
        {achievement.title}
      </h3>
      <p className="text-sm text-text-muted leading-relaxed">
        {achievement.description}
      </p>
      {achievement.features && (
        <div className="mt-4 flex flex-wrap gap-2">
          {achievement.features.map((feature) => (
            <span
              key={feature}
              className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] text-text-dim"
            >
              {feature}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
