import { ExperienceEntry } from '@/types';

export const experience: ExperienceEntry[] = [
  {
    id: 'current',
    period: '2024 — Present',
    role: 'Founding Engineer & Co-Founder',
    company: 'Stealth Startup · LV4AI · Independent Consulting',
    description:
      'Building and shipping AI products across multiple industries. Leading development of enterprise AI automation, growing LV4AI\'s client base, and consulting on enterprise AI deployments across Europe, the Middle East, and Pakistan.',
    fullDescription:
      'Building and shipping AI products across multiple industries. Leading development of multi-agent email automation, growing LV4AI\'s client base with AgentCrew and Spied platforms, and consulting on enterprise AI deployments across Europe, the Middle East, and Pakistan. Deployed production systems with major EU industrial suppliers.',
    tags: ['Multi-Agent Systems', 'LangGraph', 'FastAPI', 'Enterprise AI', 'Production Deployment'],
  },
  {
    id: 'systems-limited',
    period: '~2 Years · Systems Limited',
    role: 'AI Consultant (Transitioned from IoT)',
    company: "Systems Limited — Pakistan's Largest IT Company",
    description:
      'Started in IoT building an autonomous robot with face recognition and computer vision. Transitioned into AI — built RAG-based agents and an enterprise AI platform used by thousands of employees.',
    fullDescription:
      'Started in the IoT division building a multi-purpose autonomous robot — designed all hardware components, wrote the full codebase for object avoidance, and built companion apps for multiple use cases (banking, order-taking). The robot featured face recognition, Face ID, eye tracking, multi-modal AI for natural language queries, and computer vision.\n\nTransitioned into a dedicated AI role as the field took off. Built RAG-based agents for internal HR and company systems — implemented an AI platform now used by the entire organization across thousands of employees for day-to-day operations. Also developed the Agno DB AI platform used by multiple teams for task automation across departments.',
    tags: ['IoT & Robotics', 'Face Recognition', 'Eye Tracking', 'Computer Vision', 'Multi-Modal AI', 'RAG Agents', 'Enterprise AI Platform'],
    logoPath: '/images/logo-systems-limited.png',
  },
  {
    id: 'design-lab',
    period: 'Earlier',
    role: 'Founder',
    company: 'Design Lab',
    description:
      "Founded a 3D printing and CAD modeling startup in Pakistan when 3D printing wasn't widely available. Pioneered accessible rapid prototyping services.",
    fullDescription:
      "Founded a 3D printing and CAD modeling startup in Pakistan when 3D printing wasn't widely available in the country. Pioneered accessible rapid prototyping services for local businesses and makers.",
    tags: ['3D Printing', 'CAD Modeling', 'Hardware Prototyping'],
    logoPath: '/images/logo-designlab.png',
  },
];
