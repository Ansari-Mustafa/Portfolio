import { Hero } from '@/components/sections/Hero';
import { CurrentRoles } from '@/components/sections/CurrentRoles';
import { ProductsShowcase } from '@/components/sections/ProductsShowcase';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { CTAContact } from '@/components/sections/CTAContact';

export default function Home() {
  return (
    <>
      <Hero />
      <CurrentRoles />
      <ProductsShowcase />
      <ExperienceTimeline />
      <CTAContact />
    </>
  );
}
