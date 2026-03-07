import { products } from '@/data/products';
import SectionLabel from './SectionLabel';

function getStatusColor(status: string) {
  switch (status) {
    case 'live':
      return '#16a34a'; // green
    case 'in-development':
      return '#d97706'; // amber
    case 'launching-2026':
      return '#2563eb'; // blue
    default:
      return 'var(--color-secondary)';
  }
}

function getStatusText(status: string) {
  switch (status) {
    case 'live':
      return 'LIVE';
    case 'in-development':
      return 'IN DEVELOPMENT';
    case 'launching-2026':
      return 'LAUNCHING 2026';
    case 'under-nda':
      return 'UNDER NDA';
    default:
      return status.toUpperCase();
  }
}

function getIndustryLabel(industry: string) {
  const map: Record<string, string> = {
    industrial: 'Industrial',
    enterprise: 'Enterprise',
    healthcare: 'Healthcare',
    education: 'Education',
    hospitality: 'Hospitality',
    fintech: 'Fintech',
    hr: 'Human Resources',
  };
  return map[industry] || industry;
}

export default function ProductsSection() {
  return (
    <section>
      <SectionLabel text="PRODUCTS & VENTURES" />

      {/* Horizontal scrolling container */}
      <div
        className="hide-scrollbar -mx-5 flex gap-5 overflow-x-auto px-5 pb-4 md:-mx-0 md:px-0"
        style={{
          scrollSnapType: 'x mandatory',
          scrollPaddingLeft: '1.25rem',
        }}
      >
        {products.map((product) => (
          <article
            key={product.id}
            className="flex-shrink-0"
            style={{
              width: '300px',
              scrollSnapAlign: 'start',
              border: '1px solid var(--color-rule-light)',
              padding: '1.5rem',
            }}
          >
            {/* Industry label with accent underline */}
            <p
              className="caption-label inline-block pb-1"
              style={{
                borderBottom: '2px solid var(--color-accent)',
                color: 'var(--color-accent)',
                fontSize: '0.625rem',
              }}
            >
              {getIndustryLabel(product.industry)}
            </p>

            {/* Product name */}
            <h3
              className="mt-3 text-[1.375rem] font-bold leading-tight"
              style={{
                fontFamily: 'var(--font-playfair), Playfair Display, Georgia, serif',
                color: 'var(--color-headline)',
              }}
            >
              {product.isConfidential && product.displayName
                ? product.displayName
                : product.name}
            </h3>

            {/* Description */}
            <p
              className="mt-3 text-[0.9375rem] leading-relaxed"
              style={{
                fontFamily: 'var(--font-source-serif), Source Serif 4, Georgia, serif',
                color: 'var(--color-text)',
              }}
            >
              {product.shortDescription}
            </p>

            {/* Status */}
            <p
              className="caption-label mt-4"
              style={{
                color: getStatusColor(product.status),
                fontSize: '0.625rem',
              }}
            >
              {getStatusText(product.status)}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
