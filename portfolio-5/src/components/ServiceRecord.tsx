import SectionHeader from './SectionHeader';
import { experience } from '@/data/experience';

export default function ServiceRecord() {
  return (
    <section className="py-16 md:py-24">
      <SectionHeader title="// SERVICE RECORD" />

      <div className="relative">
        {/* Vertical timeline line */}
        <div
          className="absolute left-[11px] md:left-[15px] top-0 bottom-0 w-px"
          style={{
            background:
              'linear-gradient(to bottom, transparent, rgba(6, 182, 212, 0.3) 10%, rgba(6, 182, 212, 0.3) 90%, transparent)',
          }}
        />

        <div className="space-y-12">
          {experience.map((entry, index) => (
            <div key={entry.id} className="relative flex gap-6 md:gap-8">
              {/* Timeline dot */}
              <div className="relative flex-shrink-0 mt-1.5">
                <div
                  className="w-[23px] h-[23px] md:w-[31px] md:h-[31px] rounded-full flex items-center justify-center"
                  style={{
                    background: '#030712',
                    border: '2px solid rgba(6, 182, 212, 0.5)',
                    boxShadow: '0 0 12px rgba(6, 182, 212, 0.3)',
                  }}
                >
                  <div
                    className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-accent-cyan"
                    style={{
                      boxShadow: '0 0 8px rgba(6, 182, 212, 0.6)',
                      animationDelay: `${index * 0.5}s`,
                    }}
                  />
                </div>
              </div>

              {/* Content panel */}
              <div className="flex-1 pb-2">
                {/* Period */}
                <div className="font-mono text-xs uppercase tracking-wider text-accent-cyan mb-2">
                  {entry.period}
                </div>

                {/* Role + Company */}
                <h3 className="font-heading text-base md:text-lg font-bold text-text-primary tracking-wider uppercase mb-1">
                  {entry.role}
                </h3>
                <p className="font-body text-sm text-text-secondary mb-3">
                  {entry.company}
                </p>

                {/* Description */}
                <p className="font-body text-sm text-text-dim leading-relaxed mb-4">
                  {entry.fullDescription || entry.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-dim mr-1">
                    SKILLS:
                  </span>
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] uppercase tracking-wider text-text-dim px-2 py-0.5 rounded"
                      style={{
                        background: 'rgba(6, 182, 212, 0.08)',
                        border: '1px solid rgba(6, 182, 212, 0.15)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
