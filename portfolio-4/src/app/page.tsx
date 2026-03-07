import Masthead from '@/components/Masthead';
import EditorialHero from '@/components/EditorialHero';
import PullQuote from '@/components/PullQuote';
import ThinRule from '@/components/ThinRule';
import CurrentRoles from '@/components/CurrentRoles';
import ProductsSection from '@/components/ProductsSection';
import ExperienceSection from '@/components/ExperienceSection';
import AchievementsSection from '@/components/AchievementsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Colophon from '@/components/Colophon';

export default function Home() {
  return (
    <main className="mx-auto max-w-[900px] px-5 pt-6 md:px-8">
      {/* Masthead */}
      <Masthead />

      {/* Editorial Hero: Photo + Bio */}
      <EditorialHero />

      {/* Pull quote after hero */}
      <PullQuote quote="I build AI systems that actually ship." />

      {/* Divider */}
      <ThinRule />

      {/* Current Roles */}
      <div className="py-20 md:py-24">
        <CurrentRoles />
      </div>

      <ThinRule />

      {/* Products — this section breaks out wider */}
      <div className="py-20 md:py-24">
        <ProductsSection />
      </div>

      <ThinRule />

      {/* Experience / Career */}
      <div className="py-20 md:py-24">
        <ExperienceSection />
      </div>

      {/* Pull quote from Systems Limited */}
      <PullQuote
        quote="Built an AI platform now used by thousands of employees for day-to-day operations."
        attribution="Systems Limited — Enterprise AI Platform"
      />

      <ThinRule />

      {/* Achievements / Distinctions */}
      <div className="py-20 md:py-24">
        <AchievementsSection />
      </div>

      <ThinRule />

      {/* Education */}
      <div className="py-20 md:py-24">
        <EducationSection />
      </div>

      {/* Contact */}
      <div className="py-20 md:py-24">
        <ContactSection />
      </div>

      {/* Footer / Colophon */}
      <Colophon />
    </main>
  );
}
