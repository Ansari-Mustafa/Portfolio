'use client';

import { Container } from '@/components/layout/Container';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { siteConfig } from '@/data/site';

export function ContactPage() {
  return (
    <div className="pt-28 pb-24">
      <Container>
        <ScrollReveal>
          <div className="max-w-2xl">
            <div className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent mb-6">
              // let&apos;s talk
            </div>
            <h1 className="font-serif text-4xl md:text-5xl leading-[1.15] tracking-tight text-text-primary mb-6">
              Got a workflow that&apos;s{' '}
              <em className="text-accent">broken?</em>
              <br />
              I can automate it.
            </h1>
            <p className="text-text-muted mb-10 text-lg leading-relaxed">
              {siteConfig.ctaDescription}
            </p>
            <SocialLinks variant="cta" />
          </div>
        </ScrollReveal>
      </Container>
    </div>
  );
}
