import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, UI_STRINGS, Language } from '../lib/constants';

export default function FAQ({ lang }: { lang: Language }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const t = UI_STRINGS[lang];
  const faqs = FAQ_ITEMS[lang];

  return (
    // ALTERAÇÃO: bg-scuta-primary → bg-white
    <section id="faq" className="relative py-20 px-6 bg-white overflow-hidden">

      {/* Detalhe decorativo subtil — substitui o fundo liso */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-slate-50 rounded-full translate-y-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* ALTERAÇÃO: text-scuta-highlight → text-emerald-500 (legível em branco) */}
            <div className="inline-flex items-center gap-2 text-emerald-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4">
              <Sparkles size={14} /> {t.faq.sectionBadge}
            </div>
            {/* ALTERAÇÃO: text-scuta-silk → text-slate-900 */}
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tighter mb-6">
              {t.faq.title.split('\n').map((line, i) => (
                <span key={i} className={line === t.faq.titleHighlight ? "text-scuta-gradient block" : "block"}>
                  {line}
                </span>
              ))}
            </h2>
            {/* ALTERAÇÃO: text-slate-400 → text-slate-500 (melhor contraste em branco) */}
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
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
                  // ALTERAÇÃO: bg-scuta-surface/80 → bg-slate-50, border-scuta-accent/30 → border-emerald-200
                  ? 'bg-slate-50 border-emerald-200 shadow-lg'
                  // ALTERAÇÃO: bg-white/5 → bg-white, border-white/5 → border-slate-200
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-8 text-left focus:outline-none"
              >
                <div className="flex items-center gap-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-500 ${
                    // ALTERAÇÃO: bg-white/5 text-slate-500 → bg-slate-100 text-slate-400
                    openIndex === index ? 'bg-scuta-accent text-white' : 'bg-slate-100 text-slate-400'
                  }`}>
                    <HelpCircle size={20} />
                  </div>
                  <span className={`text-lg font-bold tracking-tight transition-colors duration-500 ${
                    // ALTERAÇÃO: text-slate-400 → text-slate-500, group-hover:text-slate-300 → group-hover:text-slate-700
                    openIndex === index ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-700'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                  // ALTERAÇÃO: bg-scuta-silk text-scuta-primary → bg-slate-900 text-white; bg-white/5 text-slate-600 → bg-slate-100 text-slate-400
                  openIndex === index ? 'bg-slate-900 text-white rotate-180' : 'bg-slate-100 text-slate-400'
                }`}>
                  <ChevronDown size={18} />
                </div>
              </button>

              {/* AnimatePresence — 100% preservado */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <div className="px-8 pb-10 ml-15 leading-relaxed text-base font-medium">
                      {/* ALTERAÇÃO: bg-scuta-accent/30 → bg-emerald-200 */}
                      <div className="w-10 h-px bg-emerald-200 mb-6" />
                      {/* ALTERAÇÃO: text-slate-400 → text-slate-600 */}
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA rodapé — estrutura 100% preservada, cores adaptadas */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          {/* ALTERAÇÃO: bg-scuta-surface/50 border-white/5 → bg-slate-50 border-slate-200 */}
          <div className="inline-flex items-center gap-3 p-2 pr-6 bg-slate-50 border border-slate-200 rounded-full">
            {/* bg-scuta-highlight text-scuta-primary — mantidos (cor de marca) */}
            <div className="w-10 h-10 rounded-full bg-scuta-highlight flex items-center justify-center text-scuta-primary shadow-xl">
              <MessageCircle size={20} />
            </div>
            <p className="text-xs font-black uppercase tracking-widest text-slate-500">
              <a href="#contact" className="text-emerald-500 hover:underline ml-1">{t.faq.ctaText}</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}