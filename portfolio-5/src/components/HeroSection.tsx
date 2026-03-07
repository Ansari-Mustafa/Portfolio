'use client';

import Image from 'next/image';
import HudFrame from './HudFrame';
import DataReadout from './DataReadout';
import { siteConfig } from '@/data/site';

export default function HeroSection() {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24">
      <HudFrame glowing className="p-6 md:p-10 lg:p-14">
        <div className="flex flex-col items-center text-center">
          {/* Operative Profile label */}
          <div className="font-heading text-[10px] md:text-xs uppercase tracking-[0.2em] text-text-dim mb-6">
            OPERATIVE PROFILE
          </div>

          {/* Headshot with rings */}
          <div className="relative mb-8">
            {/* Outer rotating dashed ring */}
            <div
              className="absolute inset-[-16px] rounded-full animate-spin-slow"
              style={{
                border: '2px dashed rgba(6, 182, 212, 0.4)',
              }}
            />
            {/* Inner solid ring */}
            <div
              className="absolute inset-[-6px] rounded-full"
              style={{
                border: '2px solid rgba(6, 182, 212, 0.6)',
              }}
            />
            {/* Headshot */}
            <div
              className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden"
              style={{
                boxShadow:
                  '0 0 30px rgba(6, 182, 212, 0.4), 0 0 60px rgba(6, 182, 212, 0.15)',
              }}
            >
              <Image
                src="/images/main-img.png"
                alt="Mustafa Ansari"
                fill
                className="object-cover"
                priority
                style={{ clipPath: 'circle(50%)' }}
              />
            </div>
          </div>

          {/* Operative ID */}
          <div className="font-mono text-[10px] md:text-xs text-text-dim tracking-wider mb-8">
            OPERATIVE ID: MA-2024 &nbsp;|&nbsp; CLEARANCE: ALPHA
          </div>

          {/* Name */}
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-accent-cyan text-glow-strong tracking-wider mb-4">
            MUSTAFA ANSARI
          </h1>

          {/* Subtitle */}
          <div className="font-body text-base md:text-lg text-text-secondary tracking-[0.15em] uppercase mb-10">
            AI ENGINEER &nbsp;|&nbsp; ENTREPRENEUR &nbsp;|&nbsp; BUILDER
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 w-full max-w-2xl">
            {siteConfig.stats.map((stat) => (
              <DataReadout
                key={stat.label}
                label={stat.label}
                value={stat.value}
              />
            ))}
          </div>
        </div>
      </HudFrame>
    </section>
  );
}
