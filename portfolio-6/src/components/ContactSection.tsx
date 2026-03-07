'use client';

import { useRef, useMemo } from 'react';
import { useInView } from '@/hooks/useInView';
import { socialLinks } from '@/data/social';
import { siteConfig } from '@/data/site';

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const options = useMemo(() => ({ threshold: 0.3 }), []);
  const isInView = useInView(sectionRef, options);

  const emailLink = socialLinks.find((l) => l.platform === 'email');
  const linkedinLink = socialLinks.find((l) => l.platform === 'linkedin');

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 section-accent"
    >
      <div ref={sectionRef} className="w-full max-w-3xl mx-auto text-center">
        {/* Heading line 1 */}
        <h2
          className="font-bold leading-tight transition-all duration-800 ease-out"
          style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontFamily: 'var(--font-sans)',
            color: '#0A0A0A',
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          Got a workflow that&apos;s broken?
        </h2>

        {/* Heading line 2 */}
        <h2
          className="font-bold leading-tight mt-2 transition-all duration-800 ease-out"
          style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontFamily: 'var(--font-sans)',
            color: '#0A0A0A',
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '150ms',
          }}
        >
          I can automate it.
        </h2>

        {/* Contact links */}
        <div
          className="flex flex-wrap justify-center gap-4 mt-10 transition-all duration-700 ease-out"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '350ms',
          }}
        >
          {emailLink && (
            <a
              href={emailLink.url}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wider rounded-md transition-all duration-200 hover:opacity-80"
              style={{
                backgroundColor: '#0A0A0A',
                color: '#FAFAFA',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              {emailLink.label}
            </a>
          )}
          {linkedinLink && (
            <a
              href={linkedinLink.url}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wider rounded-md transition-all duration-200 hover:opacity-80"
              style={{
                backgroundColor: '#0A0A0A',
                color: '#FAFAFA',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              {linkedinLink.label}
            </a>
          )}
        </div>

        {/* Description */}
        <p
          className="mt-8 text-base md:text-lg leading-relaxed transition-all duration-700 ease-out"
          style={{
            fontFamily: 'var(--font-sans)',
            color: 'rgba(10, 10, 10, 0.75)',
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '500ms',
          }}
        >
          {siteConfig.ctaDescription}
        </p>

        {/* Footer */}
        <div
          className="mt-16 pt-8 border-t transition-all duration-700 ease-out"
          style={{
            borderColor: 'rgba(10, 10, 10, 0.15)',
            opacity: isInView ? 1 : 0,
            transitionDelay: '700ms',
          }}
        >
          <p
            className="text-xs uppercase tracking-widest"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'rgba(10, 10, 10, 0.5)',
            }}
          >
            Mustafa Ansari &mdash; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}
