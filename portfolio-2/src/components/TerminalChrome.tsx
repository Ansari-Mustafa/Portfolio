export default function TerminalChrome() {
  return (
    <div className="sticky top-0 z-50 bg-terminal-surface border-b border-terminal-border">
      <div className="flex items-center px-4 py-2.5 gap-2">
        <div className="flex items-center gap-1.5">
          <span
            className="w-3 h-3 inline-block"
            style={{ backgroundColor: '#FF5F56' }}
          />
          <span
            className="w-3 h-3 inline-block"
            style={{ backgroundColor: '#FFBD2E' }}
          />
          <span
            className="w-3 h-3 inline-block"
            style={{ backgroundColor: '#27C93F' }}
          />
        </div>
        <span className="text-terminal-dim text-xs ml-3 select-none">
          mustafa@portfolio:~
        </span>
      </div>
    </div>
  );
}
