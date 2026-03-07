'use client';

import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AchievementCard } from '@/components/ui/AchievementCard';
import { EducationCard } from '@/components/ui/EducationCard';
import { StaggerChildren } from '@/components/animations/StaggerChildren';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { achievements, universityProjects } from '@/data/achievements';
import { education } from '@/data/education';

export function AchievementsPage() {
  return (
    <div className="pt-28 pb-24">
      <Container>
        <SectionHeader
          label="// achievements & projects"
          title="Things I'm Proud Of"
        />
        <StaggerChildren className="grid gap-4 md:grid-cols-2">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </StaggerChildren>

        <div className="mt-16">
          <ScrollReveal>
            <div className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent mb-4">
              // other university projects
            </div>
            <div className="flex flex-wrap gap-3">
              {universityProjects.map((project) => (
                <div
                  key={project}
                  className="rounded-lg border border-border bg-bg-card px-4 py-2.5 text-sm text-text-muted"
                >
                  {project}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

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
