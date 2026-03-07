import { education } from '@/data/education';

export default function EducationSection() {
  return (
    <div className="text-sm space-y-4">
      {education.map((entry) => (
        <div key={entry.id} className="space-y-1">
          <div className="flex flex-wrap items-baseline gap-x-3">
            <span className="text-terminal-primary font-bold">
              {entry.degree}
            </span>
            {entry.isCurrent && (
              <span className="text-terminal-accent text-xs border border-terminal-accent px-1.5 py-0.5">
                {entry.badge}
              </span>
            )}
          </div>
          <div className="text-terminal-secondary">{entry.school}</div>
          <p className="text-terminal-dim whitespace-pre-wrap">{entry.detail}</p>
          {!entry.isCurrent && (
            <span className="text-terminal-dim text-xs border border-terminal-border px-1.5 py-0.5 inline-block">
              {entry.badge}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
