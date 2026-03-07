export default function BlinkingCursor() {
  return (
    <div className="py-6 px-4">
      <div className="max-w-[1200px] mx-auto flex items-center gap-2">
        <span className="text-terminal-primary whitespace-nowrap select-none">
          mustafa@portfolio ~ $
        </span>
        <span className="cursor-blink text-terminal-primary text-base">
          █
        </span>
      </div>
    </div>
  );
}
