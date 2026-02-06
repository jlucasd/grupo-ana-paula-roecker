import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive logic to determine how many items to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(SERVICES.length / itemsPerView);
  const maxIndex = Math.max(0, SERVICES.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 > maxIndex ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? maxIndex : prev - 1
    );
  };

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
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
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

        {/* Carousel Container */}
        <div className="relative group px-0 md:px-12">
            
            {/* Desktop Buttons - Hidden on mobile */}
            <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 bg-white text-navy rounded-full shadow-lg hover:bg-primary hover:text-white transition-all hidden md:flex items-center justify-center border border-gray-100"
                aria-label="Anterior"
            >
                <ChevronLeft size={24} />
            </button>
            
            <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 bg-white text-navy rounded-full shadow-lg hover:bg-primary hover:text-white transition-all hidden md:flex items-center justify-center border border-gray-100"
                aria-label="Próximo"
            >
                <ChevronRight size={24} />
            </button>

            {/* Viewport */}
            <div className="overflow-hidden py-4" ref={containerRef}>
                <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
                >
                    {SERVICES.map((service, index) => (
                        <div 
                            key={index} 
                            className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 px-3"
                        >
                            <div className="h-full bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30 text-center flex flex-col items-center">
                                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                                    <service.icon size={28} className="md:w-8 md:h-8" />
                                </div>
                                <h4 className="text-lg md:text-xl font-display font-semibold text-navy mb-3">
                                    {service.title}
                                </h4>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Mobile Navigation Controls (Arrows + Dots) */}
            <div className="flex items-center justify-center mt-6 gap-4 md:hidden">
                <button
                    onClick={prevSlide}
                    className="p-2 bg-white text-navy rounded-full shadow-md border border-gray-200 hover:bg-gray-50 active:scale-95 transition-all"
                    aria-label="Anterior"
                >
                    <ChevronLeft size={20} />
                </button>

                <div className="flex gap-2">
                    {Array.from({ length: SERVICES.length }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${
                                idx === currentIndex ? 'bg-primary w-4' : 'bg-gray-300'
                            }`}
                            aria-label={`Ir para slide ${idx + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    className="p-2 bg-white text-navy rounded-full shadow-md border border-gray-200 hover:bg-gray-50 active:scale-95 transition-all"
                    aria-label="Próximo"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#agendar"
            onClick={(e) => handleNavClick(e, '#agendar')}
            className="inline-flex items-center text-primary font-semibold hover:text-navy transition-colors group cursor-pointer text-sm md:text-base"
          >
            Agendar minha avaliação
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;