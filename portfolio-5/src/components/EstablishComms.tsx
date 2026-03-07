import SectionHeader from './SectionHeader';

export default function EstablishComms() {
  return (
    <section className="py-16 md:py-24">
      <SectionHeader title="// ESTABLISH COMMUNICATIONS" />

      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        {/* Channel Open */}
        <div className="flex items-center gap-3 mb-8">
          <span className="status-dot status-dot-green" />
          <span className="font-heading text-sm md:text-base uppercase tracking-widest text-industry-healthcare">
            CHANNEL OPEN
          </span>
        </div>

        {/* CTA Heading */}
        <p className="font-body text-xl md:text-2xl text-text-primary mb-10 leading-relaxed">
          Got a workflow that&apos;s broken?{' '}
          <span className="text-accent-cyan text-glow">I can automate it.</span>
        </p>

        {/* Contact Links as Data Readouts */}
        <div className="space-y-4 mb-10 w-full max-w-md">
          <a
            href="mailto:mustafa@lv4ai.com"
            className="group flex items-center justify-between p-4 rounded-lg transition-all duration-300"
            style={{
              background: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgba(6, 182, 212, 0.1)',
            }}
          >
            <span className="font-heading text-[10px] md:text-xs uppercase tracking-wider text-text-dim">
              EMAIL
            </span>
            <span className="font-mono text-sm text-accent-cyan group-hover:text-accent-glow transition-colors">
              mustafa@lv4ai.com
            </span>
          </a>

          <a
            href="https://linkedin.com/in/ansari-mustafa"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 rounded-lg transition-all duration-300"
            style={{
              background: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgba(6, 182, 212, 0.1)',
            }}
          >
            <span className="font-heading text-[10px] md:text-xs uppercase tracking-wider text-text-dim">
              LINKEDIN
            </span>
            <span className="font-mono text-sm text-accent-cyan group-hover:text-accent-glow transition-colors">
              /in/ansari-mustafa
            </span>
          </a>
        </div>

        {/* Additional info */}
        <p className="font-body text-sm text-text-dim leading-relaxed max-w-lg">
          Open to full-time roles, consulting, freelance, strategic partnerships,
          and investment conversations.
        </p>
      </div>
    </section>
  );
}
