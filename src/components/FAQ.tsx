import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Porque deve a minha empresa ter um site hoje?",
    answer: "Um website profissional reforça credibilidade, melhora a presença no Google e cria um canal próprio para gerar contactos todos os dias."
  },
  {
    question: "Quanto custa criar um site em Portugal?",
    answer: "Depende do objetivo e da complexidade. Uma landing page tem investimento mais reduzido, enquanto websites com várias páginas ou integrações exigem maior planeamento."
  },
  {
    question: "Quanto tempo demora a ter o site pronto?",
    answer: "Em regra, uma landing page pode ficar pronta em poucos dias. Projetos maiores costumam demorar algumas semanas, consoante o conteúdo e as validações necessárias."
  },
  {
    question: "Como melhoram o SEO do meu site?",
    answer: "Trabalhamos a estrutura técnica, velocidade, arquitetura de conteúdo e metadados para aumentar a relevância nos motores de busca e gerar tráfego qualificado."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">SEO + Autoridade</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">Perguntas frequentes antes de contratar</h3>
          <p className="text-lg text-zinc-600">
            Esclarecemos as suas dúvidas para que possa avançar com total confiança e transparência na sua estratégia digital.
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