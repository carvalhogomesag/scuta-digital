import { motion } from 'motion/react';
import { Search, PenTool, Layout, Rocket, Sparkles, ArrowRight } from 'lucide-react';
import { UI_STRINGS, Language } from '../lib/constants';

const ICONS = {
  Search,
  PenTool,
  Layout,
  Rocket,
};

export default function Process({ lang }: { lang: Language }) {
  const t = UI_STRINGS[lang].process;

  return (
    <section id="process" className="relative py-24 px-6 bg-scuta-surface overflow-hidden">
      {/* Glow de fundo */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-scuta-accent/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Cabeçalho */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 text-scuta-highlight font-black uppercase tracking-[0.3em] text-[10px] mb-4">
              <Sparkles size={14} /> {t.badge}
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-scuta-silk leading-tight tracking-tighter mb-6">
              {t.title}
            </h2>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8">
          {t.steps.map((step, index) => {
            const Icon = ICONS[step.icon as keyof typeof ICONS] || Search;
            const isLast = index === t.steps.length - 1;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="relative p-8 rounded-4xl bg-scuta-primary/60 border border-white/5 hover:border-white/15 transition-all duration-500 group"
              >
                {/* Ícone */}
                <div className="size-16 rounded-2xl bg-gradient-to-br from-scuta-highlight/20 to-scuta-highlight/5 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 group-hover:border-scuta-highlight/30 transition-all duration-500">
                  <Icon size={28} className="text-white" />
                </div>

                {/* Texto */}
                <h3 className="text-xl font-black text-white mb-4 tracking-tight text-left">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium text-left">
                  {step.description}
                </p>

                {/* Connector entre steps — visível apenas em desktop */}
                {!isLast && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20 items-center">
                    <ArrowRight size={16} className="text-slate-700" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA inferior */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-scuta-silk text-scuta-primary rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-scuta-highlight transition-all shadow-2xl active:scale-95 group"
          >
            {UI_STRINGS[lang].solutions.cta}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}