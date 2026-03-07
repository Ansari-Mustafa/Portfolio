import TerminalChrome from '@/components/TerminalChrome';
import TerminalNav from '@/components/TerminalNav';
import CommandBlock from '@/components/CommandBlock';
import BlinkingCursor from '@/components/BlinkingCursor';
import HeroSection from '@/components/sections/HeroSection';
import RolesSection from '@/components/sections/RolesSection';
import ProductsSection from '@/components/sections/ProductsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import EducationSection from '@/components/sections/EducationSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-terminal-bg">
      {/* Terminal Window */}
      <div className="min-h-screen border border-terminal-border mx-auto max-w-[1400px]">
        {/* Chrome Bar */}
        <TerminalChrome />

        {/* Navigation */}
        <TerminalNav />

        {/* Terminal Content */}
        <main className="pb-8">
          {/* Section 1: Hero */}
          <CommandBlock id="hero" command="whoami">
            <HeroSection />
          </CommandBlock>

          {/* Separator */}
          <div className="px-4">
            <div className="max-w-[1200px] mx-auto border-t border-terminal-border/30" />
          </div>

          {/* Section 2: Roles */}
          <CommandBlock id="roles" command="cat roles.json">
            <RolesSection />
          </CommandBlock>

          {/* Separator */}
          <div className="px-4">
            <div className="max-w-[1200px] mx-auto border-t border-terminal-border/30" />
          </div>

          {/* Section 3: Products */}
          <CommandBlock id="products" command="ls -la products/">
            <ProductsSection />
          </CommandBlock>

          {/* Separator */}
          <div className="px-4">
            <div className="max-w-[1200px] mx-auto border-t border-terminal-border/30" />
          </div>

          {/* Section 4: Experience */}
          <CommandBlock id="experience" command="git log --oneline">
            <ExperienceSection />
          </CommandBlock>

          {/* Separator */}
          <div className="px-4">
            <div className="max-w-[1200px] mx-auto border-t border-terminal-border/30" />
          </div>

          {/* Section 5: Achievements */}
          <CommandBlock id="achievements" command="cat achievements/README.md">
            <AchievementsSection />
          </CommandBlock>

          {/* Separator */}
          <div className="px-4">
            <div className="max-w-[1200px] mx-auto border-t border-terminal-border/30" />
          </div>

          {/* Section 6: Education */}
          <CommandBlock id="education" command="cat education.txt">
            <EducationSection />
          </CommandBlock>

          {/* Separator */}
          <div className="px-4">
            <div className="max-w-[1200px] mx-auto border-t border-terminal-border/30" />
          </div>

          {/* Section 7: Contact */}
          <CommandBlock id="contact" command='echo "Get in touch"'>
            <ContactSection />
          </CommandBlock>

          {/* Blinking cursor at bottom */}
          <BlinkingCursor />
        </main>
      </div>
    </div>
  );
}
