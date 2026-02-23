import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Por que minha empresa precisa de um site hoje?",
    answer: "Um site funciona como seu principal vendedor 24 horas por dia. Ele transmite credibilidade instantânea, centraliza suas informações oficiais e garante que você seja encontrado no Google quando clientes buscarem por seus serviços."
  },
  {
    question: "Quanto custa construir um site?",
    answer: "O valor varia conforme a complexidade do projeto. Trabalhamos desde landing pages objetivas para campanhas até sistemas web mais robustos. Oferecemos orçamentos transparentes, sem custos escondidos, focados no retorno sobre o seu investimento."
  },
  {
    question: "Em quanto tempo meu site fica pronto?",
    answer: "Projetos enxutos como Landing Pages podem ser entregues em prazos curtos (geralmente de 7 a 15 dias). O cronograma exato é alinhado na nossa primeira reunião, garantindo entregas ágeis e sem perda de qualidade."
  },
  {
    question: "Como vocês ajudam no SEO?",
    answer: "Construímos seu site com código limpo, velocidade de carregamento otimizada (mobile-first), tags semânticas corretas e estrutura amigável para o Google. Isso garante a melhor fundação técnica para você ranquear nas buscas."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">Dúvidas Comuns</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">Perguntas Frequentes</h3>
          <p className="text-lg text-zinc-600">
            Tudo o que você precisa saber para iniciar sua jornada digital com segurança e clareza.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-zinc-200 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-50 transition-colors"
              >
                <span className="text-lg font-bold text-zinc-900">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-zinc-600 leading-relaxed border-t border-zinc-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}