'use client';

import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProductCard } from '@/components/ui/ProductCard';
import { StaggerChildren } from '@/components/animations/StaggerChildren';
import { products } from '@/data/products';

export function ProductsPage() {
  return (
    <div className="pt-28 pb-24">
      <Container>
        <SectionHeader
          label="// products & ventures"
          title="What I've Built"
          subtitle="Production AI systems shipped across industrial, healthcare, education, hospitality, fintech, and HR."
        />
        <StaggerChildren className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              variant="detailed"
            />
          ))}
        </StaggerChildren>
      </Container>
    </div>
  );
}
