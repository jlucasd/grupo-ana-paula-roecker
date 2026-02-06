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
    <header className="relative pt-24 lg:pt-0 min-h-screen flex items-center overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-transparent z-10 lg:w-2/3 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 pt-12 lg:pt-0 pb-12 lg:pb-0 text-center lg:text-left space-y-8">
            <div className="inline-block px-3 py-1 mb-2 border border-primary/30 rounded-full bg-primary/5">
              <span className="text-primary text-xs uppercase tracking-[0.2em] font-bold">
                Saúde & Excelência
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-medium text-navy leading-[1.1]">
              Excelência e <br />
              <span className="italic text-primary">Cuidado Integrado</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
              No Grupo Ana Paula Roecker, unimos ciência, tecnologia e humanização para transformar sua saúde e bem-estar em prioridade absoluta.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#agendar"
                onClick={(e) => handleNavClick(e, '#agendar')}
                className="px-8 py-4 bg-primary text-white font-semibold rounded shadow-lg hover:bg-yellow-600 hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-center cursor-pointer"
              >
                Agendar Consulta
              </a>
              <a
                href="#sobre"
                onClick={(e) => handleNavClick(e, '#sobre')}
                className="px-8 py-4 border border-navy text-navy font-semibold rounded hover:bg-navy hover:text-white transition-all text-center cursor-pointer"
              >
                Conheça a Clínica
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 relative lg:h-screen flex items-end justify-center lg:justify-end">
             {/* Decorative blob */}
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl transform translate-x-20 translate-y-20 opacity-30"></div>
            
            <div className="relative h-[500px] lg:h-[85vh] w-full max-w-lg lg:max-w-none flex items-end">
              <img
                src={IMAGES.DOCTOR}
                alt="Dra. Ana Paula Roecker"
                className="object-cover object-top w-full h-full rounded-t-[3rem] lg:rounded-t-none lg:rounded-bl-[100px] shadow-2xl lg:shadow-none relative z-10"
              />
              
              {/* Floating Badge */}
              <div className="hidden lg:block absolute -left-12 bottom-24 bg-white p-6 rounded-lg shadow-xl z-20 max-w-xs border-l-4 border-primary">
                <div className="flex items-center gap-3 mb-2">
                  <BadgeCheck className="text-primary" size={24} />
                  <span className="font-bold text-navy text-sm">Referência Nacional</span>
                </div>
                <p className="text-xs text-gray-500">
                  Compromisso com resultados e satisfação em cada atendimento realizado.
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