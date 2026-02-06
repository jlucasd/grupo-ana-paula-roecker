import React from 'react';
import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SocialLink {
  href: string;
  icon: React.ReactNode;
}