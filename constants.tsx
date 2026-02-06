import { 
  Smile, 
  Zap, 
  Activity, 
  Scan, 
  Stethoscope, 
  Microscope, 
  Baby, 
  MonitorSmartphone, 
  User, 
  Puzzle, 
  ClipboardList, 
  Sparkles, 
  Anchor,
  Flower2
} from 'lucide-react';
import { NavItem, ServiceItem } from './types';

// Image URLs
export const IMAGES = {
  // Logo do topo
  LOGO: "https://scontent.fccm3-1.fna.fbcdn.net/v/t39.30808-6/487087147_1057316919747947_8319122172228738110_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=3zZQrJKusfkQ7kNvwGAKkBp&_nc_oc=Adm-abH7fMgcD78nDPMwhlE74njaGQux3vrTwyVRXahiHy8nuaACyxFipQyz_BGyUlvvnWDdJUnxNBbS8pKliXh2&_nc_zt=23&_nc_ht=scontent.fccm3-1.fna&_nc_gid=m6oPHTgL9CoRUGndptZPAA&oh=00_AfsIaXVGXkDfdk1tZdHBhVC4lJKL5wihjlNRRyJuUDQ5Sw&oe=698B317E",
  // Imagem da Dra. Ana Paula (Mulher)
  DOCTOR: "https://lh3.googleusercontent.com/p/AF1QipONsN8BZ2w1GsmyUj-hPqk8uR205S9ZR1y9AvZi=s680-w680-h510-rw",
  // Imagem da Recepção/Interior (Sobre Nós)
  INTERIOR: "https://lh3.googleusercontent.com/p/AF1QipMMIt8mi3SaHFxbt5qhvgYML3odBjP-jqyVWnQT=s680-w680-h510-rw"
};

export const CONTACT_INFO = {
  address: "Centro Executivo Milenium - R. Cel. Fernandes Martins, 470 - Salas 301 e 303 - Progresso, Laguna - SC, 88790-000",
  phone: "(48) 99131-6601",
  whatsapp: "https://wa.me/554891959997",
  instagram: "https://www.instagram.com/grupoanaroecker/",
  facebook: "https://www.facebook.com/grupoanaroecker/",
  email: "contato@grupoapr.com.br"
};

// URL do Web App do Google Apps Script (Deixe vazio se não estiver configurado)
// Exemplo: "https://script.google.com/macros/s/AKfycbx.../exec"
export const SHEET_ENDPOINT = ""; 

export const NAV_ITEMS: NavItem[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Ortodontia",
    description: "Correção da posição dos dentes e ossos maxilares para um sorriso alinhado.",
    icon: Smile
  },
  {
    title: "Laserterapia",
    description: "Tecnologia avançada para tratamentos indolores e cicatrização acelerada.",
    icon: Zap
  },
  {
    title: "Periodontia",
    description: "Prevenção e tratamento de doenças da gengiva e tecidos de sustentação.",
    icon: Activity
  },
  {
    title: "Radiologia",
    description: "Diagnósticos precisos por imagem para um planejamento seguro.",
    icon: Scan
  },
  {
    title: "Cirurgia Bucomaxilofacial",
    description: "Tratamentos cirúrgicos de problemas funcionais e estéticos da face.",
    icon: Stethoscope
  },
  {
    title: "Endodontia",
    description: "Tratamento de canal especializado para salvar dentes danificados.",
    icon: Microscope
  },
  {
    title: "Odontopediatria",
    description: "Cuidado preventivo e curativo dedicado à saúde bucal das crianças.",
    icon: Baby
  },
  {
    title: "Escaneamento Digital",
    description: "Alta precisão em moldes digitais sem o desconforto das massas tradicionais.",
    icon: MonitorSmartphone
  },
  {
    title: "Harmonização Corporal",
    description: "Procedimentos estéticos para equilíbrio e contorno corporal.",
    icon: User
  },
  {
    title: "Próteses Dentárias",
    description: "Reabilitação oral para recuperar a função e a estética do sorriso.",
    icon: Puzzle
  },
  {
    title: "Clínica Geral",
    description: "Manutenção da saúde bucal, limpeza e diagnósticos preventivos.",
    icon: ClipboardList
  },
  {
    title: "Dentística e Estética",
    description: "Facetas, clareamento e restaurações para um sorriso radiante.",
    icon: Sparkles
  },
  {
    title: "Implantodontia",
    description: "Implantes dentários de alta qualidade para repor dentes perdidos.",
    icon: Anchor
  },
  {
    title: "Harmonização Facial",
    description: "Procedimentos para realçar a beleza natural e equilibrar os traços da face.",
    icon: Flower2
  }
];

export const ABOUT_POINTS = [
  "Atendimento personalizado e exclusivo.",
  "Tecnologia avançada em diagnósticos e tratamentos.",
  "Ambiente acolhedor e sofisticado."
];