import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Porque é que a minha empresa precisa de um site hoje?",
    answer: "Um site funciona como o seu principal vendedor 24 horas por dia. Transmite credibilidade instantânea, centraliza as suas informações oficiais e garante que é encontrado no Google quando os clientes procuram pelos seus serviços."
  },
  {
    question: "Quanto custa construir um site?",
    answer: "O valor varia conforme a complexidade do projeto. Trabalhamos desde landing pages objetivas para campanhas até sistemas web mais robustos. Oferecemos orçamentos transparentes, sem custos ocultos, focados no retorno do seu investimento."
  },
  {
    question: "Em quanto tempo o meu site fica pronto?",
    answer: "Projetos simples como Landing Pages podem ser entregues em prazos curtos (geralmente de 7 a 15 dias). O cronograma exato é definido na nossa primeira reunião, garantindo entregas rápidas e sem perda de qualidade."
  },
  {
    question: "Como é que ajudam no SEO?",
    answer: "Construímos o seu site com código limpo, velocidade de carregamento otimizada (mobile-first), etiquetas semânticas corretas e uma estrutura amigável para o Google. Isso garante a melhor base técnica para se posicionar nas pesquisas."
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
            Tudo o que precisa de saber para iniciar a sua jornada digital com segurança e clareza.
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