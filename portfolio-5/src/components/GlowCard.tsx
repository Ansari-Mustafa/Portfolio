import { cn } from '@/lib/utils';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlowCard({
  children,
  className,
  hover = true,
}: GlowCardProps) {
  return (
    <div
      className={cn(
        'glow-card p-6 md:p-8',
        hover && 'transition-all duration-300',
        className
      )}
    >
      {children}
    </div>
  );
}
