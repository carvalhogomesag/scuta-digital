import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, TrendingUp, ArrowRight, MousePointer2, Sparkles } from 'lucide-react';
import { SAMPLE_SITES } from '../data/sampleSites';
import { UI_STRINGS, Language } from '../lib/constants';

export default function Samples({ lang }: { lang: Language }) {
  const t = UI_STRINGS[lang].samples;

  return (
    <section id="samples" className="relative py-32 px-6 overflow-hidden bg-scuta-primary">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-scuta-accent/5 blur-[180px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-left"
          >
            <div className="flex items-center gap-2 text-scuta-highlight font-black uppercase tracking-[0.3em] text-[10px] mb-4">
              <Sparkles size={14} className="animate-pulse" /> {t.badge}
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none">
              {t.title}
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-300 max-w-sm text-left font-medium leading-relaxed md:mb-2 opacity-80"
          >
            {t.subtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SAMPLE_SITES.map((site, index) => (
            <motion.div
              key={site.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Link 
                to={`/exemplos/${site.slug}`}
                className="group relative block h-full bento-card border border-white/10 overflow-hidden bg-scuta-surface/90"
              >
                <div className="flex justify-between items-start mb-12">
                  <span className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/5 border border-white/10 text-white">
                    {site.sector}
                  </span>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-black/40 border border-white/10 text-white group-hover:bg-white group-hover:text-black transition-all">
                    <MousePointer2 size={18} />
                  </div>
                </div>

                <div className="mb-10 text-left">
                  <div className="flex items-center gap-2 text-scuta-highlight mb-4 text-[10px] font-black uppercase tracking-[0.2em]">
                    <AlertCircle size={14} strokeWidth={3} /> {t.caseStudy}
                  </div>
                  <h3 className="text-3xl font-black text-white mb-5 tracking-tighter leading-none group-hover:text-scuta-gradient transition-all duration-300">
                    {site.companyName}
                  </h3>
                  <p className="text-base text-slate-200 font-medium leading-relaxed line-clamp-3 opacity-90">
                    {site.pain}
                  </p>
                </div>

                <div className="flex items-center gap-3 py-3 px-4 rounded-2xl bg-white/5 border border-white/5 mb-10 text-left">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 bg-scuta-highlight text-white">
                    <CheckCircle size={14} strokeWidth={3} />
                  </div>
                  <p className="text-[10px] font-black text-white/90 uppercase tracking-widest">
                    {t.performance}
                  </p>
                </div>

                <div className="p-5 rounded-2xl flex items-center justify-between bg-scuta-accent transition-all duration-500 group-hover:scale-[1.02]">
                  <div className="flex items-center gap-3">
                    <TrendingUp size={20} className="text-white" strokeWidth={3} />
                    <span className="text-xs font-black uppercase tracking-widest text-white">{t.analyze}</span>
                  </div>
                  <ArrowRight size={20} className="text-white transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
