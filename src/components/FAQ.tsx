import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../lib/constants';

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 px-6 noise bg-scuta-primary overflow-hidden">
      {/* Brilho decorativo lateral */}
      <div className="absolute top-1/2 -right-64 w-125 h-125 bg-scuta-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Cabeçalho WOW */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 text-scuta-highlight font-black uppercase tracking-[0.3em] text-[10px] mb-4">
              <Sparkles size={14} /> Transparência Total
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-scuta-silk leading-tight tracking-tighter mb-6">
              Dúvidas <span className="text-scuta-gradient">Frequentes.</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
              Esclarecemos os pontos técnicos para que se possa focar no que importa: o crescimento do seu negócio em Portugal.
            </p>
          </motion.div>
        </div>

        {/* Lista de Acordéons em Vidro Negro */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group border transition-all duration-500 rounded-4xl overflow-hidden ${
                openIndex === index 
                ? 'glass-dark border-scuta-accent/30 shadow-[0_0_40px_rgba(124,58,237,0.1)]' 
                : 'bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/[0.07]'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-8 text-left focus:outline-none"
              >
                <div className="flex items-center gap-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-500 ${
                    openIndex === index ? 'bg-scuta-accent text-white' : 'bg-white/5 text-slate-500'
                  }`}>
                    <HelpCircle size={20} />
                  </div>
                  <span className={`text-lg font-bold tracking-tight transition-colors duration-500 ${
                    openIndex === index ? 'text-scuta-silk' : 'text-slate-400 group-hover:text-slate-300'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                  openIndex === index ? 'bg-scuta-silk text-scuta-primary rotate-180' : 'bg-white/5 text-slate-600'
                }`}>
                  <ChevronDown size={18} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <div className="px-8 pb-10 ml-15 text-slate-400 leading-relaxed text-base font-medium">
                      <div className="w-10 h-px bg-scuta-accent/30 mb-6" />
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Final da Secção */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 p-2 pr-6 bg-scuta-surface/50 border border-white/5 rounded-full backdrop-blur-sm">
            <div className="w-10 h-10 rounded-full bg-scuta-highlight flex items-center justify-center text-scuta-primary shadow-[0_0_15px_rgba(16,185,129,0.4)]">
              <MessageCircle size={20} />
            </div>
            <p className="text-xs font-black uppercase tracking-widest text-slate-400">
              Dúvida não listada? <a href="#contact" className="text-scuta-highlight hover:underline ml-1">Fale connosco</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}