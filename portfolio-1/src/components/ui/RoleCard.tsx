'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Role } from '@/types';
import { fadeUp, cardHover } from '@/components/animations/variants';
import { cn } from '@/lib/utils';

export function RoleCard({ role }: { role: Role }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={cardHover}
      className={cn(
        'relative overflow-hidden rounded-xl border border-border bg-bg-card p-6 transition-colors hover:bg-bg-card-hover'
      )}
    >
      <div className="flex items-start gap-4">
        {role.logoPath && (
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-bg-card-hover flex items-center justify-center">
            <Image
              src={role.logoPath}
              alt={`${role.title} logo`}
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
          <div className="font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-accent mb-2">
            {role.tag}
          </div>
          <h3 className="font-serif text-xl text-text-primary mb-1">
            {role.title}
          </h3>
          <div className="text-sm text-text-dim mb-3">{role.company}</div>
          <p className="text-sm text-text-muted leading-relaxed">
            {role.description}
          </p>
          {role.highlight && (
            <p className="mt-3 text-sm">
              <span className="text-accent font-medium">{role.highlight}</span>
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
