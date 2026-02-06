import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, IMAGES } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80; // Ajuste para o tamanho do menu fixo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' 
          : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <img 
              src={IMAGES.LOGO} 
              alt="Logo Grupo APR" 
              className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover shadow-sm border border-gray-100" 
            />
            <span className="font-display text-2xl font-bold text-navy tracking-wide">
              GRUPO <span className="text-primary">APR</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-600 hover:text-primary transition-colors text-sm uppercase tracking-widest font-semibold cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#agendar"
              onClick={(e) => handleNavClick(e, '#agendar')}
              className="px-6 py-2 bg-navy text-white font-medium rounded hover:bg-opacity-90 transition-all shadow-md transform hover:-translate-y-0.5 cursor-pointer"
            >
              Agendar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md border-b border-gray-50 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
               <a
                href="#agendar"
                onClick={(e) => handleNavClick(e, '#agendar')}
                className="block w-full text-center px-6 py-3 bg-navy text-white font-medium rounded shadow-md cursor-pointer"
              >
                Agendar Consulta
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;