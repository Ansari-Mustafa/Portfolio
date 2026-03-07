'use client';

import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { RoleCard } from '@/components/ui/RoleCard';
import { StealthCard } from '@/components/ui/StealthCard';
import { StaggerChildren } from '@/components/animations/StaggerChildren';
import { roles } from '@/data/roles';

export function CurrentRoles() {
  return (
    <section className="py-24" id="roles">
      <Container>
        <SectionHeader
          label="// current roles"
          title="What I'm Doing Now"
          subtitle="Building AI automation at scale across enterprise, healthcare, and education."
        />
        <StaggerChildren className="grid gap-4 md:grid-cols-2">
          {roles.map((role) =>
            role.isStealth ? (
              <StealthCard key={role.id} role={role} />
            ) : (
              <RoleCard key={role.id} role={role} />
            )
          )}
        </StaggerChildren>
      </Container>
    </section>
  );
}
