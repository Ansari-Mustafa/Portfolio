'use client';

import { useEffect, useRef, useState } from 'react';

interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-10 md:mb-12">
      <div className="flex items-center gap-4">
        <h2 className="font-heading text-accent-cyan text-lg md:text-xl tracking-widest uppercase whitespace-nowrap">
          {title}
        </h2>
        <div className="flex items-center gap-1 mt-1">
          <span className="w-1 h-1 rounded-full bg-accent-cyan opacity-60" />
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan opacity-40" />
          <span className="w-1 h-1 rounded-full bg-accent-cyan opacity-20" />
        </div>
      </div>
      {/* Scan line */}
      <div className="relative h-px mt-3 overflow-hidden bg-[rgba(6,182,212,0.1)]">
        {isVisible && (
          <div
            className="absolute inset-y-0 left-0 w-1/3 animate-scan-line"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.6), transparent)',
            }}
          />
        )}
      </div>
    </div>
  );
}
