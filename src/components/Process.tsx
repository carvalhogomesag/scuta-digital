import { motion } from 'motion/react';
import { Search, PenTool, Layout, Rocket, Sparkles } from 'lucide-react';
import { UI_STRINGS, Language } from '../lib/constants';

const ICONS = {
  Search,
  PenTool,
  Layout,
  Rocket
};

export default function Process({ lang }: { lang: Language }) {
  const t = UI_STRINGS[lang].process;

  return (
    <section id="process" className="relative py-24 px-6 bg-scuta-primary overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
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

        <div className="grid md:grid-cols-4 gap-8">
          {t.steps.map((step, index) => {
            const Icon = ICONS[step.icon as keyof typeof ICONS] || Search;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 rounded-4xl bg-scuta-surface/50 border border-white/5 hover:border-white/10 transition-all group"
              >
                <div className={`size-16 rounded-2xl bg-linear-to-br from-scuta-highlight/20 to-scuta-highlight/5 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-black text-white mb-4 tracking-tight text-left">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium text-left">
                  {step.description}
                </p>
                
                {index < t.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-8 h-px bg-linear-to-r from-white/20 to-transparent" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
