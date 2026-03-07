import Link from 'next/link';
import Image from 'next/image';
import { otherProducts } from '@/data/products';

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

export default function ProjectsPage() {
  return (
    <main className="min-h-screen section-dark px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest mb-12 hover:opacity-70 transition-opacity"
          style={{ color: '#737373', fontFamily: 'var(--font-mono)' }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </Link>

        <h1
          className="font-bold tracking-tight mb-4"
          style={{
            fontSize: 'clamp(36px, 7vw, 64px)',
            fontFamily: 'var(--font-sans)',
            color: '#FAFAFA',
          }}
        >
          OTHER PROJECTS
        </h1>
        <p
          className="text-base mb-12"
          style={{
            fontFamily: 'var(--font-sans)',
            color: '#737373',
          }}
        >
          Additional products and client projects.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherProducts.map((product) => {
            const industryColor =
              INDUSTRY_COLORS[product.industry] || '#FF6B35';
            return (
              <div
                key={product.id}
                className="flex flex-col rounded-lg overflow-hidden border border-white/10"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              >
                <div
                  className="h-1.5"
                  style={{ backgroundColor: industryColor }}
                />
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[11px] uppercase tracking-widest font-medium"
                      style={{
                        color: industryColor,
                        fontFamily: 'var(--font-mono)',
                      }}
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

                  <h3
                    className="text-lg font-bold mt-3 leading-tight"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      color: '#FAFAFA',
                    }}
                  >
                    {product.name}
                  </h3>

                  <p
                    className="mt-2 text-sm leading-relaxed flex-1"
                    style={{
                      color: 'rgba(250, 250, 250, 0.6)',
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    {product.shortDescription}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/10">
                    <span
                      className="text-[11px] uppercase tracking-widest"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        color:
                          product.status === 'live' ? '#10B981' : '#737373',
                      }}
                    >
                      {STATUS_MAP[product.status] || product.status}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
