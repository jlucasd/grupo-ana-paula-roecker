import React from 'react';
import { Quote as QuoteIcon } from 'lucide-react';

const Quote: React.FC = () => {
  return (
    <section className="py-20 bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-pattern"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <QuoteIcon size={60} className="text-primary opacity-50 mb-6 mx-auto" />
        
        <h3 className="text-2xl md:text-4xl font-display font-light leading-relaxed italic mb-8">
          "A verdadeira beleza nasce quando a saúde do corpo encontra a paz da mente. Nosso propósito é guiar você nessa jornada."
        </h3>
        
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-1 bg-primary"></div>
          <p className="font-sans font-bold tracking-widest uppercase text-sm">
            Dra. Ana Paula Roecker
          </p>
          <div className="w-12 h-1 bg-primary"></div>
        </div>
      </div>
    </section>
  );
};

export default Quote;