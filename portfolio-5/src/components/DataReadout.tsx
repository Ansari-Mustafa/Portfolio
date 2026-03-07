interface DataReadoutProps {
  label: string;
  value: string;
}

export default function DataReadout({ label, value }: DataReadoutProps) {
  return (
    <div className="text-center">
      <div className="font-heading text-[10px] md:text-[11px] uppercase tracking-wider text-text-dim mb-1">
        {label}
      </div>
      <div className="font-mono text-accent-cyan text-lg md:text-xl font-semibold text-glow">
        {value}
      </div>
    </div>
  );
}
