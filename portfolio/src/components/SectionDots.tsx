'use client';

import { useActiveSection } from '@/hooks/useActiveSection';

const SECTION_LABELS = [
  'Hero',
  'Bio',
  'Roles',
  'Products',
  'Experience',
  'Academic',
  'Education',
  'Contact',
];

// Background type per section to adapt nav colors
const SECTION_THEMES: ('dark' | 'light' | 'accent')[] = [
  'dark',   // Hero
  'light',  // Bio
  'dark',   // Roles
  'light',  // Products
  'dark',   // Experience
  'light',  // Achievements
  'dark',   // Education
  'accent', // Contact
];

function getNavColors(theme: 'dark' | 'light' | 'accent') {
  switch (theme) {
    case 'accent':
      return {
        activeColor: '#0A0A0A',
        activeDot: '#0A0A0A',
        inactiveLabel: 'rgba(10, 10, 10, 0.5)',
        inactiveDot: 'rgba(10, 10, 10, 0.3)',
      };
    case 'light':
      return {
        activeColor: '#FF6B35',
        activeDot: '#FF6B35',
        inactiveLabel: '#737373',
        inactiveDot: 'rgba(115, 115, 115, 0.5)',
      };
    default:
      return {
        activeColor: '#FF6B35',
        activeDot: '#FF6B35',
        inactiveLabel: '#737373',
        inactiveDot: 'rgba(115, 115, 115, 0.5)',
      };
  }
}

export default function SectionDots() {
  const { activeSection, sectionIds } = useActiveSection();
  const theme = SECTION_THEMES[activeSection] || 'dark';
  const colors = getNavColors(theme);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 z-40 -translate-y-1/2 hidden lg:flex flex-col items-end gap-4">
      {sectionIds.map((id, index) => {
        const isActive = activeSection === index;
        return (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="group flex items-center gap-3"
            aria-label={`Navigate to ${SECTION_LABELS[index]}`}
          >
            {/* Label: visible for active section with slide-in, hover for others */}
            <span
              className={`text-xs font-mono whitespace-nowrap pointer-events-none transition-all duration-400 ease-out ${
                isActive
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
              }`}
              style={{
                fontFamily: 'var(--font-mono)',
                color: isActive ? colors.activeColor : colors.inactiveLabel,
              }}
            >
              {SECTION_LABELS[index]}
            </span>

            {/* Dot */}
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: isActive ? '12px' : '8px',
                height: isActive ? '12px' : '8px',
                backgroundColor: isActive
                  ? colors.activeDot
                  : colors.inactiveDot,
              }}
            />
          </button>
        );
      })}
    </nav>
  );
}
