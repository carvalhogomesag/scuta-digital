import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, UI_STRINGS, Language } from '../lib/constants';

export default function FAQ({ lang }: { lang: Language }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const t = UI_STRINGS[lang];
  const faqs = FAQ_ITEMS[lang];

  return (
    <section id="faq" className="relative py-20 px-6 bg-scuta-primary overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 text-scuta-highlight font-black uppercase tracking-[0.3em] text-[10px] mb-4">
              <Sparkles size={14} /> {t.faq.sectionBadge}
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-scuta-silk leading-tight tracking-tighter mb-6">
              {t.faq.title.split('\n').map((line, i) => (
                <span key={i} className={line === t.faq.titleHighlight ? "text-scuta-gradient block" : "block"}>
                  {line}
                </span>
              ))}
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
              {t.faq.subtitle}
            </p>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group border transition-all duration-500 rounded-4xl overflow-hidden ${
                openIndex === index 
                ? 'bg-scuta-surface/80 backdrop-blur-2xl border-scuta-accent/30 shadow-2xl' 
                : 'bg-white/5 border-white/5 hover:border-white/10'
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

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 p-2 pr-6 bg-scuta-surface/50 border border-white/5 rounded-full backdrop-blur-sm">
            <div className="w-10 h-10 rounded-full bg-scuta-highlight flex items-center justify-center text-scuta-primary shadow-xl">
              <MessageCircle size={20} />
            </div>
            <p className="text-xs font-black uppercase tracking-widest text-slate-400">
              <a href="#contact" className="text-scuta-highlight hover:underline ml-1">{t.faq.ctaText}</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
