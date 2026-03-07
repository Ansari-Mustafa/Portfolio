'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Role } from '@/types';
import { GlitchText } from './GlitchText';
import { fadeUp, cardHover } from '@/components/animations/variants';

export function StealthCard({ role }: { role: Role }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={cardHover}
      className="stealth-card relative overflow-hidden rounded-xl border border-border bg-bg-card p-6 transition-colors hover:bg-bg-card-hover"
    >
      {/* Accent gradient top bar */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-accent via-accent-2 to-accent" />

      {/* Scanline overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(192,132,252,0.03) 2px, rgba(192,132,252,0.03) 4px)',
        }}
      />

      {/* CLASSIFIED watermark */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center overflow-hidden">
        <span
          className="font-mono text-5xl font-bold uppercase tracking-[0.3em] text-accent/[0.04] select-none"
          style={{ transform: 'rotate(-12deg)' }}
        >
          CLASSIFIED
        </span>
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-start gap-4">
        {role.logoPath && (
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-bg-card-hover flex items-center justify-center">
            <Image
              src={role.logoPath}
              alt="Stealth startup logo"
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
            <GlitchText text={role.title} />
          </h3>
          <div className="text-sm text-text-dim mb-3">{role.company}</div>
          <p className="text-sm text-text-muted leading-relaxed">
            {role.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
