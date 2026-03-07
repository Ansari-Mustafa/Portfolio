import SectionHeader from './SectionHeader';
import GlowCard from './GlowCard';
import { achievements } from '@/data/achievements';

export default function Commendations() {
  return (
    <section className="py-16 md:py-24">
      <SectionHeader title="// COMMENDATIONS" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <GlowCard key={achievement.id} className="relative">
            {/* Medal icon with glow */}
            <div className="mb-4">
              <span
                className="text-2xl"
                style={{
                  textShadow:
                    '0 0 10px rgba(251, 191, 36, 0.5), 0 0 20px rgba(251, 191, 36, 0.3)',
                }}
              >
                &#9733;
              </span>
            </div>

            {/* Label */}
            <div className="font-mono text-[10px] uppercase tracking-wider text-text-dim mb-2">
              {achievement.label}
            </div>

            {/* Title */}
            <h3 className="font-heading text-sm md:text-base font-bold text-text-primary tracking-wider uppercase mb-3">
              {achievement.title}
            </h3>

            {/* Description */}
            <p className="font-body text-sm text-text-dim leading-relaxed mb-4">
              {achievement.description}
            </p>

            {/* Feature tags for FYP */}
            {achievement.features && achievement.features.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-auto">
                {achievement.features.map((feature) => (
                  <span
                    key={feature}
                    className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded"
                    style={{
                      color: '#A78BFA',
                      background: 'rgba(139, 92, 246, 0.1)',
                      border: '1px solid rgba(139, 92, 246, 0.2)',
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            )}
          </GlowCard>
        ))}
      </div>
    </section>
  );
}
