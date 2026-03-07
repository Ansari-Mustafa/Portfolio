import { socialLinks } from '@/data/social';
import { siteConfig } from '@/data/site';

const platformIcons: Record<string, string> = {
  email: '[mail]',
  linkedin: '[in]',
  github: '[gh]',
  calendar: '[cal]',
};

export default function ContactSection() {
  return (
    <div className="text-sm space-y-4">
      <p className="text-terminal-primary">{siteConfig.ctaHeading?.split('\n').map((line, i) => (
        <span key={i}>
          {line}
          {i === 0 && <br />}
        </span>
      ))}</p>

      <p className="text-terminal-dim max-w-[80ch]">
        {siteConfig.ctaDescription}
      </p>

      <div className="space-y-2 pt-2">
        {socialLinks.map((link) => (
          <div key={link.platform} className="flex items-center gap-3">
            <span className="text-terminal-accent text-xs w-[5ch]">
              {platformIcons[link.platform] || '[?]'}
            </span>
            <a
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-terminal-secondary underline underline-offset-2 hover:text-terminal-primary transition-colors"
            >
              {link.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
