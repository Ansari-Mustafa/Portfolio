import Image from 'next/image';
import { siteConfig } from '@/data/site';

export default function EditorialHero() {
  return (
    <section className="py-12">
      {/* Large headshot */}
      <div className="mx-auto max-w-[800px]">
        <div className="border border-[var(--color-rule-heavy)]">
          <Image
            src="/images/main-img.png"
            alt={`${siteConfig.name} photographed in Freiburg, Germany`}
            width={800}
            height={1000}
            className="w-full object-cover"
            priority
          />
        </div>

        {/* Caption */}
        <p
          className="mt-3 text-center text-base italic"
          style={{
            fontFamily: 'var(--font-source-serif), Source Serif 4, Georgia, serif',
            color: 'var(--color-secondary)',
          }}
        >
          Mustafa Ansari photographed in Freiburg, Germany
        </p>
      </div>

      {/* Bio in 2-column layout with drop cap */}
      <div className="mx-auto mt-12 max-w-[800px]">
        <div
          className="drop-cap bio-columns"
          style={{
            fontFamily: 'var(--font-source-serif), Source Serif 4, Georgia, serif',
            fontSize: '1.125rem',
            lineHeight: 1.75,
            color: 'var(--color-text)',
          }}
        >
          <p>{siteConfig.heroBio}</p>
        </div>
      </div>
    </section>
  );
}
