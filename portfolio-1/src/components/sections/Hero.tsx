'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { StatCard } from '@/components/ui/StatCard';
import { siteConfig } from '@/data/site';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20" id="hero">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-accent/5 blur-[120px]" />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1fr,auto] lg:items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent mb-6"
            >
              {siteConfig.tagline}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-text-primary mb-6"
            >
              Hi, I&apos;m Mustafa Ansari.
              <br />
              I build <em className="text-accent">AI systems</em>
              <br />
              that actually ship.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="max-w-xl text-text-muted leading-relaxed mb-10"
            >
              {siteConfig.heroBio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-8 md:gap-12 border-t border-border pt-8"
            >
              {siteConfig.stats.map((stat) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </motion.div>
          </div>

          {/* Headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-2/20 blur-xl" />
              <Image
                src="/images/main-img.png"
                alt="Mustafa Ansari"
                width={340}
                height={420}
                priority
                className="relative rounded-2xl object-cover border border-border"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
