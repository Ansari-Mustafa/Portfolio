import { cn } from '@/lib/utils';

interface HudFrameProps {
  children: React.ReactNode;
  glowing?: boolean;
  className?: string;
}

export default function HudFrame({
  children,
  glowing = false,
  className,
}: HudFrameProps) {
  const bracketClasses = cn(
    'absolute w-4 h-4 border-accent-cyan',
    glowing && 'animate-bracket-pulse'
  );

  return (
    <div className={cn('relative', className)}>
      {/* Top-left corner bracket */}
      <div
        className={cn(bracketClasses, 'top-0 left-0 border-t-2 border-l-2')}
        style={{ borderColor: 'rgba(6, 182, 212, 0.5)' }}
      />
      {/* Top-right corner bracket */}
      <div
        className={cn(bracketClasses, 'top-0 right-0 border-t-2 border-r-2')}
        style={{ borderColor: 'rgba(6, 182, 212, 0.5)' }}
      />
      {/* Bottom-left corner bracket */}
      <div
        className={cn(bracketClasses, 'bottom-0 left-0 border-b-2 border-l-2')}
        style={{ borderColor: 'rgba(6, 182, 212, 0.5)' }}
      />
      {/* Bottom-right corner bracket */}
      <div
        className={cn(bracketClasses, 'bottom-0 right-0 border-b-2 border-r-2')}
        style={{ borderColor: 'rgba(6, 182, 212, 0.5)' }}
      />
      {children}
    </div>
  );
}
