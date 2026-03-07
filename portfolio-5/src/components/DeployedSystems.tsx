import SectionHeader from './SectionHeader';
import HudFrame from './HudFrame';
import { products } from '@/data/products';
import type { Industry, ProductStatus } from '@/types';

const industryColors: Record<Industry, string> = {
  industrial: '#FBBF24',
  healthcare: '#34D399',
  enterprise: '#A78BFA',
  education: '#60A5FA',
  hospitality: '#FB923C',
  fintech: '#2DD4BF',
  hr: '#F472B6',
};

const industryLabels: Record<Industry, string> = {
  industrial: 'INDUSTRIAL',
  healthcare: 'HEALTHCARE',
  enterprise: 'ENTERPRISE',
  education: 'EDUCATION',
  hospitality: 'HOSPITALITY',
  fintech: 'FINTECH',
  hr: 'HR',
};

function getStatusDisplay(status: ProductStatus, isConfidential?: boolean) {
  if (isConfidential) {
    return { dot: 'status-dot-red', text: 'CLASSIFIED', color: '#F87171' };
  }
  switch (status) {
    case 'live':
      return { dot: 'status-dot-green', text: 'LIVE', color: '#34D399' };
    case 'in-development':
      return { dot: 'status-dot-amber', text: 'IN DEVELOPMENT', color: '#FBBF24' };
    case 'launching-2026':
      return { dot: 'status-dot-blue', text: 'LAUNCHING 2026', color: '#60A5FA' };
    case 'under-nda':
      return { dot: 'status-dot-red', text: 'CLASSIFIED', color: '#F87171' };
    default:
      return { dot: 'status-dot-cyan', text: 'UNKNOWN', color: '#06B6D4' };
  }
}

export default function DeployedSystems() {
  return (
    <section className="py-16 md:py-24">
      <SectionHeader title="// DEPLOYED SYSTEMS" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => {
          const statusInfo = getStatusDisplay(product.status, product.isConfidential);
          const industryColor = industryColors[product.industry];

          return (
            <HudFrame key={product.id} className="h-full">
              <div
                className="glow-card p-6 h-full flex flex-col"
              >
                {/* Industry tag */}
                <div
                  className="font-mono text-[10px] uppercase tracking-wider mb-3"
                  style={{ color: industryColor }}
                >
                  {industryLabels[product.industry]}
                </div>

                {/* Product name */}
                <h3 className="font-heading text-sm md:text-base font-bold text-text-primary tracking-wider uppercase mb-3">
                  {product.isConfidential
                    ? product.displayName || product.name
                    : product.name}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-text-dim leading-relaxed mb-4 flex-1">
                  {product.shortDescription}
                </p>

                {/* Status */}
                <div className="flex items-center gap-2 pt-3 border-t border-[rgba(6,182,212,0.1)]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-dim mr-1">
                    STATUS:
                  </span>
                  <span className={`status-dot ${statusInfo.dot}`} />
                  <span
                    className="font-mono text-[10px] uppercase tracking-wider"
                    style={{ color: statusInfo.color }}
                  >
                    {statusInfo.text}
                  </span>
                </div>
              </div>
            </HudFrame>
          );
        })}
      </div>
    </section>
  );
}
