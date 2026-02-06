import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { IMAGES, ABOUT_POINTS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
              <img
                src={IMAGES.INTERIOR}
                alt="Interior da clínica elegante"
                className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-navy/5 rounded-full -z-10"></div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
              Sobre Nós
            </h2>
            <h3 className="text-3xl lg:text-4xl font-display text-navy">
              Uma abordagem humanizada para sua melhor versão.
            </h3>
            <div className="w-16 h-1 bg-primary"></div>
            <p className="text-gray-600 leading-relaxed text-lg font-light">
              O Grupo Ana Paula Roecker nasceu do desejo de integrar saúde, estética e bem-estar em um único lugar. Nossa filosofia é baseada na escuta ativa e no entendimento profundo das necessidades de cada paciente.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Liderado pela Dra. Ana Paula, nossa equipe multidisciplinar utiliza protocolos exclusivos e tecnologia de ponta para garantir não apenas resultados visíveis, mas uma transformação completa na qualidade de vida.
            </p>

            <ul className="space-y-4 pt-4">
              {ABOUT_POINTS.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;