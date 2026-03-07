import Image from 'next/image';
import { siteConfig } from '@/data/site';

export default function HeroSection() {
  return (
    <div className="space-y-4">
      {/* Name */}
      <div>
        <span className="text-terminal-primary text-2xl font-bold">
          {siteConfig.name}
        </span>
      </div>

      {/* Title */}
      <div className="text-terminal-accent text-base">
        AI Engineer · Entrepreneur
      </div>

      {/* Bio */}
      <p className="text-terminal-dim text-sm leading-relaxed max-w-[80ch]">
        {siteConfig.heroBio}
      </p>

      {/* Headshot */}
      <div className="border border-terminal-border p-1 inline-block">
        <div className="text-terminal-dim text-xs mb-1">[main-img.png]</div>
        <Image
          src="/images/main-img.png"
          alt="Mustafa Ansari"
          width={200}
          height={200}
          className="block"
          style={{ imageRendering: 'auto' }}
        />
      </div>

      {/* Stats */}
      <div className="text-terminal-secondary text-sm pt-2">
        Products: 8+ | Industries: 6+ | Continents: 3
      </div>
    </div>
  );
}
