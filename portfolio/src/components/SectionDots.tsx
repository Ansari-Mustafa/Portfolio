'use client';

import { useActiveSection } from '@/hooks/useActiveSection';

const SECTION_LABELS = [
  'Hero',
  'Bio',
  'Roles',
  'Products',
  'Experience',
  'Achievements',
  'Education',
  'Contact',
];

export default function SectionDots() {
  const { activeSection, sectionIds } = useActiveSection();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 z-40 -translate-y-1/2 hidden lg:flex flex-col items-end gap-4">
      {sectionIds.map((id, index) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className="group flex items-center gap-3"
          aria-label={`Navigate to ${SECTION_LABELS[index]}`}
        >
          {/* Label on hover */}
          <span
            className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none"
            style={{
              fontFamily: 'var(--font-mono)',
              color: activeSection === index ? '#FF6B35' : '#737373',
            }}
          >
            {SECTION_LABELS[index]}
          </span>

          {/* Dot */}
          <span
            className="block rounded-full transition-all duration-300"
            style={{
              width: activeSection === index ? '12px' : '8px',
              height: activeSection === index ? '12px' : '8px',
              backgroundColor:
                activeSection === index ? '#FF6B35' : 'rgba(115, 115, 115, 0.5)',
            }}
          />
        </button>
      ))}
    </nav>
  );
}
