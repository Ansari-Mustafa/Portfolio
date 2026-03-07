import { roles } from '@/data/roles';

export default function RolesSection() {
  return (
    <div className="text-sm">
      <span className="text-terminal-dim">{'{'}</span>
      <div className="pl-4">
        <span className="text-terminal-secondary">&quot;roles&quot;</span>
        <span className="text-terminal-dim">: [</span>
        {roles.map((role, i) => (
          <div key={role.id} className="pl-4 my-3">
            <span className="text-terminal-dim">{'{'}</span>
            <div className="pl-4 space-y-0.5">
              <div>
                <span className="text-terminal-secondary">&quot;title&quot;</span>
                <span className="text-terminal-dim">: </span>
                <span className="text-terminal-primary">
                  &quot;{role.tag}&quot;
                </span>
                <span className="text-terminal-dim">,</span>
              </div>
              <div>
                <span className="text-terminal-secondary">&quot;company&quot;</span>
                <span className="text-terminal-dim">: </span>
                <span className="text-terminal-primary">
                  &quot;{role.isStealth ? '[Redacted] ' : ''}{role.title}&quot;
                </span>
                <span className="text-terminal-dim">,</span>
              </div>
              <div>
                <span className="text-terminal-secondary">&quot;focus&quot;</span>
                <span className="text-terminal-dim">: </span>
                <span className="text-terminal-primary">
                  &quot;{role.company}&quot;
                </span>
                <span className="text-terminal-dim">,</span>
              </div>
              <div>
                <span className="text-terminal-secondary">&quot;description&quot;</span>
                <span className="text-terminal-dim">: </span>
                <span className="text-terminal-primary">
                  &quot;{role.description}&quot;
                </span>
              </div>
            </div>
            <span className="text-terminal-dim">
              {'}'}{i < roles.length - 1 ? ',' : ''}
            </span>
          </div>
        ))}
        <span className="text-terminal-dim pl-0">]</span>
      </div>
      <span className="text-terminal-dim">{'}'}</span>
    </div>
  );
}
