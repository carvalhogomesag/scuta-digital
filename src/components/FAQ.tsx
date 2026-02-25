import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../lib/constants'; // Importação da Fonte da Verdade

export default function FAQ() {
  // Mantemos o primeiro item aberto por padrão para incentivar a leitura (UX)
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white px-6 border-t border-zinc-100">
      <div className="max-w-3xl mx-auto">
        
        {/* Cabeçalho: Foco em transparência e confiança */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-zinc-400 uppercase tracking-[0.2em] mb-4">
            Esclarecimentos
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
            Dúvidas frequentes
          </h3>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Não deixamos nada por explicar. Aqui estão as respostas às perguntas que os nossos clientes mais nos fazem antes de começarmos.
          </p>
        </div>

        {/* Lista de Acordéons: Foco em legibilidade e acessibilidade */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, index) => (
            <div 
              key={index}
              className={`group border rounded-3xl overflow-hidden transition-all duration-300 ${
                openIndex === index 
                ? 'border-black bg-zinc-50 shadow-sm' 
                : 'border-zinc-200 bg-white hover:border-zinc-400'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-7 text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <HelpCircle 
                    size={20} 
                    className={`transition-colors duration-300 ${
                      openIndex === index ? 'text-black' : 'text-zinc-300'
                    }`} 
                  />
                  <span className={`text-lg font-bold transition-colors duration-300 ${
                    openIndex === index ? 'text-black' : 'text-zinc-800'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 transition-all duration-300 ${
                    openIndex === index ? 'rotate-180 text-black' : 'text-zinc-400'
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="px-7 pb-8 ml-9 text-zinc-600 leading-relaxed text-base font-medium">
                      <div className="w-12 h-px bg-zinc-200 mb-4" />
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA Auxiliar: Caso a dúvida persista */}
        <div className="mt-12 text-center">
          <p className="text-zinc-500 font-medium">
            Tem outra dúvida? <a href="#contact" className="text-black font-bold underline underline-offset-4 hover:text-zinc-600 transition-colors">Fale connosco pelo WhatsApp.</a>
          </p>
        </div>
      </div>
    </section>
  );
}