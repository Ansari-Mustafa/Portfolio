'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function GlitchText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [phase, setPhase] = useState<'redacted' | 'glitching' | 'revealed'>(
    'redacted'
  );

  const redacted = text.replace(/[a-zA-Z0-9]/g, '█');

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase('glitching');
      setTimeout(() => setPhase('revealed'), 400);
      setTimeout(() => setPhase('glitching'), 1800);
      setTimeout(() => setPhase('redacted'), 2100);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={className} style={{ position: 'relative', display: 'inline-block' }}>
      <AnimatePresence mode="wait">
        {phase === 'redacted' && (
          <motion.span
            key="redacted"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-mono"
          >
            {redacted}
          </motion.span>
        )}
        {phase === 'glitching' && (
          <motion.span
            key="glitch"
            animate={{
              x: [0, -2, 3, -1, 0],
              opacity: [1, 0.7, 1, 0.8, 1],
            }}
            transition={{ duration: 0.3 }}
            className="font-mono"
            style={{
              textShadow: '2px 0 var(--accent), -2px 0 var(--accent-2)',
              filter: 'blur(0.5px)',
            }}
          >
            {redacted}
          </motion.span>
        )}
        {phase === 'revealed' && (
          <motion.span
            key="revealed"
            initial={{ opacity: 0, filter: 'blur(4px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(4px)' }}
            transition={{ duration: 0.3 }}
          >
            {text}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
