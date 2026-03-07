export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center md:text-left">
      <div className="font-serif text-3xl md:text-4xl text-text-primary">{value}</div>
      <div className="font-mono text-xs uppercase tracking-wider text-text-dim mt-1">
        {label}
      </div>
    </div>
  );
}
