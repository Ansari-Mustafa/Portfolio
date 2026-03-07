import { cn } from '@/lib/utils';

interface FullSectionProps {
  bg: 'dark' | 'light' | 'accent';
  id: string;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const bgClasses = {
  dark: 'section-dark',
  light: 'section-light',
  accent: 'section-accent',
};

export default function FullSection({
  bg,
  id,
  className,
  children,
  style,
}: FullSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative min-h-screen flex flex-col items-center justify-center px-6 py-16 md:py-20 overflow-hidden',
        bgClasses[bg],
        className
      )}
      style={style}
    >
      {children}
    </section>
  );
}
