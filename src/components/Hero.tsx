import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Smartphone 
} from 'lucide-react';
import { UI_STRINGS } from '../lib/constants';

export default function Hero() {
  const t = UI_STRINGS.pt.hero;

  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden noise">
      {/* --- EFEITOS DE FUNDO (MESH GRADIENT) - CORRIGIDOS PARA CLASSES CANÓNICAS V4 --- */}
      <div className="absolute top-0 left-1/4 w-125 h-125 bg-scuta-accent/20 blur-[120px] rounded-full animate-glow pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-scuta-highlight/10 blur-[100px] rounded-full animate-glow delay-700 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* --- LADO ESQUERDO: TEXTO E IMPACTO --- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge de Localização Premium */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-scuta-surface border border-white/10 text-scuta-silk text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-2xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-scuta-highlight opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-scuta-highlight"></span>
            </span>
            Especialistas em Portugal
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-scuta-silk mb-8 leading-[0.85]">
            {t.title.split('.').map((part, i) => (
              <span key={i} className={i === 0 ? "block" : "text-scuta-gradient block"}>
                {part}{i === 0 ? "." : ""}
              </span>
            ))}
          </h1>
          
          <p className="text-xl text-slate-400 mb-12 max-w-xl leading-relaxed font-medium">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#contact" 
              className="px-10 py-5 bg-scuta-accent text-white rounded-2xl font-black text-lg hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.5)] transition-all flex items-center justify-center gap-3 group active:scale-95"
            >
              {t.cta} <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#samples" 
              className="px-10 py-5 bg-transparent text-scuta-silk border border-white/20 rounded-2xl font-black text-lg hover:bg-white/5 transition-all text-center active:scale-95 backdrop-blur-sm"
            >
              {t.secondaryCta}
            </a>
          </div>
          
          {/* Provas Rápidas com ícones estilizados */}
          <div className="mt-12 flex flex-wrap gap-8">
            {[
              { text: 'Sem custos surpresa', icon: ShieldCheck },
              { text: 'Site pronto em dias', icon: Clock },
              { text: 'Lê-se bem no telemóvel', icon: Smartphone }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-xs text-slate-500 font-black uppercase tracking-widest text-left">
                <CheckCircle2 className="w-4 h-4 text-scuta-highlight shrink-0" />
                {item.text}
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- LADO DIREITO: IMAGEM E GLOW --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:ml-10"
        >
          {/* Brilho atrás da imagem */}
          <div className="absolute -inset-4 bg-scuta-accent/20 blur-3xl rounded-[3rem] animate-pulse" />
          
          <div className="relative aspect-4/3 rounded-[3rem] overflow-hidden shadow-[0_0_100px_-20px_rgba(0,0,0,0.5)] border border-white/10 group bg-scuta-surface">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
              alt="Estratégia Digital Scuta" 
              className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            />
            {/* Overlay gradiente sobre a imagem - Corrigido para nomenclatura v4 */}
            <div className="absolute inset-0 bg-linear-to-t from-scuta-primary/80 via-transparent to-transparent" />
          </div>

          {/* Floating Bento Insight */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -right-8 glass-dark p-6 rounded-3xl border border-scuta-highlight/30 hidden md:flex items-center gap-5 max-w-64"
          >
            <div className="w-14 h-14 bg-scuta-highlight rounded-2xl flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              <TrendingUp size={28} className="text-scuta-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm font-black text-scuta-silk leading-tight mb-1">Resultados Reais</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none text-left">Foco em Vendas</p>
            </div>
          </motion.div>

          {/* Floating Icon Decorator */}
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-scuta-surface border border-white/10 rounded-2xl flex items-center justify-center text-scuta-accent shadow-2xl">
            <Sparkles size={24} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}