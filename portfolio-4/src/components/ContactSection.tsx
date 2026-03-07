import { socialLinks } from '@/data/social';
import { siteConfig } from '@/data/site';
import ThickRule from './ThickRule';
import PullQuote from './PullQuote';

export default function ContactSection() {
  const emailLink = socialLinks.find((l) => l.platform === 'email');
  const linkedinLink = socialLinks.find((l) => l.platform === 'linkedin');

  return (
    <section>
      <ThickRule />

      <PullQuote quote="Got a workflow that's broken? I can automate it." />

      <div className="mx-auto max-w-[600px] text-center">
        {/* Contact links */}
        <div className="flex items-center justify-center gap-6">
          {emailLink && (
            <a
              href={emailLink.url}
              className="text-base"
              style={{
                fontFamily: 'var(--font-source-serif), Source Serif 4, Georgia, serif',
                color: 'var(--color-accent)',
              }}
            >
              {emailLink.label}
            </a>
          )}
          <span
            style={{ color: 'var(--color-rule-light)' }}
            aria-hidden="true"
          >
            |
          </span>
          {linkedinLink && (
            <a
              href={linkedinLink.url}
              className="text-base"
              style={{
                fontFamily: 'var(--font-source-serif), Source Serif 4, Georgia, serif',
                color: 'var(--color-accent)',
              }}
            >
              {linkedinLink.label}
            </a>
          )}
        </div>

        {/* Description */}
        <p
          className="mt-6 text-[0.9375rem] leading-relaxed"
          style={{
            fontFamily: 'var(--font-source-serif), Source Serif 4, Georgia, serif',
            color: 'var(--color-secondary)',
          }}
        >
          {siteConfig.ctaDescription}
        </p>
      </div>
    </section>
  );
}
