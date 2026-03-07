import HeroPhotoCard from '@/components/HeroPhotoCard';
import StatCard from '@/components/StatCard';
import BioCard from '@/components/BioCard';
import RoleCard from '@/components/RoleCard';
import LocationCard from '@/components/LocationCard';
import SectionLabel from '@/components/SectionLabel';
import ProductCard from '@/components/ProductCard';
import TimelineCard from '@/components/TimelineCard';
import HighlightCard from '@/components/HighlightCard';
import AchievementCard from '@/components/AchievementCard';
import RoboticsCard from '@/components/RoboticsCard';
import AcademicCard from '@/components/AcademicCard';
import EducationCard from '@/components/EducationCard';
import CTACard from '@/components/CTACard';

import { roles } from '@/data/roles';
import { products } from '@/data/products';
import { achievements } from '@/data/achievements';
import { education } from '@/data/education';

export default function Home() {
  // Determine which products are featured (get 2x1) and which are not
  const featuredProducts = products.filter((p) => p.isFeatured);
  const otherProducts = products.filter((p) => !p.isFeatured);

  // Stats mapping for bento
  const statCards = [
    { value: '8+', label: 'Products Built' },
    { value: '6+', label: 'Industries' },
    { value: '3', label: 'Continents' },
    { value: '30s', label: 'Per Order' },
  ];

  // Roles to show in the bio section
  const roleCards = [
    roles.find((r) => r.id === 'stealth')!,
    roles.find((r) => r.id === 'lv4ai')!,
    roles.find((r) => r.id === 'freiburg')!,
  ];

  // Achievement: FYP is the featured (wide) one
  const fypAchievement = achievements.find((a) => a.id === 'fyp')!;

  return (
    <main style={{ paddingTop: '60px', paddingBottom: '80px' }}>
      <div className="bento-grid">
        {/* ── Hero Area ── */}
        <HeroPhotoCard />

        {statCards.map((stat, i) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} index={i + 1} />
        ))}

        {/* ── Bio + Roles ── */}
        <SectionLabel label="About" />

        <BioCard />

        {roleCards.map((role, i) => (
          <RoleCard key={role.id} role={role} index={i + 1} />
        ))}

        <LocationCard index={4} />

        {/* ── Products & Ventures ── */}
        <SectionLabel label="Products & Ventures" />

        {featuredProducts.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            index={i}
            featured={true}
          />
        ))}

        {otherProducts.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            index={featuredProducts.length + i}
          />
        ))}

        {/* ── Experience ── */}
        <SectionLabel label="Experience" />

        <TimelineCard />

        <HighlightCard
          title="Systems Limited"
          subtitle="Started in IoT, transitioned to enterprise AI."
          emphasis="Pakistan's Largest IT Company"
          index={1}
        />

        <HighlightCard
          title="Design Lab"
          subtitle="Founded a 3D printing startup when the tech was new."
          emphasis="Pioneering Rapid Prototyping"
          index={2}
        />

        {/* ── Achievements ── */}
        <SectionLabel label="Achievements" />

        <AchievementCard achievement={fypAchievement} index={0} wide />
        <RoboticsCard index={1} />
        <AcademicCard index={2} />

        {/* ── Education ── */}
        <SectionLabel label="Education" />

        {education.map((entry, i) => (
          <EducationCard key={entry.id} entry={entry} index={i} />
        ))}

        {/* ── Contact ── */}
        <SectionLabel label="Get in Touch" />

        <CTACard />
      </div>
    </main>
  );
}
