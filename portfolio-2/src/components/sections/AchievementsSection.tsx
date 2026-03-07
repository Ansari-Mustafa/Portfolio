import { achievements } from '@/data/achievements';

export default function AchievementsSection() {
  return (
    <div className="text-sm space-y-6">
      <div className="text-terminal-primary font-bold text-base">
        # Achievements
      </div>

      {achievements.map((achievement) => (
        <div key={achievement.id} className="space-y-1">
          <div className="text-terminal-accent font-bold">
            ## {achievement.label}
          </div>
          <div className="text-terminal-primary">{achievement.title}</div>
          <p className="text-terminal-dim leading-relaxed">
            {achievement.description}
          </p>
          {achievement.features && achievement.features.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-1">
              {achievement.features.map((feature) => (
                <span
                  key={feature}
                  className="text-terminal-secondary text-xs border border-terminal-border px-1.5 py-0.5"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
