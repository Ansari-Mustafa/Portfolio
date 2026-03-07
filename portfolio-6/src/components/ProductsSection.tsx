'use client';

import { useEffect, useRef, useState } from 'react';
import { products } from '@/data/products';

const INDUSTRY_COLORS: Record<string, string> = {
  industrial: '#FF6B35',
  enterprise: '#3B82F6',
  healthcare: '#10B981',
  education: '#8B5CF6',
  hospitality: '#F59E0B',
  fintech: '#06B6D4',
  hr: '#EC4899',
};

const STATUS_MAP: Record<string, string> = {
  live: 'LIVE',
  'launching-2026': 'LAUNCHING 2026',
  'in-development': 'IN DEVELOPMENT',
  'under-nda': 'UNDER NDA',
};

export default function ProductsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const container = containerRef.current;
          if (!container) {
            ticking = false;
            return;
          }

          const rect = container.getBoundingClientRect();
          const containerHeight = container.offsetHeight;
          const viewportHeight = window.innerHeight;
          const scrollableDistance = containerHeight - viewportHeight;

          // How far through the sticky container the user has scrolled
          const progress = Math.min(
            1,
            Math.max(0, -rect.top / scrollableDistance)
          );

          // Total width to translate: all cards + title card
          // Each card ~370px + gap, title card ~400px
          const totalCards = products.length + 1;
          const cardWidth = 370;
          const gap = 24;
          const totalRowWidth = totalCards * (cardWidth + gap);
          const maxTranslate = totalRowWidth - window.innerWidth + 100;

          setTranslateX(-progress * maxTranslate);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // Mobile: vertical layout
  if (isMobile) {
    return (
      <section id="products" className="section-light px-6 py-20">
        <div className="max-w-lg mx-auto">
          <h2
            className="font-bold tracking-tight mb-12"
            style={{
              fontSize: 'clamp(36px, 8vw, 64px)',
              fontFamily: 'var(--font-sans)',
              color: '#0A0A0A',
            }}
          >
            PRODUCTS
          </h2>
          <div className="flex flex-col gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop: horizontal scroll driven by vertical scroll
  return (
    <div
      ref={containerRef}
      id="products"
      style={{ height: '350vh' }}
      className="relative section-light"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <div
          className="flex items-stretch gap-6 px-12 transition-transform duration-75 ease-out will-change-transform"
          style={{
            transform: `translateX(${translateX}px)`,
          }}
        >
          {/* Title card */}
          <div className="flex-shrink-0 w-[400px] flex flex-col justify-center pr-8">
            <h2
              className="font-bold tracking-tight"
              style={{
                fontSize: '80px',
                fontFamily: 'var(--font-sans)',
                color: '#0A0A0A',
                lineHeight: 0.95,
              }}
            >
              PROD
              <br />
              UCTS
            </h2>
            <p
              className="mt-6 text-sm uppercase tracking-widest"
              style={{ color: '#737373', fontFamily: 'var(--font-mono)' }}
            >
              {products.length} products shipped
            </p>
          </div>

          {/* Product cards */}
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: (typeof products)[0] }) {
  const industryColor = INDUSTRY_COLORS[product.industry] || '#FF6B35';

  return (
    <div
      className="flex-shrink-0 w-[340px] md:w-[350px] flex flex-col rounded-lg overflow-hidden border border-gray-200"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Top colored stripe */}
      <div className="h-2" style={{ backgroundColor: industryColor }} />

      <div className="flex flex-col flex-1 p-6">
        {/* Industry label */}
        <span
          className="text-[11px] uppercase tracking-widest font-medium"
          style={{ color: industryColor, fontFamily: 'var(--font-mono)' }}
        >
          {product.industry}
        </span>

        {/* Product name */}
        <h3
          className="text-xl md:text-2xl font-bold mt-3 leading-tight"
          style={{ fontFamily: 'var(--font-sans)', color: '#0A0A0A' }}
        >
          {product.isConfidential
            ? product.displayName || 'Confidential'
            : product.name}
        </h3>

        {/* Description */}
        <p
          className="mt-3 text-sm leading-relaxed flex-1"
          style={{ color: '#737373', fontFamily: 'var(--font-sans)' }}
        >
          {product.shortDescription}
        </p>

        {/* Status */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span
            className="text-[11px] uppercase tracking-widest"
            style={{
              fontFamily: 'var(--font-mono)',
              color: product.status === 'live' ? '#10B981' : '#737373',
            }}
          >
            {STATUS_MAP[product.status] || product.status}
          </span>
        </div>
      </div>
    </div>
  );
}
