import { experience } from '@/data/experience';

function generateHash(): string {
  const chars = '0123456789abcdef';
  let hash = '';
  for (let i = 0; i < 7; i++) {
    hash += chars[Math.floor(Math.random() * chars.length)];
  }
  return hash;
}

const hashes = ['a3f7b2c', 'd8e1a4f', '7c2b9e1'];

export default function ExperienceSection() {
  return (
    <div className="text-sm space-y-6">
      {experience.map((entry, i) => {
        const hash = hashes[i] || generateHash();

        return (
          <div key={entry.id}>
            {/* Git log one-liner */}
            <div className="flex flex-wrap gap-x-2 items-baseline">
              <span className="text-terminal-accent font-bold">{hash}</span>
              <span className="text-terminal-dim">{entry.period}</span>
              <span className="text-terminal-primary">
                {entry.role} — {entry.company}
              </span>
            </div>

            {/* Expanded details */}
            <div className="pl-4 mt-2 border-l border-terminal-border/50 ml-2">
              <p className="text-terminal-dim leading-relaxed whitespace-pre-wrap">
                {entry.fullDescription || entry.description}
              </p>
              {entry.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-terminal-secondary text-xs border border-terminal-border px-1.5 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
