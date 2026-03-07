import SectionHeader from './SectionHeader';
import GlowCard from './GlowCard';
import { roles } from '@/data/roles';

export default function ActiveAssignments() {
  // Show first 3 roles
  const displayRoles = roles.slice(0, 3);

  return (
    <section className="py-16 md:py-24">
      <SectionHeader title="// ACTIVE ASSIGNMENTS" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayRoles.map((role) => (
          <GlowCard key={role.id}>
            <div className="flex flex-col h-full">
              {/* Role title */}
              <h3 className="font-heading text-sm md:text-base font-bold text-text-primary tracking-wider uppercase mb-2">
                {role.title}
              </h3>

              {/* Company */}
              <p className="font-body text-sm text-text-secondary mb-3">
                {role.company}
              </p>

              {/* Focus area / tag */}
              <div className="font-mono text-xs text-accent-cyan mb-3">
                {role.tag}
              </div>

              {/* Description */}
              <p className="font-body text-sm text-text-dim leading-relaxed mb-4 flex-1">
                {role.description}
              </p>

              {/* Status indicator */}
              <div className="flex items-center gap-2 mt-auto">
                <span className="status-dot status-dot-cyan" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-accent-cyan">
                  ACTIVE
                </span>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}
