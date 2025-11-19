import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  icon: LucideIcon;
  description: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  url: string;
  description: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}