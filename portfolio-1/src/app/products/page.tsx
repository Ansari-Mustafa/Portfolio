import type { Metadata } from 'next';
import { ProductsPage } from './ProductsPage';

export const metadata: Metadata = {
  title: 'Products & Ventures',
  description:
    'Production AI systems shipped across industrial, healthcare, education, hospitality, fintech, and HR.',
};

export default function Page() {
  return <ProductsPage />;
}
