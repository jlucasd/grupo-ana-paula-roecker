import { 
  Flower2, 
  HeartPulse, 
  Brain, 
  Activity, 
  CheckCircle2 
} from 'lucide-react';
import { NavItem, ServiceItem } from './types';

// Image URLs
export const IMAGES = {
  // SUBSTITUA AQUI: Coloque o link direto da sua foto hospedada abaixo.
  DOCTOR: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=3387&ixlib=rb-4.0.3",
  INTERIOR: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRHU5aqeXfXz8RE8kDxB_cUhJJNevEF3-BiUgGJLkEJ_J0C1jYwIPU1EBXEL2M8HmvaJ-2BIJ1uj0vE85gDYblIi0-_eyF2hcYX6eXQcA1D1g_aVWEKyx3pxOtX-HS1QqsV4OreVgHiiDoa-VUE7j08kw58L10Bx4YOwlYJ8Lgwbpe0Je7i2_J0JaAGO6IkYHUIpOHa5LU--zRCpyre6ATy2EuyLlfWgVDiHenxnIY9O5gWl7Zd9DK4-gmu7tza3djhJ5o6czUp2gK"
};

export const CONTACT_INFO = {
  address: "Centro Executivo Milenium - R. Cel. Fernandes Martins, 470 - Salas 301 e 303 - Progresso, Laguna - SC, 88790-000",
  phone: "(48) 99131-6601",
  whatsapp: "https://wa.me/554891959997",
  instagram: "https://www.instagram.com/dra.anapaularoecker/",
  email: "contato@grupoapr.com.br"
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Estética Avançada",
    description: "Procedimentos faciais e corporais com as tecnologias mais modernas do mercado.",
    icon: Flower2
  },
  {
    title: "Saúde Integrativa",
    description: "Uma visão global da sua saúde, focando na prevenção e longevidade.",
    icon: HeartPulse
  },
  {
    title: "Nutrição & Mente",
    description: "Acompanhamento nutricional aliado ao bem-estar mental e emocional.",
    icon: Brain
  },
  {
    title: "Performance",
    description: "Protocolos para otimizar sua performance física e mental no dia a dia.",
    icon: Activity
  }
];

export const ABOUT_POINTS = [
  "Atendimento personalizado e exclusivo.",
  "Tecnologia avançada em diagnósticos e tratamentos.",
  "Ambiente acolhedor e sofisticado."
];