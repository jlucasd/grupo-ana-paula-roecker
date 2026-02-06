import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const message = `Olá! Gostaria de agendar uma avaliação.\n\n*Nome:* ${formData.name}\n*Email:* ${formData.email}\n*Telefone:* ${formData.phone}`;
    const whatsappNumber = "554891959997"; // Using the number provided by user
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Optional: Reset form
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <section id="agendar" className="py-24 bg-white scroll-mt-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 p-8 md:p-12 lg:p-16 text-center">
          
          <h2 className="text-3xl md:text-5xl font-display text-navy mb-6">
            Pronto para transformar sua vida?
          </h2>
          
          <p className="text-gray-600 mb-10 text-lg max-w-2xl mx-auto">
            Entre em contato conosco e agende sua avaliação inicial. Estamos prontos para receber você com todo o cuidado que merece.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
            <div>
              <label htmlFor="name" className="sr-only">Nome Completo</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nome Completo"
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="sr-only">E-mail</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Seu melhor e-mail"
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="sr-only">Telefone</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telefone (WhatsApp)"
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition-all hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Solicitar Agendamento via WhatsApp
            </button>
            
            <p className="text-xs text-center text-gray-500 mt-4">
              Você será redirecionado para o WhatsApp da clínica.
            </p>
          </form>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;