'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface CommandBlockProps {
  id: string;
  command: string;
  children: ReactNode;
}

export default function CommandBlock({ id, command, children }: CommandBlockProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const current = ref.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowOutput(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section id={id} ref={ref} className="py-6 px-4 scroll-mt-[90px]">
      <div className="max-w-[1200px] mx-auto">
        {/* Prompt line */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-terminal-primary whitespace-nowrap select-none">
            mustafa@portfolio ~ $
          </span>
          {isVisible ? (
            <span
              className="typing-animate text-white"
              style={{
                '--typing-width': `${command.length}ch`,
                '--typing-steps': command.length,
              } as React.CSSProperties}
            >
              {command}
            </span>
          ) : (
            <span className="text-white opacity-0">{command}</span>
          )}
        </div>

        {/* Output */}
        {showOutput && (
          <div className="fade-in pl-0 md:pl-4 border-l border-terminal-border ml-0 md:ml-2">
            <div className="pl-4">{children}</div>
          </div>
        )}
      </div>
    </section>
  );
}
