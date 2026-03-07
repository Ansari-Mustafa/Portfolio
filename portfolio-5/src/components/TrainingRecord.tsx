import SectionHeader from './SectionHeader';
import GlowCard from './GlowCard';
import { education } from '@/data/education';

export default function TrainingRecord() {
  return (
    <section className="py-16 md:py-24">
      <SectionHeader title="// TRAINING RECORD" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((entry) => (
          <GlowCard key={entry.id}>
            <div className="flex flex-col h-full">
              {/* Badge */}
              <div className="mb-4">
                <span
                  className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded"
                  style={{
                    color: entry.isCurrent ? '#06B6D4' : '#FBBF24',
                    background: entry.isCurrent
                      ? 'rgba(6, 182, 212, 0.1)'
                      : 'rgba(251, 191, 36, 0.1)',
                    border: `1px solid ${
                      entry.isCurrent
                        ? 'rgba(6, 182, 212, 0.3)'
                        : 'rgba(251, 191, 36, 0.3)'
                    }`,
                  }}
                >
                  [{entry.badge.toUpperCase()}]
                </span>
              </div>

              {/* Degree */}
              <h3 className="font-heading text-sm md:text-base font-bold text-text-primary tracking-wider uppercase mb-2">
                {entry.degree}
              </h3>

              {/* Institution */}
              <p className="font-body text-sm italic text-text-secondary mb-3">
                {entry.school}
              </p>

              {/* Details */}
              <div className="font-mono text-xs text-text-dim leading-relaxed whitespace-pre-line">
                {entry.detail}
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}
