'use client';

import { useEffect, useState } from 'react';

export default function TopStatusBar() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setTime(formatted);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-9 flex items-center justify-between px-4 md:px-8 font-heading text-[10px] uppercase tracking-wider"
      style={{
        backgroundColor: 'rgba(3, 7, 18, 0.9)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(6, 182, 212, 0.2)',
      }}
    >
      {/* Left: System Status */}
      <div className="flex items-center gap-2 text-text-dim">
        <span className="status-dot status-dot-green" />
        <span className="text-industry-healthcare">SYSTEM ONLINE</span>
      </div>

      {/* Center: Location */}
      <div className="hidden sm:block text-text-dim">
        <span className="text-accent-cyan">&#9670;</span>
        <span className="mx-2">FREIBURG, DE</span>
        <span className="text-accent-cyan">&#9670;</span>
      </div>

      {/* Right: Time */}
      <div className="text-text-dim font-mono">
        <span className="text-accent-cyan mr-2">UTC+1</span>
        <span className="text-text-secondary">{time || '--:--:--'}</span>
      </div>
    </header>
  );
}
