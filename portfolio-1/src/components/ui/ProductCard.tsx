'use client';

import { motion } from 'framer-motion';
import { Product } from '@/types';
import { IndustryTag } from './IndustryTag';
import { StatusBadge } from './StatusBadge';
import { fadeUp, cardHover } from '@/components/animations/variants';

export function ProductCard({
  product,
  variant = 'compact',
}: {
  product: Product;
  variant?: 'compact' | 'detailed';
}) {
  const name = product.isConfidential
    ? product.displayName || 'Stealth Project'
    : product.name;

  return (
    <motion.div
      variants={fadeUp}
      whileHover={cardHover}
      className="rounded-xl border border-border bg-bg-card p-6 transition-colors hover:bg-bg-card-hover"
    >
      <IndustryTag industry={product.industry} className="mb-4" />
      <h3 className="font-serif text-lg text-text-primary mb-2">{name}</h3>
      <p className="text-sm text-text-muted leading-relaxed mb-4">
        {variant === 'detailed' ? product.fullDescription : product.shortDescription}
      </p>
      <StatusBadge status={product.status} label={product.statusLabel} />
    </motion.div>
  );
}
