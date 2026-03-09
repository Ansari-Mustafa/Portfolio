import { Role } from '@/types';

export const roles: Role[] = [
  {
    id: 'stealth',
    tag: 'Founding Engineer',
    title: 'Stealth Startup',
    company: 'Enterprise AI Automation',
    description:
      'Owning the full technical lifecycle — from architecture and development to deployment and production operations. Building the core AI platform, designing how it integrates into enterprise workflows, and shipping it end-to-end as the sole engineer.',
    logoPath: '/images/logo-stealth.png',
    isStealth: true,
  },
  {
    id: 'lv4ai',
    tag: 'Co-Founder',
    title: 'LV4AI',
    company: 'AI Services & Products Company',
    description:
      'Co-founded an AI company shipping products and services across healthcare, education, hospitality, fintech, and industrial automation. Our platform AgentCrew powers enterprise agent orchestration. We also provide AI strategy consulting and build custom AI systems integrated directly into client operations.',
    logoPath: '/images/logo-lv4ai.png',
    link: 'https://lv4ai.com',
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
