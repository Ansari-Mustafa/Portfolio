'use client';

import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent">
      {/* CSS animation-timeline version (progressive enhancement) */}
      <div
        className="scroll-progress-bar absolute inset-0 origin-left"
        style={{ backgroundColor: '#FF6B35' }}
      />
      {/* JS fallback */}
      <div
        className="absolute inset-0 origin-left transition-transform duration-100 ease-out"
        style={{
          backgroundColor: '#FF6B35',
          transform: `scaleX(${progress})`,
        }}
      />
    </div>
  );
}
