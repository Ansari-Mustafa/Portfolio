'use client';

import { Container } from '@/components/layout/Container';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { siteConfig } from '@/data/site';

export function CTAContact() {
  return (
    <section className="py-24 md:py-32" id="contact">
      <Container>
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <div className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent mb-6">
              // let&apos;s talk
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight text-text-primary mb-6">
              Got a workflow that&apos;s{' '}
              <em className="text-accent">broken?</em>
              <br />
              I can automate it.
            </h2>
            <p className="text-text-muted mb-10 max-w-lg mx-auto">
              {siteConfig.ctaDescription}
            </p>
            <SocialLinks variant="cta" className="justify-center" />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
