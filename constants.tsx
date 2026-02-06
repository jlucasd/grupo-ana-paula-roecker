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
  // Imagem da Dra. Ana Paula (Mulher)
  DOCTOR: "https://lh3.googleusercontent.com/p/AF1QipONsN8BZ2w1GsmyUj-hPqk8uR205S9ZR1y9AvZi=s680-w680-h510-rw",
  // Imagem da Recepção/Interior (Sobre Nós)
  INTERIOR: "https://lh3.googleusercontent.com/p/AF1QipMMIt8mi3SaHFxbt5qhvgYML3odBjP-jqyVWnQT=s680-w680-h510-rw"
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