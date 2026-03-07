import { ProductStatus } from '@/types';
import { cn } from '@/lib/utils';

const statusConfig: Record<ProductStatus, { color: string; label: string }> = {
  live: { color: 'bg-emerald-400', label: 'Live' },
  'launching-2026': { color: 'bg-blue-400', label: 'Launching 2026' },
  'in-development': { color: 'bg-amber-400', label: 'In Development' },
  'under-nda': { color: 'bg-amber-400', label: 'Under NDA' },
};

export function StatusBadge({
  status,
  label,
  className,
}: {
  status: ProductStatus;
  label?: string;
  className?: string;
}) {
  const config = statusConfig[status];

  return (
    <div className={cn('flex items-center gap-2 text-sm text-text-muted', className)}>
      <span
        className={cn('inline-block h-1.5 w-1.5 rounded-full', config.color)}
      />
      <span>{label || config.label}</span>
    </div>
  );
}
