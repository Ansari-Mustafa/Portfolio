'use client';

import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TimelineItem } from '@/components/ui/TimelineItem';
import { EducationCard } from '@/components/ui/EducationCard';
import { StaggerChildren } from '@/components/animations/StaggerChildren';
import { experience } from '@/data/experience';
import { education } from '@/data/education';

export function ExperiencePage() {
  return (
    <div className="pt-28 pb-24">
      <Container>
        <SectionHeader label="// experience" title="Where I've Been" />
        <StaggerChildren className="max-w-2xl">
          {experience.map((entry) => (
            <TimelineItem key={entry.id} entry={entry} variant="detailed" />
          ))}
        </StaggerChildren>

        <div className="mt-24">
          <SectionHeader label="// education" title="Academic Background" />
          <StaggerChildren className="grid gap-4 md:grid-cols-2">
            {education.map((entry) => (
              <EducationCard key={entry.id} entry={entry} />
            ))}
          </StaggerChildren>
        </div>
      </Container>
    </div>
  );
}
