import { Role } from '@/types';

export const roles: Role[] = [
  {
    id: 'stealth',
    tag: 'Founding Engineer',
    title: 'Stealth Startup',
    company: 'Enterprise AI Automation · Germany',
    location: 'Germany',
    description:
      'Building an end-to-end AI automation platform for enterprise B2B operations. Multi-agent systems processing complex workflows at scale.',
    highlight: '30 minutes to 30 seconds',
    logoPath: '/images/logo-stealth.png',
    isStealth: true,
  },
  {
    id: 'lv4ai',
    tag: 'Co-Founder',
    title: 'LV4AI',
    company: 'AI Services & Products Company',
    description:
      'AI services company building everything and anything AI. Our platforms — AgentCrew (enterprise agent configuration, team orchestration, and integration dashboard) and Spied (workflow automation) — are successfully integrated with multiple enterprise clients.',
    logoPath: '/images/logo-lv4ai.png',
  },
  {
    id: 'consulting',
    tag: 'AI Consultant',
    title: 'Industrial Automation',
    company: 'European Industrial Suppliers · Under NDA',
    description:
      "Consulting with a German startup to automate workflow processes for some of Europe's largest industrial distributors. Designing and deploying multi-agent AI systems for sales coordination and order management.",
    logoPath: '/images/logo-consulting.png',
  },
  {
    id: 'freiburg',
    tag: 'M.Sc. Student',
    title: 'Embedded Systems & AI',
    company: 'University of Freiburg · Germany',
    description:
      "Part-time Master's degree combining hardware-level systems understanding with cutting-edge AI — bridging the gap between embedded intelligence and enterprise software.",
    logoPath: '/images/logo-freiburg.png',
  },
];
