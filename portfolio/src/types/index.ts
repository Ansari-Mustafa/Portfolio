export type ProductStatus = 'live' | 'launching-2026' | 'in-development' | 'under-nda';

export type Industry =
  | 'industrial'
  | 'enterprise'
  | 'healthcare'
  | 'education'
  | 'hospitality'
  | 'fintech'
  | 'hr';

export interface Product {
  id: string;
  name: string;
  displayName?: string;
  industry: Industry;
  shortDescription: string;
  fullDescription: string;
  status: ProductStatus;
  statusLabel: string;
  isFeatured: boolean;
  isConfidential?: boolean;
  link?: string;
  logoPath?: string;
}

export interface Role {
  id: string;
  tag: string;
  title: string;
  company: string;
  location?: string;
  description: string;
  highlight?: string;
  logoPath?: string;
  isStealth?: boolean;
}

export interface ExperienceEntry {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
  fullDescription?: string;
  tags: string[];
  logoPath?: string;
}

export interface Achievement {
  id: string;
  label: string;
  title: string;
  description: string;
  features?: string[];
  isFeatured?: boolean;
}

export interface EducationEntry {
  id: string;
  degree: string;
  school: string;
  detail: string;
  badge: string;
  logoPath?: string;
  isCurrent?: boolean;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email' | 'calendar';
  label: string;
  url: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  heroHeading: string;
  heroBio: string;
  ctaHeading: string;
  ctaDescription: string;
  stats: { value: string; label: string }[];
}
