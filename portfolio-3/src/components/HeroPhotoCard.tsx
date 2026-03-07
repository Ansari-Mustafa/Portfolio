import Image from 'next/image';
import BentoCard from './BentoCard';
import ScrollFadeIn from './ScrollFadeIn';

export default function HeroPhotoCard() {
  return (
    <ScrollFadeIn delay={0} className="col-span-2 row-span-2">
      <BentoCard colSpan={1} rowSpan={1} noPadding className="overflow-hidden relative h-full">
        <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '360px' }}>
          <Image
            src="/images/main-img.png"
            alt="Mustafa Ansari"
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            priority
          />
          {/* Gradient overlay at bottom */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '50%',
              background:
                'linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 40%, transparent 100%)',
            }}
          />
          {/* Text overlay */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '24px 28px',
            }}
          >
            <h1
              style={{
                fontSize: '28px',
                fontWeight: 800,
                color: 'var(--color-text-primary)',
                lineHeight: 1.2,
                marginBottom: '6px',
              }}
            >
              Mustafa Ansari
            </h1>
            <p
              style={{
                fontSize: '15px',
                fontWeight: 500,
                color: 'var(--color-text-secondary)',
              }}
            >
              AI Engineer &amp; Entrepreneur
            </p>
          </div>
        </div>
      </BentoCard>
    </ScrollFadeIn>
  );
}
