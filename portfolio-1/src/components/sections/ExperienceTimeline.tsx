'use client';

import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TimelineItem } from '@/components/ui/TimelineItem';
import { StaggerChildren } from '@/components/animations/StaggerChildren';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { experience } from '@/data/experience';

export function ExperienceTimeline() {
  return (
    <section className="py-24" id="experience">
      <Container>
        <SectionHeader label="// experience" title="Where I've Been" />
        <StaggerChildren className="max-w-2xl">
          {experience.map((entry) => (
            <TimelineItem key={entry.id} entry={entry} />
          ))}
        </StaggerChildren>
        <ScrollReveal delay={0.3}>
          <div className="mt-8">
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:text-accent/80 transition-colors"
            >
              View full timeline
              <span>&rarr;</span>
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
