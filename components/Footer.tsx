import React from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer id="contato" className="bg-navy text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <span className="font-display text-2xl font-bold tracking-wide block mb-4">
              GRUPO <span className="text-primary">APR</span>
            </span>
            <p className="text-gray-400 text-sm leading-relaxed">
              Referência em saúde integrativa e estética avançada. Cuidando de você em todos os detalhes.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Navegação</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a 
                  href="#sobre" 
                  onClick={(e) => handleNavClick(e, '#sobre')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a 
                  href="#servicos" 
                  onClick={(e) => handleNavClick(e, '#servicos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Tratamentos
                </a>
              </li>
              <li>
                <a 
                  href="#agendar" 
                  onClick={(e) => handleNavClick(e, '#agendar')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Agendar
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  onClick={(e) => handleNavClick(e, '#contato')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Contato</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="text-primary mr-2 flex-shrink-0" size={18} />
                <span className="max-w-[200px]">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary mr-2 flex-shrink-0" size={18} />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-primary mr-2 flex-shrink-0" size={18} />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a 
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#25D366] hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                {/* Custom WhatsApp SVG Icon */}
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Grupo Ana Paula Roecker. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;