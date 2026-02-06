import React from 'react';
import { BadgeCheck } from 'lucide-react';
import { IMAGES } from '../constants';

const Hero: React.FC = () => {
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
    <header className="relative pt-28 lg:pt-0 min-h-screen flex items-center overflow-hidden bg-gray-50">
      {/* Background Gradient - Responsive width */}
      <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-gray-50 via-gray-50/90 to-transparent z-10 w-full lg:w-2/3 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-0">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 pb-16 lg:pb-0 text-center lg:text-left space-y-6 lg:space-y-8">
            <div className="inline-block px-3 py-1 mb-2 border border-primary/30 rounded-full bg-primary/5">
              <span className="text-primary text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
                Saúde & Excelência
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-medium text-navy leading-tight lg:leading-[1.1]">
              Excelência e <br />
              <span className="italic text-primary">Cuidado Integrado</span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
              No Grupo Ana Paula Roecker, unimos ciência, tecnologia e humanização para transformar sua saúde e bem-estar em prioridade absoluta.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 w-full sm:w-auto">
              <a
                href="#agendar"
                onClick={(e) => handleNavClick(e, '#agendar')}
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-semibold rounded shadow-lg hover:bg-yellow-600 hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-center cursor-pointer"
              >
                Agendar Consulta
              </a>
              <a
                href="#sobre"
                onClick={(e) => handleNavClick(e, '#sobre')}
                className="w-full sm:w-auto px-8 py-4 border border-navy text-navy font-semibold rounded hover:bg-navy hover:text-white transition-all text-center cursor-pointer"
              >
                Conheça a Clínica
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 relative flex items-end justify-center lg:justify-end lg:h-screen mt-8 lg:mt-0">
             {/* Decorative blob */}
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl transform translate-x-10 translate-y-10 lg:translate-x-20 lg:translate-y-20 opacity-30"></div>
            
            <div className="relative w-full max-w-md lg:max-w-none flex items-end h-[400px] md:h-[500px] lg:h-[85vh]">
              <img
                src={IMAGES.DOCTOR}
                alt="Dra. Ana Paula Roecker"
                className="object-cover object-top w-full h-full rounded-2xl lg:rounded-t-none lg:rounded-bl-[100px] shadow-2xl lg:shadow-none relative z-10"
              />
              
              {/* Floating Badge - Positioned for better mobile visibility or hidden on very small screens */}
              <div className="hidden md:block absolute -right-4 lg:-left-12 bottom-8 lg:bottom-24 bg-white p-4 lg:p-6 rounded-lg shadow-xl z-20 max-w-[200px] lg:max-w-xs border-l-4 border-primary">
                <div className="flex items-center gap-2 lg:gap-3 mb-2">
                  <BadgeCheck className="text-primary w-5 h-5 lg:w-6 lg:h-6" />
                  <span className="font-bold text-navy text-xs lg:text-sm">Referência Nacional</span>
                </div>
                <p className="text-[10px] lg:text-xs text-gray-500 leading-tight">
                  Compromisso com resultados e satisfação em cada atendimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;