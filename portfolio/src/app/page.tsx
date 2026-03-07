import ScrollProgress from '@/components/ScrollProgress';
import SectionDots from '@/components/SectionDots';
import CalBooking from '@/components/CalBooking';
import HeroSection from '@/components/HeroSection';
import BioSection from '@/components/BioSection';
import RolesSection from '@/components/RolesSection';
import ProductsSection from '@/components/ProductsSection';
import ExperienceSection from '@/components/ExperienceSection';
import AchievementsSection from '@/components/AchievementsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <SectionDots />
      <CalBooking />
      <HeroSection />
      <BioSection />
      <RolesSection />
      <ProductsSection />
      <ExperienceSection />
      <AchievementsSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
