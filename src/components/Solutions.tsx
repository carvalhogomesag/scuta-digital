import { motion } from 'motion/react';
import { Smartphone, Search, PenTool, ShieldCheck, ArrowRight, CheckCircle2, Zap, Layers } from 'lucide-react';
import { UI_STRINGS, Language } from '../lib/constants';

const ICONS = {
  Smartphone,
  Search,
  PenTool,
  ShieldCheck
};

export default function Solutions({ lang }: { lang: Language }) {
  const t = UI_STRINGS[lang].solutions;

  return (
    <section id="solutions" className="relative py-24 md:py-32 px-6 bg-scuta-primary overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Coluna esquerda — sticky */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                <Zap size={12} className="fill-current" />
                {t.badge}
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-8">
                {t.title}
              </h2>

              <p className="text-lg text-slate-400 mb-10 leading-relaxed font-medium max-w-md">
                {t.subtitle}
              </p>

              <ul className="space-y-5 mb-12">
                {t.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-200 font-bold text-sm group">
                    <div className="size-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20 group-hover:bg-emerald-500 transition-colors duration-500">
                      <CheckCircle2 size={14} className="text-emerald-400 group-hover:text-black" />
                    </div>
                    <span className="opacity-80 group-hover:opacity-100 transition-opacity">{item}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-4 px-10 py-5 bg-white text-black rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-400 transition-all shadow-2xl"
              >
                {t.cta} <ArrowRight size={18} />
              </motion.a>
            </motion.div>
          </div>

          {/* Coluna direita — grid de cards alinhados topo com topo */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6 items-start">
              {t.items.map((solution, index) => {
                const Icon = ICONS[solution.icon as keyof typeof ICONS] || Smartphone;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -6 }}
                    // ALTERAÇÃO: removido sm:mt-12 nos ímpares (causava desalinhamento)
                    // p-8 em vez de p-10 — mais compacto, sem espaço vazio
                    className="relative p-8 rounded-4xl bg-scuta-surface backdrop-blur-3xl border border-white/5 flex flex-col group overflow-hidden"
                  >
                    <div className="size-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-violet-500/50 group-hover:bg-violet-500/10 transition-all duration-500 relative z-10">
                      <Icon className="size-6 text-white group-hover:text-violet-400 transition-colors" />
                    </div>

                    <h4 className="text-xl font-black text-white mb-3 tracking-tighter relative z-10">
                      {solution.title}
                    </h4>

                    <p className="text-slate-400 leading-relaxed font-medium text-sm relative z-10">
                      {solution.description}
                    </p>

                    <div className="mt-6 pt-5 border-t border-white/5 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-[10px] font-black text-violet-400 uppercase tracking-widest flex items-center gap-2">
                        Padrão Scuta Digital <Layers size={12} />
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}