import { cn } from '@/lib/utils';

interface BentoCardProps {
  colSpan?: 1 | 2 | 4;
  rowSpan?: 1 | 2;
  className?: string;
  children: React.ReactNode;
  noPadding?: boolean;
  noHover?: boolean;
}

export default function BentoCard({
  colSpan = 1,
  rowSpan = 1,
  className = '',
  children,
  noPadding = false,
  noHover = false,
}: BentoCardProps) {
  const spanClasses = cn(
    colSpan === 2 && 'col-span-2',
    colSpan === 4 && 'col-span-4',
    rowSpan === 2 && 'row-span-2'
  );

  return (
    <div
      className={cn(
        'glass-card',
        spanClasses,
        !noPadding && 'p-6 sm:p-7',
        noHover && 'hover:transform-none hover:shadow-[var(--shadow-card)]',
        className
      )}
      style={noHover ? { transform: 'none' } : undefined}
    >
      {children}
    </div>
  );
}
