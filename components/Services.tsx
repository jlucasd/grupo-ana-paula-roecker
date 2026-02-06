import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
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
    <section id="servicos" className="py-16 md:py-24 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-3">
          <h2 className="text-xs md:text-sm font-bold tracking-widest text-primary uppercase">
            Nossas Especialidades
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display text-navy">
            Tratamentos Exclusivos
          </h3>
          <p className="text-gray-500 font-light text-sm md:text-base px-4">
            Soluções completas desenhadas para a sua necessidade específica.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30 text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon size={28} className="text-primary group-hover:text-white md:w-8 md:h-8" />
              </div>
              <h4 className="text-lg md:text-xl font-display font-semibold text-navy mb-3">
                {service.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <a
            href="#agendar"
            onClick={(e) => handleNavClick(e, '#agendar')}
            className="inline-flex items-center text-primary font-semibold hover:text-navy transition-colors group cursor-pointer text-sm md:text-base"
          >
            Ver todos os tratamentos
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;