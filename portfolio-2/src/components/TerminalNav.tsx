'use client';

const navItems = [
  { command: 'whoami', section: 'hero' },
  { command: 'cat roles.json', section: 'roles' },
  { command: 'ls products/', section: 'products' },
  { command: 'git log', section: 'experience' },
  { command: 'cat achievements/', section: 'achievements' },
  { command: 'cat education.txt', section: 'education' },
  { command: 'echo contact', section: 'contact' },
];

export default function TerminalNav() {
  const handleClick = (section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-[41px] z-40 bg-terminal-bg border-b border-terminal-border py-2 px-4">
      <div className="flex flex-wrap gap-x-4 gap-y-1 max-w-[1200px] mx-auto">
        <span className="text-terminal-dim text-xs select-none mr-1">
          ~/nav $
        </span>
        {navItems.map((item) => (
          <button
            key={item.section}
            onClick={() => handleClick(item.section)}
            className="text-terminal-secondary text-xs hover:text-terminal-primary transition-colors cursor-pointer bg-transparent border-none font-[family-name:var(--font-mono)]"
          >
            {item.command}
          </button>
        ))}
      </div>
    </nav>
  );
}
