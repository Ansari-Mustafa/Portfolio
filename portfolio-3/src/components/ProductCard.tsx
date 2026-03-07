import BentoCard from './BentoCard';
import ScrollFadeIn from './ScrollFadeIn';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  index: number;
  featured?: boolean;
}

function getStatusClass(status: string): string {
  switch (status) {
    case 'live':
      return 'status-live';
    case 'launching-2026':
      return 'status-launching';
    case 'in-development':
      return 'status-development';
    default:
      return 'status-development';
  }
}

function getStatusLabel(status: string): string {
  switch (status) {
    case 'live':
      return 'Live';
    case 'launching-2026':
      return 'Launching';
    case 'in-development':
      return 'In Development';
    default:
      return status;
  }
}

export default function ProductCard({ product, index, featured = false }: ProductCardProps) {
  const displayName = product.isConfidential ? product.displayName || product.name : product.name;

  return (
    <ScrollFadeIn delay={index * 60} className={featured ? 'col-span-2' : ''}>
      <BentoCard colSpan={1} className="h-full flex flex-col">
        {/* Top row: industry chip + status */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '12px',
          }}
        >
          <span
            className={`industry-${product.industry}`}
            style={{
              fontSize: '11px',
              fontWeight: 600,
              padding: '3px 10px',
              borderRadius: 'var(--radius-chip)',
              letterSpacing: '0.02em',
              textTransform: 'capitalize',
            }}
          >
            {product.industry}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span
              className={getStatusClass(product.status)}
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                display: 'inline-block',
              }}
            />
            <span
              style={{
                fontSize: '11px',
                color: 'var(--color-text-dim)',
                fontWeight: 500,
              }}
            >
              {getStatusLabel(product.status)}
            </span>
          </div>
        </div>

        {/* Product name */}
        <h3
          style={{
            fontSize: '17px',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            marginBottom: '6px',
          }}
        >
          {displayName}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: '13px',
            lineHeight: 1.6,
            color: 'var(--color-text-secondary)',
            flex: 1,
          }}
        >
          {product.shortDescription}
        </p>
      </BentoCard>
    </ScrollFadeIn>
  );
}
