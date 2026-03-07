'use client';

import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProductCard } from '@/components/ui/ProductCard';
import { StaggerChildren } from '@/components/animations/StaggerChildren';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { featuredProducts } from '@/data/products';

export function ProductsShowcase() {
  return (
    <section className="py-24" id="products">
      <Container>
        <SectionHeader
          label="// products & ventures"
          title="What I've Built"
          subtitle="Production AI systems shipped across industrial, healthcare, education, hospitality, fintech, and HR."
        />
        <StaggerChildren className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </StaggerChildren>
        <ScrollReveal delay={0.3}>
          <div className="mt-8 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:text-accent/80 transition-colors"
            >
              View all products
              <span>&rarr;</span>
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
