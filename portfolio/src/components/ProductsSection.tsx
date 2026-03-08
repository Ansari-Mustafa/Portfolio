'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { mainProducts, otherProducts } from '@/data/products';
import { universityProjects } from '@/data/achievements';
import type { Product } from '@/types';

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
  const stickyRef = useRef<HTMLDivElement>(null);
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

          const progress = Math.min(
            1,
            Math.max(0, -rect.top / scrollableDistance)
          );

          // cards + "more" card (no title card in the row anymore)
          const totalCards = mainProducts.length + 1;
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

  // Convert horizontal scroll/trackpad swipe into vertical scroll
  useEffect(() => {
    if (isMobile) return;
    const sticky = stickyRef.current;
    if (!sticky) return;

    const handleWheel = (e: WheelEvent) => {
      // Only intercept when there's meaningful horizontal intent
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;

      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      // Only active while section is sticky (top in view)
      if (rect.top > 0 || rect.bottom < window.innerHeight) return;

      e.preventDefault();
      window.scrollBy({ top: e.deltaX, behavior: 'instant' });
    };

    sticky.addEventListener('wheel', handleWheel, { passive: false });
    return () => sticky.removeEventListener('wheel', handleWheel);
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
            {mainProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            <MoreProjectsCard />
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
      style={{ height: '300vh' }}
      className="relative section-light"
    >
      <div ref={stickyRef} className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        {/* Header row — fixed above scrolling cards */}
        <div className="px-12 mb-8">
          <p
            className="text-sm uppercase tracking-widest mb-2"
            style={{ color: '#737373', fontFamily: 'var(--font-mono)' }}
          >
            Most relevant
          </p>
          <h2
            className="font-bold tracking-tight"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontFamily: 'var(--font-sans)',
              color: '#0A0A0A',
              lineHeight: 1,
            }}
          >
            PRODUCTS
          </h2>
        </div>

        {/* Scrolling cards row */}
        <div
          className="flex items-stretch gap-6 px-12 transition-transform duration-75 ease-out will-change-transform"
          style={{
            transform: `translateX(${translateX}px)`,
          }}
        >
          {mainProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          <MoreProjectsCard />
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const industryColor = INDUSTRY_COLORS[product.industry] || '#FF6B35';

  return (
    <div
      className="flex-shrink-0 w-full md:w-[350px] flex flex-col rounded-lg overflow-hidden border border-gray-200"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Top colored stripe */}
      <div className="h-2" style={{ backgroundColor: industryColor }} />

      <div className="flex flex-col flex-1 p-6">
        {/* Logo + Industry row */}
        <div className="flex items-center justify-between">
          <span
            className="text-[11px] uppercase tracking-widest font-medium"
            style={{ color: industryColor, fontFamily: 'var(--font-mono)' }}
          >
            {product.industry}
          </span>
          {product.logoPath && (
            <div className="relative w-8 h-8 flex-shrink-0 rounded overflow-hidden">
              <Image
                src={product.logoPath}
                alt={`${product.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>

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

function MoreProjectsCard() {
  return (
    <Link
      href="/projects"
      className="flex-shrink-0 w-full md:w-[350px] flex flex-col rounded-lg overflow-hidden border border-gray-200 group hover:border-gray-300 transition-colors"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="h-2" style={{ backgroundColor: '#737373' }} />

      <div className="flex flex-col items-center justify-center flex-1 p-6 text-center">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: 'rgba(10, 10, 10, 0.05)' }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0A0A0A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>

        <h3
          className="text-xl font-bold"
          style={{ fontFamily: 'var(--font-sans)', color: '#0A0A0A' }}
        >
          Other Projects
        </h3>
        <p
          className="mt-2 text-sm"
          style={{ color: '#737373', fontFamily: 'var(--font-mono)' }}
        >
          {otherProducts.length + universityProjects.length + 3} more products &amp; projects
        </p>
      </div>
    </Link>
  );
}
