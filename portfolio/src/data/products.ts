import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'stealth-ai',
    name: 'Stealth AI',
    displayName: '[REDACTED]',
    industry: 'industrial',
    shortDescription:
      'Multi-agent system for industrial B2B automation. Processing, matching, and response generation at scale.',
    fullDescription:
      'AI email automation for industrial B2B suppliers. Multi-agent order processing, product matching, inventory checks, and response generation at scale.',
    status: 'live',
    statusLabel: 'Live — deployed with major EU suppliers',
    isFeatured: true,
    isConfidential: true,
    logoPath: '/images/logo-stealth.png',
  },
  {
    id: 'agentcrew',
    name: 'AgentCrew',
    industry: 'enterprise',
    shortDescription:
      'Enterprise platform to configure AI agents, build agent teams, and integrate them into workflows.',
    fullDescription:
      'Enterprise platform to configure AI agents, build agent teams, and integrate them into apps and workflows through an intuitive dashboard.',
    status: 'live',
    statusLabel: 'Live — multiple enterprise clients',
    isFeatured: true,
    logoPath: '/images/logo-agentcrew.png',
  },
  {
    id: 'spide',
    name: 'Spide.ai',
    industry: 'enterprise',
    shortDescription:
      'Workflow automation platform for enterprise operations with intelligent agent orchestration.',
    fullDescription:
      'Workflow automation platform for enterprise operations. Automates repetitive multi-step processes with intelligent agent orchestration.',
    status: 'live',
    statusLabel: 'Live',
    isFeatured: true,
    logoPath: '/images/logo-spide.png',
  },
  {
    id: 'medgen-ai',
    name: 'MedGen AI',
    industry: 'healthcare',
    shortDescription:
      'Medical report and claim generation tool used by NHS doctors.',
    fullDescription:
      'Medical report and claim generation tool used by NHS doctors. Streamlines clinical documentation and reduces administrative burden.',
    status: 'live',
    statusLabel: 'Live — in use by NHS doctors',
    isFeatured: true,
    logoPath: '/images/logo-medgen-ai.png',
  },
  {
    id: 'telehealth-ai',
    name: 'Telehealth AI',
    industry: 'healthcare',
    shortDescription:
      'AI-powered telehealth platform with AI assistant, doctor matching, and video consultations.',
    fullDescription:
      'AI-powered telehealth platform where patients chat with an AI assistant, get matched to the right doctor, and launch video consultations seamlessly.',
    status: 'launching-2026',
    statusLabel: 'Under development — launching 2026',
    isFeatured: true,
    logoPath: '/images/logo-tele-ai.png',
  },
  {
    id: 'curiosity-learning',
    name: 'Curiosity Learning',
    industry: 'education',
    shortDescription:
      'E-learning copilot with OCR homework checking, quiz generation, and teacher dashboards.',
    fullDescription:
      'E-learning copilot for students and teachers. OCR-based homework checking, automated quiz generation & testing, and teacher dashboards showing student weaknesses.',
    status: 'launching-2026',
    statusLabel: 'Launching in Middle East — 2026',
    isFeatured: true,
    logoPath: '/images/logo-curiosity.png',
  },
  {
    id: 'hospitality-ai',
    name: 'Hospitality AI',
    industry: 'hospitality',
    shortDescription:
      'AI-powered property and guest experience management for MENA short-term rentals.',
    fullDescription:
      'AI-powered property and guest experience management for the MENA short-term rental market. Smart tools to increase landlord income and improve guest experience.',
    status: 'in-development',
    statusLabel: 'In development',
    isFeatured: false,
    logoPath: '/images/logo-hospitality-ai.png',
  },
  {
    id: 'supply-chain-finance',
    name: 'Supply Chain Finance AI',
    industry: 'fintech',
    shortDescription:
      'Automated AI agents for supply chain financing partnered with major banks.',
    fullDescription:
      'Automated AI agents for a supply chain financing platform partnered with major Pakistani banks. Streamlines financing workflows and decision-making.',
    status: 'live',
    statusLabel: 'Live — partnered with major banks',
    isFeatured: false,
  },
  {
    id: 'textile-po',
    name: 'Textile PO Automation',
    industry: 'industrial',
    shortDescription:
      'Purchase order to internal order sheet automation for textile manufacturing.',
    fullDescription:
      'Purchase order to internal order sheet automation agents for a major Pakistani textile manufacturer. End-to-end document processing and generation.',
    status: 'live',
    statusLabel: 'Live',
    isFeatured: false,
  },
  {
    id: 'hr-hiring',
    name: 'HR & Hiring Agents',
    industry: 'hr',
    shortDescription:
      'AI-powered HR automation and hiring agents for enterprise recruitment.',
    fullDescription:
      'AI-powered HR automation and hiring agents for a major Saudi Arabian enterprise. Automating recruitment workflows and candidate evaluation.',
    status: 'in-development',
    statusLabel: 'In development — under NDA',
    isFeatured: false,
  },
  {
    id: 'iot-bot',
    name: 'IoT Bot',
    industry: 'enterprise',
    shortDescription:
      'Autonomous robot with Face Recognition, eye-tracking, GPT integration, and AI-powered Large Action Model. Built companion web apps deployed to AWS/Azure.',
    fullDescription:
      'Designed and deployed interactive software for an autonomous robot featuring Face Recognition (FaceID), eye-tracking and facial animations, GPT integration for natural language queries, hardware-software integration with multiple sensors and actuators, Node-Red middleware, and an AI-powered Large Action Model (LAM). Built companion web apps with Node.js, Django, and Flask. Deployed to AWS/Azure.',
    status: 'live',
    statusLabel: 'Live — Systems Limited',
    isFeatured: false,
  },
];

export const featuredProducts = products.filter((p) => p.isFeatured);

const OTHER_IDS = ['supply-chain-finance', 'textile-po', 'hr-hiring', 'iot-bot'];
export const mainProducts = products.filter((p) => !OTHER_IDS.includes(p.id));
export const otherProducts = products.filter((p) => OTHER_IDS.includes(p.id));
