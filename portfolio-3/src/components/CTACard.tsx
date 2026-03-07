import BentoCard from './BentoCard';
import ScrollFadeIn from './ScrollFadeIn';
import { socialLinks } from '@/data/social';

export default function CTACard() {
  const emailLink = socialLinks.find((l) => l.platform === 'email');
  const linkedinLink = socialLinks.find((l) => l.platform === 'linkedin');

  return (
    <ScrollFadeIn delay={0} className="col-span-2">
      <BentoCard colSpan={1} className="h-full">
        <h2
          style={{
            fontSize: '22px',
            fontWeight: 800,
            lineHeight: 1.3,
            marginBottom: '12px',
          }}
        >
          <span className="accent-gradient">Got a workflow that&apos;s broken?</span>
          <br />
          <span style={{ color: 'var(--color-text-primary)' }}>I can automate it.</span>
        </h2>
        <p
          style={{
            fontSize: '14px',
            lineHeight: 1.6,
            color: 'var(--color-text-secondary)',
            marginBottom: '20px',
          }}
        >
          Open to full-time roles, consulting, freelance, strategic partnerships, and investment
          conversations. If it involves AI and enterprise — let&apos;s talk.
        </p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {emailLink && (
            <a
              href={emailLink.url}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 20px',
                borderRadius: 'var(--radius-chip)',
                background:
                  'linear-gradient(135deg, var(--color-accent-start), var(--color-accent-end))',
                color: '#fff',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'opacity 200ms ease',
              }}
            >
              <svg
                width="14"
                height="14"
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
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 20px',
                borderRadius: 'var(--radius-chip)',
                background: 'rgba(99, 102, 241, 0.08)',
                color: 'var(--color-accent-start)',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 200ms ease',
                border: '1px solid rgba(99, 102, 241, 0.15)',
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              {linkedinLink.label}
            </a>
          )}
        </div>
      </BentoCard>
    </ScrollFadeIn>
  );
}
