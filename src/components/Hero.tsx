import { motion } from 'motion/react';
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Smartphone,
  TrendingUp
} from 'lucide-react';
import { UI_STRINGS, Language } from '../lib/constants';

export default function Hero({ lang }: { lang: Language }) {
  const t = UI_STRINGS[lang].hero;

  // Divide o título em linhas e cada linha em palavras para o stagger
  const titleLines = t.title.split('\n');

  return (
    // min-h-screen + flex col → garante que o hero ocupa exactamente o viewport
    <section className="relative min-h-screen flex items-start pt-24 pb-16 px-6 bg-scuta-primary">
      {/* Glow de fundo — clip próprio para não afectar overflow da section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-150 h-150 bg-scuta-accent/20 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 items-start relative z-10">

        {/* --- Coluna esquerda --- */}
        <div>
          {/* Badge animado */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-scuta-silk text-[10px] font-black uppercase tracking-[0.2em] mb-6 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-scuta-highlight opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-scuta-highlight" />
            </span>
            {t.badge}
          </motion.div>

          {/* Título — stagger + rotação 3D preservados; tamanho clampado para caber no viewport */}
          <h1 className="text-[clamp(2.8rem,6vw,5.5rem)] font-black tracking-tighter text-white mb-5 leading-[0.88]">
            {titleLines.map((line, lineIndex) => (
              <span key={lineIndex} className="block overflow-hidden">
                {line.split(' ').map((word, wordIndex) => (
                  <motion.span
                    key={wordIndex}
                    initial={{ opacity: 0, y: 48, rotateX: -25 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      delay: 0.15 + lineIndex * 0.18 + wordIndex * 0.07,
                      duration: 0.65,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    className="inline-block mr-[0.22em] origin-bottom"
                    style={{ display: 'inline-block' }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed font-medium"
          >
            {t.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.78, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-scuta-silk text-scuta-primary rounded-2xl font-black text-base hover:bg-scuta-highlight transition-all flex items-center justify-center gap-3 group active:scale-95 shadow-2xl"
            >
              {t.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#samples"
              className="px-8 py-4 bg-white/5 text-scuta-silk border border-white/10 rounded-2xl font-black text-base hover:bg-white/10 transition-all text-center active:scale-95 backdrop-blur-md"
            >
              {t.secondaryCta}
            </a>
          </motion.div>

          {/* Selos de confiança */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-6"
          >
            {[
              { text: t.trust.noSurprise, icon: ShieldCheck },
              { text: t.trust.fast, icon: Clock },
              { text: t.trust.mobile, icon: Smartphone },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-[10px] text-slate-500 font-black uppercase tracking-widest"
              >
                <item.icon className="w-4 h-4 text-scuta-highlight shrink-0" />
                {item.text}
              </div>
            ))}
          </motion.div>
        </div>

        {/* --- Coluna direita --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:ml-6"
        >
          <div className="relative aspect-4/3 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
              alt="Estratégia Scuta"
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Card flutuante */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 -right-6 bg-scuta-surface/90 backdrop-blur-xl p-6 rounded-3xl border border-scuta-highlight/30 hidden md:flex items-center gap-4 max-w-60 shadow-2xl"
          >
            <div className="w-12 h-12 bg-scuta-highlight rounded-xl flex items-center justify-center shrink-0">
              <TrendingUp size={24} className="text-scuta-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm font-black text-white leading-tight mb-0.5">Resultados</p>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest leading-none">
                Foco em Vendas
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}