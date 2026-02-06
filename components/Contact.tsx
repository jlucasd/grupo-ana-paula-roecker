import React, { useState } from 'react';
import { SHEET_ENDPOINT } from '../constants';

const ORIGINS = [
  "Meta Ads (Insta/Face)",
  "Google Ads",
  "Instagram Orgânico",
  "Indicação",
  "WhatsApp Direto"
];

const PROCEDURES = [
  "Harmonização Facial",
  "Toxina Botulínica",
  "Preenchedores",
  "Bioestimuladores",
  "Fios de Sustentação",
  "Avaliação Geral"
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    origin: '',
    procedure: '',
    objective: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;

    // Phone Mask Logic
    if (id === 'phone') {
        let v = value.replace(/\D/g, "");
        v = v.slice(0, 11); // Limit to 11 digits max

        if (v.length > 10) {
            // (XX) XXXXX-XXXX
            v = v.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
        } else if (v.length > 6) {
            // (XX) XXXX-XXXX
            v = v.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
        } else if (v.length > 2) {
            // (XX) XXX
            v = v.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
        }
        
        setFormData(prev => ({ ...prev, [id]: v }));
        return;
    }

    // Checkbox special handling
    if (e.target.type === 'checkbox') {
       const checked = (e.target as HTMLInputElement).checked;
       setFormData(prev => ({ ...prev, [id]: checked }));
    } else {
       setFormData(prev => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Custom Validation: Check Phone Length
    // Native 'required' handles empty fields, but we need to ensure the phone is complete
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
        alert("Por favor, insira um número de telefone válido com DDD.");
        return;
    }

    if (!formData.consent) {
        alert("É necessário consentir com o cadastro.");
        return;
    }

    setIsSubmitting(true);
    
    // 1. Format message for WhatsApp
    const message = `Olá! Gostaria de agendar uma avaliação.\n\n` +
        `*Nome:* ${formData.name}\n` +
        `*Telefone:* ${formData.phone}\n` +
        `*Origem:* ${formData.origin}\n` +
        `*Interesse:* ${formData.procedure}\n` +
        `*Objetivo:* ${formData.objective}`;

    const whatsappNumber = "554891959997"; 
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // 2. Open WhatsApp immediately (Priority Action)
    window.open(whatsappUrl, '_blank');

    // 3. Send data to Spreadsheet (Background Action)
    if (SHEET_ENDPOINT) {
      const data = new FormData();
      data.append('Nome', formData.name);
      data.append('Telefone', formData.phone);
      data.append('Origem', formData.origin);
      data.append('Procedimento', formData.procedure);
      data.append('Objetivo', formData.objective);
      data.append('Consentimento', formData.consent ? 'Sim' : 'Não');
      data.append('Data', new Date().toLocaleString('pt-BR'));

      fetch(SHEET_ENDPOINT, {
        method: 'POST',
        body: data,
        mode: 'no-cors' // Important for Google Apps Script simple requests
      })
      .then(() => {
        console.log("Dados enviados para a planilha com sucesso!");
      })
      .catch((err) => {
        console.error("Erro ao salvar na planilha:", err);
      })
      .finally(() => {
        setIsSubmitting(false);
        setFormData({ 
            name: '', 
            phone: '', 
            origin: '', 
            procedure: '', 
            objective: '', 
            consent: false 
        });
      });
    } else {
      // If no endpoint is configured, just reset
      setIsSubmitting(false);
      setFormData({ 
          name: '', 
          phone: '', 
          origin: '', 
          procedure: '', 
          objective: '', 
          consent: false 
        });
    }
  };

  return (
    <section id="agendar" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-gray-100 p-6 md:p-12 lg:p-16 text-center">
          
          <h2 className="text-3xl md:text-5xl font-display text-navy mb-4 md:mb-6 leading-tight">
            Pronto para transformar sua vida?
          </h2>
          
          <p className="text-gray-600 mb-8 md:mb-10 text-base md:text-lg max-w-2xl mx-auto">
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
                placeholder="Nome Completo *"
                disabled={isSubmitting}
                className="w-full px-4 py-3 md:py-4 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none shadow-sm text-base disabled:opacity-50"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="sr-only">WhatsApp (com DDD)</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="WhatsApp (com DDD) *"
                disabled={isSubmitting}
                className="w-full px-4 py-3 md:py-4 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none shadow-sm text-base disabled:opacity-50"
                required
              />
            </div>

            <div>
              <label htmlFor="origin" className="sr-only">Origem do Contato</label>
              <select
                id="origin"
                value={formData.origin}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 md:py-4 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none shadow-sm text-base disabled:opacity-50 ${formData.origin ? 'text-gray-900' : 'text-gray-400'}`}
                required
              >
                <option value="" disabled>Origem do Contato *</option>
                {ORIGINS.map(opt => (
                  <option key={opt} value={opt} className="text-gray-900">{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="procedure" className="sr-only">Procedimento de Interesse Inicial</label>
              <select
                id="procedure"
                value={formData.procedure}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 md:py-4 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none shadow-sm text-base disabled:opacity-50 ${formData.procedure ? 'text-gray-900' : 'text-gray-400'}`}
                required
              >
                <option value="" disabled>Procedimento de Interesse Inicial *</option>
                {PROCEDURES.map(opt => (
                  <option key={opt} value={opt} className="text-gray-900">{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="objective" className="sr-only">Objetivo Principal</label>
              <textarea
                id="objective"
                value={formData.objective}
                onChange={handleChange}
                placeholder="Qual o objetivo principal? (Ex: Incomodada com bigode chinês...)"
                rows={3}
                disabled={isSubmitting}
                className="w-full px-4 py-3 md:py-4 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none shadow-sm text-base disabled:opacity-50 resize-none"
              />
            </div>

            <div className="flex items-start gap-3 px-1">
                <input 
                    type="checkbox" 
                    id="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded cursor-pointer"
                    required
                />
                <label htmlFor="consent" className="text-sm text-gray-500 cursor-pointer select-none">
                    Concordo com o cadastro dos meus dados para contato.
                </label>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 font-bold rounded-lg shadow-lg transition-all transform text-base md:text-lg 
                ${isSubmitting 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-none' 
                  : 'bg-primary text-white hover:bg-yellow-600 hover:shadow-xl hover:-translate-y-0.5'
                }`}
            >
              {isSubmitting ? 'Processando...' : 'Solicitar Agendamento via WhatsApp'}
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