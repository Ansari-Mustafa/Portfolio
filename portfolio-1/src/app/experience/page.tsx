import type { Metadata } from 'next';
import { ExperiencePage } from './ExperiencePage';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Career timeline spanning enterprise AI, IoT robotics, and entrepreneurship across 3 continents.',
};

export default function Page() {
  return <ExperiencePage />;
}
